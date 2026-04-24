import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/gracias',
          '/api/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://valentinproteccionintegral.com/sitemap.xml',
    host: 'https://valentinproteccionintegral.com',
  };
}
