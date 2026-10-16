"use client";

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Instagram, Phone, X } from 'lucide-react';
import { site, buildWhatsAppHref, WHATSAPP_MESSAGE_DEFAULT } from '@/lib/products';
import { trackWhatsAppClick } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { VpiBrandLockup } from '@/components/vpi-brand-lockup';
import { LanguageSwitcher } from '@/components/language-switcher';
import { getVpiNavigation, getVpiRoute, type VpiNavItem } from '@/components/vpi-navigation-config';

export function VpiDesktopNavigation({ locale }: { locale: 'es' | 'en' }) {
  const [open, setOpen] = useState<'solutions' | 'resources' | 'business' | null>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpen(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(null);
        navRef.current?.querySelector<HTMLButtonElement>('button[aria-expanded="true"]')?.focus();
      }
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);
  const nav = getVpiNavigation(locale);
  const isEnglish = locale === 'en';
  const dropdown = (key: 'solutions' | 'resources', label: string, items: VpiNavItem[]) => (
    <div className="relative shrink-0">
      <button type="button" onClick={() => setOpen((current) => current === key ? null : key)}
        className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-full px-3 text-[13px] font-semibold text-current transition-colors hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/35"
        aria-expanded={open === key} aria-controls={`vpi-${key}-menu`}>
        {label}<ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === key ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div id={`vpi-${key}-menu`} className={`absolute left-0 top-[calc(100%+8px)] z-[var(--z-site-header-dropdown,180)] max-h-[min(70vh,34rem)] w-64 overflow-y-auto rounded-2xl border border-[#0b2e6b]/10 bg-white/95 p-2 text-[#0b2e6b] shadow-[0_18px_50px_rgba(11,46,107,0.14)] backdrop-blur-lg transition ${open === key ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
        {items.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(null)} className="block rounded-xl px-3 py-2 text-[13px] font-semibold hover:bg-[#edf7ff] focus-visible:bg-[#edf7ff] focus-visible:outline-none">{item.label}</Link>)}
      </div>
    </div>
  );
  return <nav ref={navRef} className="flex min-w-0 items-center justify-center gap-0.5 whitespace-nowrap" aria-label={isEnglish ? 'Main navigation' : 'Navegación principal'}>
    {dropdown('solutions', isEnglish ? 'Solutions' : 'Soluciones', [...nav.solutions, ...nav.solutionDetails])}
    {nav.primary.map((item) => item.label === (isEnglish ? 'Businesses & Self-employed' : 'Empresas y Autónomos') ? (
      <div key={item.href} className="relative flex shrink-0 items-center">
        <Link href={item.href} className="inline-flex min-h-11 items-center whitespace-nowrap rounded-l-full pl-3 pr-1 text-[13px] font-semibold text-current hover:bg-white/55">{item.label}</Link>
        <button type="button" onClick={() => setOpen((current) => current === 'business' ? null : 'business')} aria-label={isEnglish ? 'More business solutions' : 'Más soluciones para empresas'} aria-expanded={open === 'business'} aria-controls="vpi-business-menu" className="inline-flex min-h-11 items-center rounded-r-full pl-1 pr-2 text-current hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/35"><ChevronDown className={`h-3.5 w-3.5 transition-transform ${open === 'business' ? 'rotate-180' : ''}`} aria-hidden="true" /></button>
        <div id="vpi-business-menu" className={`absolute left-0 top-[calc(100%+8px)] z-[var(--z-site-header-dropdown,180)] w-72 rounded-2xl border border-[#0b2e6b]/10 bg-white/95 p-2 text-[#0b2e6b] shadow-[0_18px_50px_rgba(11,46,107,0.14)] backdrop-blur-lg transition ${open === 'business' ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}>
          <Link href={item.href} onClick={() => setOpen(null)} className="block rounded-xl px-3 py-2 text-[13px] font-semibold hover:bg-[#edf7ff]">{item.label}</Link>
          {nav.businessSolutions.map((solution) => <Link key={solution.href} href={solution.href} onClick={() => setOpen(null)} className="block rounded-xl px-3 py-2 text-[13px] font-semibold hover:bg-[#edf7ff]">{solution.label}</Link>)}
        </div>
      </div>
    ) : <Link key={item.href} href={item.href} className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full px-3 text-[13px] font-semibold text-current hover:bg-white/55">{item.label}</Link>)}
    {dropdown('resources', isEnglish ? 'Resources' : 'Recursos', nav.resources)}
  </nav>;
}

export function VpiHeaderActions({ locale, trackingLocation }: { locale: 'es' | 'en'; trackingLocation: string }) {
  const isEnglish = locale === 'en';
  const whatsappHref = buildWhatsAppHref(isEnglish ? 'Hello, I would like help choosing insurance.' : WHATSAPP_MESSAGE_DEFAULT);
  return <div className="flex items-center justify-end gap-1 whitespace-nowrap">
    <LanguageSwitcher tone="dark" appearance="plain" />
    <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick(trackingLocation)} className="inline-flex min-h-10 items-center gap-1 rounded-full px-2 text-[11px] font-bold text-current hover:bg-white/55" aria-label="WhatsApp"><WhatsAppIcon className="h-4 w-4 text-[#128c7e]" />WhatsApp</a>
    <Link href={getVpiRoute(locale, 'contact')} className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1268c4] px-3 text-center text-[11px] font-bold text-white shadow-[0_8px_22px_rgba(18,104,196,0.2)] transition hover:bg-[#0e58a7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1268c4] focus-visible:ring-offset-2">{isEnglish ? 'Tell us what you need' : 'Cuéntanos qué necesitas'}</Link>
  </div>;
}

