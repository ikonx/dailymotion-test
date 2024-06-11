/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.dmcdn.net",
      },
    ],
  },
};

export default nextConfig;
