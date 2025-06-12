/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Kasm David',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgYvul83NKfXyNi8Cg9lhmarVU9sUyEq3xIQ&s',
    listUrl: 'https://drlupa.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Drlupa/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
