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
