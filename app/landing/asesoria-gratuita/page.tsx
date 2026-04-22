import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Phone, MessageCircle, Clock, Shield, CheckCircle2, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Asesoría Gratuita Seguros Madrid | Valentín Protección Integral",
  description: "Asesoría gratuita y sin compromiso para seguros en Madrid. Rosa y Sebastián te responden en 30 minutos. WhatsApp, teléfono o videollamada.",
  keywords: ["asesoría gratuita seguros Madrid","consulta seguros gratis Madrid","asesor seguros Boadilla del Monte"],
  alternates: { canonical: "https://valentinproteccionintegral.com/landing/asesoria-gratuita" },
  openGraph: {
    title: "Asesoría Gratuita Seguros Madrid | Valentín Protección Integral",
    description: "Asesoría gratuita y sin compromiso. Te respondemos en 30 minutos.",
    url: "https://valentinproteccionintegral.com/landing/asesoria-gratuita",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Asesoría Gratuita Seguros Madrid",
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
  "description": "Asesoría gratuita y sin compromiso para seguros en Madrid. Respuesta en 30 minutos.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es realmente gratuita la asesoría?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí, la asesoría es 100% gratuita y sin compromiso. No cobramos por analizar tu situación y recomendarte las mejores opciones. Solo si decides contratar a través de nosotros, la comisión la recibe la compañía aseguradora, nunca tú." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tardan en responder?",
      "acceptedAnswer": { "@type": "Answer", "text": "Respondemos en menos de 30 minutos en horario habitual (L-V 9:00-19:00). Si nos escribes fuera de horario, te contestamos al siguiente día laborable primero hora." }
    },
    {
      "@type": "Question",
      "name": "¿Hay compromiso de contratación?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ninguno. La asesoría es gratuita y sin presión. Te explicamos tus opciones con claridad y tú decides sin compromiso. Trabajamos para ti, no para la compañía." }
    }
  ]
};

export const dynamic = "force-static";

export default function AsesoriaPage() {
  const wRosa = buildWhatsAppHref("Hola, quiero una asesoría gratuita sobre seguros. ¿Podéis ayudarme?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Asesoría Gratuita",url:"/landing/asesoria-gratuita"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO INTERCOM */}
        <section className="bg-gradient-to-b from-[#EFF6FF] to-white py-20 lg:py-28">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <span className="inline-block bg-[#DBEAFE] text-[#1D4ED8] px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                  Asesoría 100% gratuita y sin compromiso
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1A1A2E] tracking-tight mb-6 leading-tight">
                  Cuéntanos qué necesitas.
                  <br />
                  <span className="text-[#1F8EFA]">
                    Te respondemos en 30 minutos.
                  </span>
                </h1>
                <p className="text-xl text-[#6B7280] font-normal leading-relaxed mb-8">
                  Rosa y Sebastián, asesores independientes con +10 años de experiencia. 
                  Sin letra pequeña, sin presión, sin coste.
                </p>
                
                {/* Chat Bubble Intercom */}
                <div className="bg-white rounded-2xl shadow-lg border border-[#E5E7EB] p-6 max-w-md">
                  <div className="flex items-start gap-3 mb-4">
                    <Image 
                      src="/images/rosa_y_sebastian.jpeg" 
                      alt="Rosa Valentín"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="bg-[#EFF6FF] rounded-2xl rounded-tl-sm px-4 py-3">
                      <p className="text-sm text-[#1A1A2E]">
                        "Hola 👋 Soy Rosa. ¿En qué te puedo ayudar hoy?"
                      </p>
                    </div>
                  </div>
                  <a 
                    href={wRosa}
                    className="w-full flex items-center justify-center gap-2 bg-[#1F8EFA] hover:bg-[#0070F3] text-white rounded-xl py-3 font-medium transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    💬 Escribir a Rosa ahora
                  </a>
                </div>
              </div>
              
              {/* Right: Pexels Image */}
              <div className="hidden lg:block relative">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Asesoría seguros amigable consulta profesional"
                  width={500}
                  height={600}
                  className="rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO 3 PASOS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#1A1A2E] mb-4">Así de fácil</h2>
              <p className="text-lg text-[#6B7280]">Tres pasos, cero complicaciones</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "1", title: "Nos cuentas", desc: "Tu situación, necesidades y presupuesto. WhatsApp, teléfono o videollamada." },
                { num: "2", title: "Analizamos", desc: "Comparamos entre las principales compañías. Sin ataduras, sin intereses ocultos." },
                { num: "3", title: "Te protegemos", desc: "Recibes propuestas claras. Tú decides. Nosotros gestionamos todo el papeleo." },
              ].map((step, i) => (
                <div key={i} className="bg-white rounded-2xl border border-[#E5E7EB] p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#DBEAFE] flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#1D4ED8]">{step.num}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">{step.title}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO + TRUST */}
        <section className="py-20 bg-[#F9FAFB]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image 
                src="/images/rosa_y_sebastian.jpeg" 
                alt="Rosa y Sebastián - Tu equipo de asesores"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl object-cover"
              />
              <div>
                <h2 className="text-3xl font-semibold text-[#1A1A2E] mb-6">Tu asesor, siempre el mismo</h2>
                <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
                  No un call center. No un operador diferente cada vez. Rosa o Sebastián serán 
                  tu interlocutor único durante todo el proceso — y después también.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E7EB]">
                    <Clock className="w-4 h-4 text-[#1F8EFA]" />
                    <span className="text-sm font-medium text-[#1A1A2E]">10+ años</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E7EB]">
                    <Users className="w-4 h-4 text-[#1F8EFA]" />
                    <span className="text-sm font-medium text-[#1A1A2E]">+1.200 familias</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E7EB]">
                    <Shield className="w-4 h-4 text-[#1F8EFA]" />
                    <span className="text-sm font-medium text-[#1A1A2E]">DGSFP C012479234434D</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ INTERCOM */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#1A1A2E] mb-12 text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Es realmente gratuita la asesoría?", a: "Sí, la asesoría es 100% gratuita y sin compromiso. No cobramos por analizar tu situación y recomendarte las mejores opciones. Solo si decides contratar a través de nosotros, la comisión la recibe la compañía aseguradora, nunca tú." },
                { q: "¿Cuánto tardan en responder?", a: "Respondemos en menos de 30 minutos en horario habitual (L-V 9:00-19:00). Si nos escribes fuera de horario, te contestamos al siguiente día laborable primero hora." },
                { q: "¿Hay compromiso de contratación?", a: "Ninguno. La asesoría es gratuita y sin presión. Te explicamos tus opciones con claridad y tú decides sin compromiso. Trabajamos para ti, no para la compañía." },
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl border border-[#E5E7EB] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#F9FAFB] transition-colors">
                    <span className="font-medium text-[#1A1A2E] pr-4">{faq.q}</span>
                    <ArrowRight className="w-5 h-5 text-[#6B7280] group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-[#6B7280] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL INTERCOM */}
        <section className="bg-[#1F8EFA] py-20 text-center">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-semibold text-white mb-4">
              Tu tranquilidad empieza con una pregunta
            </h2>
            <p className="text-xl text-white/80 mb-8">
              WhatsApp, teléfono o videollamada. Como prefieras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={wRosa}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1F8EFA] px-8 py-4 rounded-xl font-medium text-lg hover:shadow-xl transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp: 603 44 87 65
              </a>
              <a 
                href="tel:603448765"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-white/10 transition-all"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
