import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, TrendingDown, Briefcase, Globe, ChevronDown, Star, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Autónomos Madrid 2026 | IRPF | Valentín",
  description: "Mejor seguro autónomos Madrid 2026. Médico deducible IRPF, RC profesional, accidentes. Mediadores independientes. Cotiza gratis.",
  keywords: "seguro autónomos madrid, seguro médico autónomos irpf, rc profesional madrid, seguro autónomos deducible, protección autónomos madrid",
  alternates: { canonical: "https://valentinproteccionintegral.com/autonomos" },
  openGraph: {
    title: "Seguros Autónomos Madrid 2026 | IRPF | Valentín",
    description: "Mejor seguro autónomos Madrid 2026. Médico deducible IRPF, RC profesional, accidentes. Mediadores independientes. Cotiza gratis.",
    url: "https://valentinproteccionintegral.com/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros Autónomos Madrid - Valentín Protección Integral",
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
  "description": "Seguros autónomos Madrid 2026. IRPF deducible 100%, RC profesional, accidentes. Cotiza WhatsApp.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El seguro médico es 100% deducible en IRPF para autónomos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, como autónomo puedes deducirte el 100% de la prima del seguro médico en tu IRPF. Es una deducción fiscal directa que reduce tu base imponible."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si tengo un accidente siendo autónomo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sin seguro de accidentes, como autónomo no tienes prestación por incapacidad. Con nuestro seguro, cobertura desde el primer día incluyendo incapacidad temporal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Necesito RC profesional como autónomo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si ejerces una profesión donde puedes cometer errores (consultoría, IT, diseño...), la RC profesional protege tu patrimonio personal ante reclamaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en activarse la cobertura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La cobertura de accidentes y urgencias es inmediata. Para salud y otras coberturas, depende de la compañía, pero te informamos antes de contratar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay permanencia en los seguros para autónomos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Todos nuestros seguros para autónomos son sin permanencia. Puedes cancelar cuando quieras sin penalización."
      }
    }
  ]
};

export const dynamic = "force-static";

