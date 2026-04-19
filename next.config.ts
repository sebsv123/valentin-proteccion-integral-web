import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 414, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cachear imágenes procesadas 30 días — evita reprocesar PNGs pesados en cada cold start
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  // Forzar compilación ES2017+ — elimina polyfills innecesarios
  // para Array.at, Array.flat, Object.fromEntries, etc.
  // Ahorro estimado: 26 KiB según Lighthouse
  transpilePackages: [],
  // Redirecciones SEO
  async redirects() {
    return [
      // Consolidación www: sin-www → www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'valentinproteccionintegral.com' }],
        destination: 'https://www.valentinproteccionintegral.com/:path*',
        permanent: true,
      },
      // Redirección explícita de /sobre-mi a /sobre-nosotros (301 permanente)
      {
        source: '/sobre-mi',
        destination: '/sobre-nosotros',
        permanent: true,
      },
      // Redirección de /sobre-mi/ (con slash) a /sobre-nosotros
      {
        source: '/sobre-mi/:path*',
        destination: '/sobre-nosotros/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cachear imágenes optimizadas por Next en CDN 7 días
        source: "/_next/image(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
  compiler: {
    // SWC compiler options for removing console logs in production (helps reduce JS size)
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    cssChunking: 'loose',
    optimizePackageImports: [
      'framer-motion', 
      'lucide-react'
    ],
  },
};

export default nextConfig;
