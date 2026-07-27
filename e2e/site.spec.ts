import { test, expect, type Page } from "@playwright/test";

/**
 * `load`/`networkidle` are unusable here: the Google Maps embed on /location
 * never settles. Navigate on domcontentloaded and wait for what we assert on.
 */
async function visit(page: Page, path: string) {
    await page.goto(path, { waitUntil: "domcontentloaded" });
}

/**
 * Every <img> on the page, with the underlying source path that next/image was
 * asked to optimize. That path is what actually regresses — a typo in it (as
 * `/facilities` once had, `url(' facility-2/4.jpg')` with a leading space) is
 * invisible in the markup but yields a broken image.
 *
 * Deliberately does NOT wait for lazy images to decode. Native lazy loading
 * only fetches images that come to rest near the viewport, so asserting that
 * every <img> reaches `complete` tests Chrome's scroll heuristics rather than
 * this codebase — and fails whenever a synthetic scroll moves past a tile
 * before its (expensive) AVIF encode returns.
 */
async function imageSources(page: Page) {
    return page.evaluate(() =>
        [...document.querySelectorAll("img")].map((img) => {
            const raw = img.getAttribute("src") ?? "";
            let underlying = raw;
            const match = /[?&]url=([^&]+)/.exec(raw);
            if (match) underlying = decodeURIComponent(match[1]);
            return {
                optimizerUrl: raw,
                underlying,
                eager: img.loading !== "lazy",
                alt: img.getAttribute("alt") ?? "",
            };
        }),
    );
}

/** Waits only for the images the browser loads eagerly (hero + logo). */
async function waitForEagerImages(page: Page) {
    await expect
        .poll(
            () =>
                page.evaluate(
                    () =>
                        [...document.querySelectorAll("img")].filter(
                            (i) => i.loading !== "lazy" && (!i.complete || i.naturalWidth === 0),
                        ).length,
                ),
            { timeout: 120_000, message: "eager images never decoded" },
        )
        .toBe(0);
}

const routes = [
    { path: "/", title: "Cairns Boat Storage | Secure 24/7 Boat & Trailer Parking", h1: "Cairns Best Value Boat Storage" },
    { path: "/facilities", title: "Facilities | Cairns Boat Storage", h1: "Great Location, Secure & Easy Access" },
    { path: "/location", title: "Location | Cairns Boat Storage", h1: "Conveniently located, accessible and secure" },
    { path: "/contact-us", title: "Contact Us | Cairns Boat Storage", h1: "We're here to help with all your storage needs" },
    { path: "/terms-and-condition", title: "Terms and Conditions | Cairns Boat Storage", h1: "Secure and convenient storage solutions" },
];

test.describe("page shell", () => {
    for (const route of routes) {
        test(`${route.path} has a unique title, one h1 and a canonical`, async ({ page }) => {
            await visit(page, route.path);

            await expect(page).toHaveTitle(route.title);

            const h1 = page.locator("h1");
            await expect(h1).toHaveCount(1);
            await expect(h1).toHaveText(route.h1);

            const canonical = page.locator('link[rel="canonical"]');
            await expect(canonical).toHaveCount(1);
            await expect(canonical).toHaveAttribute(
                "href",
                `https://www.cairnsboatstorage.com.au${route.path === "/" ? "" : route.path}`,
            );
        });
    }
});

