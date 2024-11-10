
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,       // Enables strict mode for better error handling
  swcMinify: true,             // Use SWC compiler for minification, improves performance
  output: 'standalone',        // Useful for deployments; creates a single server file
  images: {
    domains: [],               // Add external domains if you're loading images from other sources
  },
  async redirects() {          // Optional: Define redirects if needed
    return [];
  },
};

export default nextConfig;


