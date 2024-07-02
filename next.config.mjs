/** @type {import('next').NextConfig} */

let envImageUnoptimize = process.env.NODE_ENV !== "production" ? false : true;

const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? undefined : "export",
  images: {
    unoptimized: envImageUnoptimize,
  },
};

export default nextConfig;
