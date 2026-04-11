/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portafolio.io', // 👈 Quemado aquí también
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: [],
  },
};

module.exports = nextConfig;