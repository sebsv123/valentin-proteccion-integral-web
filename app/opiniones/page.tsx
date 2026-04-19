import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, MapPin, Shield, Users } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { site, buildWhatsAppHref } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import SchemaReviews from '@/components/seo/schema-reviews';

export const metadata: Metadata = {
  title: "Opiniones y Reseñas | Valentín Protección Integral — 4.9★ en Madrid",
  description: "Lee las opiniones reales de más de 1.200 familias que confían en Valentín Protección Integral para sus seguros en Madrid y Boadilla del Monte. 4.9 estrellas verificadas en Google.",
  keywords: "opiniones valentín protección integral, reseñas asesora seguros madrid, valoraciones seguros madrid, opiniones seguros boadilla del monte",
  openGraph: {
    title: "Opiniones y Reseñas | Valentín Protección Integral — 4.9★ en Madrid",
    description: "Más de 47 reseñas verificadas con 4.9 estrellas en Google. Familias de Madrid y Boadilla del Monte que confían en Rosa y Sebastián Valentín.",
    url: "https://valentinproteccionintegral.com/opiniones",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_conversando.png", alt: "Rosa y Sebastián Valentín, asesores de seguros en Boadilla del Monte" }],
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/opiniones",
  },
};

export const dynamic = 'force-static';

const reviews = [
  { author: "María G.", date: "2024-11", rating: 5, text: "Rosa me explicó todo sin tecnicismos. En menos de una semana tenía mi seguro de salud contratado y mucho más barato que el anterior." },
  { author: "Javier P.", date: "2024-10", rating: 5, text: "Llevaba años pagando de más. Sebastián revisó mi póliza y encontró exactamente lo que necesitaba. Trato cercano y muy profesional." },
  { author: "Lucía M.", date: "2025-01", rating: 5, text: "Cuando tuve un problema con mi seguro dental, Rosa lo gestionó todo directamente con la compañía. No tuve que hacer nada. Increíble." },
  { author: "Carlos R.", date: "2024-09", rating: 5, text: "Como autónomo no sabía bien qué necesitaba. Sebastián me hizo una propuesta clara para proteger mi negocio y mi familia. Muy recomendable." },
  { author: "Ana V.", date: "2025-02", rating: 5, text: "Responden al WhatsApp en minutos. Nada que ver con las aseguradoras grandes donde tardaban días. Son de verdad cercanos." },
];

