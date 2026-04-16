import type { MetadataRoute } from 'next';
import { products, site, subpages } from '@/lib/products';
import { blogPosts } from '@/lib/blog';
import { zonas } from '@/lib/zonas';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain.replace(/\/$/, '');

  return [
    // Home — máxima prioridad, puede cambiar con frecuencia
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },

    // Páginas de producto — alta prioridad, actualización periódica
    { url: `${base}/seguros`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Páginas informativas estables — cambian poco
    { url: `${base}/como-te-ayudamos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sobre-mi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/opiniones`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Contacto — estable pero importante para conversión
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Blog index — actualizado cuando hay nuevos posts
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.75 },

    // Páginas de seguros por producto
    ...products.map((product) => ({
      url: `${base}/seguros/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),

    // Subpáginas de producto
    ...subpages.map((page) => ({
      url: `${base}/seguros/${page.parent}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),

    // Posts del blog
    ...blogPosts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Zonas localizadas
    ...zonas.map((z) => ({
      url: `${base}/zonas/${z.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
    { url: `${base}/zonas`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ];
}
