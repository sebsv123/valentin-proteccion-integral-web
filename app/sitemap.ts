import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://valentinproteccionintegral.com';
  const now = new Date().toISOString();
  return [
    // PILAR — Home
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: { languages: { es: base, en: `${base}/en`, 'x-default': base } } },

    // PRODUCTOS (alta intención de compra) — añadidos vida, mascotas, viaje, senior
    { url: `${base}/seguros`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-individual`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-dental`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/salud-senior`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/dental`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/mascotas`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/seguros/viaje`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/seguros/accidentes-decesos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // /seguros/accidentes omitida: redirige a /seguros/accidentes-decesos (301)
    { url: `${base}/seguros/decesos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/en/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: { languages: { es: `${base}/contacto`, en: `${base}/en/contact`, 'x-default': `${base}/contacto` } } },
    { url: `${base}/extranjeros`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/en/foreigners`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/extranjeros`, en: `${base}/en/foreigners`, 'x-default': `${base}/extranjeros` } } },
    { url: `${base}/en/insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: { es: `${base}/seguros`, en: `${base}/en/insurance`, 'x-default': `${base}/seguros` } } },
    { url: `${base}/seguros/salud`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/en/insurance/health`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: { languages: { es: `${base}/seguros/salud`, en: `${base}/en/insurance/health`, 'x-default': `${base}/seguros/salud` } } },
    { url: `${base}/seguros/salud-extranjeros`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/en/insurance/health/foreigners`, lastModified: now, changeFrequency: 'monthly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/salud-extranjeros`, en: `${base}/en/insurance/health/foreigners`, 'x-default': `${base}/seguros/salud-extranjeros` } } },
    { url: `${base}/en/how-we-help`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: { languages: { es: `${base}/como-te-ayudamos`, en: `${base}/en/how-we-help`, 'x-default': `${base}/como-te-ayudamos` } } },
    { url: `${base}/en/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.6, alternates: { languages: { es: `${base}/sobre-nosotros`, en: `${base}/en/about-us`, 'x-default': `${base}/sobre-nosotros` } } },
    { url: `${base}/en/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.6, alternates: { languages: { es: `${base}/opiniones`, en: `${base}/en/reviews`, 'x-default': `${base}/opiniones` } } },
    { url: `${base}/en/legal-notice`, lastModified: now, changeFrequency: 'yearly', priority: 0.1, alternates: { languages: { es: `${base}/aviso-legal`, en: `${base}/en/legal-notice`, 'x-default': `${base}/aviso-legal` } } },
    { url: `${base}/en/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.1, alternates: { languages: { es: `${base}/privacidad`, en: `${base}/en/privacy`, 'x-default': `${base}/privacidad` } } },
    { url: `${base}/en/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.1, alternates: { languages: { es: `${base}/cookies`, en: `${base}/en/cookies`, 'x-default': `${base}/cookies` } } },
    { url: `${base}/en/insurance/accident-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/accidentes-decesos`, en: `${base}/en/insurance/accident-insurance`, 'x-default': `${base}/seguros/accidentes-decesos` } } },
    { url: `${base}/en/insurance/accident-insurance/business-self-employed`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/accidentes-decesos`, en: `${base}/en/insurance/accident-insurance/business-self-employed`, 'x-default': `${base}/seguros/accidentes-decesos` } } },
    { url: `${base}/en/insurance/funeral-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/decesos`, en: `${base}/en/insurance/funeral-insurance`, 'x-default': `${base}/seguros/decesos` } } },
    { url: `${base}/en/insurance/funeral-insurance/families`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/decesos/familias`, en: `${base}/en/insurance/funeral-insurance/families`, 'x-default': `${base}/seguros/decesos/familias` } } },
    { url: `${base}/en/insurance/dental-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/dental`, en: `${base}/en/insurance/dental-insurance`, 'x-default': `${base}/seguros/dental` } } },
    { url: `${base}/en/insurance/dental-insurance/families`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/dental/familias`, en: `${base}/en/insurance/dental-insurance/families`, 'x-default': `${base}/seguros/dental/familias` } } },
    { url: `${base}/en/insurance/pet-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/mascotas`, en: `${base}/en/insurance/pet-insurance`, 'x-default': `${base}/seguros/mascotas` } } },
    { url: `${base}/en/insurance/pet-insurance/civil-liability`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/mascotas/responsabilidad-civil`, en: `${base}/en/insurance/pet-insurance/civil-liability`, 'x-default': `${base}/seguros/mascotas/responsabilidad-civil` } } },
    { url: `${base}/en/insurance/health-insurance/self-employed`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/autonomos`, en: `${base}/en/insurance/health-insurance/self-employed`, 'x-default': `${base}/seguros/salud/autonomos` } } },
    { url: `${base}/en/insurance/health-insurance/comprehensive`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/completa`, en: `${base}/en/insurance/health-insurance/comprehensive`, 'x-default': `${base}/seguros/salud/completa` } } },
    { url: `${base}/en/insurance/health-insurance/families`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/familias`, en: `${base}/en/insurance/health-insurance/families`, 'x-default': `${base}/seguros/salud/familias` } } },
    { url: `${base}/en/insurance/health-insurance/reimbursement`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/reembolso`, en: `${base}/en/insurance/health-insurance/reimbursement`, 'x-default': `${base}/seguros/salud/reembolso` } } },
    { url: `${base}/en/insurance/health-insurance/senior`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/salud/senior`, en: `${base}/en/insurance/health-insurance/senior`, 'x-default': `${base}/seguros/salud/senior` } } },
    { url: `${base}/en/insurance/travel-insurance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/seguros/viaje`, en: `${base}/en/insurance/travel-insurance`, 'x-default': `${base}/seguros/viaje` } } },
    { url: `${base}/en/insurance/travel-insurance/students`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: { languages: { es: `${base}/seguros/viaje/estudios`, en: `${base}/en/insurance/travel-insurance/students`, 'x-default': `${base}/seguros/viaje/estudios` } } },
    { url: `${base}/extranjeros/alquileres`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/empresas/salud`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/empresas/ciberseguridad`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/empresas`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/en/international`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional`, en: `${base}/en/international`, 'x-default': `${base}/internacional` } } },
    { url: `${base}/internacional/corea-del-sur`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional/australia`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional/india`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/internacional/peru`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/en/international/peru`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/peru`, en: `${base}/en/international/peru`, 'x-default': `${base}/internacional/peru` } } },
    { url: `${base}/en/international/australia`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/australia`, en: `${base}/en/international/australia`, 'x-default': `${base}/internacional/australia` } } },
    { url: `${base}/en/international/india`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/india`, en: `${base}/en/international/india`, 'x-default': `${base}/internacional/india` } } },
    { url: `${base}/en/international/south-korea`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: { languages: { es: `${base}/internacional/corea-del-sur`, en: `${base}/en/international/south-korea`, 'x-default': `${base}/internacional/corea-del-sur` } } },
    { url: `${base}/autonomos`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // /para/autonomos excluida: redirige 301 a /autonomos

    // ZONAS (SEO local) — añadido hub
    { url: `${base}/zonas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/boadilla-del-monte`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/majadahonda`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/pozuelo-de-alarcon`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zonas/madrid`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // CONFIANZA / AUTORIDAD
    { url: `${base}/como-te-ayudamos`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sobre-nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/opiniones`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/garantias`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // /landing/* excluidas: son campañas, no indexables orgánicamente

    // AUDIENCIAS (app/para/) — /para/autonomos excluida por redirect 301
    { url: `${base}/para/familias`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/seniors`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/para/jovenes-profesionales`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // BLOG — índice
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    // Artículos del blog
    { url: `${base}/blog/mejor-seguro-medico-calidad-precio-espana`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguro-medico-privado-madrid`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/mejor-seguro-salud-madrid-2026`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguros-boadilla-del-monte`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/cuanto-cuesta-seguro-salud-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/mejor-seguro-salud-autonomos-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguros-vida-hipoteca-boadilla-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/seguro-medico-autonomos-madrid-deduccion-fiscal`, lastModified: '2026-04-17', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/ventajas-asesor-de-seguros`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/fiarse-opiniones-para-elegir-seguro`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/incluir-personas-poliza-medica`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguros-salud-cubren-recien-nacidos`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/donde-consultar-que-incluye-mi-poliza`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-medico-asistencia-en-viaje-que-cubre`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-de-vida-riesgo-que-es`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/tipos-de-seguros-de-vida`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-perros-madrid-ley-bienestar-2026`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/asesor-seguros-vs-portal-online`, lastModified: '2026-04-13', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/guia-seguro-salud-espana-2026`, lastModified: '2026-02-15', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-vida-esencial-familia`, lastModified: '2026-01-28', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-vida-hipoteca-obligatorio`, lastModified: '2026-02-10', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguros-mascotas-2026-vale-la-pena`, lastModified: '2026-03-01', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-perro-obligatorio-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-dental-familias-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-accidentes-convenio-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-ahorro-jubilacion-madrid`, lastModified: '2026-04-14', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-decesos-familiar-madrid-que-cubre`, lastModified: '2026-04-17', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/seguro-dental-vs-salud-completa-madrid`, lastModified: '2026-04-17', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/por-que-necesitas-mas-de-9-000e-en-proteccion-familiar-madrid-2026-must-have`, lastModified: '2026-04-23', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/pasaporte-europeo-mascotas-obligatorio-2026-vacunas-precio-madrid`, lastModified: '2026-04-23', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50`, lastModified: '2026-04-23', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/como-aplicar-protector-solar-beneficios`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.6 },

    // CONTACTO
    { url: `${base}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // LEGALES (baja prioridad)
    { url: `${base}/aviso-legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/privacidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
