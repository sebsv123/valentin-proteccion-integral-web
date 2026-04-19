import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://valentinproteccionintegral.com';
  const now = new Date().toISOString();

  return [
    // PILAR — Home
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // PRODUCTOS (alta intención de compra)
    { url: `${base}/seguros/salud`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/dental`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/vida`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/mascotas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/decesos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/accidentes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/seguros/viaje`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/autonomos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // ZONAS (SEO local)
    { url: `${base}/zonas/boadilla-del-monte`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/majadahonda`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/pozuelo-de-alarcon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/alcorcon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/madrid`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // CONFIANZA / AUTORIDAD
    { url: `${base}/como-te-ayudamos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sobre-nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/opiniones`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/garantias`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // AUDIENCIAS (si existen en app/para/)
    { url: `${base}/para/familias`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/autonomos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/mayores`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // BLOG
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.5 },

    // CONTACTO
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // LEGALES (baja prioridad)
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