export function VpiMobileNavigation({ id, open, locale, onClose, trackingLocation }: { id: string; open: boolean; locale: 'es' | 'en'; onClose: () => void; trackingLocation: string }) {
  const isEnglish = locale === 'en';
  const nav = getVpiNavigation(locale);
  const whatsappHref = buildWhatsAppHref(isEnglish ? 'Hello, I would like help choosing insurance.' : WHATSAPP_MESSAGE_DEFAULT);
  const linkClass = 'rounded-xl py-2 text-lg font-semibold text-[#0b2e6b] hover:text-[#1268c4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1268c4]/40';
  const sectionTitle = 'mb-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1268c4]';
  return <div id={id} role="dialog" aria-modal="true" aria-label={isEnglish ? 'Navigation menu' : 'Menú de navegación'} aria-hidden={!open} inert={!open}
    className={`fixed inset-0 z-[var(--z-site-header-drawer,220)] bg-white text-[#0b2e6b] transition-opacity duration-200 ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
    <div className="mx-auto flex h-full max-w-2xl flex-col overflow-y-auto px-5 pb-8 pt-4 sm:px-8">
      <div className="flex shrink-0 items-center justify-between">
        <VpiBrandLockup href={getVpiRoute(locale, 'home')} size="header" priority />
        <button type="button" onClick={onClose} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#0b2e6b]/15 text-[#0b2e6b]" aria-label={isEnglish ? 'Close menu' : 'Cerrar menú'}><X className="h-5 w-5" /></button>
      </div>
      <nav className="mt-8 grid shrink-0 gap-1" aria-label={isEnglish ? 'Mobile navigation' : 'Navegación móvil'}>
        <p className={sectionTitle}>{isEnglish ? 'Solutions' : 'Soluciones'}</p>
        {nav.solutions.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className={linkClass}>{item.label}</Link>)}
        <div className="my-3 h-px bg-[#0b2e6b]/10" />
        {nav.primary.map((item) => <div key={item.href} className="grid">
          <Link href={item.href} onClick={onClose} className={linkClass}>{item.label}</Link>
          {item.label === (isEnglish ? 'Businesses & Self-employed' : 'Empresas y Autónomos') && nav.businessSolutions.map((solution) => <Link key={solution.href} href={solution.href} onClick={onClose} className="py-1 pl-3 text-sm font-medium text-[#35527d] hover:text-[#1268c4]">{solution.label}</Link>)}
        </div>)}
        <p className={`${sectionTitle} mt-4`}>{isEnglish ? 'Resources' : 'Recursos'}</p>
        {nav.resources.map((item) => <Link key={item.href} href={item.href} onClick={onClose} className={linkClass}>{item.label}</Link>)}
      </nav>
      <div className="mt-8 grid shrink-0 gap-3 border-t border-[#0b2e6b]/10 pt-6">
        <a href={whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackWhatsAppClick(trackingLocation)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#128c7e]/25 text-sm font-bold text-[#0b2e6b]"><WhatsAppIcon className="h-4 w-4 text-[#128c7e]" />WhatsApp</a>
        <a href={`tel:${site.phoneHref}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0b2e6b]/15 font-bold text-[#0b2e6b]"><Phone className="h-4 w-4" />{site.phone}</a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#0b2e6b]/15 font-bold text-[#0b2e6b]"><Instagram className="h-4 w-4" />Instagram</a>
      </div>
    </div>
  </div>;
}
