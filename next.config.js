/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.art-lichnost.ru',
        port: '',
        pathname: '/*',
      },
    ],
    domains: ['api.art-lichnost.ru'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/job/vakansija',
        destination: '/vacancies',
        permanent: true,
      },
      {
        source: '/camp_archive',
        destination: '/camp/professions',
        permanent: true,
      },
      {
        source: '/testing',
        destination: '/proftestirovanie',
        permanent: true,
      },
      {
        source: '/docs/dokumenty-dlya-dogovora',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/psychology',
        destination: '/psychologist',
        permanent: true,
      },
      {
        source: '/vocational',
        destination: '/vacancies',
        permanent: true,
      },
      {
        source: '/programmes/proftestirovanie_school',
        destination: '/proftestirovanie',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig