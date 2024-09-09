/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/transaction",
        permanent: true,
      },
    ];
 },
};

export default nextConfig;
