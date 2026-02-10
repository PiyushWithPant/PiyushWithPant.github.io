import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath: '/your-repo-name', // Uncomment this if not using a custom domain
};

export default nextConfig;