import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.entrepreneur.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
