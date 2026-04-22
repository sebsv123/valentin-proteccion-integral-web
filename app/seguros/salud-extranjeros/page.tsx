import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Globe, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Salud Extranjeros Madrid | Health Insurance Spain | Valentín Protección Integral",
  description: "Seguro médico privado para extranjeros residentes en España. Sin barreras de idioma. Sin burocracia. WhatsApp → Cobertura en 24h. Rosa y Sebastián. We speak English.",
  keywords: ["seguro salud extranjeros Madrid","health insurance Spain","seguro médico extranjeros España","seguro expat Madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-extranjeros" },
  openGraph: {
    title: "Seguro Salud Extranjeros Madrid | Health Insurance Spain",
    description: "Seguro médico privado para extranjeros en Madrid. Sin barreras de idioma. WhatsApp → Cobertura en 24h.",
    url: "https://valentinproteccionintegral.com/seguros/salud-extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Salud Extranjeros Madrid - Valentín Protección Integral",
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
  "description": "Seguro médico privado para extranjeros residentes en España. Sin barreras de idioma. Cobertura en 24h.",
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
        
        {/* HERO WISE — Internacional, multicultural */}
        <section className="bg-white pt-20 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl">
            
            {/* Flags row — impacto visual inmediato */}
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="text-3xl">🇬🇧</span>
              <span className="text-3xl">🇩🇪</span>
              <span className="text-3xl">🇫🇷</span>
              <span className="text-3xl">🇮🇹</span>
              <span className="text-3xl">🇨🇳</span>
              <span className="text-3xl">🇺🇸</span>
              <span className="text-3xl">🇦🇷</span>
              <span className="text-sm text-[#4B5563] ml-2">+40 países de origen</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FAE5] border border-[#9FE870] text-[#163300] text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Seguro salud para extranjeros residentes en España
            </div>

            {/* H1 bilingüe impacto */}
            <h1 className="text-5xl md:text-7xl font-semibold text-[#163300] tracking-tight leading-[1.05] max-w-4xl">
              Living in Spain?
              <br />
              <span className="text-[#2E7D32]">
                Tu salud, cubierta desde hoy.
              </span>
            </h1>

            <p className="text-xl text-[#4B5563] mt-6 max-w-2xl leading-relaxed">
              Seguro médico privado para extranjeros en Madrid.
              Sin barreras de idioma. Sin burocracia. 
              WhatsApp → Cobertura en 24h.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-2 bg-[#163300] hover:bg-[#1a3d00] text-white px-8 py-4 rounded-xl font-medium text-lg transition-all hover:scale-[1.02] shadow-[0_8px_30px_rgba(22,51,0,0.2)]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                💬 Cotiza en WhatsApp
              </a>
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-2 bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#E5F5D0] transition-all"
              >
                🌍 We speak English
              </a>
            </div>

            {/* PEXELS hero */}
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Diverse international people expats Madrid professional"
              width={1200}
              height={525}
              className="w-full rounded-3xl mt-16 aspect-[16/7] object-cover shadow-2xl border border-[#E5E7EB]"
              priority
            />
          </div>
        </section>

        {/* PARA QUIÉN ES — Cards multicultural */}
        <section className="bg-[#F7F8F9] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <p className="text-center text-[#163300] font-medium tracking-widest text-sm uppercase mb-4">
              Diseñado para ti
            </p>
            <h2 className="text-4xl font-semibold text-center text-[#163300] mb-12">
              ¿Eres de los nuestros?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "✈️",
                  title: "Residente extranjero",
                  desc: "Vives en España y necesitas cobertura médica privada sin NIE complicado"
                },
                {
                  icon: "🎓", 
                  title: "Estudiante internacional",
                  desc: "Visado de estudios en Madrid. Cobertura médica obligatoria sin líos"
                },
                {
                  icon: "💼",
                  title: "Profesional expatriado",
                  desc: "Tu empresa te manda a Madrid. Necesitas salud privada desde el primer día"
                }
              ].map((c, i) => (
                <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-8 hover:border-[#9FE870] hover:shadow-lg transition-all">
                  <span className="text-4xl mb-4 block">{c.icon}</span>
                  <h3 className="text-xl font-semibold text-[#163300] mb-3">{c.title}</h3>
                  <p className="text-[#4B5563] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS GLOBALES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="grid grid-cols-3 gap-8 py-16 border-y border-[#E5E7EB]">
              <div className="text-center">
                <p className="text-6xl font-bold text-[#163300]">+40</p>
                <p className="text-[#4B5563] mt-2">países de origen atendidos</p>
              </div>
              <div className="text-center border-x border-[#E5E7EB]">
                <p className="text-6xl font-bold text-[#2E7D32]">24h</p>
                <p className="text-[#4B5563] mt-2">cobertura desde contratación</p>
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold text-[#163300]">0</p>
                <p className="text-[#4B5563] mt-2">barreras de idioma</p>
              </div>
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

        {/* FOTO EQUIPO Wise cálido */}
        <section className="bg-[#F7F8F9] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Image
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián — Tu equipo en Madrid"
                width={500}
                height={625}
                className="rounded-3xl shadow-2xl aspect-[4/5] object-cover border border-[#E5E7EB]"
              />
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
                  <WhatsAppIcon className="w-5 h-5" />
                  💬 Habla con nosotros
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
                { num: "01", title: "WhatsApp", desc: "Nos escribes con tu situación. En tu idioma." },
                { num: "02", title: "Análisis", desc: "En 30 minutos tenemos tu cotización personalizada." },
                { num: "03", title: "Cobertura", desc: "En 24h tienes tu seguro activo. Listo." }
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

        {/* CTA FINAL — Wise verde global */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-[#163300] py-24 text-center text-white rounded-3xl">
              <p className="text-[#9FE870] font-medium tracking-widest uppercase text-sm mb-4">
                Ready to start?
              </p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white">
                Tu salud en Madrid,<br/>resuelta hoy.
              </h2>
              <p className="text-white/70 text-lg mt-4">
                WhatsApp · Sin compromiso · En tu idioma
              </p>
              <a 
                href={wCotiza}
                className="mt-10 inline-flex items-center gap-3 bg-[#9FE870] hover:bg-[#8EDD60] text-[#163300] font-semibold px-10 py-5 rounded-2xl text-xl transition-all hover:scale-[1.02]"
              >
                <WhatsAppIcon className="w-6 h-6" />
                💬 Cotiza ahora — It&apos;s free
              </a>
              <p className="text-white/40 text-sm mt-6">
                NIF: 79234434D | DGSFP: C012479234434D
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
