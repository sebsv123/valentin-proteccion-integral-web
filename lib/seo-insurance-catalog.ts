export type InsuranceCatalogEntry = {
  key: string;
  name: { es: string; en: string };
  url: { es: string; en: string };
};

/** Only canonical, published commercial journeys belong in the structured-data catalog. */
export const seoInsuranceCatalog: InsuranceCatalogEntry[] = [
  { key: 'health', name: { es: 'Seguro de Salud', en: 'Health insurance' }, url: { es: '/seguros/salud', en: '/en/insurance/health' } },
  { key: 'pets', name: { es: 'Seguro para Mascotas', en: 'Pet insurance' }, url: { es: '/seguros/mascotas', en: '/en/insurance/pet-insurance' } },
  { key: 'dental', name: { es: 'Seguro Dental', en: 'Dental insurance' }, url: { es: '/seguros/dental', en: '/en/insurance/dental-insurance' } },
  { key: 'travel', name: { es: 'Seguro de Viaje', en: 'Travel insurance' }, url: { es: '/seguros/viaje', en: '/en/insurance/travel-insurance' } },
  { key: 'accident', name: { es: 'Seguro de Accidentes', en: 'Accident insurance' }, url: { es: '/seguros/accidentes-decesos', en: '/en/insurance/accident-insurance' } },
  { key: 'business', name: { es: 'Seguros para Negocios', en: 'Business insurance' }, url: { es: '/empresas', en: '/en/business' } },
  { key: 'funeral', name: { es: 'Seguro de Decesos', en: 'Funeral insurance' }, url: { es: '/seguros/decesos', en: '/en/insurance/funeral-insurance' } },
];

export function getSeoInsuranceCatalog(locale: 'es' | 'en') {
  return seoInsuranceCatalog.map(({ name, url }) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: name[locale], url: `https://valentinproteccionintegral.com${url[locale]}` },
  }));
}
