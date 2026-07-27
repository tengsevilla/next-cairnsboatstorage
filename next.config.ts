import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // No remotePatterns: every image is local to public/. The unsplash and
    // picsum entries that used to live here were create-next-app leftovers.
  },
  async redirects() {
    // Canonical host is www.cairnsboatstorage.com.au. Exact host values (not a
    // pattern) so that ".com.au" can never match and cause a redirect loop.
    // Only fires when both domains resolve to this deployment — otherwise the
    // redirect has to be configured at the DNS/hosting layer.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "cairnsboatstorage.com" }],
        destination: "https://www.cairnsboatstorage.com.au/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.cairnsboatstorage.com" }],
        destination: "https://www.cairnsboatstorage.com.au/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
