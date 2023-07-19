/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
        pathname: "/u/**",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        port: "",
        pathname: "/cdn-pg/**",
      },
    ],
  },
};

module.exports = nextConfig;
