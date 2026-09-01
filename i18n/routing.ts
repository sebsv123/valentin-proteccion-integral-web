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
    '/internacional/australia': {
      es: '/internacional/australia',
      en: '/international/australia',
    },
    '/internacional/india': {
      es: '/internacional/india',
      en: '/international/india',
    },
    '/internacional/corea-del-sur': {
      es: '/internacional/corea-del-sur',
      en: '/international/south-korea',
    },
    '/contacto': {
      es: '/contacto',
      en: '/contact',
    },
    '/extranjeros': { es: '/extranjeros', en: '/foreigners' },
    '/seguros': { es: '/seguros', en: '/insurance' },
    '/seguros/salud': { es: '/seguros/salud', en: '/insurance/health' },
    '/seguros/salud-extranjeros': { es: '/seguros/salud-extranjeros', en: '/insurance/health/foreigners' },
    '/seguros/accidentes': { es: '/seguros/accidentes', en: '/insurance/accident-insurance' },
    '/seguros/accidentes/pyme-autonomos': { es: '/seguros/accidentes/pyme-autonomos', en: '/insurance/accident-insurance/business-self-employed' },
    '/seguros/decesos': { es: '/seguros/decesos', en: '/insurance/funeral-insurance' },
    '/seguros/decesos/familias': { es: '/seguros/decesos/familias', en: '/insurance/funeral-insurance/families' },
    '/seguros/dental': { es: '/seguros/dental', en: '/insurance/dental-insurance' },
    '/seguros/dental/familias': { es: '/seguros/dental/familias', en: '/insurance/dental-insurance/families' },
    '/seguros/mascotas': { es: '/seguros/mascotas', en: '/insurance/pet-insurance' },
    '/seguros/mascotas/responsabilidad-civil': { es: '/seguros/mascotas/responsabilidad-civil', en: '/insurance/pet-insurance/civil-liability' },
    '/seguros/salud/autonomos': { es: '/seguros/salud/autonomos', en: '/insurance/health-insurance/self-employed' },
    '/seguros/salud/completa': { es: '/seguros/salud/completa', en: '/insurance/health-insurance/comprehensive' },
    '/seguros/salud/familias': { es: '/seguros/salud/familias', en: '/insurance/health-insurance/families' },
    '/seguros/salud/reembolso': { es: '/seguros/salud/reembolso', en: '/insurance/health-insurance/reimbursement' },
    '/seguros/salud/senior': { es: '/seguros/salud/senior', en: '/insurance/health-insurance/senior' },
    '/seguros/viaje': { es: '/seguros/viaje', en: '/insurance/travel-insurance' },
    '/seguros/viaje/estudios': { es: '/seguros/viaje/estudios', en: '/insurance/travel-insurance/students' },
  },
});

export type Locale = (typeof routing.locales)[number];
