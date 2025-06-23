/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 👈 isso é o novo equivalente ao `next export`
  basePath: '/IHC-2025.1-Grupo05',   // substitua pelo nome do seu repo no GitHub
  trailingSlash: true,
  assetPrefix: '/IHC-2025.1-Grupo05',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig