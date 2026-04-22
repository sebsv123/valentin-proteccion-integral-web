import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Phone, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Dental Madrid Carencias Mínimas | Valentín Protección Integral",
  description: "Seguro dental completo en Madrid. Revisiones, ortodoncia, implantes. Carencias mínimas del mercado, sin listas de espera. Desde 9€/mes. Rosa y Sebastián.",
  keywords: ["seguro dental Madrid","seguro dental sin carencias","ortodoncia seguro dental","implantes dentales seguro"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-dental" },
  openGraph: {
    title: "Seguro Dental Madrid Carencias Mínimas | Valentín Protección Integral",
    description: "Dental completo: revisiones, ortodoncia, implantes. Sin carencias. Desde 9€/mes.",
    url: "https://valentinproteccionintegral.com/seguros/salud-dental",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Dental Madrid - Valentín Protección Integral",
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
  "description": "Seguro dental completo en Madrid. Revisiones, ortodoncia, implantes. Carencias mínimas.",
  "medicalSpecialty": "Dentistry"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Hay periodo de carencia en el seguro dental?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las opciones que gestionamos tienen el mínimo periodo de carencia del mercado. Algunas coberturas como revisiones y limpiezas están disponibles casi desde el día 1. La ortodoncia y implantes pueden tener carencias reducidas. Te explicamos cada cobertura con claridad antes de contratar." }
    },
    {
      "@type": "Question",
      "name": "¿Cubre el seguro dental la ortodoncia para adultos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Hay modalidades de seguro dental que incluyen ortodoncia para adultos con importantes descuentos sobre el precio de mercado (que suele oscilar entre 3.000€ y 6.000€). Te asesoramos para encontrar la opción que mejor se adapte a tus necesidades." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona el seguro dental en toda España?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Las pólizas que gestionamos tienen red nacional de clínicas dentales, por lo que puedes usar tu seguro en cualquier parte de España, no solo en Madrid. Muchas también tienen cobertura en el extranjero para emergencias." }
    }
  ]
};

export const dynamic = "force-static";

