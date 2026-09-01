'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from '@/i18n/navigation';

const supportedPathnames = new Set(['/', '/internacional', '/internacional/peru', '/internacional/australia', '/internacional/india', '/internacional/corea-del-sur']);

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations('common');
  const supported = supportedPathnames.has(pathname);

  if (!supported) {
    return <span className="text-xs font-semibold text-white/45" title="English version not available for this page">ES / EN</span>;
  }

  const targetLocale = locale === 'es' ? 'en' : 'es';
  if (pathname === '/') {
    return (
      <a
        href={targetLocale === 'en' ? '/en' : '/'}
        aria-label={`${t('language')}: ${targetLocale === 'en' ? t('english') : t('spanish')}`}
        className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/90 transition-colors hover:bg-white/10"
      >
        <span className={locale === 'es' ? 'text-white' : 'text-white/50'}>ES</span>
        <span className="text-white/35">/</span>
        <span className={locale === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
      </a>
    );
  }
  const targetHref = targetLocale === 'en'
    ? ({ '/internacional': '/en/international', '/internacional/peru': '/en/international/peru', '/internacional/australia': '/en/international/australia', '/internacional/india': '/en/international/india', '/internacional/corea-del-sur': '/en/international/south-korea' } as Record<string, string>)[pathname] ?? '/en'
    : ({ '/internacional': '/internacional', '/internacional/peru': '/internacional/peru', '/internacional/australia': '/internacional/australia', '/internacional/india': '/internacional/india', '/internacional/corea-del-sur': '/internacional/corea-del-sur' } as Record<string, string>)[pathname] ?? '/';
  return (
    <a
      href={targetHref}
      aria-label={`${t('language')}: ${targetLocale === 'en' ? t('english') : t('spanish')}`}
      className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-2 text-xs font-bold text-white/90 transition-colors hover:bg-white/10"
    >
      <span className={locale === 'es' ? 'text-white' : 'text-white/50'}>ES</span>
      <span className="text-white/35">/</span>
      <span className={locale === 'en' ? 'text-white' : 'text-white/50'}>EN</span>
    </a>
  );
}
