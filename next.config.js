/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: "out",
    images: {
      unoptimized: true, // GitHub Pages does not support Image Optimization
    },
}

module.exports = nextConfig
