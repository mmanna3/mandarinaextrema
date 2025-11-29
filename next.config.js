/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Removido para habilitar Server Actions
  experimental: {
    serverActions: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
