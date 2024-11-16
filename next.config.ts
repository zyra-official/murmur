import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"], // Add 'images.unsplash.com' to the list of allowed domains
  },
};

export default nextConfig;
