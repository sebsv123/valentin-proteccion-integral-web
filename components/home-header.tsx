"use client";

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronDown, Instagram, Menu, Phone, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { trackWhatsAppClick } from '@/lib/analytics';
import { buildWhatsAppHref, site, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/products';
import { localizedProductPath } from '@/lib/product-locales';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { VpiBrandLockup } from '@/components/vpi-brand-lockup';

type MenuName = 'solutions' | 'resources' | null;

export function HomeHeader() {
  const locale = useLocale() as 'es' | 'en';
  const isEnglish = locale === 'en';
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuName>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const productHref = (slug: string) => localizedProductPath(slug, locale);
  const route = (es: string, en: string) => (isEnglish ? en : es);
  const whatsappHref = buildWhatsAppHref(isEnglish ? 'Hello, I would like help choosing insurance.' : WHATSAPP_MESSAGE_DEFAULT);

  const solutions = [
    { label: isEnglish ? 'Rentals' : 'Alquileres', href: route('/extranjeros/alquileres', '/en/foreigners/rentals') },
    { label: isEnglish ? 'Health' : 'Salud', href: route('/seguros/salud', '/en/insurance/health') },
    { label: isEnglish ? 'Pets' : 'Mascotas', href: productHref('mascotas') },
    { label: 'Dental', href: productHref('dental') },
    { label: isEnglish ? 'Accidents' : 'Accidentes', href: productHref('accidentes') },
    { label: isEnglish ? 'Travel' : 'Viaje', href: productHref('viaje') },
    { label: isEnglish ? 'Funeral' : 'Decesos', href: productHref('decesos') },
  ];

  const resources = [
    { label: isEnglish ? 'About us' : 'Sobre nosotros', href: route('/sobre-nosotros', '/en/about-us') },
    { label: 'Blog', href: route('/blog', '/en/blog') },
    { label: isEnglish ? 'Reviews' : 'Opiniones', href: route('/opiniones', '/en/reviews') },
    { label: isEnglish ? 'Areas' : 'Zonas', href: '/zonas' },
    { label: isEnglish ? 'Contact' : 'Contacto', href: route('/contacto', '/en/contact') },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  const trackWhatsApp = () => trackWhatsAppClick('home-header');

  return (
    <header
      ref={headerRef}
      data-header-state={scrolled ? 'scrolled' : 'top'}
      className={`${scrolled ? 'fixed inset-x-0 top-0' : 'absolute inset-x-0 top-0'} z-[150] h-[72px] border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 sm:h-[78px] ${
        scrolled
          ? 'border-[#0b2e6b]/[0.07] bg-[rgba(248,252,255,0.78)] shadow-[0_8px_28px_rgba(11,46,107,0.06)] backdrop-blur-md'
          : 'border-transparent bg-transparent shadow-none'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1510px] items-center justify-between gap-4 px-4 sm:px-6 xl:px-8">
        <VpiBrandLockup href={isEnglish ? '/en' : '/'} size="header" priority />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label={isEnglish ? 'Main navigation' : 'Navegación principal'}>
          <div className="relative">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-[13px] font-semibold text-[#0b2e6b] transition-colors hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2e6b]/35"
              aria-expanded={openMenu === 'solutions'}
              aria-controls="home-solutions-menu"
              onClick={() => setOpenMenu((current) => current === 'solutions' ? null : 'solutions')}
            >
              {isEnglish ? 'Solutions' : 'Soluciones'} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === 'solutions' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <div id="home-solutions-menu" className={`absolute left-0 top-[calc(100%+8px)] w-56 rounded-2xl border border-[#0b2e6b]/10 bg-white/95 p-2 shadow-[0_18px_50px_rgba(11,46,107,0.14)] backdrop-blur-lg transition ${openMenu === 'solutions' ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
              {solutions.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpenMenu(null)} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-[#0b2e6b] hover:bg-[#edf7ff] focus-visible:bg-[#edf7ff] focus-visible:outline-none">{item.label}</Link>)}
            </div>
          </div>
          <Link href={route('/extranjeros', '/en/foreigners')} className="inline-flex min-h-11 items-center rounded-full px-3 text-[13px] font-semibold text-[#0b2e6b] hover:bg-white/55">{isEnglish ? 'Foreigners' : 'Extranjeros'}</Link>
          <Link href={route('/empresas', '/en/business')} className="inline-flex min-h-11 items-center rounded-full px-3 text-[13px] font-semibold text-[#0b2e6b] hover:bg-white/55">{isEnglish ? 'Businesses & Self-employed' : 'Empresas y Autónomos'}</Link>
          <Link href={route('/internacional', '/en/international')} className="inline-flex min-h-11 items-center rounded-full px-3 text-[13px] font-semibold text-[#0b2e6b] hover:bg-white/55">{isEnglish ? 'International' : 'Internacional'}</Link>
          <Link href={route('/como-te-ayudamos', '/en/how-we-help')} className="inline-flex min-h-11 items-center rounded-full px-3 text-[13px] font-semibold text-[#0b2e6b] hover:bg-white/55">{isEnglish ? 'How we help' : 'Cómo te ayudamos'}</Link>
          <div className="relative">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-[13px] font-semibold text-[#0b2e6b] transition-colors hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2e6b]/35"
              aria-expanded={openMenu === 'resources'}
              aria-controls="home-resources-menu"
              onClick={() => setOpenMenu((current) => current === 'resources' ? null : 'resources')}
            >
              {isEnglish ? 'Resources' : 'Recursos'} <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === 'resources' ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            <div id="home-resources-menu" className={`absolute right-0 top-[calc(100%+8px)] w-56 rounded-2xl border border-[#0b2e6b]/10 bg-white/95 p-2 shadow-[0_18px_50px_rgba(11,46,107,0.14)] backdrop-blur-lg transition ${openMenu === 'resources' ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
              {resources.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpenMenu(null)} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-[#0b2e6b] hover:bg-[#edf7ff] focus-visible:bg-[#edf7ff] focus-visible:outline-none">{item.label}</Link>)}
            </div>
          </div>
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
          <a href={isEnglish ? '/' : '/en'} aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'} className="inline-flex min-h-10 items-center rounded-full px-2.5 text-xs font-bold text-[#0b2e6b] hover:bg-white/55">ES / EN</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 text-xs font-bold text-[#0b2e6b] transition-colors hover:bg-white/55" aria-label="WhatsApp">
            <WhatsAppIcon className="h-4 w-4 text-[#128c7e]" /> WhatsApp
          </a>
          <Link href={route('/contacto', '/en/contact')} className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1268c4] px-4 text-center text-xs font-bold text-white shadow-[0_8px_22px_rgba(18,104,196,0.2)] transition hover:bg-[#0e58a7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1268c4] focus-visible:ring-offset-2">
            {isEnglish ? 'Tell us what you need' : 'Cuéntanos qué necesitas'}
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2 xl:hidden">
          <a href={isEnglish ? '/' : '/en'} aria-label={isEnglish ? 'Cambiar a español' : 'Switch to English'} className="inline-flex min-h-10 items-center rounded-full px-2 text-[11px] font-bold text-[#0b2e6b] sm:px-2.5 sm:text-xs">ES / EN</a>
          <button type="button" onClick={() => setMobileOpen(true)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#0b2e6b]/15 text-[#0b2e6b] hover:bg-white/55" aria-label={isEnglish ? 'Open menu' : 'Abrir menú'} aria-expanded={mobileOpen} aria-controls="home-mobile-menu">
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id="home-mobile-menu"
        className={`fixed inset-0 z-[220] overflow-hidden xl:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
      >
        <div className={`absolute inset-0 bg-white transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex h-full flex-col overflow-y-auto px-5 pb-8 pt-4 sm:px-8">
          <div className="flex items-center justify-between">
            <VpiBrandLockup href={isEnglish ? '/en' : '/'} size="header" priority />
            <button type="button" onClick={() => setMobileOpen(false)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#0b2e6b]/15 text-[#0b2e6b]" aria-label={isEnglish ? 'Close menu' : 'Cerrar menú'}><X className="h-5 w-5" /></button>
          </div>
          <nav className="mt-8 grid gap-1" aria-label={isEnglish ? 'Mobile navigation' : 'Navegación móvil'}>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1268c4]">{isEnglish ? 'Solutions' : 'Soluciones'}</p>
            {solutions.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl py-2 text-lg font-semibold text-[#0b2e6b]">{item.label}</Link>)}
            <div className="my-3 h-px bg-[#0b2e6b]/10" />
            <Link href={route('/extranjeros', '/en/foreigners')} onClick={() => setMobileOpen(false)} className="rounded-xl py-2 text-lg font-semibold text-[#0b2e6b]">{isEnglish ? 'Foreigners' : 'Extranjeros'}</Link>
            <Link href={route('/empresas', '/en/business')} onClick={() => setMobileOpen(false)} className="rounded-xl py-2 text-lg font-semibold text-[#0b2e6b]">{isEnglish ? 'Businesses & Self-employed' : 'Empresas y Autónomos'}</Link>
            <Link href={route('/internacional', '/en/international')} onClick={() => setMobileOpen(false)} className="rounded-xl py-2 text-lg font-semibold text-[#0b2e6b]">{isEnglish ? 'International' : 'Internacional'}</Link>
            <Link href={route('/como-te-ayudamos', '/en/how-we-help')} onClick={() => setMobileOpen(false)} className="rounded-xl py-2 text-lg font-semibold text-[#0b2e6b]">{isEnglish ? 'How we help' : 'Cómo te ayudamos'}</Link>
            <div className="my-3 h-px bg-[#0b2e6b]/10" />
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1268c4]">{isEnglish ? 'Resources' : 'Recursos'}</p>
            {resources.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl py-2 text-lg font-semibold text-[#0b2e6b]">{item.label}</Link>)}
          </nav>
            <div className="mt-8 grid gap-3 border-t border-[#0b2e6b]/10 pt-6">
              <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#128c7e]/25 font-bold text-[#0b2e6b]"><WhatsAppIcon className="h-5 w-5 text-[#128c7e]" /> WhatsApp</a>
              <a href={`tel:${site.phoneHref}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0b2e6b]/15 font-bold text-[#0b2e6b]"><Phone className="h-4 w-4" /> {site.phone}</a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0b2e6b]/15 font-bold text-[#0b2e6b]"><Instagram className="h-4 w-4" /> Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
