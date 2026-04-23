import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import { Globe, CheckCircle2, ArrowRight, Quote, Plane, Shield, Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Viaje Temporal Madrid | Desde Salida Aeropuerto",
  description: "Cobertura única desde casa. Temporal <90 días. Protegido desde salida aeropuerto Madrid. Repatriación incluida. Sin franquicia inicial.",
  keywords: ["seguro viaje temporal España","cobertura salida aeropuerto Madrid","seguro viaje 90 días","seguro viaje corto Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/viaje" },
  openGraph: {
    title: "Seguro Viaje Temporal Madrid | Desde Salida Aeropuerto",
    description: "Cobertura única desde casa. Temporal <90 días. Protegido desde salida aeropuerto Madrid. Repatriación incluida.",
    url: "https://valentinproteccionintegral.com/seguros/viaje",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguro Viaje Temporal Madrid - Valentín Protección Integral",
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
  "description": "Seguro viaje temporal España. Cobertura desde salida aeropuerto Madrid. Médica 60.000€ mundial. Sin franquicia. Repatriación incluida.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuándo empieza la cobertura del seguro de viaje?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nuestra cobertura es única: empieza desde que sales de casa hacia el aeropuerto, no desde que llegas al destino. Taxi, demoras, cancelaciones: todo cubierto." }
    },
    {
      "@type": "Question",
      "name": "¿Qué cubre el seguro de viaje temporal?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hasta 60.000€ en gastos médicos mundial, repatriación familiar incluida, sin franquicia los primeros días, y cobertura desde salida de casa. Ideal viajes <90 días." }
    },
    {
      "@type": "Question",
      "name": "Do you speak English for travel insurance?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, we speak English. Rosa and Sebastián can assist you with your travel insurance in English or Spanish. WhatsApp us anytime." }
    }
  ]
};

export const dynamic = "force-static";