export default function AutonomosRootPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy autónomo y quiero información sobre seguros deducibles IRPF en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Autónomos",url:"/autonomos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO STRIPE — Purple gradients, weight-300 */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#635BFF] to-[#96F7D6] opacity-[0.15] blur-[150px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#635BFF] to-[#ea2261] opacity-[0.1] blur-[120px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(99,91,255,0.4)] bg-[rgba(99,91,255,0.15)] text-[#533afd] text-sm mb-6">
                  <Sparkles className="w-4 h-4" />
                  2026 · +1.200 autónomos protegidos · DGSFP
                </div>
                
                {/* H1 Stripe — 56px weight 300 */}
                <h1 className="text-[48px] sm:text-[56px] font-light text-[#061b31] leading-[1.03] tracking-[-1.4px] mb-6">
                  Seguros Autónomos Madrid 2026:
                  <br />
                  <span className="bg-gradient-to-r from-[#635BFF] to-[#96F7D6] bg-clip-text text-transparent font-normal">
                    IRPF, RC y Accidentes
                  </span>
                </h1>
                
                {/* Subhead */}
                <p className="text-xl text-[#64748d] font-light leading-relaxed mb-8 max-w-lg">
                  IRPF deducible + RC profesional + Accidentes.
                  <br />
                  <span className="text-[#533afd] font-normal">Precio adaptado a tu perfil.</span>
                </p>
                
                {/* CTAs Stripe */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="inline-flex items-center gap-2 bg-[#533afd] hover:bg-[#4434d4] text-white px-6 py-3 rounded text-base font-normal transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px,rgba(0,0,0,0.1)_0px_2px_4px_-2px]"
                  >
                    WhatsApp Ahora
                  </a>
                  <Link 
                    href="/seguros/salud-individual"
                    className="inline-flex items-center gap-2 bg-transparent text-[#533afd] px-6 py-3 rounded text-base font-normal border border-[#b9b9f9] hover:bg-[rgba(83,58,253,0.05)] transition-all"
                  >
                    Ver salud individual →
                  </Link>
                </div>
                
                {/* Trust row */}
                <div className="flex flex-wrap gap-6 text-sm text-[#64748d]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#15be53]" />
                    Deducible IRPF 100%
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#533afd]" />
                    30 min respuesta
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#533afd]" />
                    Sin permanencia
                  </span>
                </div>
              </div>
              
              {/* Right: Hero Image */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_30px_45px_-30px,rgba(0,0,0,0.1)_0px_18px_36px_-18px]">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Autónomo profesional laptop Madrid 2026"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.1)_0px_8px_16px_-8px] border border-[#e5edf5]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#533afd]/10 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-[#533afd]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#061b31]">Ahorro fiscal 2026</p>
                      <p className="text-xs text-[#64748d]">Ahorro fiscal real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IRPF EXPLICADO — Stripe cards */}
        <section className="py-20 border-t border-[#e5edf5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-4">
              ¿Cómo funciona la deducción?
            </h2>
            <p className="text-lg text-[#64748d] text-center mb-12">
              Aprovecha al máximo tu IRPF 2026
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { num: "01", title: "100% deducible", desc: "Toda la prima de tu seguro médico es deducible en IRPF como gasto profesional." },
                { num: "02", title: "Factura Hacienda", desc: "Te emitimos factura con IVA incluido, válida para la Agencia Tributaria." },
                { num: "03", title: "Ejemplo real", desc: "La mitad de tu prima de salud te la devuelve Hacienda. Tu seguro cuesta menos de lo que crees." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#e5edf5] shadow-[rgba(50,50,93,0.25)_0px_13px_27px_-5px,rgba(0,0,0,0.1)_0px_8px_16px_-8px]">
                  <span className="text-[#533afd] text-sm font-medium">{item.num}</span>
                  <h3 className="text-lg font-light text-[#061b31] mt-2 mb-3">{item.title}</h3>
                  <p className="text-sm text-[#64748d] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANES — Stripe pricing */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Planes para autónomos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  name: "BÁSICO", 
                  price: "Adaptado",
                  period: "/mes",
                  features: ["Salud privada IRPF deducible", "Especialistas ilimitados", "Urgencias 24h"],
                  cta: "Elegir Básico",
                  popular: false
                },
                { 
                  name: "PRO", 
                  price: "Adaptado",
                  period: "/mes",
                  features: ["Todo lo de Básico", "RC profesional incluida", "Accidentes laboral/extra", "Cobertura internacional UE"],
                  cta: "Elegir Pro",
                  popular: true
                },
                { 
                  name: "ENTERPRISE", 
                  price: "Adaptado",
                  period: "/mes",
                  features: ["Todo ilimitado", "RC profesional ampliada", "Accidentes premium", "Asesor fiscal incluido"],
                  cta: "Elegir Enterprise",
                  popular: false
                },
              ].map((plan, i) => (
                <div key={i} className={`bg-white rounded-lg p-6 border ${plan.popular ? 'border-[#533afd] ring-1 ring-[#533afd]' : 'border-[#e5edf5]'} shadow-[rgba(23,23,23,0.08)_0px_15px_35px]`}>
                  {plan.popular && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[rgba(21,190,83,0.2)] border border-[rgba(21,190,83,0.4)] text-[#108c3d] text-xs mb-4">
                      <Star className="w-3 h-3" />
                      Más popular
                    </div>
                  )}
                  <h3 className="text-lg font-medium text-[#061b31]">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2 mb-4">
                    <span className="text-3xl font-light text-[#061b31]">{plan.price}</span>
                    <span className="text-sm text-[#64748d]">{plan.period}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#64748d]">
                        <CheckCircle2 className="w-4 h-4 text-[#15be53] mt-0.5" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={wCotiza}
                    className={`block w-full text-center py-2.5 rounded text-sm font-medium transition-all ${plan.popular ? 'bg-[#533afd] text-white hover:bg-[#4434d4]' : 'bg-[#f6f9fc] text-[#061b31] hover:bg-[#e5edf5]'}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Stripe grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Cobertura completa
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: TrendingDown, title: "IRPF médico", desc: "100% deducible" },
                { icon: Shield, title: "RC profesional", desc: "Errores cubiertos" },
                { icon: Briefcase, title: "Accidentes", desc: "Laboral/extra" },
                { icon: Globe, title: "Internacional", desc: "Cobertura UE" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-5 border border-[#e5edf5] hover:border-[#533afd]/30 transition-all">
                  <div className="w-10 h-10 rounded bg-[#f6f9fc] flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-[#533afd]" />
                  </div>
                  <h3 className="text-base font-medium text-[#061b31] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#64748d]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIOS — Stripe carousel style */}
        <section className="py-20 bg-[#f6f9fc]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Lo que dicen los autónomos
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  quote: "Me ahorré casi 300€ en IRPF el año pasado. El seguro me salió gratis de lo que me devolvió Hacienda.", 
                  author: "Carlos M.", 
                  role: "Consultor IT, Madrid",
                  stars: 5
                },
                { 
                  quote: "Tuve un accidente en obra y el seguro cubrió todos los gastos más la baja. Me salvó el año.", 
                  author: "Laura S.", 
                  role: "Arquitecta técnica",
                  stars: 5
                },
                { 
                  quote: "La RC profesional me da tranquilidad. Un error en un informe podría costarme miles sin ella.", 
                  author: "Miguel A.", 
                  role: "Asesor fiscal",
                  stars: 5
                },
              ].map((testimonial, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-[#e5edf5] shadow-[rgba(23,23,23,0.06)_0px_15px_35px]">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#ea2261] text-[#ea2261]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#533afd]/20 mb-3" />
                  <p className="text-sm text-[#061b31] leading-relaxed mb-4">{testimonial.quote}</p>
                  <div className="border-t border-[#e5edf5] pt-4">
                    <p className="text-sm font-medium text-[#061b31]">{testimonial.author}</p>
                    <p className="text-xs text-[#64748d]">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — Stripe accordion */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-[32px] font-light text-[#061b31] leading-[1.10] tracking-[-0.64px] text-center mb-12">
              Preguntas frecuentes
            </h2>
            
            <div className="space-y-4">
              {[
                { 
                  q: "¿El seguro médico es 100% deducible en IRPF para autónomos?", 
                  a: "Sí, como autónomo puedes deducirte el 100% de la prima del seguro médico en tu IRPF. Es una deducción fiscal directa que reduce tu base imponible." 
                },
                { 
                  q: "¿Qué pasa si tengo un accidente siendo autónomo?", 
                  a: "Sin seguro de accidentes, como autónomo no tienes prestación por incapacidad. Con nuestro seguro, cobertura desde el primer día incluyendo incapacidad temporal." 
                },
                { 
                  q: "¿Necesito RC profesional como autónomo?", 
                  a: "Si ejerces una profesión donde puedes cometer errores (consultoría, IT, diseño...), la RC profesional protege tu patrimonio personal ante reclamaciones." 
                },
                { 
                  q: "¿Cuánto tarda en activarse la cobertura?", 
                  a: "La cobertura de accidentes y urgencias es inmediata. Para salud y otras coberturas, depende de la compañía, pero te informamos antes de contratar." 
                },
                { 
                  q: "¿Hay permanencia en los seguros para autónomos?", 
                  a: "No. Todos nuestros seguros para autónomos son sin permanencia. Puedes cancelar cuando quieras sin penalización." 
                },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-lg border border-[#e5edf5] shadow-[rgba(23,23,23,0.06)_0px_15px_35px] overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <span className="text-sm font-medium text-[#061b31]">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[#64748d] transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-[#64748d] leading-relaxed border-t border-[#e5edf5] pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Stripe dark section */}
        <section className="py-24 bg-[#1c1e54]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[48px] sm:text-[56px] font-light text-white leading-[1.03] tracking-[-1.4px] mb-4">
              Protege tu negocio
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Un WhatsApp. 30 minutos. Todo optimizado para 2026.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-2 bg-[#533afd] hover:bg-[#665efd] text-white px-8 py-4 rounded text-lg font-medium transition-all shadow-[rgba(50,50,93,0.25)_0px_4px_8px_-2px]"
              >
                Cotizar WhatsApp
              </a>
              <a 
                href="tel:603448765"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded text-lg font-medium border border-white/30 transition-all"
              >
                📞 603 44 87 65
              </a>
            </div>
            
            <p className="text-sm text-white/40 mt-8">
              NIF: 79234434D · DGSFP: C012479234434D · +1.200 autónomos protegidos
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
