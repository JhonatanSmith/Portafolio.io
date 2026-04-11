const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portafolio.io' : '',
  assetPrefix: isProd ? '/Portafolio.io/' : '',
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  // 🔥 AGREGA ESTO
  experimental: {
    optimizePackageImports: [],
  },
};

module.exports = nextConfig;