import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    esmExternals: true,
  },
  // Garante que a aplicação funcione corretamente na Vercel
  swcMinify: true,
  reactStrictMode: true,
};

export default nextConfig;
