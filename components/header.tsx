"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown, Instagram, Menu, Phone, X } from 'lucide-react';
import { buildWhatsAppHref, getSubpagesForProduct, mainNav, products, site } from '@/lib/products';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MouseEvent } from 'react';


import PillNav from './ui/pill-nav';
import { StaggeredMenu } from './ui/staggered-menu';
import IridescenceBackground from './ui/iridescence-background';

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3 shrink-0" aria-label={site.name}>
      <div className="relative h-[52px] w-[52px] sm:h-[56px] sm:w-[56px] shrink-0">
        <Image
          src="/brand/logo-vpi.webp"
          alt={site.name}
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="hidden sm:flex flex-col leading-none">
        <span className="font-heading text-[20px] xl:text-[22px] font-extrabold tracking-tight text-white">
          Valentín
        </span>
        <span className="text-[12px] xl:text-[13px] font-semibold tracking-wide text-white/80 mt-0.5">
          Protección Integral
        </span>
      </div>
    </Link>
  );
}

export function Header() {
  const [mega, setMega] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

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

  const grouped = useMemo(() => products.map((product) => ({ ...product, children: getSubpagesForProduct(product.slug) })), []);

  const closeAll = () => setMega(false);

  const handleWhatsAppClick = (e: MouseEvent<HTMLAnchorElement>, location: string, href: string) => {
    e.preventDefault();
    trackWhatsAppClick(location);
    setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  const whatsappHref = buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.');

  return (
    <>
      <header className={`sticky top-0 z-[100] transition-all ${scrolled ? 'border-b border-white/10 bg-[#002244] text-white backdrop-blur-xl shadow-[0_14px_42px_rgba(0,0,0,0.3)]' : 'border-transparent bg-[#002244]/95 text-white backdrop-blur-md'}`}>
        <div className="container-shell mx-auto px-4 max-w-[1400px]">
          <div className="flex items-center justify-between gap-3 py-3 xl:gap-5 xl:py-4">
            <Brand />

            <nav className="hidden items-center gap-1 xl:flex">
              {/* Mega Menu trigger */}
              <div className="relative z-[110]">
                <button
                  id="mega-trigger"
                  onClick={() => setMega((v) => !v)}
                  className="group relative px-4 py-2"
                  aria-expanded={mega}
                  aria-controls="mega-menu"
                >
                  <div className="flex items-center gap-1.5 font-semibold text-white/90 hover:text-white transition-colors text-base">
                    Seguros <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mega ? 'rotate-180' : ''}`} />
                  </div>
                  {/* CSS underline hover */}
                  <span className="absolute bottom-2 left-6 right-6 h-[2px] origin-center scale-x-0 group-hover:scale-x-100 bg-[var(--blue)] transition-transform duration-200" />
                </button>

              </div>

              <div className="flex h-[42px] items-center gap-1">
                <PillNav
                  items={[
                    ...mainNav.slice(2).map(item => ({
                      link: item.href,
                      label: item.label,
                      href: item.href
                    }))
                  ]}
                  baseColor="#002244"
                  pillColor="rgba(255,255,255,0.15)"
                  pillTextColor="white"
                  hoveredPillTextColor="white"
                  className="scale-95 origin-left"
                />
              </div>
            </nav>

            <div className="hidden items-center gap-2 xl:flex shrink-0 min-w-[380px] justify-end">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-1.5 px-4 py-2.5 text-white/90
                           text-sm font-semibold rounded-[14px] border border-white/20
                           hover:bg-white/10 transition-colors min-w-[160px]"
              >
                <Phone className="h-4 w-4" />
                {site.phone}
              </a>
              <a
                href={whatsappHref}
                onClick={(e) => handleWhatsAppClick(e, 'nav-header', whatsappHref)}
                className="btn-whatsapp !text-sm !px-5 !py-2.5 shadow-[0_4px_14px_rgba(18,140,126,0.4)] hover:shadow-[0_6px_20px_rgba(18,140,126,0.6)] min-w-[100px]"
              >
                WhatsApp
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 text-white/95 text-sm
                           hover:opacity-90 rounded-[14px] font-semibold
                           transition-opacity shadow-md min-w-[100px]"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>

            {/* TODO: FIX 1B - StaggeredMenu no acepta props isOpen/onClose aún.
                Cuando se actualice el componente, añadir:
                const [mobileOpen, setMobileOpen] = useState(false);
                y pasar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} al StaggeredMenu
            */}
            <button
              className="flex xl:hidden items-center gap-2 text-white/90 hover:text-white
                         px-4 py-2.5 rounded-[14px] text-sm hover:bg-white/10
                         transition-colors font-semibold border border-white/20 shrink-0"
              onClick={() => document.querySelector<HTMLButtonElement>('.sm-toggle')?.click()}
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" /> Menú
            </button>

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
      >
        <div className="relative z-10 grid gap-5 lg:grid-cols-[300px_1fr]">
          <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(15,94,156,0.06),rgba(123,198,126,0.08))] p-5">
            <p className="font-heading text-2xl font-semibold text-[var(--blue-deep)]">Te ayudamos a elegir con claridad</p>
            <p className="mt-2 text-base leading-8 text-[var(--muted)]">
              Accede al producto que te interesa y, cuando tenga sentido, profundiza por perfil o modalidad.
            </p>
            <div className="mt-5 grid gap-3">
              <a href={whatsappHref} onClick={(e) => handleWhatsAppClick(e, 'nav-mega-menu', whatsappHref)} className="btn-whatsapp !w-full !justify-center">Consulta sin compromiso</a>
              <a href={`tel:${site.phoneHref}`} className="btn-ghost !w-full !justify-center"><Phone className="h-4 w-4" /> {site.phone}</a>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3 content-start">
            {grouped.map((item) => (
              <Link
                key={item.slug}
                href={`/seguros/${item.slug}`}
                className="group flex flex-col justify-between rounded-[16px] border border-[var(--border)] bg-white p-3 transition-all hover:border-[var(--blue)]/30 hover:shadow-lg hover:-translate-y-1"
                onClick={closeAll}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-base font-bold tracking-tight text-[var(--blue-deep)] group-hover:text-[var(--blue)]">
                      {item.label}
                    </span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--bg)] text-[var(--blue)] transition-colors group-hover:bg-[var(--blue)] group-hover:text-white">
                      <ChevronDown className="h-3 w-3 -rotate-90" />
                    </div>
                  </div>
                  <p className="mt-1 text-xs leading-5 text-[var(--muted)] line-clamp-2">{item.summary}</p>
                </div>

                {item.children.length ? (
                  <div className="mt-2 flex flex-wrap gap-1 border-t border-[var(--border)] pt-2">
                    {item.children.slice(0, 2).map((child) => (
                      <span key={child.slug} className="rounded bg-[var(--bg)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--blue)]">
                        {child.label}
                      </span>
                    ))}
                    {item.children.length > 2 && (
                      <span className="text-[10px] font-bold text-[var(--blue)]">+{item.children.length - 2}</span>
                    )}
                  </div>
                ) : null}
              </Link>
            ))}
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
        logoUrl="/brand/logo-vpi.webp"
        colors={['#002244', '#0F5E9C']}
        accentColor="#0F5E9C"
        items={[
          { label: 'Inicio', ariaLabel: 'Inicio', link: '/' },
          ...grouped.map(item => ({ label: item.label, ariaLabel: item.label, link: item.slug === 'vida' ? '/seguros/vida/hipoteca' : `/seguros/${item.slug}` })),
          ...mainNav.slice(2).map(item => ({ label: item.label, ariaLabel: item.label, link: item.href }))
        ]}
        socialItems={[
          { label: 'Instagram', link: site.instagram },
          { label: 'WhatsApp', link: buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.') }
        ]}
      />
    </>
  );
}
