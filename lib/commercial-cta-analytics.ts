/** CTA intent only: never a received lead, rendered external form or sale.
 * One dataLayer path for the existing GTM; no direct gtag call or pre-consent queue.
 */
export type CommercialCtaType = 'whatsapp' | 'google_forms';

const pageProducts: Record<string, string | undefined> = {
  '/': undefined, '/en': undefined, '/contacto': undefined, '/en/contact': undefined,
  '/extranjeros': 'salud-extranjeros', '/en/foreigners': 'salud-extranjeros',
  '/seguros/salud-extranjeros': 'salud-extranjeros', '/en/insurance/health/foreigners': 'salud-extranjeros',
  '/seguros/salud': 'salud', '/en/insurance/health': 'salud',
  '/empresas/salud': 'salud-empresas', '/en/business/health-insurance': 'salud-empresas',
  '/seguros/dental': 'dental', '/en/insurance/dental': 'dental',
  '/seguros/mascotas': 'mascotas', '/en/insurance/pets': 'mascotas',
  '/seguros/accidentes': 'accidentes', '/seguros/decesos': 'decesos',
  '/seguros/accidentes-decesos': 'accidentes-decesos',
};
const visaPages = [
  '/visados/seguro-medico', '/visados/seguro-medico/estudios',
  '/visados/seguro-medico/residencia-no-lucrativa', '/visados/seguro-medico/teletrabajo-internacional',
  '/visados/seguro-medico/requisitos-consulares', '/en/visa-health-insurance',
  '/en/visa-health-insurance/student-visa', '/en/visa-health-insurance/non-lucrative-residence',
  '/en/visa-health-insurance/digital-nomad', '/en/visa-health-insurance/consulate-requirements',
];

/** Exact public routes only. Arbitrary path segments, queries and fragments are not analytics input. */
export function commercialCtaContext(pathname: string) {
  if (visaPages.includes(pathname)) return { page_path: pathname, product_slug: 'salud-extranjeros' };
  if (Object.hasOwn(pageProducts, pathname)) {
    const product = pageProducts[pathname];
    return { page_path: pathname, ...(product ? { product_slug: product } : {}) };
  }
  return { page_path: '/other' };
}

export function isGoogleFormsIntakePath(href: string) {
  return /^(?:\/start(?:\/(?:estudios|residencia|renovacion-familia))?|\/en\/start(?:\/(?:studies|residence|renewal-family))?)(?:[?#]|$)/.test(href);
}

export function trackCommercialCta(ctaType: CommercialCtaType): boolean {
  if (typeof window === 'undefined' || !['whatsapp', 'google_forms'].includes(ctaType)) return false;
  try {
    // Recheck at click time, even if GTM remains loaded after a rejected choice.
    // Unknown/future consent formats fail closed; no cookie UI/schema changes here.
    if (window.localStorage.getItem('cookie-consent') !== 'accepted') return false;
    const browser = window as Window & { dataLayer?: unknown[] };
    browser.dataLayer ??= [];
    browser.dataLayer.push({
      event: 'vpi_cta_click', cta_type: ctaType,
      product_slug: null, // clear a previous GTM value when product is unknown
      ...commercialCtaContext(window.location.pathname),
    });
    return true;
  } catch {
    return false; // Unavailable storage/tracking must never prevent navigation.
  }
}
