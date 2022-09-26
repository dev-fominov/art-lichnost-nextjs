// Для выгрузки в сеть
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/art-lichnost-nextjs",
  assetPrefix: "/art-lichnost-nextjs",
}

module.exports = nextConfig

// для локальной работы
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
