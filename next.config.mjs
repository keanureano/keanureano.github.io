/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: process.env.NODE_ENV !== "production" },
};

export default nextConfig;
