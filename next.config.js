/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir:"build",
    swcMinify: true,
    images: {
      domains: ["localhost"],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
}

module.exports = nextConfig