export default function ViajePage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de viaje temporal desde Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Viaje Temporal",url:"/seguros/viaje"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Viaje Temporal */}
        <section className="bg-white pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl text-center">
            
            {/* H1 Optimized */}
            <h1 className="text-4xl md:text-6xl font-bold text-[#163300] tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6">
              Seguro Viaje Temporal:
              <br />
              <span className="text-[#2E7D32]">Cobertura desde Salida Aeropuerto Madrid</span>
            </h1>

            {/* Subtitle Bilingual */}
            <p className="text-xl md:text-2xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed mb-4">
              Único: Protegido desde casa (taxi, demora). 24% españoles viajan sin seguro.
            </p>
            <p className="text-lg text-[#4B5563]/80 mb-8">
              Unique coverage: Protected from home. <span className="italic">Cobertura única desde casa.</span>
            </p>

            {/* Guarantee Badge */}
            <GuaranteeBadge type="viaje" />

            {/* Team Image */}
            <div className="rounded-3xl shadow-2xl overflow-hidden border border-[#E5E7EB] max-w-2xl mx-auto mt-8">
              <Image
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián, equipo Valentín Protección Integral Madrid"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-cover object-[center_20%]"
                style={{ aspectRatio: '3/2' }}
              />
            </div>
          </div>
        </section>

        {/* STATS — Viajeros Protegidos */}
        <section className="bg-[#F7F8F9] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-[#E5E7EB]">
              <div className="text-center">
                <p className="text-5xl font-bold text-[#163300]">+1.200</p>
                <p className="text-[#4B5563] mt-2">viajeros protegidos</p>
              </div>
              <div className="text-center border-l border-[#E5E7EB]">
                <p className="text-5xl font-bold text-[#2E7D32]">60k€</p>
                <p className="text-[#4B5563] mt-2">cobertura médica</p>
              </div>
              <div className="text-center border-l border-[#E5E7EB]">
                <p className="text-5xl font-bold text-[#163300]">0€</p>
                <p className="text-[#4B5563] mt-2">franquicia inicial</p>
              </div>
              <div className="text-center border-l border-[#E5E7EB]">
                <p className="text-5xl font-bold text-[#2E7D32]">24h</p>
                <p className="text-[#4B5563] mt-2">asistencia global</p>
              </div>
            </div>
          </div>
        </section>

        {/* VENTAJAS ÚNICAS */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-[#163300] mb-4">
              Por qué Somos Diferentes
            </h2>
            <p className="text-center text-[#4B5563] mb-12 max-w-2xl mx-auto">
              Cobertura única que ningún otro seguro de viaje ofrece en Madrid
            </p>

            <div className="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#163300] text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">Ventaja</th>
                    <th className="py-4 px-6 text-left font-semibold">Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-4 px-6 text-[#4B5563] font-medium">Inicio cobertura</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ Salida casa/España (no llegada)</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                    <td className="py-4 px-6 text-[#4B5563] font-medium">Médica mundial</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ 60.000€ urgencias mundial</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-4 px-6 text-[#4B5563] font-medium">Sin franquicia</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ 0€ primeros días</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                    <td className="py-4 px-6 text-[#4B5563] font-medium">Repatriación</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ Incluida familia</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-[#4B5563] font-medium">Temporal económico</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ &lt;90 días económico</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* EXPERIENCIAS VIAJES */}
        <section className="bg-[#F7F8F9] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#163300] mb-12">
              Experiencias Reales de Viajeros
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
                <Quote className="w-8 h-8 text-[#2E7D32] mb-4" />
                <p className="text-[#163300] text-lg leading-relaxed mb-6">
                  "Accidente taxi aeropuerto cubierto día 1. Ningún otro seguro lo hubiera pagado."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#163300] text-white flex items-center justify-center font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-[#163300]">Ana</p>
                    <p className="text-sm text-[#4B5563]">Canarias→EEUU</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white rounded-2xl p-8 border border-[#E5E7EB] shadow-sm">
                <Quote className="w-8 h-8 text-[#2E7D32] mb-4" />
                <p className="text-[#163300] text-lg leading-relaxed mb-6">
                  "Demora vuelo + hospital 100% reembolsado. La cobertura desde casa salvó mi viaje."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#163300] text-white flex items-center justify-center font-bold">
                    C
                  </div>
                  <div>
                    <p className="font-semibold text-[#163300]">Carlos</p>
                    <p className="text-sm text-[#4B5563]">Madrid→México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESTADÍSTICA IMPACTANTE */}
        <section className="bg-[#163300] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <p className="text-[#9FE870] font-medium tracking-widest uppercase text-sm mb-4">
              Dato 2024
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              4.7M viajeros España
            </h2>
            <p className="text-2xl text-white/80 mb-8">
              ¿Tú sin protección?
            </p>
            <p className="text-white/60">
              24% viaja sin seguro. No seas uno de ellos.
            </p>
          </div>
        </section>

        {/* COBERTURAS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-4xl font-semibold text-[#163300] mb-12 text-center">
              Qué incluye tu seguro de viaje
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "✈️", title: "Desde casa", desc: "Cobertura taxi aeropuerto" },
                { icon: "🏥", title: "Médica", desc: "60.000€ mundial" },
                { icon: "🚁", title: "Repatriación", desc: "Familiar incluida" },
                { icon: "💊", title: "Farmacia", desc: "Urgencias cubiertas" },
                { icon: "🧳", title: "Equipaje", desc: "Pérdida/delay" },
                { icon: "⏰", title: "Demoras", desc: "Vuelo cancelado" },
                { icon: "👨‍👩‍👧", title: "Familiar", desc: "Protección grupo" },
                { icon: "🌍", title: "Mundial", desc: "190 países" }
              ].map((c, i) => (
                <div key={i} className="bg-[#F0FAE5] rounded-2xl p-5 hover:bg-[#E5F5D0] transition-all">
                  <span className="text-2xl mb-3 block">{c.icon}</span>
                  <h4 className="font-semibold text-[#163300] text-sm">{c.title}</h4>
                  <p className="text-[#4B5563] text-xs mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163300] mb-4">
              Presupuesto Viaje Temporal
            </h2>
            <p className="text-lg text-[#4B5563] mb-8">
              Cotiza en 2 minutos. Viaja protegido desde la puerta de casa.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-[#163300] hover:bg-[#1a3d00] text-white font-semibold px-10 py-5 rounded-2xl text-xl transition-all hover:scale-[1.02] shadow-xl"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Solicitar por WhatsApp
            </a>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#4B5563]">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                seguro viaje temporal España
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                cobertura salida aeropuerto Madrid
              </span>
            </div>
            <p className="text-[#4B5563]/60 text-sm mt-6">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#163300] text-center mb-12">
              Preguntas frecuentes / FAQ
            </h2>
            <div className="space-y-4">
              {[
                { q: "¿Cuándo empieza la cobertura del seguro de viaje?", a: "Nuestra cobertura es única: empieza desde que sales de casa hacia el aeropuerto, no desde que llegas al destino. Taxi, demoras, cancelaciones: todo cubierto." },
                { q: "¿Qué cubre el seguro de viaje temporal?", a: "Hasta 60.000€ en gastos médicos mundial, repatriación familiar incluida, sin franquicia los primeros días, y cobertura desde salida de casa. Ideal viajes <90 días." },
                { q: "Do you speak English for travel insurance?", a: "Yes, we speak English. Rosa and Sebastián can assist you with your travel insurance in English or Spanish. WhatsApp us anytime." }
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl border border-[#E5E7EB] bg-[#F7F8F9] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white transition-colors">
                    <span className="font-medium text-[#163300] pr-4">{faq.q}</span>
                    <ArrowRight className="w-5 h-5 text-[#4B5563] group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-[#4B5563] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
