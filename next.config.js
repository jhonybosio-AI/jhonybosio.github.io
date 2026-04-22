/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Forçando re-build do zero para o Moabi Dashboard
  env: {
    REBUILD_TIME: '2026-04-22T13:41:00Z'
  }
};

module.exports = nextConfig;
