import type { Metadata } from 'next';
import Image from 'next/image';
import { Instagram, Shield, Users } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { site, buildWhatsAppHref } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export const metadata: Metadata = {
  title: 'Opiniones y Reseñas Verificadas de Clientes · Valentín Protección Integral Madrid',
  description:
    '+1.200 familias en Madrid confían en Rosa y Sebastián Valentín. Consulta sus reseñas reales en Google y descubre por qué somos la asesoría de seguros más cercana de Boadilla del Monte.',
  keywords:
    'opiniones google valentín protección integral, reseñas verificadas google, reseñas seguros madrid, opiniones boadilla del monte',
  openGraph: {
    title: 'Opiniones y Reseñas Verificadas de Clientes · Valentín Protección Integral Madrid',
    description:
      '+1.200 familias en Madrid confían en Rosa y Sebastián Valentín. Consulta sus reseñas reales en Google.',
    url: 'https://valentinproteccionintegral.com/opiniones',
    siteName: 'Valentín Protección Integral',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://valentinproteccionintegral.com/images/rosa_y_sebastian_conversando.png',
        alt: 'Rosa y Sebastián Valentín, asesores de seguros en Boadilla del Monte',
      },
    ],
  },
  alternates: {
    canonical: 'https://valentinproteccionintegral.com/opiniones',
  },
};

export const dynamic = 'force-static';

export default function OpinionesPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Opiniones', item: `${site.domain}/opiniones`, position: 2 },
        ]}
      />
      <Header />
      <main className="pt-6 md:pt-8">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Opiniones' }]} />
        </div>

        <section className="section-pad pb-0">
          <div className="container-shell">
            <div className="soft-card glass overflow-hidden border-white/40 p-8 md:p-12 shadow-xl bg-premium-glow">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <p className="kicker font-bold tracking-[0.3em]">Opiniones verificadas</p>
                  <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-gradient md:text-6xl leading-[1.05]">
                    Opiniones de Clientes Reales — Valentín Protección Integral Madrid
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)]">
                    En esta página solo mostramos la fuente legítima de reseñas: el widget oficial de Google con acceso directo al perfil, a las reseñas verificadas y al botón oficial para dejar una nueva opinión.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-6 items-center border-t border-black/5 pt-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--green)]/10 text-[var(--green)]">
                        <Shield className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-[var(--blue-deep)]">Fuente verificable</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--blue)]/10 text-[var(--blue)]">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-[var(--blue-deep)]">Sin testimonios estáticos</span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[var(--green)]/20 bg-[var(--green)]/5 px-5 py-4 flex items-start gap-3">
                    <Shield className="h-5 w-5 mt-0.5 text-[var(--green)] shrink-0" />
                    <p className="text-sm leading-6 text-[var(--blue-deep)] font-medium">
                      <strong>Solo reseñas verificables.</strong> Aquí no encontrarás testimonios fabricados ni valoraciones copiadas. Cada opinión tiene nombre, fecha y enlace directo a Google. Eso es lo que significa trabajar con transparencia.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="relative h-72 lg:h-full min-h-[280px] rounded-[1.5rem] overflow-hidden shadow-xl">
                    <Image
                      src="/images/rosa_y_sebastian_conversando.png"
                      alt="Rosa y Sebastián Valentín, asesores de seguros en Boadilla del Monte"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 420px"
                      quality={80}
                      className="object-cover object-[center_20%]"
                    />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={buildWhatsAppHref('Hola Rosa, he visto vuestras reseñas en Google y me gustaría hablar contigo.')}
                      className="btn-whatsapp !px-6 w-full justify-center"
                    >
                      <WhatsAppIcon className="h-4 w-4" /> Hablar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoogleReviewsWidget />

        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card overflow-hidden shadow-lg">
              <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="mb-5 flex items-center gap-3">
                    <Instagram className="h-6 w-6 text-[var(--blue)]" />
                    <p className="kicker !m-0">Síguenos en Instagram</p>
                  </div>
                  <h2 className="font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">
                    Consejos, novedades y experiencias en @segurosrosavalentin
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                    Contenido útil sobre seguros, consejos prácticos y un canal más cercano para estar al día. Sin presión, con información que de verdad ayuda a decidir.
                  </p>
                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {['Consejos para elegir mejor', 'Novedades del sector', 'Contenido educativo', 'Atención cercana'].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-[var(--bg)] px-4 py-3.5 text-sm font-semibold text-[var(--blue-deep)] border border-[var(--border)]">
                        <div className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7">
                    <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-secondary">
                      <Instagram className="h-4 w-4" /> Seguir en Instagram
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[rgba(15,94,156,0.06)] to-[rgba(123,198,126,0.08)] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="rounded-[22px] bg-white border border-[var(--border)] p-6 text-center shadow-sm">
                    <p className="font-heading text-2xl font-extrabold text-[var(--blue-deep)]">Una sola fuente de reseñas</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      Todas las opiniones visibles en esta página proceden exclusivamente del perfil oficial de Google, con enlace verificable a cada reseña real.
                    </p>
                    <div className="mt-6">
                      {/* TODO: reemplazar con Place ID real del Google Business Profile */}
                      <a
                        href="https://www.google.com/maps/search/Valentín+Protección+Integral+Boadilla+del+Monte"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                      >
                        Ver perfil oficial en Google
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 text-white md:p-10 text-center">
              <p className="kicker !text-white/70">¿Ya eres cliente?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Tu opinión solo cuenta si es verificable</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-9 text-white/80">
                Si ya has trabajado con nosotros, puedes dejar tu reseña directamente en Google para que otras personas la consulten con total transparencia.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center">
                {/* TODO: reemplazar con Place ID real del Google Business Profile */}
                <a
                  href="https://www.google.com/maps/search/Valentín+Protección+Integral+Boadilla+del+Monte"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]"
                >
                  Dejar reseña en Google
                </a>
                <a
                  href={buildWhatsAppHref('Hola, quiero compartir mi experiencia como cliente y dejar mi reseña en Google.')}
                  className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Necesito ayuda
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
