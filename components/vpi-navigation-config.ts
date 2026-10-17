import { products } from '@/lib/products';
import { getLocalizedProduct, localizedProductPath } from '@/lib/product-locales';

export type VpiNavItem = { label: string; href: string };

const route = (locale: 'es' | 'en', es: string, en: string) => locale === 'en' ? en : es;

export function getVpiNavigation(locale: 'es' | 'en') {
  const solutions: VpiNavItem[] = [
    { label: route(locale, 'Alquileres', 'Rentals'), href: route(locale, '/extranjeros/alquileres', '/en/foreigners/rentals') },
    ...products.map((product) => ({ label: getLocalizedProduct(product, locale).label.toLocaleLowerCase(locale).replace(/^./, (letter) => letter.toLocaleUpperCase(locale)), href: localizedProductPath(product.slug, locale) })),
  ];
  const primary: VpiNavItem[] = [
    { label: route(locale, 'Extranjeros', 'Foreigners'), href: route(locale, '/extranjeros', '/en/foreigners') },
    { label: route(locale, 'Empresas y Autónomos', 'Businesses & Self-employed'), href: route(locale, '/empresas', '/en/business') },
    { label: route(locale, 'Internacional', 'International'), href: route(locale, '/internacional', '/en/international') },
    { label: route(locale, 'Cómo te ayudamos', 'How we help'), href: route(locale, '/como-te-ayudamos', '/en/how-we-help') },
  ];
  const resourceDefinitions = [
    { es: 'Sobre nosotros', en: 'About us', esHref: '/sobre-nosotros', enHref: '/en/about-us' },
    { es: 'Opiniones', en: 'Reviews', esHref: '/opiniones', enHref: '/en/reviews' },
    { es: 'Blog', en: 'Blog', esHref: '/blog', enHref: '/en/blog' },
  ];
  const resources: VpiNavItem[] = resourceDefinitions.map((item) => ({
    label: locale === 'en' ? item.en : item.es,
    href: locale === 'en' ? item.enHref : item.esHref,
  }));
  return { solutions, primary, resources };
}

export function getVpiRoute(locale: 'es' | 'en', kind: 'home' | 'contact') {
  if (kind === 'home') return locale === 'en' ? '/en' : '/';
  return locale === 'en' ? '/en/contact' : '/contacto';
}
