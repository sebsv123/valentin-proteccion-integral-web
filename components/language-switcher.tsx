'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';
import { productPathnames } from '@/lib/product-locales';

const supportedPathnames = new Set(['/', '/autonomos', '/contacto', '/extranjeros', '/extranjeros/alquileres', '/seguros', '/seguros/salud', '/seguros/salud-extranjeros', '/internacional', '/internacional/peru', '/internacional/australia', '/internacional/india', '/internacional/corea-del-sur', '/como-te-ayudamos', '/sobre-nosotros', '/opiniones', '/aviso-legal', '/privacidad', '/cookies', '/empresas', '/empresas/salud', '/empresas/ciberseguridad', '/para/autonomos', '/para/familias', '/para/jovenes-profesionales', '/para/seniors', ...Object.keys(productPathnames)]);

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('common');
  const supported = supportedPathnames.has(pathname);

  if (!supported) {
    return <span className="inline-flex min-w-[62px] shrink-0 justify-center whitespace-nowrap text-xs font-semibold text-white/45" title="English version not available for this page" aria-disabled="true">ES / EN</span>;
  }

  const targetLocale = locale === 'es' ? 'en' : 'es';
  if (pathname === '/') {
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
  const targetHref = targetLocale === 'en'
    ? ({ '/autonomos': '/en/for/self-employed', '/para/autonomos': '/en/for/self-employed', '/contacto': '/en/contact', '/extranjeros': '/en/foreigners', '/extranjeros/alquileres': '/en/foreigners/rentals', '/seguros': '/en/insurance', '/seguros/salud': '/en/insurance/health', '/seguros/salud-extranjeros': '/en/insurance/health/foreigners', '/internacional': '/en/international', '/internacional/peru': '/en/international/peru', '/internacional/australia': '/en/international/australia', '/internacional/india': '/en/international/india', '/internacional/corea-del-sur': '/en/international/south-korea', '/como-te-ayudamos': '/en/how-we-help', '/sobre-nosotros': '/en/about-us', '/opiniones': '/en/reviews', '/aviso-legal': '/en/legal-notice', '/privacidad': '/en/privacy', '/cookies': '/en/cookies', '/empresas': '/en/business', '/empresas/salud': '/en/business/health-insurance', '/empresas/ciberseguridad': '/en/business/cybersecurity', '/para/familias': '/en/for/families', '/para/jovenes-profesionales': '/en/for/young-professionals', '/para/seniors': '/en/for/seniors', ...productPathnames } as Record<string, string>)[pathname] ?? '/en'
    : ({ '/para/autonomos': '/autonomos', '/contacto': '/contacto', '/extranjeros': '/extranjeros', '/extranjeros/alquileres': '/extranjeros/alquileres', '/seguros': '/seguros', '/seguros/salud': '/seguros/salud', '/seguros/salud-extranjeros': '/seguros/salud-extranjeros', '/internacional': '/internacional', '/internacional/peru': '/internacional/peru', '/internacional/australia': '/internacional/australia', '/internacional/india': '/internacional/india', '/internacional/corea-del-sur': '/internacional/corea-del-sur', '/como-te-ayudamos': '/como-te-ayudamos', '/sobre-nosotros': '/sobre-nosotros', '/opiniones': '/opiniones', '/aviso-legal': '/aviso-legal', '/privacidad': '/privacidad', '/cookies': '/cookies', '/empresas': '/empresas', '/empresas/salud': '/empresas/salud', '/empresas/ciberseguridad': '/empresas/ciberseguridad', '/para/familias': '/para/familias', '/para/jovenes-profesionales': '/para/jovenes-profesionales', '/para/seniors': '/para/seniors', ...Object.fromEntries(Object.keys(productPathnames).map((path) => [path, path])) } as Record<string, string>)[pathname] ?? '/';
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
