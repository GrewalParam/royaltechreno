import type { NextConfig } from "next";

const repo = "royaltechreno";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true, // important for static export (no Image Optimization on GitHub Pages)
  },
  output: 'export', // for static export (`next export`)
};

export default nextConfig;
