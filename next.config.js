/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["lucide-react"],
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/resume",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
