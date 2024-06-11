/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.dmcdn.net",
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, // to handle Suspense of useSearchParams hook
  },
};

export default nextConfig;
