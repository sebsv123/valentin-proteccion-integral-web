'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { productPathnames, unavailableLocalePathnames } from '@/lib/product-locales';
import { getBlogPostBySlug } from '@/lib/blog-catalog';
import type { BlogLocale } from '@/lib/blog-catalog';

const bilingualPathPairs: Record<string, { es: string; en: string }> = {
  '/visados/seguro-medico': { es: '/visados/seguro-medico', en: '/en/visa-health-insurance' },
  '/visa-health-insurance': { es: '/visados/seguro-medico', en: '/en/visa-health-insurance' },
  '/visados/seguro-medico/estudios': { es: '/visados/seguro-medico/estudios', en: '/en/visa-health-insurance/student-visa' },
  '/visa-health-insurance/student-visa': { es: '/visados/seguro-medico/estudios', en: '/en/visa-health-insurance/student-visa' },
  '/visados/seguro-medico/residencia-no-lucrativa': { es: '/visados/seguro-medico/residencia-no-lucrativa', en: '/en/visa-health-insurance/non-lucrative-residence' },
  '/visa-health-insurance/non-lucrative-residence': { es: '/visados/seguro-medico/residencia-no-lucrativa', en: '/en/visa-health-insurance/non-lucrative-residence' },
  '/visados/seguro-medico/teletrabajo-internacional': { es: '/visados/seguro-medico/teletrabajo-internacional', en: '/en/visa-health-insurance/digital-nomad' },
  '/visa-health-insurance/digital-nomad': { es: '/visados/seguro-medico/teletrabajo-internacional', en: '/en/visa-health-insurance/digital-nomad' },
  '/visados/seguro-medico/requisitos-consulares': { es: '/visados/seguro-medico/requisitos-consulares', en: '/en/visa-health-insurance/consulate-requirements' },
  '/visa-health-insurance/consulate-requirements': { es: '/visados/seguro-medico/requisitos-consulares', en: '/en/visa-health-insurance/consulate-requirements' },
  '/seguros/salud-extranjeros/asisa-health-students': { es: '/seguros/salud-extranjeros/asisa-health-students', en: '/en/insurance/health/foreigners/asisa-health-students' },
  '/insurance/health/foreigners/asisa-health-students': { es: '/seguros/salud-extranjeros/asisa-health-students', en: '/en/insurance/health/foreigners/asisa-health-students' },
  '/seguros/salud-extranjeros/asisa-health-residents': { es: '/seguros/salud-extranjeros/asisa-health-residents', en: '/en/insurance/health/foreigners/asisa-health-residents' },
  '/insurance/health/foreigners/asisa-health-residents': { es: '/seguros/salud-extranjeros/asisa-health-residents', en: '/en/insurance/health/foreigners/asisa-health-residents' },
};

const supportedPathnames = new Set([
  '/', '/blog', '/autonomos', '/contacto', '/extranjeros', '/extranjeros/alquileres', '/seguros', '/seguros/salud', '/seguros/salud-extranjeros', '/internacional', '/internacional/peru', '/internacional/australia', '/internacional/india', '/internacional/corea-del-sur', '/como-te-ayudamos', '/sobre-nosotros', '/opiniones', '/aviso-legal', '/privacidad', '/cookies', '/empresas', '/empresas/salud', '/empresas/ciberseguridad', '/para/autonomos', '/para/familias', '/para/jovenes-profesionales', '/para/seniors',
  ...Object.keys(productPathnames),
  ...Object.keys(bilingualPathPairs),
]);

const localizedPathToInternal: Record<string, string> = {
  '/insurance': '/seguros',
  '/insurance/health': '/seguros/salud',
  '/insurance/health/foreigners': '/seguros/salud-extranjeros',
  '/business': '/empresas',
  '/business/health-insurance': '/empresas/salud',
  '/business/cybersecurity': '/empresas/ciberseguridad',
  '/for/self-employed': '/autonomos',
  '/foreigners': '/extranjeros',
  '/foreigners/rentals': '/extranjeros/alquileres',
  '/contact': '/contacto',
  '/international': '/internacional',
  '/how-we-help': '/como-te-ayudamos',
  '/about-us': '/sobre-nosotros',
  '/reviews': '/opiniones',
  '/legal-notice': '/aviso-legal',
  '/privacy': '/privacidad',
  '/cookies': '/cookies',
  '/for/families': '/para/familias',
  '/for/young-professionals': '/para/jovenes-profesionales',
  '/for/seniors': '/para/seniors',
};

for (const [internalPath, localizedPath] of Object.entries(productPathnames)) {
  localizedPathToInternal[localizedPath] = internalPath;
  localizedPathToInternal[localizedPath.replace(/^\/en/, '')] = internalPath;
}

for (const pair of Object.values(bilingualPathPairs)) {
  localizedPathToInternal[pair.es] = pair.es;
  localizedPathToInternal[pair.en.replace(/^\/en/, '')] = pair.es;
}

function toInternalPath(pathname: string) {
  const withoutLocale = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localizedPathToInternal[pathname] ?? localizedPathToInternal[withoutLocale] ?? withoutLocale;
}

