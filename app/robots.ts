import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const domain = 'https://valentinproteccionintegral.com';

  return {
    rules: [
      {
        // Bots principales: indexar todo excepto rutas técnicas y legales
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/aviso-legal',
          '/privacidad',
          '/cookies',
        ],
      },
      {
        // GPTBot y otros AI crawlers: no queremos que entrenen modelos con el contenido
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}
