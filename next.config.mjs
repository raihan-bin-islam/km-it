/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "wallpapercave.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "occ-0-114-116.1.nflxso.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
