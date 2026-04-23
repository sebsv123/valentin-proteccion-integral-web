import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Médico NIE/TIE Extranjeros Madrid | Valentín",
  description: "+100 aprobados. Cumple extranjería 2026. Latinos/EEUU. Seguro médico residencia España con certificado para NIE/TIE Madrid.",
  keywords: ["seguro médico NIE España","seguro residencia Madrid latinos 2026","seguro médico extranjeros","NIE TIE seguro Madrid","seguro extranjería España"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-extranjeros" },
  openGraph: {
    title: "Seguro Médico NIE/TIE Extranjeros Madrid | Valentín",
    description: "+100 aprobados. Cumple extranjería 2026. Latinos/EEUU. Seguro médico residencia España con certificado para NIE/TIE Madrid.",
    url: "https://valentinproteccionintegral.com/seguros/salud-extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Médico NIE/TIE Extranjeros Madrid - Valentín Protección Integral",
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
  "description": "Seguro médico residencia España 2026. Cumple requisitos NIE/TIE. +100 clientes latinos/EEUU aprobados. Certificado 24h.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Necesito NIE para contratar el seguro de salud?",
      "acceptedAnswer": { "@type": "Answer", "text": "No siempre es obligatorio. Te asesoramos según tu situación particular. Algunas modalidades permiten contratación con pasaporte. Escríbenos por WhatsApp y estudiamos tu caso en 30 minutos." }
    },
    {
      "@type": "Question",
      "name": "Do I need to speak Spanish?",
      "acceptedAnswer": { "@type": "Answer", "text": "No, we speak English. Rosa and Sebastián can assist you in English throughout the entire process." }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo empieza la cobertura?",
      "acceptedAnswer": { "@type": "Answer", "text": "La cobertura comienza entre 24-48 horas después de la contratación, dependiendo de la compañía y modalidad elegida. Algunas coberturas específicas pueden tener carencias mínimas que te explicamos antes de contratar." }
    }
  ]
};

export const dynamic = "force-static";

