import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // これを追加
  },
  /* config options here */
};

export default nextConfig;
