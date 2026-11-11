/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/services", destination: "/contact", permanent: true }]
  },
}

export default nextConfig
