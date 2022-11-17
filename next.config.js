/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['alex-volkov.ru'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig

// <<<<<<< HEAD
// Для выгрузки в сеть
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
//   images: {
//     loader: "akamai",
//     path: "",
//   },
//   basePath: "/art-lichnost-nextjs",
//   assetPrefix: "/art-lichnost-nextjs",
// }

// module.exports = nextConfig

// для локальной работы
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

// =======
// >>>>>>> mainPage
