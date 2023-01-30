/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.it',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
}
