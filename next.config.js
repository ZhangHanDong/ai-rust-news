/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['katex'],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
