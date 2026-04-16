import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { LeadForm } from '@/components/lead-form';
import { buildWhatsAppHref, site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import HowItWorksSection from '@/components/HowItWorksSection';

export const metadata: Metadata = {
  title: "Contacta con Nuestro Equipo de Asesores de Seguros | Valentín",
  description: "¿Tienes dudas sobre qué seguro elegir? Escríbenos sin compromiso. Respondemos en menos de 30 minutos y la primera consulta es totalmente gratis.",
  keywords: "contacto asesora seguros madrid, consulta gratuita seguros, telefono seguros madrid",
  openGraph: {
    title: "Contacta con Nuestro Equipo de Asesores de Seguros | Valentín",
    description: "¿Tienes dudas sobre qué seguro elegir? Respondemos en menos de 30 minutos y la primera consulta es totalmente gratis.",
    url: "https://valentinproteccionintegral.com/contacto",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/contacto",
  },
};

export const dynamic = 'force-static';

export default function ContactoPage() {
  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Contacto', item: `${site.domain}/contacto`, position: 2 }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contacto · Valentín Protección Integral",
            "url": "https://valentinproteccionintegral.com/contacto",
            "description": "Página de contacto de Valentín Protección Integral. Consulta gratuita y sin compromiso.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Valentín Protección Integral",
              "telephone": "+34-603-44-87-65",
              "url": "https://valentinproteccionintegral.com"
            }
          })
        }}
      />
      <Header />
      <main id="contacto-main" aria-labelledby="contact-h1" className="section-pad pt-6 md:pt-10">
        <div className="container-shell">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Contacto' }]} />
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <div className="soft-card overflow-hidden">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[340px]">
                  <Image src="/images/home/meeting-real.jpg" alt="Asesoramiento real en una reunión" fill className="object-cover" />
                </div>
                <div className="p-7 md:p-9">
                  <p className="kicker">Contacto</p>
                  <h1 id="contact-h1" className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">Cuéntanos qué quieres proteger</h1>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">Rosa y Sebastián llevan más de 10 años acompañando a familias de Madrid. Cuéntanos tu situación y te orientamos con claridad, sin presión y sin letra pequeña.</p>
                  <div className="mt-6 grid gap-3">
                    <a href={buildWhatsAppHref('Hola, quiero resolver una duda sobre seguros.')} className="btn-whatsapp justify-center">Consulta sin compromiso</a>
                    <a href={`tel:${site.phoneHref}`} className="btn-secondary justify-center">Llamar al {site.phone}</a>
                  </div>
                </div>
              </div>
            </div>
            <LeadForm compact />
          </div>
          <div className="mt-10 flex items-center gap-4 rounded-[22px]
                          border-2 border-[var(--blue)]/20 bg-[var(--blue)]/5
                          px-6 py-5 max-w-xl">
            <span className="text-2xl flex-none">⏱️</span>
            <p className="text-base font-semibold text-[var(--blue-deep)] leading-relaxed">
              Respondemos en menos de 30 minutos en horario de atención.
              Sin call centers. Sin formularios que nadie lee.
            </p>
          </div>
          <div className="mt-16">
            <GoogleReviewsWidget title="Confianza total de nuestros clientes" />
          </div>
        </div>
      </main>
      <HowItWorksSection />
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
