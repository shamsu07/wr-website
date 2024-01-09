/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'  'https://www.wealth-right.com'; image-src 'https://www.wealth-right.com'; script-src 'self' 'https://www.google-analytics.com' ''nonce-VCBXNZM'; font-src 'self' 'https://fonts.googleapis.com';",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(); battery=(); geolocation=(); microphone=()",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["wealth-right.com"],
  },
};

module.exports = nextConfig;
