import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, MessageCircle, ShieldCheck, Star } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { GoogleReviewsCarousel } from '@/components/google-reviews-carousel';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { buildWhatsAppHref, site } from '@/lib/products';
import { googleReviews, googleReviewsSummary } from '@/lib/google-reviews';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';

export const metadata: Metadata = {
  title: 'Opiniones reales en Google · Valentín Protección Integral',
  description: 'Consulta experiencias compartidas por clientes de Valentín Protección Integral y accede al perfil público de Google.',
  keywords: 'opiniones google valentín protección integral, reseñas seguros madrid, opiniones boadilla del monte',
  openGraph: {
    title: 'Opiniones reales en Google · Valentín Protección Integral',
    description: 'Experiencias compartidas por personas que han confiado en nuestro asesoramiento.',
    url: 'https://valentinproteccionintegral.com/opiniones',
    siteName: 'Valentín Protección Integral',
    locale: 'es_ES',
    type: 'website',
  },
  alternates: { canonical: 'https://valentinproteccionintegral.com/opiniones' },
};

export const dynamic = 'force-static';

const visibleReviews = googleReviews.filter((review) => review.text.trim().length > 0);

const recurringThemes = [
  {
    title: 'Atención cercana',
    copy: 'Varias personas destacan un trato atento y una preocupación real por su situación.',
  },
  {
    title: 'Disponibilidad cuando hace falta',
    copy: 'Las reseñas valoran poder plantear inquietudes y encontrar respuesta cuando la necesitan.',
  },
  {
    title: 'Tranquilidad y confianza',
    copy: 'Se repite la sensación de contar con alguien que orienta, resuelve dudas y acompaña.',
  },
];

function RatingStars({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <span className="flex gap-1 text-amber-400" aria-label={`${googleReviewsSummary.rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className={`${className} fill-current`} aria-hidden="true" />
      ))}
    </span>
  );
}

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

        <section aria-labelledby="opiniones-title" className="section-pad pt-7 md:pt-10">
          <div className="container-shell">
            <div className="grid items-end gap-10 border-b border-[var(--border)] pb-12 lg:grid-cols-[1fr_auto] lg:pb-16">
              <div className="max-w-4xl">
                <p className="kicker">Opiniones reales</p>
                <h1 id="opiniones-title" className="mt-4 font-heading text-5xl font-bold leading-[1.02] tracking-tight text-[var(--blue-deep)] md:text-7xl">
                  La confianza también se construye escuchando
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                  Estas son algunas de las experiencias compartidas por personas que han confiado en nuestro asesoramiento.
                </p>
              </div>
              <a
                href={googleReviewsSummary.allReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[280px] rounded-[24px] border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-sm font-semibold text-[var(--muted)]">Valoración en Google</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <strong className="font-heading text-4xl text-[var(--blue-deep)]">{googleReviewsSummary.rating.toFixed(1)}</strong>
                      <span className="text-sm text-[var(--muted)]">{googleReviewsSummary.user_ratings_total} opiniones</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-[var(--blue)]" aria-hidden="true" />
                </div>
                <div className="mt-4"><RatingStars /></div>
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="resenas-title" className="section-pad pt-0">
          <div className="container-shell">
            <div className="mb-9 max-w-2xl">
              <p className="kicker">Experiencias compartidas</p>
              <h2 id="resenas-title" className="mt-3 section-title">Lo cuentan con sus propias palabras</h2>
              <p className="section-copy mt-4">Mostramos el texto tal como figura en la fuente disponible, sin convertirlo en un testimonio redactado por nosotros.</p>
            </div>
            <GoogleReviewsCarousel reviews={visibleReviews} {...googleReviewsSummary} />
          </div>
        </section>

        <section aria-labelledby="temas-title" className="section-pad bg-[var(--blue-deep)] text-white">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="kicker !text-[#81C784]">Lo que más valoran</p>
                <h2 id="temas-title" className="mt-4 font-heading text-4xl font-bold tracking-tight md:text-5xl">Ideas que aparecen más de una vez</h2>
                <p className="mt-5 text-base leading-8 text-white/75">En las opiniones se repiten especialmente estas ideas:</p>
              </div>
              <div className="divide-y divide-white/15 border-y border-white/15">
                {recurringThemes.map((theme, index) => (
                  <article key={theme.title} className="grid gap-3 py-6 sm:grid-cols-[56px_1fr] sm:py-7">
                    <span className="font-heading text-2xl text-[#81C784]">0{index + 1}</span>
                    <div>
                      <h3 className="font-heading text-2xl font-bold">{theme.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">{theme.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="fuente-title" className="section-pad">
          <div className="container-shell">
            <div className="grid gap-8 rounded-[28px] border border-[var(--border)] bg-white p-7 shadow-sm md:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green)]/10 text-[var(--green)]">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <h2 id="fuente-title" className="font-heading text-3xl font-bold text-[var(--blue-deep)]">Una fuente pública y consultable</h2>
                <p className="mt-3 max-w-3xl text-base leading-8 text-[var(--muted)]">Las opiniones mostradas proceden de Google y conservan el nombre, la valoración y el texto disponibles en esa fuente. El perfil público permite consultar el conjunto completo.</p>
              </div>
              <a href={googleReviewsSummary.allReviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost whitespace-nowrap">
                Ver todas en Google <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="cta-opiniones-title" className="section-pad pt-0">
          <div className="container-shell">
            <div className="rounded-[30px] bg-[var(--blue-deep)] px-7 py-11 text-white md:px-12 md:py-14">
              <div className="mx-auto max-w-3xl text-center">
                <MessageCircle className="mx-auto h-8 w-8 text-[#81C784]" aria-hidden="true" />
                <h2 id="cta-opiniones-title" className="mt-5 font-heading text-4xl font-bold tracking-tight md:text-5xl">¿Necesitas orientación para elegir tu seguro?</h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">Cuéntanos tu situación y te ayudaremos a revisar las opciones disponibles con claridad.</p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref('Hola, necesito orientación para elegir un seguro.')} className="btn-whatsapp">
                    <WhatsAppIcon className="h-4 w-4" /> Hablar por WhatsApp
                  </a>
                  <Link href="/como-te-ayudamos" className="btn-ghost !border-white/25 !bg-transparent !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">
                    Ver cómo podemos ayudarte
                  </Link>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-xs text-white/55"><Check className="h-4 w-4" /> Sin compromiso</p>
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
