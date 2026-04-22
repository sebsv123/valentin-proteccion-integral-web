import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { CheckCircle2, Clock, Shield, Heart, FileCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Decesos Madrid | Cubre Gastos Sepelio | Valentín Protección Integral",
  description: "Seguro de decesos en Madrid. Cubre todos los gastos de sepelio. Tu familia no paga nada. Gestión completa. Desde 15€/mes. Rosa y Sebastián.",
  keywords: ["seguro decesos Madrid","seguro gastos sepelio Madrid","seguro fallecimiento Madrid","protección familiar decesos"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/decesos" },
  openGraph: {
    title: "Seguro Decesos Madrid | Cubre Gastos Sepelio",
    description: "Tu familia no debería preocuparse por el dinero en ese momento. Cubrimos todo.",
    url: "https://valentinproteccionintegral.com/seguros/decesos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguro de Decesos Madrid - Valentín Protección Integral",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Valentín Protección Integral",
    "telephone": "+34603448765",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Boadilla del Monte",
      "addressRegion": "Madrid",
      "addressCountry": "ES"
    }
  },
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas"],
  "description": "Seguro de decesos que cubre todos los gastos de sepelio. Tu familia solo tiene que llamar.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cubre el fallecimiento en el extranjero?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las pólizas que gestionamos incluyen cobertura internacional y traslado del fallecido a España si es necesario. Tu familia no tiene que preocuparse por los trámites ni los costes." }
    },
    {
      "@type": "Question",
      "name": "¿Hay que pagar algo en el momento del fallecimiento?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Con el seguro de decesos, la familia no tiene que pagar nada en el momento. Todas las facturas van directamente a la compañía aseguradora. Nosotros nos encargamos de toda la gestión para que la familia pueda dedicarse a lo verdaderamente importante." }
    },
    {
      "@type": "Question",
      "name": "¿Cubre toda la familia con una sola póliza?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dependiendo de la modalidad contratada, hay pólizas individuales y pólizas familiares. Te asesoramos para elegir la opción más económica según tu situación familiar." }
    }
  ]
};

export const dynamic = "force-static";

