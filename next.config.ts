import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF pesa bastante menos que WebP en fotos reales; Next prueba primero
    // el que da mejor resultado y cae a WebP si el navegador no soporta AVIF.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
