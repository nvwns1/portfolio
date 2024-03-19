/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    domains: [
      "https://portfolio-suman.vercel.app/",
      "https://test-suman.vercel.app/",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
