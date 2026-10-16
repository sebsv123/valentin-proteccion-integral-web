"use client";

import { Menu } from 'lucide-react';
import { useEffect, useRef, useState, type ReactNode, type RefObject } from 'react';
import { VpiBrandLockup } from '@/components/vpi-brand-lockup';
import { LanguageSwitcher } from '@/components/language-switcher';

export type VpiHeaderVariant = 'transparent-overlay' | 'translucent-light' | 'translucent-dark' | 'solid';

type VpiSiteHeaderProps = {
  variant: VpiHeaderVariant;
  overlayHero?: boolean;
  brandHref: string;
  locale: 'es' | 'en';
  desktopNavigation: ReactNode;
  desktopActions: ReactNode;
  mobileUtility?: ReactNode;
  mobileMenu: ReactNode;
  overlays?: ReactNode;
  mobileMenuId: string;
  mobileMenuOpen: boolean;
  mobileMenuLabel?: string;
  onMobileMenuToggle: () => void;
  headerRef?: RefObject<HTMLElement | null>;
  desktopNavigationBelow?: boolean;
  maxWidthClassName?: string;
};

export function VpiSiteHeader({
  variant, overlayHero = false, brandHref, locale, desktopNavigation, desktopActions,
  mobileUtility, mobileMenu, overlays, mobileMenuId, mobileMenuOpen,
  mobileMenuLabel, onMobileMenuToggle, headerRef,
  desktopNavigationBelow = false, maxWidthClassName = 'max-w-[1510px]',
}: VpiSiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);
  const darkTop = variant === 'translucent-dark' && !scrolled;

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onMobileMenuToggle();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen, onMobileMenuToggle]);

  useEffect(() => {
    const wasOpen = wasOpenRef.current;
    if (mobileMenuOpen && !wasOpen) {
      requestAnimationFrame(() => {
        const initialTarget = mobileMenuRef.current?.querySelector<HTMLElement>('[data-mobile-menu-initial-focus]')
          ?? mobileMenuRef.current?.querySelector<HTMLElement>('nav a[href], button:not([disabled])');
        initialTarget?.focus();
      });
    } else if (!mobileMenuOpen && wasOpen) {
      triggerRef.current?.focus();
    }
    wasOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const containTabFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !mobileMenuRef.current) return;
      const focusable = Array.from(mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])',
      )).filter((element) => element.getClientRects().length > 0);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', containTabFocus);
    return () => document.removeEventListener('keydown', containTabFocus);
  }, [mobileMenuOpen]);

  const surface = scrolled
    ? 'border-[#0b2e6b]/[0.07] bg-[rgba(248,252,255,0.78)] text-[#0b2e6b] shadow-[0_8px_28px_rgba(11,46,107,0.06)] backdrop-blur-md'
    : variant === 'transparent-overlay'
      ? 'border-transparent bg-transparent text-[#0b2e6b] shadow-none'
      : variant === 'translucent-dark'
        ? 'border-white/10 bg-[rgba(11,46,107,0.78)] text-white shadow-none backdrop-blur-sm'
        : variant === 'solid'
          ? 'border-[#0b2e6b]/10 bg-[#f8fcff] text-[#0b2e6b] shadow-sm'
          : 'border-[#0b2e6b]/[0.07] bg-[rgba(248,252,255,0.84)] text-[#0b2e6b] shadow-[0_8px_28px_rgba(11,46,107,0.04)] backdrop-blur-md';
  const position = overlayHero ? (scrolled ? 'fixed inset-x-0 top-0' : 'absolute inset-x-0 top-0') : 'sticky top-0';
  const headerZIndex = 'z-[var(--z-site-header,150)]';
  const shellClassName = `mx-auto flex h-full w-full ${maxWidthClassName} items-center justify-between gap-3 px-4 sm:px-6 xl:px-8`;
  const brandClassName = 'shrink-0';
  const navigationClassName = 'hidden min-w-0 flex-1 items-center justify-center min-[1440px]:flex';
  const actionsClassName = 'hidden shrink-0 items-center min-[1440px]:flex';

  return (
    <>
      <header
        ref={headerRef}
        data-header-state={scrolled ? 'scrolled' : 'top'}
        data-header-variant={variant}
        data-header-overlay={overlayHero ? 'true' : 'false'}
        className={`${position} ${headerZIndex} h-[72px] border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200 ${surface}`}
      >
        <div className={shellClassName} data-header-nav-placement="inline">
          <div className={brandClassName}><VpiBrandLockup href={brandHref} size="header" priority tone={darkTop ? 'light' : 'dark'} /></div>
          <div className={navigationClassName}>{desktopNavigation}</div>
          <div className={actionsClassName}>{desktopActions}</div>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2 min-[1440px]:hidden">
            {mobileUtility ?? <LanguageSwitcher tone={darkTop ? 'light' : 'dark'} appearance="plain" />}
            <button
              ref={triggerRef}
              type="button"
              onClick={onMobileMenuToggle}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-current/15 transition-colors hover:bg-white/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current/40"
              aria-label={mobileMenuLabel ?? (mobileMenuOpen ? (locale === 'en' ? 'Close menu' : 'Cerrar menú') : (locale === 'en' ? 'Open menu' : 'Abrir menú'))}
              aria-expanded={mobileMenuOpen}
              aria-controls={mobileMenuId}
              data-mobile-menu-trigger="true"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      {overlays}
      <div ref={mobileMenuRef}>{mobileMenu}</div>
    </>
  );
}
