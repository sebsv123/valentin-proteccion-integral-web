import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const domain = 'https://valentinproteccionintegral.com';

  return {
    rules: [
      {
        // Todos los bots incluidos AI crawlers: indexación completa para SEO + GEO
        // GPTBot (ChatGPT), CCBot (Perplexity/Claude), Google-Extended (Gemini AI Overviews)
        // Bloquearlos impediría aparecer en respuestas de IA — canal clave de captación
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/landing',
          '/gracias',
          '/aviso-legal',
          '/privacidad',
          '/cookies',
        ],
      },
    ],
    sitemap: `${domain}/sitemap.xml`,
    host: domain,
  };
}
