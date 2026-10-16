import { products, mainNav, getSubpagesForProduct } from '@/lib/products';
import { getLocalizedProduct, getLocalizedSubpage, localizedProductPath, localizedSubpagePath } from '@/lib/product-locales';

export type VpiNavItem = { label: string; href: string };

const route = (locale: 'es' | 'en', es: string, en: string) => locale === 'en' ? en : es;

export function getVpiNavigation(locale: 'es' | 'en') {
  const solutions: VpiNavItem[] = [
    { label: route(locale, 'Todos los seguros', 'All insurance'), href: route(locale, '/seguros', '/en/insurance') },
    { label: route(locale, 'Alquileres', 'Rentals'), href: route(locale, '/extranjeros/alquileres', '/en/foreigners/rentals') },
    ...products.map((product) => ({ label: getLocalizedProduct(product, locale).label.toLocaleLowerCase(locale).replace(/^./, (letter) => letter.toLocaleUpperCase(locale)), href: localizedProductPath(product.slug, locale) })),
  ];
  const solutionDetails: VpiNavItem[] = [
    ...products.flatMap((product) =>
    getSubpagesForProduct(product.slug).map((subpage) => ({
        label: `${getLocalizedProduct(product, locale).label} · ${getLocalizedSubpage(subpage, locale).name}`,
        href: localizedSubpagePath(product.slug, subpage.slug, locale),
      })),
    ),
    { label: route(locale, 'Seguro médico para visados', 'Visa health-insurance guide'), href: route(locale, '/visados/seguro-medico', '/en/visa-health-insurance') },
    { label: route(locale, 'Visado de estudios', 'Student visa insurance'), href: route(locale, '/visados/seguro-medico/estudios', '/en/visa-health-insurance/student-visa') },
    { label: route(locale, 'Residencia no lucrativa', 'Non-lucrative residence insurance'), href: route(locale, '/visados/seguro-medico/residencia-no-lucrativa', '/en/visa-health-insurance/non-lucrative-residence') },
    { label: route(locale, 'Requisitos consulares', 'Insurance requirements by consulate'), href: route(locale, '/visados/seguro-medico/requisitos-consulares', '/en/visa-health-insurance/consulate-requirements') },
  ];
  const primary: VpiNavItem[] = [
    { label: route(locale, 'Extranjeros', 'Foreigners'), href: route(locale, '/extranjeros', '/en/foreigners') },
    { label: route(locale, 'Empresas y Autónomos', 'Businesses & Self-employed'), href: route(locale, '/empresas', '/en/business') },
    { label: route(locale, 'Internacional', 'International'), href: route(locale, '/internacional', '/en/international') },
    { label: route(locale, 'Cómo te ayudamos', 'How we help'), href: route(locale, '/como-te-ayudamos', '/en/how-we-help') },
  ];
  const resourceDefinitions = [
    { es: 'Sobre nosotros', en: 'About us', navLabel: 'Sobre nosotros', navHref: '/sobre-nosotros', enHref: '/en/about-us' },
    { es: 'Blog', en: 'Blog', navLabel: 'Blog', navHref: '/blog', enHref: '/en/blog' },
    { es: 'Opiniones', en: 'Reviews', navLabel: 'Opiniones', navHref: '/opiniones', enHref: '/en/reviews' },
    { es: 'Zonas', en: 'Areas', navLabel: 'Zonas', navHref: '/zonas', enHref: '/zonas' },
    { es: 'Contacto', en: 'Contact', navLabel: 'Contacto', navHref: '/contacto', enHref: '/en/contact' },
  ];
  const resources: VpiNavItem[] = resourceDefinitions.map((item) => ({
    label: locale === 'en' ? item.en : item.es,
    href: locale === 'en' ? item.enHref : item.navHref,
  }));
  const businessSolutions: VpiNavItem[] = [
    { label: route(locale, 'Salud para empresas y autónomos', 'Health for businesses and self-employed'), href: route(locale, '/empresas/salud', '/en/business/health-insurance') },
    { label: route(locale, 'Ciberseguridad', 'Cybersecurity'), href: route(locale, '/empresas/ciberseguridad', '/en/business/cybersecurity') },
    { label: route(locale, 'Autónomos', 'Self-employed'), href: route(locale, '/autonomos', '/en/for/self-employed') },
  ];
  // Keep mainNav as the source for the global resource destinations where possible.
  for (const item of mainNav) {
    if (item.label === 'Sobre nosotros' || item.label === 'Blog' || item.label === 'Opiniones' || item.label === 'Zonas' || item.label === 'Contacto') {
      const target = resources.find((resource) => resource.label === (locale === 'en'
        ? ({ 'Sobre nosotros': 'About us', 'Blog': 'Blog', 'Opiniones': 'Reviews', 'Zonas': 'Areas', 'Contacto': 'Contact' } as Record<string, string>)[item.label]
        : item.label));
      if (target && locale === 'es') target.href = item.href;
    }
  }
  return { solutions, solutionDetails, primary, resources, businessSolutions };
}

export function getVpiRoute(locale: 'es' | 'en', kind: 'home' | 'contact') {
  if (kind === 'home') return locale === 'en' ? '/en' : '/';
  return locale === 'en' ? '/en/contact' : '/contacto';
}
