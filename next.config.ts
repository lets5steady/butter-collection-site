import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  devIndicators: {
    position: "top-right",
  },
  /* config options here */
};

export default nextConfig;
