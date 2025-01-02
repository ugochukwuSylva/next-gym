/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.flagcdn.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
