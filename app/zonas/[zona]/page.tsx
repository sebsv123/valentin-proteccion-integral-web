import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { LeadForm } from '@/components/lead-form';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { buildWhatsAppHref, products, site } from '@/lib/products';
import { getZona, zonas, formatZona } from '@/lib/zonas';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import { MapPin, CheckCircle2, Building2, Stethoscope, Home, Dog, Heart, Phone, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '@/components/whatsapp-button';
import GuaranteeBadge from '@/components/GuaranteeBadge';
import GarantiasSection from '@/components/GarantiasSection';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export function generateStaticParams() {
  return zonas.map((z) => ({ zona: z.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ zona: string }> }): Promise<Metadata> {
  const { zona } = await params;
  const z = getZona(zona);
  if (!z) {
    const zonaName = formatZona(zona);
    return {
      title: `Seguros en ${zonaName} — Mediador Independiente | Valentín Protección Integral`,
      description: `Asesor de seguros en ${zonaName}. Salud desde 22,50€/mes, vida, dental y mascotas sin copagos. +10 años. Consulta gratis.`,
      alternates: { canonical: `https://valentinproteccionintegral.com/zonas/${zona}` },
    };
  }
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

  // Fallback: generic professional page for any zone without dedicated data
  if (!z) {
    const zonaName = formatZona(zona);
    const wCotiza = buildWhatsAppHref(`Hola, soy de ${zonaName} y necesito información sobre seguros.`);
    return (
      <>
        <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Zonas",url:"/zonas"},{name:zonaName,url:`/zonas/${zona}`}]} />
        <Header />
        <main className="min-h-screen bg-white">
          {/* HERO */}
          <section className="py-16 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <GuaranteeBadge type="zonas" />
                  </div>
                  <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-bold text-black leading-[1.23] mb-4">
                    Seguros en {zonaName}: Mediador Independiente
                  </h1>
                  <p className="text-xl text-[#4b4b4b] leading-relaxed mb-8 max-w-md">
                    No trabajamos para ninguna compañía. Comparamos el mercado completo y te recomendamos lo mejor para tu familia en {zonaName}.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <WhatsAppButton
                      href={wCotiza}
                      location={`${zona}-hero`}
                      className="inline-flex items-center gap-2 bg-black hover:bg-[#333] text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
                    >
                      WhatsApp {zonaName}
                    </WhatsAppButton>
                    <a
                      href="tel:603448765"
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-base font-medium border border-[#efefef] hover:bg-[#e2e2e2] transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Llamar
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Mediador independiente
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                      <Sparkles className="w-4 h-4" />
                      30 min respuesta
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#efefef] text-black text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Sin permanencia
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                    <Image
                      src="/images/zonas/madrid.jpg"
                      alt={`Asesor de seguros en ${zonaName}, Madrid`}
                      width={600}
                      height={450}
                      className="w-full h-auto object-cover object-top"
                      priority
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-4 py-2 shadow-lg">
                        <MapPin className="w-4 h-4 text-black" />
                        <span className="text-sm font-bold text-black">{zonaName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LOCAL PROOF */}
          <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
              <p className="text-sm uppercase tracking-wider text-[#afafaf] mb-4">{zonaName.toUpperCase()}, MADRID</p>
              <h2 className="text-[36px] font-bold leading-[1.22] mb-12">
                Por qué elegirnos en {zonaName}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Building2, title: "Mediador independiente", desc: "No trabajamos para ninguna compañía. Comparamos el mercado y te recomendamos lo mejor para tu caso." },
                  { icon: Stethoscope, title: "Red médica de calidad", desc: "Acceso a los mejores hospitales y clínicas privadas de Madrid. Sin copagos, sin carencias." },
                  { icon: Sparkles, title: "Respuesta en 30 min", desc: "WhatsApp directo con Rosa o Sebastián. Sin centralitas, sin esperas, sin bots." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-6 border border-[#333]">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#afafaf]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* POPULARES */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
              <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
                Seguros más solicitados
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Stethoscope, title: "Salud privada", desc: "Desde 22,50€/mes. Sin copagos." },
                  { icon: Home, title: "Vida + Hipoteca", desc: "Protege a tu familia." },
                  { icon: Dog, title: "Mascotas", desc: "Cobertura completa." },
                  { icon: Heart, title: "Dental", desc: "Sin listas de espera." },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-5 shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px] hover:shadow-[rgba(0,0,0,0.16)_0px_4px_20px_0px] transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-[#efefef] flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-black" />
                    </div>
                    <h3 className="text-base font-bold text-black mb-1">{item.title}</h3>
                    <p className="text-sm text-[#4b4b4b]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EQUIPO */}
          <section className="py-16 bg-[#efefef]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative rounded-xl overflow-hidden shadow-[rgba(0,0,0,0.12)_0px_4px_16px_0px]">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián Valentín · Tu equipo asesor de seguros"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm mb-6 shadow-sm">
                    <MapPin className="w-4 h-4" />
                    {zonaName} y alrededores
                  </div>
                  <h2 className="text-[36px] font-bold text-black leading-[1.22] mb-4">
                    Rosa y Sebastián
                  </h2>
                  <p className="text-lg text-[#4b4b4b] mb-6">
                    Tu equipo de mediadores independientes. Más de una década ayudando a familias de Madrid y alrededores a encontrar el seguro que realmente necesitan.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-[#4b4b4b]">
                      <MapPin className="w-5 h-5 text-black" />
                      <span>C. de los Reyes Católicos, 1, Boadilla del Monte, Madrid</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#4b4b4b]">
                      <Phone className="w-5 h-5 text-black" />
                      <span>603 44 87 65</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    DGSFP: C012479234434D
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PROCESO */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
              <h2 className="text-[36px] font-bold text-black leading-[1.22] text-center mb-12">
                Cómo trabajamos
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { num: "1", title: "WhatsApp", desc: `Escribe "${zonaName}" y cuéntanos qué necesitas.` },
                  { num: "2", title: "Comparativa", desc: "Analizamos las mejores opciones para tu perfil en 30 minutos." },
                  { num: "3", title: "Contratación", desc: "Online o presencial en nuestra oficina. Sin papeles innecesarios." },
                ].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                    <p className="text-base text-[#4b4b4b]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="py-16 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
              <h2 className="text-[36px] sm:text-[48px] font-bold leading-[1.22] mb-4">
                Tu asesor de seguros en {zonaName}
              </h2>
              <p className="text-xl text-[#afafaf] mb-8">
                Mediador independiente. Sin comisiones ocultas. Sin permanencia.
              </p>
              <WhatsAppButton
                href={wCotiza}
                location={`${zona}-cta-final`}
                className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#e2e2e2] transition-colors"
              >
                WhatsApp {zonaName}
              </WhatsAppButton>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {["30 min respuesta", "Mediador independiente", "DGSFP C012479234434D"].map((item, i) => (
                  <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <GoogleReviewsWidget title={`Opiniones de clientes en ${zonaName}`} />
          <GarantiasSection brandColor="#10b981" />
        </main>
        <Footer />
        <StickyWhatsApp />
      </>
    );
  }

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

        {/* HERO inmersivo con imagen de zona */}
        <section className="relative overflow-hidden bg-[var(--blue-deep)] text-white">
          {z.heroImage && (
            <>
              <Image
                src={z.heroImage}
                alt={z.heroImageAlt || `${z.nombre} - Asesores de seguros independientes`}
                fill
                sizes="100vw"
                className="object-cover object-center opacity-45"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${z.heroAccent || '#003366'}E6 0%, rgba(0,34,68,0.92) 55%, rgba(0,34,68,0.78) 100%)`,
                }}
              />
            </>
          )}
          <div className="relative container-shell pt-8 pb-16 md:pt-12 md:pb-20">
            <nav aria-label="Breadcrumb" className="text-xs text-white/70 mb-6 flex gap-1 flex-wrap">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <span>›</span>
              <Link href="/zonas" className="hover:text-white">Zonas</Link>
              <span>›</span>
              <span className="text-white font-medium">{z.nombre}</span>
            </nav>
            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
              <div>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-bold uppercase tracking-widest backdrop-blur"
                  style={{ background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <MapPin className="h-3.5 w-3.5" /> Asesores en {z.nombre}
                </span>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.05] mb-5 text-white">
                  {z.h1}
                </h1>
                <p className="text-base sm:text-lg text-white/90 leading-8 mb-7 max-w-2xl">
                  {z.heroSubtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mb-7">
                  <a href={buildWhatsAppHref(z.whatsappMessage)} className="btn-whatsapp px-8 py-4 text-base shadow-2xl">
                    <WhatsAppIcon className="h-5 w-5" /> WhatsApp gratuito
                  </a>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base font-bold border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-[var(--blue-deep)] transition-all"
                  >
                    Llamar ahora
                  </a>
                </div>
                {z.landmarks && (
                  <div className="flex flex-wrap gap-2">
                    {z.landmarks.map((lm) => (
                      <span
                        key={lm.name}
                        className="inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold text-white backdrop-blur"
                        style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
                      >
                        <span aria-hidden>{lm.icon}</span> {lm.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div id="formulario" className="lg:sticky lg:top-24">
                <div className="rounded-3xl bg-white p-1 shadow-2xl ring-1 ring-black/5">
                  <LeadForm defaultProduct={z.segurosDestacados[0] as any || 'salud'} compact />
                </div>
              </div>
            </div>
          </div>
          {z.heroImageCredit && (
            <div className="relative bg-black/30 backdrop-blur-sm">
              <p className="container-shell py-2 text-[10px] text-white/60 tracking-wide">
                📷 {z.heroImageCredit}
              </p>
            </div>
          )}
        </section>

        {/* STATS BAR — barra de confianza visual */}
        <section className="bg-white border-b">
          <div className="container-shell py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { num: '+10', label: 'años de experiencia' },
                { num: '+1.200', label: 'familias protegidas' },
                { num: '30 min', label: 'tiempo de respuesta' },
                { num: '0€', label: 'consulta sin compromiso' },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-6 first:pl-0">
                  <p
                    className="font-heading text-3xl md:text-4xl font-extrabold leading-none"
                    style={{ color: z.heroAccent || 'var(--blue)' }}
                  >
                    {s.num}
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-[var(--muted)] font-medium uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERFIL DE ZONA — datos locales en grid visual con iconos */}
        <section className="section-pad bg-[var(--surface)]">
          <div className="container-shell">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <p className="kicker text-[var(--blue)] font-bold tracking-[0.3em] text-xs uppercase mb-3">
                Perfil de {z.nombreCorto}
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--blue-deep)]">
                Conocemos {z.nombre} mejor que nadie
              </h2>
              <p className="text-[var(--muted)] mt-4 text-base sm:text-lg leading-8">
                Cada zona tiene un perfil distinto. La cobertura adecuada depende de entender quién vive aquí, qué hospital queda cerca y qué riesgos son reales.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                { icon: '👥', label: 'Población', value: z.datosLocales.poblacion },
                { icon: '🏥', label: 'Hospital de referencia', value: z.datosLocales.hospitalMasCercano },
                { icon: '👤', label: 'Perfil principal', value: z.datosLocales.perfilPrincipal },
                { icon: '💡', label: 'Dato clave', value: z.datosLocales.curiosidadLocal, highlight: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`relative rounded-3xl p-6 shadow-sm border transition-all hover:shadow-xl hover:-translate-y-1 ${
                    item.highlight
                      ? 'text-white border-transparent'
                      : 'bg-white border-gray-100'
                  }`}
                  style={item.highlight ? { background: `linear-gradient(135deg, ${z.heroAccent || '#003366'}, var(--blue-deep))` } : undefined}
                >
                  <div className={`text-3xl mb-3 ${item.highlight ? '' : ''}`} aria-hidden>
                    {item.icon}
                  </div>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-2 ${item.highlight ? 'text-white/70' : 'text-[var(--blue)]'}`}>
                    {item.label}
                  </p>
                  <p className={`text-sm font-medium leading-6 ${item.highlight ? 'text-white' : 'text-[var(--blue-deep)]'}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUÉ ELEGIRNOS — narrativa con quote visual */}
        <section className="section-pad bg-white">
          <div className="container-shell max-w-4xl">
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
              <div
                className="hidden md:flex h-16 w-16 rounded-2xl items-center justify-center text-white text-2xl shadow-lg shrink-0"
                style={{ background: `linear-gradient(135deg, ${z.heroAccent || '#003366'}, var(--blue-deep))` }}
                aria-hidden
              >
                ✦
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--blue-deep)] mb-6 leading-tight">
                  Por qué elegir asesores de seguros en {z.nombre}
                </h2>
                {z.porQueElegirNos.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-[var(--muted)] leading-8 mb-5 text-base sm:text-lg">
                    {i === 0 && (
                      <span
                        className="float-left mr-3 mt-1 font-heading text-5xl sm:text-6xl font-extrabold leading-none"
                        style={{ color: z.heroAccent || 'var(--blue)' }}
                        aria-hidden
                      >
                        {paragraph.charAt(0)}
                      </span>
                    )}
                    {i === 0 ? paragraph.slice(1) : paragraph}
                  </p>
                ))}
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
