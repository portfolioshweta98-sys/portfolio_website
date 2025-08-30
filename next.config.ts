import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**", // ✅ only allow LinkedIn dms images
      },
    ],
  },
};

module.exports = nextConfig;
