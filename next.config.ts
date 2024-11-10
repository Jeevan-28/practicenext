
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx", "ts"],  // Optional, but useful for custom directories
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
