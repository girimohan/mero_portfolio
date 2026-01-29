/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enable strict mode to catch hydration issues early
  reactStrictMode: true,
}

export default nextConfig
