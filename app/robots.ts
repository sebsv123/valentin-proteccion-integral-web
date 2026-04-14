import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const domain = 'https://valentinproteccionintegral.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
