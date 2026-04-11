/** @type {import('next').NextConfig} */
const path = require('path');
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

module.exports = nextConfig;
