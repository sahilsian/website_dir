/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static build: `next build` emits plain HTML/CSS/JS into ./out
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
