"use client";

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { VpiSiteHeader, type VpiHeaderVariant } from '@/components/vpi-site-header';
import { VpiDesktopNavigation, VpiHeaderActions, VpiMobileNavigation } from '@/components/vpi-navigation';
import { getVpiRoute } from '@/components/vpi-navigation-config';

export function Header({ variant = 'translucent-light', overlayHero = false }: { variant?: VpiHeaderVariant; overlayHero?: boolean } = {}) {
  const locale = useLocale() as 'es' | 'en';
  const [mobileOpen, setMobileOpen] = useState(false);
  return <VpiSiteHeader
    variant={variant}
    overlayHero={overlayHero}
    brandHref={getVpiRoute(locale, 'home')}
    locale={locale}
    mobileMenuId="vpi-mobile-menu"
    mobileMenuOpen={mobileOpen}
    onMobileMenuToggle={() => setMobileOpen((open) => !open)}
    desktopNavigation={<VpiDesktopNavigation locale={locale} />}
    desktopActions={<VpiHeaderActions locale={locale} trackingLocation="nav-header" />}
    mobileMenu={<VpiMobileNavigation id="vpi-mobile-menu" open={mobileOpen} locale={locale} onClose={() => setMobileOpen(false)} trackingLocation="nav-header" />}
  />;
}
