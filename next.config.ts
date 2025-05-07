import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "akamai",
    path: "/",
  },
};

export default nextConfig;
