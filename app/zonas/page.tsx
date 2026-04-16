import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { zonas } from '@/lib/zonas';
import { site } from '@/lib/products';

export const metadata: Metadata = {
  title: 'Asesores de Seguros por Zonas en Madrid · Valentín Protección Integral',
  description: 'Asesores de seguros independientes en Boadilla del Monte, Las Rozas, Majadahonda, Pozuelo de Alarcón y Madrid. +10 años, consulta gratuita.',
  alternates: { canonical: `${site.domain}/zonas` },
};

export const dynamic = 'force-static';

export default function ZonasPage() {
  return (
    <>
      <Header />
      <main>
        <section className="section-pad bg-white-pure">
          <div className="container-shell">
            <p className="kicker text-[var(--blue)] font-bold tracking-widest text-xs uppercase mb-3 text-center">Cobertura Local</p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient text-center leading-tight mb-4">
              Asesores de Seguros en el Noroeste de Madrid
            </h1>
            <p className="text-center text-[var(--muted)] max-w-2xl mx-auto mb-12 text-lg">
              Atendemos de forma presencial desde Boadilla del Monte y por videollamada en toda la Comunidad de Madrid. Consulta gratuita y sin compromiso.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {zonas.map(z => (
                <Link key={z.slug} href={`/zonas/${z.slug}`}
                  className="soft-card glass rounded-2xl p-6 border border-white/60 bg-white/60 hover:bg-white hover:border-[var(--blue)] transition-all group h-full flex flex-col">
                  <p className="kicker text-[var(--blue)] font-bold tracking-widest text-xs mb-2">{z.provincia.toUpperCase()}</p>
                  <h2 className="font-heading text-xl font-bold text-[var(--blue-deep)] mb-2 group-hover:text-[var(--blue)] transition-colors">
                    {z.nombre}
                  </h2>
                  <p className="text-sm text-[var(--muted)] leading-6 mb-4 flex-grow">{z.intro.slice(0, 120)}…</p>
                  <span className="text-xs font-bold text-[var(--blue)] uppercase tracking-wider">
                    Ver asesores en {z.nombreCorto} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