export function LanguageSwitcher() {
  const locale = useLocale() as BlogLocale;
  const pathname = usePathname();
  const t = useTranslations('common');
  // next-intl exposes a locale-independent pathname. Use it consistently for
  // hard loads and client navigation so route-pair mapping cannot fall back to
  // the language home page.
  const effectivePathname = toInternalPath(pathname);
  const localeUnavailable = (unavailableLocalePathnames[locale] as readonly string[]).includes(effectivePathname);
  const blogSlug = effectivePathname.startsWith('/blog/') ? effectivePathname.slice('/blog/'.length) : undefined;
  const blogPost = blogSlug ? getBlogPostBySlug(locale, blogSlug) : undefined;
  const blogEquivalent = effectivePathname === '/blog' || Boolean(blogPost?.slug.en);
  const supported = supportedPathnames.has(effectivePathname) || blogEquivalent;

  if (!supported || localeUnavailable) {
    return <span className="inline-flex min-w-[62px] shrink-0 justify-center whitespace-nowrap text-xs font-semibold text-white/45" title="English version not available for this page" aria-disabled="true">ES / EN</span>;
  }

  const targetLocale = locale === 'es' ? 'en' : 'es';
  const explicitPair = bilingualPathPairs[effectivePathname] ?? bilingualPathPairs[pathname];
  if (effectivePathname === '/blog') {
    return <a href={targetLocale === 'en' ? '/en/blog' : '/blog'} aria-label={`${t('language')}: ${targetLocale === 'en' ? t('english') : t('spanish')}`} className="inline-flex min-w-[62px] shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/90 transition-colors hover:bg-white/10"><span className={locale === 'es' ? 'text-white' : 'text-white/50'}>ES</span><span className="text-white/35">/</span><span className={locale === 'en' ? 'text-white' : 'text-white/50'}>EN</span></a>;
  }
  if (blogPost?.slug.en) {
    const targetHref = targetLocale === 'en' ? `/en/blog/${blogPost.slug.en}` : `/blog/${blogPost.slug.es}`;
    return <a href={targetHref} aria-label={`${t('language')}: ${targetLocale === 'en' ? t('english') : t('spanish')}`} className="inline-flex min-w-[62px] shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/90 transition-colors hover:bg-white/10"><span className={locale === 'es' ? 'text-white' : 'text-white/50'}>ES</span><span className="text-white/35">/</span><span className={locale === 'en' ? 'text-white' : 'text-white/50'}>EN</span></a>;
  }
  if (effectivePathname === '/') {
    return (
      <a
        href={targetLocale === 'en' ? '/en' : '/'}
        aria-label={`${t('language')}: ${targetLocale === 'en' ? t('english') : t('spanish')}`}
        className="inline-flex min-w-[62px] shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/90 transition-colors hover:bg-white/10"
      >
        <span className={locale === 'es' ? 'text-white' : 'text-white/50'}>ES</span>
        <span className="text-white/35">/</span>
        <span className={locale === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
      </a>
    );
  }
  const targetHref = explicitPair
    ? explicitPair[targetLocale]
    : targetLocale === 'en'
    ? ({ '/autonomos': '/en/for/self-employed', '/para/autonomos': '/en/for/self-employed', '/contacto': '/en/contact', '/extranjeros': '/en/foreigners', '/extranjeros/alquileres': '/en/foreigners/rentals', '/seguros': '/en/insurance', '/seguros/salud': '/en/insurance/health', '/seguros/salud-extranjeros': '/en/insurance/health/foreigners', '/internacional': '/en/international', '/internacional/peru': '/en/international/peru', '/internacional/australia': '/en/international/australia', '/internacional/india': '/en/international/india', '/internacional/corea-del-sur': '/en/international/south-korea', '/como-te-ayudamos': '/en/how-we-help', '/sobre-nosotros': '/en/about-us', '/opiniones': '/en/reviews', '/aviso-legal': '/en/legal-notice', '/privacidad': '/en/privacy', '/cookies': '/en/cookies', '/empresas': '/en/business', '/empresas/salud': '/en/business/health-insurance', '/empresas/ciberseguridad': '/en/business/cybersecurity', '/para/familias': '/en/for/families', '/para/jovenes-profesionales': '/en/for/young-professionals', '/para/seniors': '/en/for/seniors', ...productPathnames } as Record<string, string>)[effectivePathname] ?? '/en'
    : ({ '/para/autonomos': '/autonomos', '/contacto': '/contacto', '/extranjeros': '/extranjeros', '/extranjeros/alquileres': '/extranjeros/alquileres', '/seguros': '/seguros', '/seguros/salud': '/seguros/salud', '/seguros/salud-extranjeros': '/seguros/salud-extranjeros', '/internacional': '/internacional', '/internacional/peru': '/internacional/peru', '/internacional/australia': '/internacional/australia', '/internacional/india': '/internacional/india', '/internacional/corea-del-sur': '/internacional/corea-del-sur', '/como-te-ayudamos': '/como-te-ayudamos', '/sobre-nosotros': '/sobre-nosotros', '/opiniones': '/opiniones', '/aviso-legal': '/aviso-legal', '/privacidad': '/privacidad', '/cookies': '/cookies', '/empresas': '/empresas', '/empresas/salud': '/empresas/salud', '/empresas/ciberseguridad': '/empresas/ciberseguridad', '/para/familias': '/para/familias', '/para/jovenes-profesionales': '/para/jovenes-profesionales', '/para/seniors': '/para/seniors', ...Object.fromEntries(Object.keys(productPathnames).map((path) => [path, path])) } as Record<string, string>)[effectivePathname] ?? '/';
  return (
    <a
      href={targetHref}
      aria-label={`${t('language')}: ${targetLocale === 'en' ? t('english') : t('spanish')}`}
      className="inline-flex min-w-[62px] shrink-0 items-center justify-center gap-1 whitespace-nowrap rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/90 transition-colors hover:bg-white/10"
    >
      <span className={locale === 'es' ? 'text-white' : 'text-white/50'}>ES</span>
      <span className="text-white/35">/</span>
      <span className={locale === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
    </a>
  );
}
