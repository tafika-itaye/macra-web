import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/macra-web",
  assetPrefix: "/macra-web",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;