// Server Component — Hero SSR para LCP óptimo
// HeroImage se renderiza en el servidor (visible en View Source)
// El contenido con animaciones es client-only

import { HeroImageServer } from '@/components/hero-server';
import { HeroContentClient, HeroLeadForm } from '@/components/hero-content-client';
import { StatsSection } from '@/components/stats-section-client';
import Link from 'next/link';
import { BadgeCheck, Flower2, HeartPulse, PawPrint, Plane, Stethoscope } from 'lucide-react';
import { products } from '@/lib/products';
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
    <section id="hero" aria-labelledby="hero-title" className="overflow-hidden bg-white py-5 md:py-8">
      <div className="container-shell hero-grid items-stretch gap-6 lg:gap-8">
        <div className="relative isolate min-h-[620px] overflow-hidden rounded-[28px] border border-white/50 px-6 py-9 shadow-2xl sm:px-10 md:px-12 md:py-12 xl:px-14">
          <div className="absolute inset-0">
            <HeroImageServer />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.96)_0%,rgba(248,250,252,0.91)_45%,rgba(248,250,252,0.64)_72%,rgba(248,250,252,0.12)_100%)]" />
          </div>
          <div className="relative z-10 h-full">
            <HeroContentClient />
          </div>
        </div>
        <HeroLeadForm />
      </div>
    </section>
  );
}

export function ProductAccessSection() {
  const productsForHero = products
    .filter((product) => heroProductSlugs.includes(product.slug))
    .sort((a, b) => heroProductSlugs.indexOf(a.slug) - heroProductSlugs.indexOf(b.slug));

  return (
    <section aria-label="Accesos a seguros" className="bg-[var(--bg-soft)] py-8 md:py-10">
      <div className="container-shell">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {productsForHero.map((product) => {
            const Icon = heroProductIcons[product.slug as keyof typeof heroProductIcons];

            return (
              <Link
                key={product.slug}
                href={`/seguros/${product.slug}`}
                className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--line)] bg-white px-3 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--blue)]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2"
              >
                <Icon className="h-8 w-8 text-[var(--blue)] transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="text-sm font-bold tracking-wide text-[var(--blue-deep)]">{product.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
