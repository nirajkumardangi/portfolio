/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/public/:path*',
        destination: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
