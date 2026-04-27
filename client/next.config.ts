import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-a5d906b5ccd44bc0921f39594aa70f32.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
