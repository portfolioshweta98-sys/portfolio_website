import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/**", // Allow all LinkedIn media images
      },
    ],
    unoptimized: false,
  },
};

module.exports = nextConfig;