export default function SaludDentalPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro dental en Madrid. Me interesa ortodoncia/implantes.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Dental",url:"/seguros/salud-dental"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO MINTLIFY */}
        <section className="bg-gradient-to-b from-[#F0F9FF] to-white py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0284C7] px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4" />
              Carencias mínimas · Sin listas de espera
            </span>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#0F172A] tracking-tight mt-6 leading-tight">
              Tu sonrisa,
              <br />
              <span className="text-[#0EA5E9]">protegida desde hoy.</span>
            </h1>
            
            <p className="text-xl text-[#64748B] mt-6 max-w-2xl mx-auto leading-relaxed">
              Dental completo en Madrid sin sorpresas. 
              Revisiones, ortodoncia, implantes. Desde 9€/mes.
            </p>
            
            {/* CTAs dobles */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a 
                href={wCotiza}
                className="inline-flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-8 py-4 rounded-xl font-medium text-lg transition-all hover:scale-[1.02] shadow-[0_8px_30px_rgba(14,165,233,0.3)]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Cotiza Dental WhatsApp
              </a>
              <a 
                href="tel:603448765"
                className="inline-flex items-center justify-center gap-2 border border-[#E2E8F0] text-[#0F172A] px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#F8FAFC] transition-all"
              >
                <Phone className="w-5 h-5" />
                Llamar ahora
              </a>
            </div>
            
            {/* Hero Pexels Image */}
            <Image 
              src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Sonrisa hermosa clinica dental limpia blanca"
              width={1200}
              height={525}
              className="w-full rounded-3xl mt-16 aspect-[16/7] object-cover object-top shadow-[0_40px_80px_rgba(14,165,233,0.12)] border border-[#E0F2FE]"
              priority
            />
          </div>
        </section>

        {/* COBERTURAS Mintlify */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-3xl font-semibold text-[#0F172A] text-center mb-12">
              Todo lo que incluye
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🦷", title: "Revisiones", desc: "Anuales incluidas sin límite" },
                { icon: "🔬", title: "Ortodoncia", desc: "Descuentos hasta 50%" },
                { icon: "🪥", title: "Implantes", desc: "Cobertura progresiva" },
                { icon: "🧹", title: "Limpieza", desc: "Bianual incluida" },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#0EA5E9] hover:shadow-lg transition-all group text-center">
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="font-semibold text-[#0F172A]">{item.title}</h3>
                  <p className="text-[#64748B] text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS DENTALES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-[#F0F9FF] rounded-3xl py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-[#0EA5E9]">0</p>
                <p className="text-[#64748B] mt-1">días de carencia inicial</p>
              </div>
              <div className="text-center md:border-x border-[#E2E8F0]">
                <p className="text-5xl font-bold text-[#0EA5E9]">9€</p>
                <p className="text-[#64748B] mt-1">desde al mes</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-[#0EA5E9]">30'</p>
                <p className="text-[#64748B] mt-1">cotización máxima</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARATIVA TABLA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <h2 className="text-3xl font-semibold text-[#0F172A] text-center mb-12">
              Ahorro real vs sin seguro
            </h2>
            <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#F8FAFC]">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-[#0F172A]">Cobertura</th>
                    <th className="px-6 py-4 text-left font-semibold text-[#64748B]">Sin seguro</th>
                    <th className="px-6 py-4 text-left font-semibold text-[#0EA5E9]">Con nosotros</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E8F0]">
                  <tr>
                    <td className="px-6 py-4 text-[#0F172A]">Revisión anual</td>
                    <td className="px-6 py-4 text-[#64748B]">80-120€</td>
                    <td className="px-6 py-4 font-medium text-[#0EA5E9]">Incluida</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-[#0F172A]">Limpieza bucal</td>
                    <td className="px-6 py-4 text-[#64748B]">60-90€</td>
                    <td className="px-6 py-4 font-medium text-[#0EA5E9]">Incluida</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-[#0F172A]">Ortodoncia</td>
                    <td className="px-6 py-4 text-[#64748B]">3.000€+</td>
                    <td className="px-6 py-4 font-medium text-[#0EA5E9]">Cubierta</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-[#0F172A]">Implante</td>
                    <td className="px-6 py-4 text-[#64748B]">1.200€+</td>
                    <td className="px-6 py-4 font-medium text-[#0EA5E9]">Cubiertos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Image 
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián - Tu equipo dental en Madrid"
                width={500}
                height={625}
                className="rounded-3xl shadow-2xl aspect-[4/5] object-cover border border-[#E2E8F0]"
              />
              <div>
                <p className="text-[#0EA5E9] font-medium mb-3">
                  Tu equipo dental en Madrid
                </p>
                <h2 className="text-4xl font-semibold text-[#0F172A] leading-tight">
                  Rosa y Sebastián te asesoran sin coste.
                </h2>
                <p className="text-[#64748B] text-lg mt-4 leading-relaxed">
                  +10 años gestionando seguros dentales en Madrid Oeste.
                  Analizamos tu situación y encontramos la cobertura exacta
                  que necesitas, sin pagar de más.
                </p>
                <a 
                  href={wCotiza}
                  className="inline-flex items-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white px-6 py-3 rounded-xl font-medium mt-8 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Hablar con Rosa ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-3xl">
            <h2 className="text-3xl font-semibold text-[#0F172A] text-center mb-12">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {[
                { q: "¿Hay periodo de carencia en el seguro dental?", a: "Las opciones que gestionamos tienen el mínimo periodo de carencia del mercado. Algunas coberturas como revisiones y limpiezas están disponibles casi desde el día 1. La ortodoncia y implantes pueden tener carencias reducidas. Te explicamos cada cobertura con claridad antes de contratar." },
                { q: "¿Cubre el seguro dental la ortodoncia para adultos?", a: "Sí. Hay modalidades de seguro dental que incluyen ortodoncia para adultos con importantes descuentos sobre el precio de mercado (que suele oscilar entre 3.000€ y 6.000€). Te asesoramos para encontrar la opción que mejor se adapte a tus necesidades." },
                { q: "¿Funciona el seguro dental en toda España?", a: "Sí. Las pólizas que gestionamos tienen red nacional de clínicas dentales, por lo que puedes usar tu seguro en cualquier parte de España, no solo en Madrid. Muchas también tienen cobertura en el extranjero para emergencias." },
                { q: "¿Desde cuándo cubre el seguro?", a: "Las revisiones y limpiezas suelen estar cubiertas casi desde el día 1. Para tratamientos más complejos como ortodoncia o implantes, hay carencias mínimas que te explicamos antes de contratar. No hay sorpresas." },
              ].map((faq, i) => (
                <details key={i} className="group rounded-xl border border-[#E2E8F0] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-[#F8FAFC] transition-colors">
                    <span className="font-medium text-[#0F172A] pr-4">{faq.q}</span>
                    <ArrowRight className="w-5 h-5 text-[#64748B] group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-[#64748B] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-gradient-to-r from-[#0EA5E9] to-[#06B6D4] py-16 px-8 text-center text-white rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Una sonrisa sana no debería ser un lujo
              </h2>
              <p className="text-white/80 mt-4 text-lg">
                WhatsApp → Cotización dental en 30 minutos
              </p>
              <a 
                href={wCotiza}
                className="inline-flex items-center gap-2 bg-white text-[#0EA5E9] px-8 py-4 rounded-xl font-medium text-lg mt-8 hover:bg-[#F8FAFC] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp: 603 44 87 65
              </a>
              <p className="text-white/50 text-sm mt-6">
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
