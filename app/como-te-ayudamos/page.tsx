import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import dynamicImport from 'next/dynamic'

const TrustBadgesSection = dynamicImport(
  () => import('@/components/home-sections').then(m => ({ default: m.TrustBadgesSection }))
);
const AgentTrustBlock = dynamicImport(
  () => import('@/components/home-sections').then(m => ({ default: m.AgentTrustBlock }))
);
const ComparisonCardsSection = dynamicImport(
  () => import('@/components/home-sections').then(m => ({ default: m.ComparisonCardsSection }))
);
const HowItWorksSection = dynamicImport(
  () => import('@/components/HowItWorksSection')
);

import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';

export const metadata: Metadata = {
  title: "Cómo Te Ayudamos | Valentín Protección Integral — Seguros en Madrid",
  description: "Te asesoramos gratis, buscamos la mejor opción y te acompañamos después de contratar. Así trabajamos en Valentín Protección Integral · Boadilla del Monte, Madrid.",
  keywords: "cómo funciona seguros madrid, proceso seguros valentín, asesoría seguros madrid",
  openGraph: {
    title: "Cómo Trabajamos Contigo · Sin Compromiso | Valentín",
    description: "No somos un comparador online. Somos personas que escuchan tu situación y buscan el seguro que de verdad te conviene.",
    url: "https://valentinproteccionintegral.com/como-te-ayudamos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/como-te-ayudamos",
  },
};

export const dynamic = 'force-static';

