import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',      
  basePath: '',          // Leave empty for piyushwithpant.github.io
  images: { 
    unoptimized: true    
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
} as any;

export default nextConfig;