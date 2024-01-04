/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  swcMinify: true,
  images: {
    domains: ["wealth-right.com"],
  },
};

module.exports = nextConfig;
