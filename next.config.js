/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  crossOrigin: 'anonymous',
  images: {
    domains: ['alex-volkov.ru'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // loader: "akamai",
    // path: "",
  },
  // basePath: "/art-lichnost-nextjs",
  // assetPrefix: "/art-lichnost-nextjs",
}

module.exports = nextConfig