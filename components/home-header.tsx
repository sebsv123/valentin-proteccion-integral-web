"use client";

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { VpiSiteHeader } from '@/components/vpi-site-header';
import { VpiDesktopNavigation, VpiHeaderActions, VpiMobileNavigation } from '@/components/vpi-navigation';
import { getVpiRoute } from '@/components/vpi-navigation-config';

export function HomeHeader() {
  const locale = useLocale() as 'es' | 'en';
  const [mobileOpen, setMobileOpen] = useState(false);
  return <VpiSiteHeader
    variant="transparent-overlay"
    overlayHero
    brandHref={getVpiRoute(locale, 'home')}
    locale={locale}
    mobileMenuId="vpi-mobile-menu"
    mobileMenuOpen={mobileOpen}
    onMobileMenuToggle={() => setMobileOpen((open) => !open)}
    desktopNavigation={<VpiDesktopNavigation locale={locale} />}
    desktopActions={<VpiHeaderActions locale={locale} trackingLocation="home-header" />}
    mobileMenu={<VpiMobileNavigation id="vpi-mobile-menu" open={mobileOpen} locale={locale} onClose={() => setMobileOpen(false)} trackingLocation="home-header" />}
  />;
}
