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
  },
});

export type Locale = (typeof routing.locales)[number];