export default function ComoTeAyudamosPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Cómo te ayudamos', item: `${site.domain}/como-te-ayudamos`, position: 2 },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Asesoría de Seguros Personalizada en Madrid",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Valentín Protección Integral",
              "url": "https://valentinproteccionintegral.com"
            },
            "areaServed": { "@type": "City", "name": "Madrid" },
            "description": "Asesoría de seguros sin compromiso en Madrid. Comparamos opciones de salud, vida, mascotas, dental, viaje y más para que elijas con criterio.",
            "url": "https://valentinproteccionintegral.com/como-te-ayudamos",
            "serviceType": "Asesoría de Seguros",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Primera consulta gratuita y sin compromiso"
            }
          })
        }}
      />
      <Header />
      <main className="pt-6 md:pt-8">
        <div className="container-shell"><Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Cómo te ayudamos' }]} /></div>

        <section id="metodo-hero" aria-labelledby="metodo-h1" className="section-pad pt-5 md:pt-8">
          <div className="container-shell">
            <div className="soft-card overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="p-7 md:p-10 lg:p-12">
                  <p className="kicker">Cómo te ayudamos</p>
                  <h1 id="metodo-h1" className="mt-3 font-heading text-5xl font-bold tracking-tight text-[var(--blue-deep)] md:text-6xl">No somos un comparador. Somos tu asesor.</h1>
                  <p className="mt-3 font-heading text-2xl font-semibold text-[var(--blue)] md:text-3xl">
                    Tu asesor de seguros en Madrid, de principio a fin
                  </p>
                  <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)] md:text-xl">Escuchamos tu situación, comparamos contigo y aterrizamos coberturas con un lenguaje que se entiende. La idea es ayudarte a elegir con más tranquilidad, no llenarte de ruido.</p>
                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {[
                      'Escuchamos qué quieres proteger y en qué momento estás.',
                      'Comparamos opciones con una explicación que se entiende.',
                      'Traducimos coberturas, matices y diferencias a lenguaje claro.',
                      'Si algo falla después de contratar, somos nosotros quienes llamamos a la compañía por ti — nunca te dejamos solo ante un problema.',
                    ].map((line) => (
                      <div key={line} className="rounded-[22px] bg-[var(--bg)] px-5 py-4 text-base leading-7 text-[var(--text)]">{line}</div>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href="/contacto" className="btn-primary">Solicitar orientación</Link>
                    <a href={buildWhatsAppHref('Hola, quiero orientación sobre un seguro y entender mejor mis opciones.')} className="btn-whatsapp" aria-label="Consulta gratuita sin compromiso por WhatsApp">Hablar por WhatsApp</a>
                  </div>
                </div>
                <div className="relative min-h-[360px]">
                  <Image 
                  src="/images/rosa_y_sebastian_conversando.png" 
                  alt="Rosa y Sebastián Valentín atendiendo a clientes en su asesoría de seguros en Boadilla del Monte" 
                  fill 
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top" 
                />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,59,104,0.08),rgba(18,59,104,0.2))]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBadgesSection />
        <AgentTrustBlock />
        <HowItWorksSection />
        <ComparisonCardsSection />

        <section id="equipo-ayuda" aria-labelledby="equipo-title" className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card overflow-hidden">
              <div className="grid gap-0 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[340px]">
                  <Image 
                  src="/images/rosa_y_sebastian_conversando.png"
                  alt="Rosa y Sebastián Valentín en una reunión de asesoría de seguros en Boadilla del Monte"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1280px) 100vw, 683px"
                  quality={60}
                  className="object-cover object-top"
                />
                </div>
                <div className="p-7 md:p-10">
                  <p className="kicker">Nuestro equipo</p>
                  <h2 id="equipo-title" className="mt-3 section-title">Rosa y Sebastián: 10 años acompañando lo que más importa</h2>
                  <p className="section-copy mt-4">Rosa y Sebastián combinan cercanía, experiencia técnica y comparativa real entre opciones. Puedes empezar por el canal que más te convenga.</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost">Instagram · @segurosrosavalentin</a>
                    <Link href="/contacto" className="btn-secondary">Consulta sin compromiso</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="prueba-social-title"
          className="section-pad pt-0"
        >
          <div className="container-shell">
            <div className="soft-card overflow-hidden">
              <div className="grid gap-0 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="relative min-h-[380px]">
                  <Image
                    src="/images/sebastian_con_cliente.png"
                    alt="Sebastián Valentín explicando opciones de seguro a un cliente en Boadilla del Monte"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1280px) 100vw, 600px"
                    quality={75}
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col justify-center">
                  <p className="kicker">Lo que nos diferencia</p>
                  <h2
                    id="prueba-social-title"
                    className="mt-3 section-title"
                  >
                    Más de 1.200 familias ya confían en nosotros
                  </h2>
                  <p className="section-copy mt-4">
                    No trabajamos para las compañías. Trabajamos para ti.
                    Por eso podemos decirte lo que realmente necesitas —
                    aunque a veces sea menos de lo que ibas a contratar.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[18px] bg-[var(--bg)] px-5 py-4">
                      <p className="text-2xl font-bold text-[var(--blue-deep)]">+10 años</p>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        de experiencia en el sector
                      </p>
                    </div>
                    <div className="rounded-[18px] bg-[var(--bg)] px-5 py-4">
                      <p className="text-2xl font-bold text-[var(--blue-deep)]">+1.200</p>
                      <p className="text-sm text-[var(--muted)] mt-1">
                        familias protegidas en Madrid
                      </p>
                    </div>
                    <div className="rounded-[18px] bg-[var(--bg)] px-5 py-4 sm:col-span-2">
                      <p className="text-base text-[var(--text)] leading-7">
                        🛡️ <strong>Garantía real:</strong> Si necesitas gestionar
                        un siniestro o reclamación, nosotros hacemos la llamada
                        a la compañía. Tú no tienes que pelear solo.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="https://wa.me/34603448765?text=Hola%2C+quiero+una+consulta+gratuita+sobre+seguros"
                      className="btn-whatsapp" aria-label="Consulta gratuita sin compromiso por WhatsApp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Consulta gratuita ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section aria-label="Sebastián Valentín, asesor personal" className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card overflow-hidden rounded-3xl">
              <div className="grid gap-0 xl:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 md:p-10 flex flex-col justify-center">
                  <p className="kicker">Tu asesor personal</p>
                  <h2 className="mt-3 section-title">
                    Sebastián: especialista en autónomos y protección familiar
                  </h2>
                  <p className="section-copy mt-4">
                    Sebastián te acompaña desde la primera consulta hasta que tienes todo claro.
                    Sin tecnicismos, sin presión. Solo lo que necesitas saber para decidir con criterio.
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://wa.me/34603448765?text=Hola%2C+quiero+hablar+con+Sebasti%C3%A1n+sobre+mis+opciones+de+seguro"
                      className="btn-whatsapp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hablar con Sebastián
                    </a>
                  </div>
                </div>
                <div className="relative min-h-[340px]">
                  <Image
                    src="/images/sebastian.png"
                    alt="Sebastián Valentín, asesor de seguros en Boadilla del Monte y Madrid"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1280px) 100vw, 550px"
                    quality={75}
                    className="object-cover object-[center_20%]"
                  />
                </div>
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