export default function SaludExtranjerosPage() {
  const wCotiza = buildWhatsAppHref("Hello, I'm a foreigner living in Madrid and I need health insurance. Can you help me?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Extranjeros",url:"/seguros/salud-extranjeros"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — NIE/TIE Optimized */}
        <section className="bg-white pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl text-center">
            
            {/* H1 Optimized */}
            <h1 className="text-4xl md:text-6xl font-bold text-[#163300] tracking-tight leading-[1.05] max-w-4xl mx-auto mb-6">
              Seguro de Salud para Extranjeros
              <br />
              <span className="text-[#2E7D32]">en Madrid</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed mb-8">
              Sin lista de espera. Cobertura desde el primer día. Te ayudamos en español con todo el proceso.
            </p>

            {/* Guarantee Badge */}
            <GuaranteeBadge type="salud-extranjeros" />

            {/* Hero Image — Healthcare for internationals */}
            <div className="rounded-3xl shadow-2xl overflow-hidden border border-[#E5E7EB] max-w-2xl mx-auto mt-8">
              <Image
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Seguro médico internacional para extranjeros en Madrid — Profesional sanitario"
                width={600}
                height={400}
                priority
                className="w-full h-auto object-cover object-center"
                style={{ aspectRatio: '3/2' }}
              />
            </div>
          </div>
        </section>

        {/* REQUISITOS EXTRANJERÍA */}
        <section className="bg-[#F7F8F9] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-[#163300] mb-4">
              Requisitos Extranjería Cumplidos ✅
            </h2>
            <p className="text-center text-[#4B5563] mb-12 max-w-2xl mx-auto">
              Póliza 100% válida para NIE, TIE, renovaciones y reagrupación familiar
            </p>

            <div className="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#163300] text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">Requisito</th>
                    <th className="py-4 px-6 text-left font-semibold">Nuestra Póliza</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-4 px-6 text-[#4B5563]">Sin copagos/carencias</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ Día 1</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
                    <td className="py-4 px-6 text-[#4B5563]">Cobertura nacional</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ + Internacional 190 países</td>
                  </tr>
                  <tr className="border-b border-[#E5E7EB]">
                    <td className="py-4 px-6 text-[#4B5563]">Certificado consulado</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ PDF 24h</td>
                  </tr>
                  <tr className="bg-[#F9FAFB]">
                    <td className="py-4 px-6 text-[#4B5563]">Estudiantes/no lucrativo/nómada digital</td>
                    <td className="py-4 px-6 font-semibold text-[#2E7D32]">✅ Todos visados</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* COBERTURAS — Grid Wise clean */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-4xl font-semibold text-[#163300] mb-12 text-center">
              Qué incluye tu seguro
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🏥", title: "Médico general", desc: "Sin derivaciones" },
                { icon: "🔬", title: "Especialistas", desc: "Acceso directo" },
                { icon: "🚑", title: "Urgencias 24h", desc: "En toda España" },
                { icon: "💊", title: "Analíticas", desc: "Sin coste adicional" },
                { icon: "🏋️", title: "Fisioterapia", desc: "Según modalidad" },
                { icon: "🧠", title: "Psicología", desc: "Según modalidad" },
                { icon: "👶", title: "Pediatría", desc: "Para toda la familia" },
                { icon: "🦷", title: "+ Dental", desc: "Pack opcional" }
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

        {/* GARANTÍA RESPUESTA — Fondo diferenciado */}
        <section className="py-20 bg-gradient-to-br from-[#F0FAE5] via-[#E8F5E9] to-[#F1F8E9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-[#9FE870]/20 border border-[#C8E6C9]">
              <h2 className="text-[36px] sm:text-[44px] font-bold text-[#163300] leading-tight mb-6 text-center">
                ¿Y si no te respondemos en 30 minutos?
              </h2>
              
              <p className="text-xl text-[#4B5563] leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Rosa o Sebastián te llaman directamente.
                <br />
                Sin esperas. Sin centralitas. Sin excusas.
                <br />
                <span className="text-[#2E7D32] font-semibold">Nadie en el sector ofrece esta garantía. Nosotros sí.</span>
              </p>
              
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa Valentín"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#163300]">Rosa Valentín</p>
                  <p className="text-sm text-[#4B5563]">Mediadora DGSFP · NIF 79234434D</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO Wise cálido */}
        <section className="bg-[#F7F8F9] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl shadow-2xl overflow-hidden border border-[#E5E7EB]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián — Tu equipo en Madrid"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-[center_20%]"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div>
                <p className="text-[#2E7D32] font-medium mb-3 uppercase tracking-widest text-sm">
                  Tu equipo local en Madrid
                </p>
                <h2 className="text-4xl font-semibold text-[#163300] leading-tight">
                  Rosa y Sebastián.
                  <br/>
                  Hablan tu idioma.
                </h2>
                <p className="text-[#4B5563] text-lg mt-6 leading-relaxed">
                  +10 años ayudando a extranjeros residentes en Madrid
                  a encontrar la cobertura médica que necesitan.
                  Sin burocracia. Sin sorpresas. En tu idioma.
                </p>
                {/* Trust badges */}
                <div className="flex gap-4 mt-8 flex-wrap">
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ DGSFP: C012479234434D
                  </span>
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ +1.200 clientes protegidos
                  </span>
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ English spoken
                  </span>
                </div>
                <a 
                  href={wCotiza}
                  className="mt-8 inline-flex items-center gap-3 bg-[#163300] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#1a3d00] transition-all"
                >
                  Habla con nosotros
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO SENCILLO — 3 pasos Wise */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-4xl font-semibold text-center text-[#163300] mb-12">
              Tan fácil como 1, 2, 3
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Nos cuentas", desc: "Tu situación por WhatsApp. En tu idioma." },
                { num: "02", title: "Buscamos", desc: "La mejor opción entre todas las compañías para ti." },
                { num: "03", title: "Gestionamos", desc: "Todo nosotros. Sin papeleo para ti." }
              ].map((paso, i) => (
                <div key={i} className="text-center">
                  <p className="text-6xl font-bold text-[#9FE870] mb-4">{paso.num}</p>
                  <h3 className="text-xl font-semibold text-[#163300]">{paso.title}</h3>
                  <p className="text-[#4B5563] mt-2">{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ BILINGÜE */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#163300] text-center mb-12">
              Preguntas frecuentes / FAQ
            </h2>
            <div className="space-y-4">
              {[
                { q: "¿Necesito NIE para contratar el seguro de salud?", a: "No siempre es obligatorio. Te asesoramos según tu situación particular. Algunas modalidades permiten contratación con pasaporte. Escríbenos por WhatsApp y estudiamos tu caso en 30 minutos." },
                { q: "Do I need to speak Spanish?", a: "No, we speak English. Rosa and Sebastián can assist you in English throughout the entire process." },
                { q: "¿Cuándo empieza la cobertura?", a: "La cobertura comienza entre 24-48 horas después de la contratación, dependiendo de la compañía y modalidad elegida. Algunas coberturas específicas pueden tener carencias mínimas que te explicamos antes de contratar." },
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl border border-[#E5E7EB] bg-white overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#F7F8F9] transition-colors">
                    <span className="font-medium text-[#163300] pr-4">{faq.q}</span>
                    <ArrowRight className="w-5 h-5 text-[#4B5563] group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-[#4B5563] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION — Certificado Residencia */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163300] mb-4">
              Presupuesto + Certificado Residencia
            </h2>
            <p className="text-lg text-[#4B5563] mb-8">
              Recibe tu póliza y certificado para extranjería en menos de 24 horas
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
                seguro médico NIE España
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                seguro residencia Madrid latinos 2026
              </span>
            </div>
            <p className="text-[#4B5563]/60 text-sm mt-6">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes extranjeros sobre seguro médico" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#16a34a" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
