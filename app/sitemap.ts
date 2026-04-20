import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.valentinproteccionintegral.com';
  const now = new Date().toISOString();

  return [
    // PILAR — Home
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // PRODUCTOS (alta intención de compra)
    { url: `${base}/seguros`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-individual`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-dental`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/accidentes-decesos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-extranjeros`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/autonomos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // ZONAS (SEO local)
    { url: `${base}/zonas/boadilla-del-monte`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/majadahonda`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/pozuelo-de-alarcon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/madrid`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // CONFIANZA / AUTORIDAD
    { url: `${base}/como-te-ayudamos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sobre-nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/opiniones`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/garantias`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // AUDIENCIAS (si existen en app/para/)
    { url: `${base}/para/familias`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/autonomos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/seniors`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/jovenes-profesionales`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // BLOG — índice
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    // Artículos del blog (26 URLs explícitas para indexación fiable)
    { url: `${base}/blog/mejor-seguro-medico-calidad-precio-espana`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguro-medico-privado-madrid`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/mejor-seguro-salud-madrid-2026`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguros-boadilla-del-monte`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/cuanto-cuesta-seguro-salud-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/mejor-seguro-salud-autonomos-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguros-vida-hipoteca-boadilla-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguro-medico-autonomos-madrid-deduccion-fiscal`, lastModified: '2026-04-17', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ventajas-mediador-de-seguros`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/fiarse-opiniones-para-elegir-seguro`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/incluir-personas-poliza-medica`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguros-salud-cubren-recien-nacidos`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/donde-consultar-que-incluye-mi-poliza`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-medico-asistencia-en-viaje-que-cubre`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-de-vida-riesgo-que-es`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/tipos-de-seguros-de-vida`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-perros-madrid-ley-bienestar-2026`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/asesor-seguros-vs-comparador-online`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/guia-seguro-salud-espana-2026`, lastModified: '2026-02-15', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-vida-esencial-familia`, lastModified: '2026-01-28', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-perro-obligatorio-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-dental-familias-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-accidentes-convenio-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-ahorro-jubilacion-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-decesos-familiar-madrid-que-cubre`, lastModified: '2026-04-17', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-dental-vs-salud-completa-madrid`, lastModified: '2026-04-17', changeFrequency: 'monthly', priority: 0.6 },

    // CONTACTO
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // LEGALES (baja prioridad)
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
