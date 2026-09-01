"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, Building2, ChevronDown, Instagram, Menu, Phone, ShieldCheck } from 'lucide-react';
import { buildWhatsAppHref, getSubpagesForProduct, mainNav, products, site } from '@/lib/products';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MouseEvent } from 'react';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { BrandLockup } from './ui/brand-lockup';


import PillNav from './ui/pill-nav';
import { StaggeredMenu } from './ui/staggered-menu';
import IridescenceBackground from './ui/iridescence-background';
import { LanguageSwitcher } from './language-switcher';
import { localizedPath } from '@/i18n/navigation';
import { localizedProductPath, localizedSubpagePath } from '@/lib/product-locales';

export function Header() {
  const [mega, setMega] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const locale = useLocale() as 'es' | 'en';
  const t = useTranslations('common');

  const localeHref = (href: string) => {
    if (locale === 'en' && href.startsWith('/seguros/') && href !== '/seguros/salud-extranjeros') {
      const parts = href.split('/');
      if (parts.length === 3) return localizedProductPath(parts[2], 'en');
      if (parts.length === 4) return localizedSubpagePath(parts[2], parts[3], 'en');
    }
    if (href === '/' || href === '/internacional' || href === '/internacional/peru' || href === '/contacto' || href === '/extranjeros' || href === '/seguros' || href === '/seguros/salud' || href === '/seguros/salud-extranjeros') {
      return localizedPath(locale, href);
    }
    return href;
  };

  const localeLabel = (label: string) => {
    if (locale !== 'en') return label;
    return ({ Inicio: t('home'), Internacional: t('international'), Contacto: t('contact'), Alquileres: 'Rentals', Seguros: 'Insurance', SALUD: 'HEALTH', MASCOTAS: 'PETS', DENTAL: 'DENTAL', ACCIDENTES: 'ACCIDENTS', VIAJE: 'TRAVEL', DECESOS: 'FUNERAL', COMPLETA: 'COMPLETE', 'RESPONSABILIDAD CIVIL': 'LIABILITY', PYMES: 'SMEs', ESTUDIOS: 'STUDIES', Empresas: 'Businesses', 'Cómo te ayudamos': 'How we help', 'Sobre nosotros': 'About us', Blog: 'Blog', Opiniones: 'Reviews', Zonas: 'Areas' } as Record<string, string>)[label] ?? label;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mega menu on outside click
  useEffect(() => {
    if (!mega) return;
    const handleClick = (e: globalThis.MouseEvent) => {
      const target = e.target as Node;
      const panel = document.getElementById('mega-menu');
      const trigger = document.getElementById('mega-trigger');
      if (panel && !panel.contains(target) && trigger && !trigger.contains(target)) {
        setMega(false);
      }
    };
    document.addEventListener('mousedown', handleClick as EventListener);
    return () => document.removeEventListener('mousedown', handleClick as EventListener);
  }, [mega]);

  useEffect(() => {
    if (!businessOpen) return;
    const handleClick = (event: globalThis.MouseEvent) => {
      if (businessRef.current && !businessRef.current.contains(event.target as Node)) {
        setBusinessOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setBusinessOpen(false);
        document.getElementById('business-trigger')?.focus();
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [businessOpen]);

  useEffect(() => {
    if (!mega) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMega(false);
        document.getElementById('mega-trigger')?.focus();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mega]);

  const grouped = useMemo(() => products.map((product) => ({ ...product, children: getSubpagesForProduct(product.slug) })), []);

  const closeAll = () => setMega(false);

  const handleWhatsAppClick = (e: MouseEvent<HTMLAnchorElement>, location: string, href: string) => {
    e.preventDefault();
    trackWhatsAppClick(location);
    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  const whatsappHref = buildWhatsAppHref(locale === 'en' ? 'Hello, I would like a no-obligation consultation to choose insurance.' : 'Hola, quiero una consulta sin compromiso para elegir un seguro.');

  return (
    <>
      <header className={`sticky top-0 z-[100] transition-all ${scrolled ? 'border-b border-white/10 bg-[#002244] text-white backdrop-blur-xl shadow-[0_14px_42px_rgba(0,0,0,0.3)]' : 'border-transparent bg-[#002244]/95 text-white backdrop-blur-md'}`}>
        <div className="container-shell mx-auto max-w-[1760px]">
          <div className="flex items-center justify-between gap-3 py-3 2xl:gap-4 2xl:py-4">
            <BrandLockup variant="light" size="compact" priority href={localeHref('/')} />

            <nav className="hidden min-w-0 items-center gap-0.5 xl:flex">
              <Link
                href="/extranjeros/alquileres"
                className="inline-flex h-[42px] items-center rounded-full border border-white/20 bg-white/10 px-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/15 hover:text-white"
              >
                {localeLabel('Alquileres')}
              </Link>

              {/* Mega Menu trigger */}
              <div className="relative z-[110]">
                <button
                  id="mega-trigger"
                  onClick={() => setMega((v) => !v)}
                  className="group relative px-3 py-2"
                  aria-expanded={mega}
                  aria-controls="mega-menu"
                >
                  <div className="flex items-center gap-1.5 font-semibold text-white/90 hover:text-white transition-colors text-base">
                    {localeLabel('Seguros')} <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mega ? 'rotate-180' : ''}`} />
                  </div>
                  {/* CSS underline hover */}
                  <span className="absolute bottom-2 left-6 right-6 h-[2px] origin-center scale-x-0 group-hover:scale-x-100 bg-[var(--blue)] transition-transform duration-200" />
                </button>

              </div>

              <div className="flex h-[42px] items-center gap-1">
                <div
                  ref={businessRef}
                  className="relative h-full"
                  onMouseEnter={() => setBusinessOpen(true)}
                  onMouseLeave={() => setBusinessOpen(false)}
                >
                  <button
                    id="business-trigger"
                    type="button"
                    className={`inline-flex h-[42px] items-center gap-1 rounded-full px-4 text-sm font-semibold text-white/90 transition-colors hover:bg-white/15 hover:text-white ${pathname.startsWith('/empresas') ? 'bg-white/20 text-white' : ''}`}
                    aria-expanded={businessOpen}
                    aria-controls="business-menu"
                    onClick={() => setBusinessOpen((open) => !open)}
                    onFocus={() => setBusinessOpen(true)}
                  >
                    {localeLabel('Empresas')} <ChevronDown className={`h-4 w-4 transition-transform ${businessOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div
                    id="business-menu"
                    role="menu"
                    aria-label={locale === 'en' ? 'Business solutions' : 'Soluciones para empresas'}
                    className={`absolute right-0 top-[calc(100%+10px)] z-[220] w-[min(500px,calc(100vw-2rem))] rounded-[22px] border border-[var(--border)] bg-white p-3 text-left shadow-[0_18px_48px_rgba(18,59,104,0.2)] transition-all duration-150 ${businessOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-1 opacity-0'}`}
                  >
                    <p className="px-3 pb-2 pt-1 text-[11px] font-bold tracking-[0.16em] text-[#2eaaa0]">{locale === 'en' ? 'BUSINESS SOLUTIONS' : 'SOLUCIONES PARA EMPRESAS'}</p>
                    <Link href="/empresas/salud" role="menuitem" onClick={() => setBusinessOpen(false)} className="group flex items-center gap-3 rounded-[16px] px-3 py-3 transition-colors hover:bg-[#f1faf8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]/40">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#e8f7f4] text-[var(--blue)]"><Building2 className="h-5 w-5" aria-hidden="true" /></span>
                      <span className="min-w-0 flex-1"><span className="block text-[11px] font-bold tracking-[0.13em] text-[#2eaaa0]">{locale === 'en' ? 'HEALTH FOR BUSINESSES' : 'SALUD PARA EMPRESAS'}</span><span className="mt-0.5 block text-sm text-[var(--blue-deep)]">{locale === 'en' ? 'Health cover for teams and self-employed professionals' : 'Cobertura médica para equipos y autónomos'}</span></span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[var(--blue)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                    <Link href="/empresas/ciberseguridad" role="menuitem" onClick={() => setBusinessOpen(false)} className="group flex items-center gap-3 rounded-[16px] px-3 py-3 transition-colors hover:bg-[#edf6f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]/40">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#eaf2fb] text-[var(--blue)]"><ShieldCheck className="h-5 w-5" aria-hidden="true" /></span>
                      <span className="min-w-0 flex-1"><span className="block text-[11px] font-bold tracking-[0.13em] text-[#0f5e9c]">{locale === 'en' ? 'CYBERSECURITY' : 'CIBERSEGURIDAD'}</span><span className="mt-0.5 block text-sm text-[var(--blue-deep)]">{locale === 'en' ? 'Continuity, response and protection from digital incidents' : 'Continuidad, respuesta y protección ante incidentes digitales'}</span></span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[var(--blue)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                    <Link href="/empresas" role="menuitem" onClick={() => setBusinessOpen(false)} className="mt-1 flex items-center justify-between rounded-[14px] border-t border-[var(--border)] px-3 pb-1 pt-3 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]/40">
                      {locale === 'en' ? 'View all business solutions' : 'Ver todas las soluciones para empresas'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
                  <PillNav
                    items={[
                      ...mainNav.slice(2).filter(item => item.label !== 'Empresas').map(item => ({
                    link: localeHref(item.href),
                    label: localeLabel(item.label),
                    href: localeHref(item.href)
                      }))
                    ]}
                  baseColor="#002244"
                  pillColor="rgba(255,255,255,0.15)"
                  pillTextColor="white"
                  hoveredPillTextColor="white"
                  initialLoadAnimation={false}
                  activeHref={pathname.startsWith('/empresas') ? '/empresas' : pathname}
                />
              </div>
            </nav>

            <div className="hidden shrink-0 items-center justify-end gap-1.5 xl:flex">
              <LanguageSwitcher />
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-1.5 px-3 py-2.5 text-white/90
                           text-sm font-semibold rounded-[14px] border border-white/20
                           hover:bg-white/10 transition-colors whitespace-nowrap"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={whatsappHref}
                onClick={(e) => handleWhatsAppClick(e, 'nav-header', whatsappHref)}
                className="btn-whatsapp !text-sm !px-4 !py-2.5 shadow-[0_4px_14px_rgba(18,140,126,0.4)] hover:shadow-[0_6px_20px_rgba(18,140,126,0.6)]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center text-white/95
                           hover:bg-white/10 rounded-[14px]
                           transition-colors"
                aria-label={locale === 'en' ? 'Valentín Protección Integral on Instagram' : 'Instagram de Valentín Protección Integral'}
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            {/* TODO: FIX 1B - StaggeredMenu no acepta props isOpen/onClose aún.
                Cuando se actualice el componente, añadir:
                const [mobileOpen, setMobileOpen] = useState(false);
                y pasar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} al StaggeredMenu
            */}
            <div className="flex items-center gap-2 xl:hidden">
            <LanguageSwitcher />
            <button
              className="flex items-center gap-2 text-white/90 hover:text-white
                         px-4 py-2.5 rounded-[14px] text-sm hover:bg-white/10
                         transition-colors font-semibold border border-white/20 shrink-0"
              onClick={() => document.querySelector<HTMLButtonElement>('.sm-toggle')?.click()}
              aria-label={locale === 'en' ? 'Open menu' : 'Abrir menú'}
            >
              <Menu className="h-5 w-5" /> {locale === 'en' ? 'Menu' : 'Menú'}
            </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mega menu — fuera del header para escapar backdrop-blur stacking context */}
      <div
        id="mega-menu"
        className={`fixed left-1/2 -translate-x-1/2 top-[80px] w-[1180px] max-w-[calc(100vw-2rem)] rounded-[30px] border border-[var(--border)] bg-white/95 p-6 shadow-[0_24px_72px_rgba(18,59,104,0.25)] backdrop-blur-xl z-[200]
          transition-all duration-200 origin-top
          ${mega ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}
        ref={megaRef}
        aria-hidden={!mega}
        inert={!mega}
      >
        <div className="relative z-10 grid gap-5 lg:grid-cols-[300px_1fr]">
          <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(15,94,156,0.06),rgba(123,198,126,0.08))] p-5">
            <p className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">{locale === 'en' ? 'We help you choose with confidence' : 'Te ayudamos a elegir con claridad'}</p>
            <p className="mt-2 text-base leading-8 text-[var(--muted)]">
              {locale === 'en' ? 'Open the product that interests you and, when useful, explore it by profile or plan type.' : 'Accede al producto que te interesa y, cuando tenga sentido, profundiza por perfil o modalidad.'}
            </p>
            <div className="mt-5 grid gap-3">
              <a href={whatsappHref} onClick={(e) => handleWhatsAppClick(e, 'nav-mega-menu', whatsappHref)} className="btn-whatsapp !w-full !justify-center"><WhatsAppIcon className="h-4 w-4" /> {locale === 'en' ? 'No-obligation consultation' : 'Consulta sin compromiso'}</a>
              <a href={`tel:${site.phoneHref}`} className="btn-ghost !w-full !justify-center"><Phone className="h-4 w-4" /> {site.phone}</a>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 content-start">
            {/* Extranjeros card destacada */}
            <div className="group col-span-full flex flex-col justify-between rounded-[16px] border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-4 transition-all hover:border-blue-400 hover:shadow-lg hover:-translate-y-1">
              <Link href={localeHref('/extranjeros')} onClick={closeAll}>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-base font-bold tracking-tight text-blue-700 group-hover:text-blue-600">
                    {locale === 'en' ? 'Foreigners' : 'Extranjeros'}
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <ChevronDown className="h-3 w-3 -rotate-90" />
                  </div>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {locale === 'en' ? 'Health insurance for visas, NIE, TIE, studies and residence.' : 'Seguro médico para visado, NIE, TIE, estudios y residencia.'}
                </p>
              </Link>
              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-blue-100 pt-2">
                <div className="flex flex-wrap gap-1">
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600">{locale === 'en' ? 'Studies' : 'Estudios'}</span>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600">{locale === 'en' ? 'Residence' : 'Residencia'}</span>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-600">{locale === 'en' ? 'Family' : 'Familia'}</span>
                </div>
                <Link
                  href="/extranjeros/alquileres"
                  className="text-[11px] font-bold text-blue-600 underline decoration-blue-300 underline-offset-2 hover:text-blue-700"
                  onClick={closeAll}
                >
                  {locale === 'en' ? 'Rentals in Madrid →' : 'Alquileres en Madrid →'}
                </Link>
              </div>
            </div>
            {grouped.map((item) => (
              <Link
                key={item.slug}
                  href={item.slug === 'salud' ? localeHref('/seguros/salud') : localizedProductPath(item.slug, locale === 'en' ? 'en' : 'es')}
                className="group flex flex-col justify-between rounded-[16px] border border-[var(--border)] bg-white p-3 transition-all hover:border-[var(--blue)]/30 hover:shadow-lg hover:-translate-y-1"
                onClick={closeAll}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-base font-bold tracking-tight text-[var(--blue-deep)] group-hover:text-[var(--blue)]">
                      {localeLabel(item.label)}
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--blue)] transition-colors group-hover:bg-[var(--blue)] group-hover:text-white">
                      <ChevronDown className="h-3 w-3 -rotate-90" />
                    </div>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)] line-clamp-2">{locale === 'en' ? ({ SALUD: 'Private health cover for individuals and families.', MASCOTAS: 'Protection and support for your pet.', DENTAL: 'Practical dental cover for everyday care.', ACCIDENTES: 'Support after an accidental injury.', VIAJE: 'Cover for unexpected events while travelling.', DECESOS: 'Support for families when it matters most.' } as Record<string, string>)[item.label] ?? item.summary : item.summary}</p>
                </div>

                {item.children.length ? (
                  <div className="mt-2 flex flex-wrap gap-1 border-t border-[var(--border)] pt-2">
                    {item.children.slice(0, 2).map((child) => (
                      <span key={child.slug} className="rounded bg-[var(--bg)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--blue)]">
                        {locale === 'en' ? ({ FAMILIAS: 'FAMILIES', SENIOR: 'SENIORS', EXTRANJEROS: 'FOREIGNERS', COMPLETA: 'COMPLETE', 'RESPONSABILIDAD CIVIL': 'LIABILITY', PYMES: 'SMEs', ESTUDIOS: 'STUDIES' } as Record<string, string>)[child.label] ?? child.label : child.label}
                      </span>
                    ))}
                    {item.children.length > 2 && (
                      <span className="text-[10px] font-bold text-[var(--blue)]">+{item.children.length - 2}</span>
                    )}
                  </div>
                ) : null}
              </Link>
            ))}
            <div className="col-span-full mt-2 rounded-[18px] border border-[rgba(15,94,156,0.16)] bg-[linear-gradient(100deg,rgba(15,94,156,0.05),rgba(46,170,160,0.08))] p-4">
              <p className="text-[11px] font-bold tracking-[0.16em] text-[#2eaaa0]">{locale === 'en' ? 'FOR BUSINESSES' : 'PARA EMPRESAS'}</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <Link href="/empresas/salud" onClick={closeAll} className="group flex items-center gap-3 rounded-[14px] bg-white/80 px-3 py-2.5 transition hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]/40">
                  <Building2 className="h-5 w-5 shrink-0 text-[var(--blue)]" aria-hidden="true" />
                  <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-[var(--blue-deep)]">{locale === 'en' ? 'HEALTH FOR BUSINESSES' : 'SALUD PARA EMPRESAS'}</span><span className="block text-xs text-[var(--muted)]">{locale === 'en' ? 'Health cover for teams and self-employed professionals' : 'Cobertura médica para equipos y autónomos'}</span></span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--blue)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link href="/empresas/ciberseguridad" onClick={closeAll} className="group flex items-center gap-3 rounded-[14px] bg-white/80 px-3 py-2.5 transition hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)]/40">
                  <ShieldCheck className="h-5 w-5 shrink-0 text-[var(--blue)]" aria-hidden="true" />
                  <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-[var(--blue-deep)]">{locale === 'en' ? 'CYBERSECURITY' : 'CIBERSEGURIDAD'}</span><span className="block text-xs text-[var(--muted)]">{locale === 'en' ? 'Continuity, response and protection from digital incidents' : 'Continuidad, respuesta y protección ante incidentes digitales'}</span></span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--blue)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
        StaggeredMenu exists here globally OUTSIDE the header `<header>`.
        This is crucial so its `.fixed` layout escapes the `backdrop-blur` containing block limitation in Safari/Chrome.
      */}
      <StaggeredMenu
        isFixed={true}
        position="right"
        brand={<BrandLockup variant="dark" size="compact" href={localeHref('/')} />}
        colors={['#002244', '#0F5E9C']}
        accentColor="#0F5E9C"
        items={[
          { label: localeLabel('Inicio'), ariaLabel: localeLabel('Inicio'), link: localeHref('/') },
          { label: localeLabel('Alquileres'), ariaLabel: localeLabel('Alquileres'), link: '/extranjeros/alquileres' },
          { label: locale === 'en' ? 'Foreigners' : 'Extranjeros', ariaLabel: locale === 'en' ? 'Foreigners' : 'Extranjeros', link: localeHref('/extranjeros') },
          ...grouped.map(item => ({ label: localeLabel(item.label), ariaLabel: localeLabel(item.label), link: item.slug === 'salud' ? localeHref('/seguros/salud') : localizedProductPath(item.slug, locale === 'en' ? 'en' : 'es') })),
          ...mainNav.slice(2).map(item => item.label === 'Empresas'
            ? {
                label: locale === 'en' ? 'Businesses' : 'Empresas',
                ariaLabel: locale === 'en' ? 'Business solutions' : 'Soluciones para empresas',
                link: '/empresas',
                children: [
                  { label: locale === 'en' ? 'All solutions' : 'Todas las soluciones', ariaLabel: locale === 'en' ? 'All business solutions' : 'Todas las soluciones para empresas', link: '/empresas' },
                  { label: locale === 'en' ? 'Health for businesses' : 'Salud para empresas', ariaLabel: locale === 'en' ? 'Health for businesses' : 'Salud para empresas', link: '/empresas/salud' },
                  { label: locale === 'en' ? 'Cybersecurity' : 'Ciberseguridad', ariaLabel: locale === 'en' ? 'Cybersecurity for businesses' : 'Ciberseguridad para empresas', link: '/empresas/ciberseguridad' },
                ],
              }
            : { label: localeLabel(item.label), ariaLabel: localeLabel(item.label), link: localeHref(item.href) })
        ]}
        socialItems={[
          { label: 'Instagram', link: site.instagram },
          { label: 'WhatsApp', link: buildWhatsAppHref(locale === 'en' ? 'Hello, I would like a no-obligation consultation to choose insurance.' : 'Hola, quiero una consulta sin compromiso para elegir un seguro.') }
        ]}
        socialTitle={locale === 'en' ? 'Contact' : 'Contacto'}
      />
    </>
  );
}
