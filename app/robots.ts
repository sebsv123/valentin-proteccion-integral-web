import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const domain = 'https://valentinproteccionintegral.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '',
    },
    sitemap: `${domain}/sitemap.xml`,
  };
}