test.describe("images", () => {
    for (const route of routes) {
        // Regression guard: /facilities previously had `url(' facility-2/4.jpg')`
        // with a leading space, so its hero never rendered at all.
        test(`${route.path} points every image at a real file`, async ({ page }) => {
            await visit(page, route.path);
            const images = await imageSources(page);
            expect(images.length).toBeGreaterThan(0);

            for (const img of images) {
                expect(img.optimizerUrl, "image has no src").not.toBe("");
                // Statically imported images live under /_next/static and are
                // content-hashed; public/ images resolve as-is. Either way the
                // underlying path must exist.
                const res = await page.request.get(img.underlying);
                expect(
                    res.status(),
                    `${img.underlying} (alt: "${img.alt}") is not reachable`,
                ).toBe(200);
            }
        });
    }

    // One test per route rather than a single loop: each visit then gets its own
    // timeout budget, which matters because the image optimizer is CPU-bound and
    // several workers encoding at once can push a single navigation past 60s.
    for (const route of routes) {
        test(`${route.path} hero decodes`, async ({ page }) => {
            await visit(page, route.path);
            await waitForEagerImages(page);
            const heroOk = await page.evaluate(() => {
                const img = document.querySelector("section img");
                return !!img && (img as HTMLImageElement).naturalWidth > 0;
            });
            expect(heroOk, `${route.path} hero did not decode`).toBe(true);
        });
    }

    test("optimized images are AVIF/WebP, not the multi-MB source JPEG", async ({ page }) => {
        const responses: { url: string; type: string; bytes: number }[] = [];
        page.on("response", (response) => {
            const type = response.headers()["content-type"] ?? "";
            if (!type.startsWith("image/")) return;
            if (!response.url().includes("_next/image")) return;
            responses.push({
                url: response.url(),
                type,
                bytes: Number(response.headers()["content-length"] ?? 0),
            });
        });

        await visit(page, "/");
        await waitForEagerImages(page);

        expect(responses.length).toBeGreaterThan(0);
        for (const r of responses) {
            expect(r.type, r.url).toMatch(/image\/(avif|webp)/);
        }
        // None may approach the size of the 2.7-8.8 MB originals.
        expect(Math.max(...responses.map((r) => r.bytes))).toBeLessThan(1_000_000);
    });

    test("gallery tiles hold a fixed aspect ratio so the grid cannot shift", async ({ page }) => {
        await visit(page, "/facilities");
        const tile = page.locator(".aspect-\\[4\\/3\\]").first();
        const box = await tile.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width / box!.height).toBeCloseTo(4 / 3, 1);
    });
});

test.describe("structured data", () => {
    test("home exposes a LocalBusiness graph", async ({ page }) => {
        await visit(page, "/");
        const blocks = await page
            .locator('script[type="application/ld+json"]')
            .allTextContents();
        const parsed = blocks.map((b) => JSON.parse(b));

        const business = parsed.find((p) => p["@type"] === "SelfStorage");
        expect(business).toBeTruthy();
        expect(business.address.postalCode).toBe("4865");
        expect(business.geo.latitude).toBeCloseTo(-17.011212, 4);
        expect(business.openingHoursSpecification).toHaveLength(2);
    });

    test("terms page is excluded from indexing", async ({ page }) => {
        await visit(page, "/terms-and-condition");
        await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
            "content",
            /noindex/,
        );
    });
});

test.describe("navigation", () => {
    test("tel: links are dial-safe (no spaces in the URI)", async ({ page }) => {
        await visit(page, "/contact-us");
        const hrefs = await page
            .locator('a[href^="tel:"]')
            .evaluateAll((links) => links.map((l) => l.getAttribute("href")!));

        expect(hrefs.length).toBeGreaterThan(0);
        for (const href of hrefs) {
            expect(href).not.toContain(" ");
            expect(href).toMatch(/^tel:\+?\d+$/);
        }
    });

    test("active route is marked for assistive tech", async ({ page }) => {
        await visit(page, "/location");
        const current = page.locator('a[aria-current="page"]').first();
        await expect(current).toHaveText("Location");
    });

    test("mobile menu toggles and reports state", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        await visit(page, "/");

        const toggle = page.locator('nav button[aria-controls="mobile-menu"]');
        await expect(toggle).toHaveAttribute("aria-expanded", "false");
        await expect(page.locator("#mobile-menu")).toHaveCount(0);

        await toggle.click();
        await expect(toggle).toHaveAttribute("aria-expanded", "true");
        await expect(page.locator("#mobile-menu")).toBeVisible();

        // Escape closes it and releases the body scroll lock.
        await page.keyboard.press("Escape");
        await expect(toggle).toHaveAttribute("aria-expanded", "false");
        await expect(page.locator("#mobile-menu")).toHaveCount(0);
        expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
    });

    test("no horizontal overflow on a narrow viewport", async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        for (const route of routes) {
            await visit(page, route.path);
            const overflows = await page.evaluate(
                () => document.documentElement.scrollWidth > window.innerWidth + 1,
            );
            expect(overflows, `${route.path} overflows horizontally`).toBe(false);
        }
    });
});
