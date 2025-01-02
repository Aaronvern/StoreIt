import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions:{ 
      bodySizeLimit:'100MB'
    }
  },
  /* config options here */
  images: {
    domains: ['img.freepik.com'],
  },
};

export default nextConfig;
