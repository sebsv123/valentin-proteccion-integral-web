// Server component for the approved home hero scene.

import { HeroContentClient, HeroLeadForm } from '@/components/hero-content-client';
import { StatsSection } from '@/components/stats-section-client';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeCheck, Flower2, HeartPulse, PawPrint, Plane, Stethoscope } from 'lucide-react';
import { products } from '@/lib/products';
import { getHomeContent, type HomeLocale } from './home-content';
import { localizedPath } from '@/i18n/navigation';
import { localizedProductPath } from '@/lib/product-locales';
import styles from './home-hero.module.css';
import { HomeHeader } from '@/components/home-header';
export { StatsSection };

const heroProductSlugs = ['salud', 'mascotas', 'dental', 'accidentes', 'viaje', 'decesos'];
const heroProductIcons = {
  salud: Stethoscope,
  mascotas: PawPrint,
  dental: BadgeCheck,
  accidentes: HeartPulse,
  viaje: Plane,
  decesos: Flower2,
};

// Hero completo — imagen SSR + contenido cliente
export function HeroLeadSection() {
  return (
    <section id="hero" aria-labelledby="hero-title" className={styles.hero}>
      <HomeHeader />
      <Image
        src="/brand/home/vpi-home-hero-desktop.webp"
        alt=""
        priority
        sizes="100vw"
        fill
        className={styles.scene}
        aria-hidden="true"
      />
      <div className="relative z-10 px-5 pt-[108px] sm:px-8 sm:pt-[122px] md:pt-[126px]">
        <HeroContentClient />
      </div>
    </section>
  );
}

export function HomeLeadFormSection() {
  return (
    <section aria-label="Formulario de orientación" className="bg-white pb-8 pt-8 md:pb-12 md:pt-10">
      <div className="container-shell">
        <div className="mx-auto max-w-[622px]">
          <HeroLeadForm />
        </div>
      </div>
    </section>
  );
}

export function ProductAccessSection({ locale = 'es' }: { locale?: HomeLocale } = {}) {
  const content = getHomeContent(locale).hero;
  const productsForHero = products
    .filter((product) => heroProductSlugs.includes(product.slug))
    .sort((a, b) => heroProductSlugs.indexOf(a.slug) - heroProductSlugs.indexOf(b.slug));

  return (
    <section aria-label={locale === 'en' ? 'Insurance access' : 'Accesos a seguros'} className="bg-[var(--bg-soft)] py-8 md:py-10">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {productsForHero.map((product) => {
            const Icon = heroProductIcons[product.slug as keyof typeof heroProductIcons];

            return (
              <Link
                key={product.slug}
                href={product.slug === 'salud' ? localizedPath(locale, '/insurance/health') : localizedProductPath(product.slug, locale === 'en' ? 'en' : 'es')}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-3 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--blue)]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2"
              >
                <Icon className="h-8 w-8 text-[var(--blue)] transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="text-sm font-bold tracking-wide text-[var(--blue-deep)]">{content.products[product.slug] || product.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
