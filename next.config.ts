
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable the app directory - WHY IS THERE AN ERROR?
  },
  async redirects() {
    return [];
  },
};

export default nextConfig;