import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref, site } from "@/lib/products";
import { Phone, CheckCircle2, Users, Building2, User } from "lucide-react";
import SchemaFAQ from "@/components/seo/schema-faq";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = {
  title: "Seguros para Autónomos en Madrid · Asesoramiento independiente | Valentín Protección Integral",
  description: "Como autónomo puedes deducirte hasta 500€ en el IRPF por tu seguro médico. Te ayudamos a elegir el que mejor se adapta a tu situación real, sin presión y sin comparadores.",
  keywords: "seguro médico autónomos Madrid, deducción seguro salud autónomo, seguro salud IRPF autónomo, seguro médico deducible Madrid",
  openGraph: {
    title: "Seguros para Autónomos en Madrid · Asesoramiento independiente",
    description: "Dedúcete hasta 500€ en el IRPF por tu seguro médico. Te explicamos cómo aprovecharlo sin complicaciones.",
    url: "https://www.valentinproteccionintegral.com/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://www.valentinproteccionintegral.com/autonomos",
  },
};

const faqs = [
  {
    question: "¿Cuánto me puedo deducir exactamente?",
    answer: "Puedes deducirte hasta 500€ por persona al año. Si contratas seguro para tu familia, cada miembro tiene su propio límite de 500€. Un autónomo con pareja y dos hijos puede deducirse hasta 2.000€ anuales en total.",
  },
  {
    question: "¿Funciona con cualquier seguro médico?",
    answer: "La deducción aplica a seguros de salud y dental, siempre que sean contratados por ti como autónomo. No incluye seguros de vida, decesos ni otros productos. El seguro debe estar contratado a tu nombre o al de tu sociedad.",
  },
  {
    question: "¿Y si tengo empleados a mi cargo?",
    answer: "Si tienes trabajadores, la deducción de 500€ es solo para ti. Los seguros que contrates para tus empleados son gastos deducibles de tu actividad económica, pero con otra clasificación contable. Te ayudamos a organizarlo correctamente.",
  },
  {
    question: "¿Cuándo puedo contratarlo?",
    answer: "Puedes contratar en cualquier momento del año. La deducción se aplica en la declaración del IRPF correspondiente al año en que pagaste las primas. Si contratas en junio, deduces lo pagado desde junio hasta diciembre de ese año.",
  },
];

export const dynamic = "force-static";

