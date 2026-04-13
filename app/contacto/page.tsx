import type { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { LeadForm } from '@/components/lead-form';
import { buildWhatsAppHref, site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';

export const metadata: Metadata = {
  title: `Contacto · Asesora de Seguros en Madrid | Valentín`,
  description: 'Resuelve tus dudas sobre seguros con Rosa Valentín. Asesoramiento independiente en salud, vida y empresas. Consulta gratuita por WhatsApp, llamada o formulario.',
  alternates: {
    canonical: `${site.domain}/contacto`,
  },
  openGraph: {
    title: `Contacto · Asesora de Seguros en Madrid | Valentín`,
    description: 'Resuelve tus dudas sobre seguros con Rosa Valentín. Asesoramiento independiente en salud, vida y empresas. Consulta gratuita por WhatsApp, llamada o formulario.',
    images: [{ url: `${site.domain}/og-image.png`, alt: "Contacto Valentín Protección Integral" }],
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
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
