import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Abaikan error TypeScript saat build di Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Abaikan error ESLint saat build di Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;