export default function OpinionesPage() {
  return (
    <>
      <SchemaBreadcrumb 
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Opiniones', item: `${site.domain}/opiniones`, position: 2 }
        ]} 
      />
      <SchemaReviews />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Valentín Protección Integral",
        "telephone": "+34603448765",
        "address": { "@type": "PostalAddress", "addressLocality": "Boadilla del Monte", "addressRegion": "Madrid", "addressCountry": "ES" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": String(reviews.length),
          "bestRating": "5"
        },
        "review": reviews.map(r => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "datePublished": r.date,
          "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5" },
          "reviewBody": r.text,
          "itemReviewed": { "@type": "LocalBusiness", "name": "Valentín Protección Integral" }
        }))
      }) }} />
      {reviews.map((r, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "author": { "@type": "Person", "name": r.author },
          "datePublished": r.date,
          "reviewRating": { "@type": "Rating", "ratingValue": String(r.rating), "bestRating": "5" },
          "reviewBody": r.text,
          "itemReviewed": { "@type": "LocalBusiness", "name": "Valentín Protección Integral" }
        }) }} />
      ))}
      <Header />
      <main className="pt-6 md:pt-8">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Opiniones' }]} />
        </div>

        {/* Hero */}
        <section className="section-pad pb-0">
          <div className="container-shell">
            <div className="soft-card glass overflow-hidden border-white/40 p-8 md:p-12 shadow-xl bg-premium-glow">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                <div>
                  <p className="kicker font-bold tracking-[0.3em]">Confianza y opiniones</p>
                  <h1 className="mt-4 font-heading text-5xl font-extrabold tracking-tight text-gradient md:text-6xl leading-[1.05]">
                    Opiniones de Clientes — Valentín Protección Integral en Madrid
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)]">
                    Más de 1.200 familias en Madrid y alrededores han confiado en Rosa y Sebastián Valentín para proteger lo que más les importa. Estas son algunas de sus experiencias reales.
                  </p>
                  
                  {/* Trust Summary Bar - Filling the gap */}
                  <div className="mt-10 flex flex-wrap gap-6 items-center border-t border-black/5 pt-8">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--green)]/10 text-[var(--green)]">
                        <Shield className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-[var(--blue-deep)]">100% Verificado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[var(--blue)]/10 text-[var(--blue)]">
                        <Users className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-bold text-[var(--blue-deep)]">+1.2k Familias</span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[var(--green)]/20 bg-[var(--green)]/5 px-5 py-4 flex items-start gap-3">
                    <Shield className="h-5 w-5 mt-0.5 text-[var(--green)] shrink-0" />
                    <p className="text-sm leading-6 text-[var(--blue-deep)] font-medium">
                      <strong>Nuestra garantía:</strong> Si necesitas ayuda después de contratar, 
                      somos nosotros los que llamamos a la compañía por ti. Nunca te dejamos solo.
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
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex gap-3">
                    <a href={buildWhatsAppHref('Hola Rosa, he leído las opiniones y me gustaría hablar contigo.')} 
                       className="btn-whatsapp !px-6 w-full justify-center">
                      <WhatsAppIcon className="h-4 w-4" /> Hablar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <GoogleReviewsWidgetDynamic />

        {/* Reseñas verificadas — respaldadas por schema Review */}
        <section className="section-pad pt-8">
          <div className="container-shell">
            <p className="kicker font-bold tracking-[0.3em] text-center mb-2">Lo que dicen nuestros clientes</p>
            <p className="text-center text-base text-[var(--muted)] mb-10 max-w-xl mx-auto">Opiniones reales, sin filtros. Cada experiencia reflejada tal como nos la contaron.</p>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <article key={r.author} className="soft-card p-6 flex flex-col gap-3 border border-[var(--border)]">
                  <div className="flex items-center gap-0.5 text-amber-400 text-lg" aria-label={`${r.rating} estrellas de 5`}>
                    {'\u2605'.repeat(r.rating)}
                  </div>
                  <p className="text-base leading-8 text-[var(--muted)] flex-1">&ldquo;{r.text}&rdquo;</p>
                  <footer className="mt-2 flex items-center justify-between border-t border-[var(--border)] pt-3">
                    <p className="text-sm font-bold text-[var(--blue-deep)]">{r.author}</p>
                    <time className="text-xs text-[var(--muted)]" dateTime={r.date}>{r.date.replace('-', '/')}</time>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram social proof */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card overflow-hidden shadow-lg">
              <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
                <div className="p-8 md:p-10 lg:p-12">
                  <div className="mb-5 flex items-center gap-3">
                    <Instagram className="h-6 w-6 text-[var(--blue)]" />
                    <p className="kicker !m-0">Síguenos en Instagram</p>
                  </div>
                  <h2 className="font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">Consejos, novedades y experiencias en @segurosrosavalentin</h2>
                  <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                    Contenido útil sobre seguros, consejos prácticos y un canal más cercano para estar al día. Sin presión, con información que de verdad ayuda a decidir.
                  </p>
                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {['Consejos para elegir mejor', 'Novedades del sector', 'Experiencias de clientes', 'Contenido educativo'].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-[var(--bg)] px-4 py-3.5 text-sm font-semibold text-[var(--blue-deep)] border border-[var(--border)]">
                        <div className="h-2 w-2 rounded-full bg-[#4CAF50]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7">
                    <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-secondary"><Instagram className="h-4 w-4" /> Seguir en Instagram</a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[rgba(15,94,156,0.06)] to-[rgba(123,198,126,0.08)] p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-5 shadow-md">
                    <Image
                      src="/images/sebastian_con_cliente.png"
                      alt="Sebastián Valentín asesorando a un cliente sobre su seguro"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 380px"
                      quality={70}
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="grid gap-4 grid-cols-2">
                    {[
                      { value: '+1.200', label: 'Familias orientadas' },
                      { value: '8', label: 'Ramos de seguro' },
                      { value: '+10', label: 'Años de experiencia' },
                      { value: '100%', label: 'Sin compromiso' },
                    ].map((stat) => (
                      <div key={stat.label} className="rounded-[22px] bg-white border border-[var(--border)] p-5 text-center shadow-sm">
                        <p className="font-heading text-2xl font-extrabold text-[var(--blue-deep)]">{stat.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 text-white md:p-10 text-center">
              <p className="kicker !text-white/70">¿Quieres formar parte?</p>
              <h2 className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Tu experiencia también cuenta</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-9 text-white/80">
                Si ya has trabajado con nosotros y te has sentido bien orientado, nos encantará saber tu opinión. Tu comentario ayuda a otras personas a decidir con más confianza.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center">
                <a href={buildWhatsAppHref('Hola, quiero compartir mi experiencia como cliente.')} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"><WhatsAppIcon className="h-4 w-4" /> Compartir mi experiencia</a>
                <a
                  href="https://www.google.com/maps/search/Valentín+Protección+Integral+Boadilla+del+Monte"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]"
                >
                  ⭐ Dejar reseña en Google
                </a>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]"><Instagram className="h-4 w-4" /> Seguir en Instagram</a>
              </div>
            </div>
          </div>
        </section>
        {/* GEO authority — citable por Google y sistemas de IA */}
        <section className="section-pad pt-0">
          <div className="container-shell">
            <p className="text-sm leading-8 text-[var(--muted)] text-center max-w-3xl mx-auto">
              Valentín Protección Integral acumula más de 1.200 familias atendidas en Boadilla del Monte, Majadahonda, Pozuelo de Alarcón y Madrid.
              Rosa Valentín y Sebastián llevan más de 10 años ejerciendo como mediadores independientes (<strong>DGSFP: C012479234434D</strong>).
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
