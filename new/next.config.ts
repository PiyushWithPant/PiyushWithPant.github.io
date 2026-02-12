import type { NextConfig } from "next";

// next.config.ts
const nextConfig = {
  output: 'export',
  // Replace 'my-portfolio' with your actual repository name
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  images: { unoptimized: true },
};

export default nextConfig;