export default function DecesosPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de decesos para cubrir los gastos de sepelio.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Decesos",url:"/seguros/decesos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-[#0F0F10] text-[#F7F8F8]">
        
        {/* HERO LINEAR — Serenidad y seriedad */}
        <section className="bg-[#0F0F10] min-h-screen flex items-center relative">
          {/* Gradiente sutil Linear */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5E6AD2]/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20 relative z-10">
            <div className="max-w-3xl">
              {/* Badge serio */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(94,106,210,0.3)] bg-[rgba(94,106,210,0.08)] text-[#8B8FF8] text-sm mb-8">
                <Heart className="w-4 h-4" />
                Protege a tu familia de los gastos de sepelio
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#F7F8F8] tracking-tight leading-[1.05]">
                Tu familia no debería
                <br />
                <span className="text-[#5E6AD2]">
                  preocuparse por el dinero
                </span>
                <br />
                en ese momento.
              </h1>

              <p className="text-lg text-[#8A8F98] mt-8 max-w-2xl leading-relaxed">
                El seguro de decesos cubre todos los gastos de sepelio.
                Tu familia solo tiene que llamar. Nosotros gestionamos todo.
              </p>

              <a 
                href={wCotiza}
                className="mt-10 inline-flex items-center gap-3 bg-[#5E6AD2] hover:bg-[#6B75DB] text-white px-8 py-4 rounded-xl font-medium text-lg hover:shadow-[0_0_30px_rgba(94,106,210,0.35)] transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consulta sin compromiso
              </a>
            </div>
          </div>
        </section>

        {/* QUÉ CUBRE — Cards Linear glassmorphism */}
        <section className="py-24 bg-[#0F0F10]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-3xl font-semibold text-[#F7F8F8] text-center mb-12">
              Todo lo que cubre
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🕊️", title: "Sepelio completo", desc: "Todos los gastos cubiertos" },
                { icon: "📋", title: "Gestión total", desc: "Nosotros lo tramitamos todo" },
                { icon: "🚗", title: "Traslados", desc: "Nacional e internacional" },
                { icon: "👨‍👩‍👧", title: "Apoyo familia", desc: "Asistencia psicológica (según modalidad)" },
              ].map((item, i) => (
                <div key={i} className="border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] rounded-2xl p-6 hover:border-[rgba(94,106,210,0.4)] transition-all text-center">
                  <span className="text-3xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold text-[#F7F8F8] mb-2">{item.title}</h3>
                  <p className="text-[#8A8F98] text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRECIO CLARO */}
        <section className="py-16 bg-[#0F0F10]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-2xl">
            <div className="border border-[rgba(255,255,255,0.07)] rounded-3xl p-12 text-center bg-[rgba(94,106,210,0.05)]">
              <p className="text-[#8A8F98] text-sm tracking-widest uppercase mb-4">
                Desde solo
              </p>
              <p className="text-8xl font-light text-[#F7F8F8]">
                15<span className="text-4xl text-[#8A8F98]">€/mes</span>
              </p>
              <p className="text-[#5E6AD2] mt-4">
                Toda la familia cubierta · Sin permanencia
              </p>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO */}
        <section className="py-24 bg-[#141415]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image 
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián - Acompañando familias"
                width={600}
                height={450}
                className="rounded-2xl border border-[rgba(255,255,255,0.07)] shadow-[0_0_60px_rgba(94,106,210,0.15)] aspect-[4/3] object-cover"
              />
              <div>
                <p className="text-[#5E6AD2] font-medium mb-3">Tu apoyo en momentos difíciles</p>
                <h2 className="text-3xl font-semibold text-[#F7F8F8] mb-6">
                  Rosa y Sebastián
                </h2>
                <p className="text-lg text-[#8A8F98] leading-relaxed mb-6">
                  &quot;Llevamos +10 años acompañando a familias en los momentos difíciles. 
                  Sabemos lo que significa tener todo resuelto cuando llega el momento.&quot;
                </p>
                <div className="flex flex-wrap gap-3">
                  {["24/7 disponibles", "Gestión en <24h", "DGSFP verificado"].map((item, i) => (
                    <span key={i} className="flex items-center gap-2 text-sm text-[#8A8F98]">
                      <CheckCircle2 className="w-4 h-4 text-[#5E6AD2]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GARANTÍAS — Timeline Linear */}
        <section className="py-24 bg-[#0F0F10]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#F7F8F8] text-center mb-12">
              Garantías que cumplimos
            </h2>
            <div className="space-y-6">
              {[
                { title: "Sin burocracia para la familia", desc: "Una sola llamada, nosotros hacemos el resto" },
                { title: "Disponible 24/7 los 365 días", desc: "Siempre hay alguien para atenderos" },
                { title: "Gestión completa en <24h", desc: "Rapidez cuando más se necesita" },
                { title: "DGSFP: C012479234434D verificado", desc: "Mediadores regulados y de confianza" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)]">
                  <div className="w-8 h-8 rounded-lg bg-[#5E6AD2]/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#5E6AD2]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#F7F8F8] mb-1">{item.title}</h3>
                    <p className="text-[#8A8F98] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-[#141415]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#F7F8F8] text-center mb-12">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {[
                { q: "¿Cubre el fallecimiento en el extranjero?", a: "Sí. Las pólizas que gestionamos incluyen cobertura internacional y traslado del fallecido a España si es necesario. Tu familia no tiene que preocuparse por los trámites ni los costes." },
                { q: "¿Hay que pagar algo en el momento del fallecimiento?", a: "No. Con el seguro de decesos, la familia no tiene que pagar nada en el momento. Todas las facturas van directamente a la compañía aseguradora. Nosotros nos encargamos de toda la gestión." },
                { q: "¿Cubre toda la familia con una sola póliza?", a: "Dependiendo de la modalidad contratada, hay pólizas individuales y pólizas familiares. Te asesoramos para elegir la opción más económica según tu situación familiar." },
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.04)] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[rgba(255,255,255,0.06)] transition-colors">
                    <span className="font-medium text-[#F7F8F8] pr-4">{faq.q}</span>
                    <ArrowRight className="w-5 h-5 text-[#8A8F98] group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-[#8A8F98] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL Linear */}
        <section className="border-t border-[rgba(255,255,255,0.07)] py-24 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-semibold text-[#F7F8F8]">
              Dales tranquilidad hoy.
            </h2>
            <p className="text-[#8A8F98] text-lg mt-4">
              Un WhatsApp. Sin compromiso. Para siempre tranquilo.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-2 bg-[#5E6AD2] hover:bg-[#6B75DB] text-white px-8 py-4 rounded-xl font-medium text-lg mt-8 hover:shadow-[0_0_30px_rgba(94,106,210,0.35)] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp: 603 44 87 65
            </a>
            <p className="text-[#8A8F98]/50 text-sm mt-6">
              NIF: 79234434D | DGSFP: C012479234434D
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