export default function AutonomosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", url: "/" },
          { name: "Autónomos", url: "/autonomos" },
        ]}
      />
      <Header />
      <main>
        <div className="container-shell pt-4">
          <Breadcrumbs items={[
            { label: 'Inicio', href: '/' },
            { label: 'Seguros para Autónomos' }
          ]} />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#123B68] via-[#0F5E9C] to-[#123B68] py-20 lg:py-28">
          <div className="absolute inset-0 bg-[url('/images/premium/grid.svg')] opacity-10" />
          <div className="container-shell relative z-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <p className="kicker !text-white/80 !border-white/30">Seguros para autónomos</p>
                <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Autónomo en Madrid. Tu seguro médico puede costarte mucho menos de lo que crees.
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed max-w-2xl">
                  La ley te permite deducirte hasta 500€ anuales por persona. Te explicamos cómo aprovecharlo.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={buildWhatsAppHref("Hola, soy autónomo y quiero información sobre seguro médico con deducción fiscal.")}
                    className="btn-whatsapp !text-base !px-8 !py-4"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <Phone className="h-5 w-5" />
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sebastian.png"
                  alt="Sebastián Valentín, asesor de seguros para autónomos en Madrid"
                  fill
                  priority
                  sizes="(max-width: 1280px) 0vw, 480px"
                  quality={80}
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Deducción Fiscal */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">¿Qué puedo deducirme exactamente?</h2>
              <p className="section-copy mt-4">La normativa fiscal resumida de forma humana</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="glass-card-premium p-8 text-center">
                <p className="font-heading text-5xl font-extrabold text-[var(--blue)] mb-4">500€</p>
                <h3 className="font-heading text-xl font-bold mb-3">Por persona al año</h3>
                <p className="text-[var(--muted)]">
                  Tú, tu pareja y cada hijo tienen su propio límite de 500€. Una familia de cuatro puede deducir hasta 2.000€.
                </p>
              </div>
              <div className="glass-card-premium p-8 text-center">
                <CheckCircle2 className="h-10 w-10 text-[var(--blue)] mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Salud y dental incluidos</h3>
                <p className="text-[var(--muted)]">
                  El seguro puede incluir cobertura médica y dental. Lo importante es que sea un seguro de salud.
                </p>
              </div>
              <div className="glass-card-premium p-8 text-center">
                <p className="font-heading text-3xl font-extrabold text-[var(--blue)] mb-4">IRPF</p>
                <h3 className="font-heading text-xl font-bold mb-3">Directo en tu declaración</h3>
                <p className="text-[var(--muted)]">
                  La deducción se aplica automáticamente al hacer la declaración de la renta. No necesitas complicados trámites previos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfiles */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="section-title">¿Qué tipo de cobertura te conviene?</h2>
              <p className="section-copy mt-4">Tres perfiles, tres soluciones diferentes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="glass-card-premium p-8">
                <User className="h-8 w-8 text-[var(--blue)] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Autónomo solo</h3>
                <p className="text-[var(--muted)] mb-4">
                  Necesitas cobertura básica pero eficiente. Médico de cabecera, especialistas comunes y urgencias. Sin pagar por coberturas que no usarás.
                </p>
                <p className="text-sm font-semibold text-[var(--blue)]">
                  Deducción: 500€/año
                </p>
              </div>
              <div className="glass-card-premium p-8 border-[var(--blue)]">
                <Users className="h-8 w-8 text-[var(--blue)] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Autónomo con familia</h3>
                <p className="text-[var(--muted)] mb-4">
                  La opción más popular. Cobertura para toda la familia con pediatrician, ginecología, y todas las especialidades. Cada miembro tiene su deducción.
                </p>
                <p className="text-sm font-semibold text-[var(--blue)]">
                  Deducción: 500€ × número de asegurados
                </p>
              </div>
              <div className="glass-card-premium p-8">
                <Building2 className="h-8 w-8 text-[var(--blue)] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-3">Autónomo con empleados</h3>
                <p className="text-[var(--muted)] mb-4">
                  Además de tu seguro personal, puedes contratar para tu equipo. Los seguros de empleados son gasto deducible de la actividad.
                </p>
                <p className="text-sm font-semibold text-[var(--blue)]">
                  Consulta situación específica
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Garantía */}
        <section className="section-pad bg-white">
          <div className="container-shell">
            <div className="glass-card-premium p-10 md:p-12 text-center max-w-4xl mx-auto">
              <p className="kicker">Nuestra garantía</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold font-heading">
                +10 años asesorando autónomos en Madrid
              </h2>
              <p className="mt-6 text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
                Si en 15 minutos no encontramos algo que te convenga, te lo decimos sin rodeos. No perderás tiempo ni dinero con propuestas que no encajan contigo.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={buildWhatsAppHref("Hola, soy autónomo y quiero información sobre seguro médico con deducción fiscal.")}
                  className="btn-whatsapp !text-base !px-8 !py-4"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonio autónomo */}
        <section className="section-pad bg-white border-y">
          <div className="container-shell max-w-3xl">
            <blockquote className="text-center">
              <p className="font-heading text-2xl md:text-3xl text-[var(--blue-deep)] leading-relaxed italic mb-6">
                "Sebastián me ayudó a encontrar el seguro de salud perfecto como autónomo. Sin papeleo, sin esperas. En una llamada lo tenía todo claro."
              </p>
              <cite className="text-[var(--muted)] not-italic font-medium">
                — Cliente autónomo, Madrid
              </cite>
            </blockquote>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad bg-[var(--bg-soft)]">
          <div className="container-shell">
            <div className="max-w-3xl mx-auto">
              <p className="kicker text-center">Preguntas frecuentes</p>
              <h2 className="mt-4 section-title text-center">Todo lo que necesitas saber</h2>
              <div className="mt-10 space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="glass-card-premium p-6">
                    <h3 className="font-heading text-lg font-bold mb-2">{faq.question}</h3>
                    <p className="text-[var(--muted)] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-gradient-to-br from-[#123B68] to-[#0F5E9C] overflow-hidden">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] items-center">
              <div className="hidden lg:block relative h-72 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/rosa_y_sebastian_mesa.png"
                  alt="Rosa y Sebastián Valentín asesorando a un autónomo en Boadilla del Monte"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1280px) 0vw, 400px"
                  quality={70}
                  className="object-cover object-center"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="kicker !text-white/70">Tu asesor personal</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-5">
                  No somos un comparador. Somos tu asesor.
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                  Sebastián conoce tu sector, entiende tu situación fiscal y te explica 
                  todo en un lenguaje que se entiende. Sin letra pequeña, sin presión.
                </p>
                <a
                  href={buildWhatsAppHref("Hola Sebastián, soy autónomo y quiero que me asesores sobre mi seguro médico.")}
                  className="btn-whatsapp !text-lg !px-10 !py-5 inline-flex"
                >
                  <WhatsAppIcon className="h-6 w-6" />
                  Hablar con Sebastián
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Schema JSON-LD específico para autónomos */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Seguros para Autónomos en Madrid",
            provider: {
              "@type": "LocalBusiness",
              name: "Valentín Protección Integral",
              url: "https://www.valentinproteccionintegral.com",
              telephone: "+34603448765",
              areaServed: {
                "@type": "City",
                name: "Madrid",
              },
            },
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Autónomos y pequeñas empresas",
            },
            serviceType: "Asesoramiento de seguros",
            description: "Protege tu negocio y tu salud como autónomo en Madrid. Asesoramiento gratuito, sin compromiso.",
          }),
        }}
      />
      <SchemaFAQ faqs={faqs} />
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
