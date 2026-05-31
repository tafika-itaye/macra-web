import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "macra.mw",
      },
    ],
  },
};

export default nextConfig;
