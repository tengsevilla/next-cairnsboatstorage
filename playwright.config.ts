import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 1,
    // Image optimization is CPU-bound here; unbounded workers starve each other.
    workers: 4,
    globalSetup: "./e2e/global-setup.ts",
    reporter: "list",
    // Generous: the first request for each image encodes a 4000x3000 source to
    // AVIF on the fly, which is slow until the image cache is warm.
    timeout: 240_000,
    expect: { timeout: 30_000 },
    use: {
        baseURL: "http://localhost:3100",
        trace: "on-first-retry",
        // The Google Maps embed on /location never reaches a quiescent network,
        // so tests must not wait on full `load`.
        navigationTimeout: 60_000,
    },
    projects: [
        { name: "desktop", use: { ...devices["Desktop Chrome"] } },
        { name: "mobile", use: { ...devices["Pixel 7"] } },
    ],
    webServer: {
        // Production build — these tests assert on optimized image output.
        command: "npm run build && npx next start -p 3100",
        url: "http://localhost:3100",
        // Always start a fresh server. Reusing one is a trap here: a server
        // left over from an earlier run keeps serving a .next directory that
        // the rebuild has already replaced, so every /_next/image request 400s
        // with "The requested resource isn't a valid image" and the whole
        // suite fails for reasons that have nothing to do with the code.
        reuseExistingServer: false,
        timeout: 300_000,
    },
});
