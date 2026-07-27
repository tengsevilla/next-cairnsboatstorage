/**
 * Warms the Next image optimizer before the suite runs.
 *
 * The source photos are 4000x3000, so the first request for each derivative
 * encodes a fresh AVIF — slow enough that several parallel workers hitting
 * cold variants at once will blow the per-test timeout. Fetching every srcset
 * URL once, sequentially, makes the run deterministic.
 */
const ROUTES = ["/", "/facilities", "/location", "/contact-us", "/terms-and-condition"];

export default async function globalSetup() {
    const base = "http://localhost:3100";
    const urls = new Set<string>();

    for (const route of ROUTES) {
        const html = await (await fetch(base + route)).text();
        for (const m of html.matchAll(/\/_next\/image\?url=[^"'\s]+?(?=[",\s])/g)) {
            urls.add(m[0].replace(/&amp;/g, "&"));
        }
    }

    process.stdout.write(`[warmup] encoding ${urls.size} image variants...\n`);
    const started = Date.now();
    for (const u of urls) {
        try {
            await fetch(base + u);
        } catch {
            // A failed warmup is not fatal; the test itself will report it.
        }
    }
    process.stdout.write(
        `[warmup] done in ${Math.round((Date.now() - started) / 1000)}s\n`,
    );
}
