import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  devIndicators: false,
  allowedDevOrigins: ["http://192.168.50.168:3000"],
};

export default nextConfig;
