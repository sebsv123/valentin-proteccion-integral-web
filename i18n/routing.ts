import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/internacional': {
      es: '/internacional',
      en: '/international',
    },
    '/internacional/peru': {
      es: '/internacional/peru',
      en: '/international/peru',
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
    '/extranjeros': { es: '/extranjeros', en: '/foreigners' },
    '/seguros': { es: '/seguros', en: '/insurance' },
    '/seguros/salud': { es: '/seguros/salud', en: '/insurance/health' },
    '/seguros/salud-extranjeros': { es: '/seguros/salud-extranjeros', en: '/insurance/health/foreigners' },
  },
});

export type Locale = (typeof routing.locales)[number];
