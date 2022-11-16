/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["kea-alt-del.dk"],
    imageSizes: [],
    deviceSizes: [400, 500, 640, 750, 828, 1080],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;

/*
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kea-alt-del.dk",
        port: "",
        pathname: "/t7/images/**",
      },
    ],



*/
