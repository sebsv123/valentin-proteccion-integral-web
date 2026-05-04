import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { LeadForm } from '@/components/lead-form';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { buildWhatsAppHref, products, site } from '@/lib/products';
import { getZona, zonas } from '@/lib/zonas';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';

export function generateStaticParams() {
  return zonas.map((z) => ({ zona: z.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ zona: string }> }): Promise<Metadata> {
  const { zona } = await params;
  const z = getZona(zona);
  if (!z) return {};
  return {
    title: z.metaTitle,
    description: z.metaDescription,
    keywords: z.keywords?.join(', '),
    alternates: { canonical: `${site.domain}/zonas/${z.slug}` },
    openGraph: {
      title: z.metaTitle,
      description: z.metaDescription,
      url: `${site.domain}/zonas/${z.slug}`,
      siteName: site.name,
      locale: 'es_ES',
      type: 'website',
    },
  };
}

export const dynamic = 'force-static';

export default async function ZonaPage({ params }: { params: Promise<{ zona: string }> }) {
  const { zona } = await params;
  const z = getZona(zona);
  if (!z) notFound();

  const segurosDestacados = products.filter(p => z.segurosDestacados.includes(p.slug));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "InsuranceAgency"],
        "name": site.name,
        "url": site.domain,
        "telephone": site.phone,
        "areaServed": {
          "@type": "City",
          "name": z.nombre,
          "postalCode": z.cp,
          "containedInPlace": { "@type": "AdministrativeArea", "name": "Comunidad de Madrid" }
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Boadilla del Monte",
          "postalCode": "28660",
          "addressRegion": "Madrid",
          "addressCountry": "ES"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "ratingCount": "49"
        }
      })}} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": z.faqsLocales.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a }
        }))
      })}} />

      <SchemaBreadcrumb items={[
        { name: 'Inicio', item: site.domain, position: 1 },
        { name: 'Zonas', item: `${site.domain}/zonas`, position: 2 },
        { name: z.nombre, item: `${site.domain}/zonas/${z.slug}`, position: 3 },
      ]} />

      <Header />
      <main>

        <section className="section-pad pt-4 md:pt-8 bg-white-pure overflow-hidden relative border-b">
          <div className="container-shell">
            <nav aria-label="Breadcrumb" className="text-xs text-[var(--muted)] mb-4 flex gap-1 flex-wrap">
              <Link href="/" className="hover:text-[var(--blue)]">Inicio</Link>
              <span>&#x203a;</span>
              <Link href="/zonas" className="hover:text-[var(--blue)]">Zonas</Link>
              <span>&#x203a;</span>
              <span className="text-[var(--blue-deep)] font-medium">{z.nombre}</span>
            </nav>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="kicker text-[var(--blue)] font-bold tracking-[0.3em] text-xs uppercase mb-3">
                  Asesores Independientes &middot; {z.nombre}
                </p>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-gradient leading-[1.1] mb-3">
                  {z.h1}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-[var(--blue-deep)] mb-2">{z.heroSubtitle}</p>
                <p className="text-base sm:text-lg text-[var(--muted)] leading-8 mb-6">{z.intro}</p>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <a href={buildWhatsAppHref(z.whatsappMessage)} className="btn-whatsapp px-8 py-4 text-base">
                    <WhatsAppIcon className="h-5 w-5" /> WhatsApp gratuito
                  </a>
                  <a href={`tel:${site.phoneHref}`} className="btn-secondary px-8 py-4 text-base">Llamar ahora</a>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-[var(--blue-deep)]">
                  {['+10 años de experiencia', '+1.200 familias protegidas', 'Consulta 100% gratuita', 'Sin letra pequeña', 'Independientes'].map(t => (
                    <span key={t} className="glass rounded-full px-3 py-2 border border-white/60 bg-white/40">✓ {t}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {z.heroImage && (
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white/40">
                    <Image
                      src={z.heroImage}
                      alt={z.heroImageAlt || `${z.nombre} - Asesores de seguros independientes`}
                      fill
                      sizes="(max-width: 768px) 100vw, 540px"
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/30 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--blue-deep)]">📍 {z.nombreCorto}</span>
                    </div>
                  </div>
                )}
                <div id="formulario">
                  <LeadForm defaultProduct={z.segurosDestacados[0] as any || 'salud'} compact />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--surface)]">
          <div className="container-shell max-w-4xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--blue-deep)] mb-6">
              Por qué elegir asesores de seguros en {z.nombre}
            </h2>
            {z.porQueElegirNos.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-[var(--muted)] leading-8 mb-5 text-base sm:text-lg">{paragraph}</p>
            ))}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Población', value: z.datosLocales.poblacion },
                { label: 'Hospital más cercano', value: z.datosLocales.hospitalMasCercano },
                { label: 'Perfil principal', value: z.datosLocales.perfilPrincipal },
              ].map((item) => (
                <div key={item.label} className="soft-card p-5 rounded-2xl bg-white shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--blue)] mb-1">{item.label}</p>
                  <p className="text-sm text-[var(--blue-deep)] font-medium leading-6">{item.value}</p>
                </div>
              ))}
              <div className="soft-card p-5 rounded-2xl bg-[var(--blue-deep)] text-white shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Dato clave</p>
                <p className="text-sm font-medium leading-6">{z.datosLocales.curiosidadLocal}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white border-t border-b">
          <div className="container-shell">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--blue-deep)] mb-2 text-center">
              Seguros más demandados en {z.nombre}
            </h2>
            <p className="text-center text-[var(--muted)] mb-10 max-w-2xl mx-auto">
              Basado en el perfil de residentes de {z.nombreCorto}. Atendemos presencialmente desde Boadilla del Monte y por videollamada en toda la zona.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {segurosDestacados.map(product => (
                <Link key={product.slug} href={`/seguros/${product.slug}`}
                  className="soft-card glass rounded-2xl p-6 border border-white/60 bg-white/60 hover:bg-white hover:border-[var(--blue)] transition-all group">
                  <p className="kicker text-[var(--blue)] font-bold tracking-widest text-xs mb-2">{product.eyebrow}</p>
                  <p className="font-heading text-lg font-bold text-[var(--blue-deep)] mb-2 group-hover:text-[var(--blue)] transition-colors">{product.label}</p>
                  <p className="text-sm text-[var(--muted)] leading-6 mb-4">{product.summary.slice(0, 100)}&hellip;</p>
                  <span className="text-xs font-bold text-[var(--blue)] uppercase tracking-wider">Ver seguro de {product.label} &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--blue-deep)] text-white overflow-hidden">
          <div className="container-shell">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 max-w-xs mx-auto md:mx-0">
                <Image
                  src="/images/rosa_y_sebastian_de_pie.png"
                  alt={`Rosa y Sebastián Valentín, asesores de seguros independientes en ${z.nombre}`}
                  fill loading="lazy" sizes="(max-width: 768px) 320px, 380px" quality={75}
                  className="object-cover object-[center_20%]"
                />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-3">Tu equipo en {z.nombre}</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
                  Hablas con Rosa o Sebastián. No con un bot ni un call center.
                </h2>
                <p className="text-white/80 text-base sm:text-lg leading-8 mb-4">
                  Llevamos más de 10 años ayudando a familias y autónomos de {z.nombre} y toda la zona noroeste de Madrid. Cada consulta es personal. Cada recomendación es honesta.
                </p>
                <p className="text-white/70 text-sm leading-7 mb-6">
                  Somos mediadores independientes: no trabajamos para ninguna compañía, trabajamos para ti. Por eso siempre te decimos la verdad, aunque no sea lo que quieras escuchar.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={buildWhatsAppHref(z.whatsappMessage)} className="btn-whatsapp px-8 py-3 text-base">
                    <WhatsAppIcon className="h-5 w-5" /> WhatsApp gratuito
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--surface)]">
          <div className="container-shell max-w-4xl text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--blue-deep)] mb-2">
              Cómo te ayudamos en {z.nombre}
            </h2>
            <p className="text-[var(--muted)] mb-10">Sin oficina, sin esperas, sin letra pequeña.</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Cuéntanos tu situación', copy: `Contáctanos por WhatsApp, teléfono o formulario. Sin compromiso. Te escuchamos y entendemos qué necesitas en ${z.nombreCorto}.` },
                { num: '02', title: 'Comparamos por ti', copy: 'Analizamos tu perfil y comparamos entre más de 20 compañías. Te explicamos cada opción con claridad, sin tecnicismos.' },
                { num: '03', title: 'Tú decides, nosotros acompañamos', copy: 'Te recomendamos la mejor opción real. Y seguimos disponibles después de contratar si tienes dudas o un siniestro.' },
              ].map((step) => (
                <div key={step.num} className="soft-card rounded-2xl p-6 bg-white shadow-sm text-left">
                  <p className="font-heading text-4xl font-extrabold text-[var(--blue)] mb-3 opacity-30">{step.num}</p>
                  <p className="font-heading text-lg font-bold text-[var(--blue-deep)] mb-2">{step.title}</p>
                  <p className="text-sm text-[var(--muted)] leading-6">{step.copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 soft-card bg-white rounded-3xl p-6 shadow-sm border max-w-2xl mx-auto">
              <div className="relative w-20 h-20 flex-none rounded-full overflow-hidden ring-2 ring-[var(--blue)] shadow-md">
                <Image src="/images/sebastian.png" alt="Sebastián Valentín, asesor de seguros"
                  fill loading="lazy" sizes="80px" quality={80} className="object-cover object-top" />
              </div>
              <p className="text-sm sm:text-base text-[var(--muted)] leading-7 text-center sm:text-left">
                <strong className="text-[var(--blue-deep)]">Sebastián Valentín</strong> &mdash;
                Asesor independiente con +10 años de experiencia. Responderá a tu consulta en menos de 30 minutos. Personalmente.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white border-t">
          <div className="container-shell max-w-3xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--blue-deep)] mb-8 text-center">
              Preguntas frecuentes sobre seguros en {z.nombre}
            </h2>
            <div className="space-y-4">
              {z.faqsLocales.map((faq, i) => (
                <details key={i} className="soft-card rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden group">
                  <summary className="p-5 font-semibold text-[var(--blue-deep)] cursor-pointer list-none flex justify-between items-center hover:text-[var(--blue)] transition-colors">
                    {faq.q}
                    <span className="text-[var(--blue)] font-bold text-xl ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-[var(--muted)] leading-7 text-sm sm:text-base">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white border-y">
          <div className="container-shell max-w-3xl text-center">
            <p className="text-sm text-[var(--muted)] mb-2">Asesores de seguros en {z.nombre}</p>
            <p className="font-heading text-xl font-bold text-[var(--blue-deep)] mb-3">
              Valentín Protección Integral &middot; Boadilla del Monte, Madrid
            </p>
            <p className="text-lg font-semibold text-[var(--blue)]">
              <a href={`tel:${site.phoneHref}`} className="hover:underline">{site.phone}</a>
            </p>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Atendemos presencialmente en Boadilla del Monte y por videollamada en toda la Comunidad de Madrid.
            </p>
          </div>
        </section>

        <section className="section-pad bg-[var(--surface)] border-t border-b">
          <div className="container-shell max-w-2xl text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--blue-deep)] mb-3">
              &iquest;Buscas asesores de seguros en {z.nombre}?
            </h2>
            <p className="text-[var(--muted)] mb-8 text-lg">
              Primera consulta gratuita. Sin compromiso. Respondemos en menos de 30 minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={buildWhatsAppHref(z.whatsappMessage)} className="btn-whatsapp px-10 py-4 text-lg">
                <WhatsAppIcon className="h-5 w-5" /> Consulta por WhatsApp
              </a>
              <Link href="/contacto" className="btn-primary px-10 py-4 text-lg">Formulario de contacto</Link>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-shell text-center">
            <h2 className="font-heading text-xl font-bold text-[var(--blue-deep)] mb-2">
              También atendemos en zonas cercanas a {z.nombreCorto}
            </h2>
            <p className="text-sm text-[var(--muted)] mb-6">
              Cobertura en todo el noroeste de Madrid y la Comunidad de Madrid por videollamada.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {z.zonasCercanas.map(slug => (
                <Link key={slug} href={`/zonas/${slug}`}
                  className="glass rounded-full border border-white/60 bg-white/40 px-5 py-3 text-sm font-semibold text-[var(--blue-deep)] hover:bg-white hover:border-[var(--blue)] transition-all">
                  Seguros en {slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--blue-deep)] py-16 px-6 text-center">
          <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-3">Asesores independientes &middot; {z.nombre}</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            Tu consulta de seguros en {z.nombre}, gratis y sin compromiso
          </h2>
          <p className="text-white/70 mb-8 text-lg max-w-xl mx-auto">
            Sin presión. Sin letra pequeña. Con +10 años de experiencia ayudando a familias y autónomos de {z.nombre} y el noroeste de Madrid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={buildWhatsAppHref(z.whatsappMessage)} className="btn-whatsapp px-10 py-4 text-lg">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp gratuito
            </a>
            <a href={`tel:${site.phoneHref}`} className="btn-secondary !bg-white !text-[var(--blue-deep)] px-10 py-4 text-lg">
              Llamar a {site.phone}
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
