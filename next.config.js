/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", //Lo comenté porque me tiró error, creo que tiene que ver con la optimización de imágenes. Ojalá vos tengas más tiempo/ganas que yo
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
