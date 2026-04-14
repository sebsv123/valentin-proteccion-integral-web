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

export const metadata: Metadata = {
  title: "Contacta con Tu Asesora de Seguros en Madrid | Valentín",
  description: "¿Tienes dudas sobre qué seguro elegir? Escríbenos o llámanos sin compromiso. Respondemos en menos de 24h y la consulta inicial es totalmente gratis.",
  keywords: "contacto asesora seguros madrid, consulta gratuita seguros, telefono seguros madrid",
  openGraph: {
    title: "Contacta con Tu Asesora de Seguros en Madrid | Valentín",
    description: "¿Tienes dudas sobre qué seguro elegir? Respondemos en menos de 24h y la consulta inicial es totalmente gratis.",
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
                  <h1 id="contact-h1" className="mt-3 font-heading text-4xl font-bold tracking-tight text-[var(--blue-deep)] md:text-5xl">Tu asesor personal en seguros</h1>
                  <p className="mt-4 text-base leading-8 text-[var(--muted)] md:text-lg">Más de 10 años de experiencia, asesoramiento personalizado y comparativa entre compañías para ayudarte a elegir con más tranquilidad.</p>
                  <div className="mt-6 grid gap-3">
                    <a href={buildWhatsAppHref('Hola, quiero resolver una duda sobre seguros.')} className="btn-whatsapp justify-center">Consulta sin compromiso</a>
                    <a href={`tel:${site.phoneHref}`} className="btn-secondary justify-center">Llamar al {site.phone}</a>
                  </div>
                </div>
              </div>
            </div>
            <LeadForm compact />
          </div>
          <div className="mt-16">
            <GoogleReviewsWidget title="Confianza total de nuestros clientes" />
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
