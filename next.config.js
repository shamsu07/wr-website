/** @type {import('next').NextConfig} */
const nextConfig = {
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
