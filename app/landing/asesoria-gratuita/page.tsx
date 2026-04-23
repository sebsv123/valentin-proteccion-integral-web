import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Users, MessageCircle, Award, TrendingUp, HeartHandshake, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Asesoría Seguros Gratis Madrid | Valentín Protección",
  description: "Asesoría seguros gratuita en Madrid. Salud, vida, hogar, autónomos. Respuesta en 30 minutos. Sin compromiso. WhatsApp directo.",
  keywords: ["asesoria seguros gratis Madrid","asesoramiento seguros Madrid","consulta seguros gratuita"],
  alternates: { canonical: "https://valentinproteccionintegral.com/landing/asesoria-gratuita" },
  openGraph: {
    title: "Asesoría Seguros Gratis Madrid | Valentín Protección",
    description: "Asesoría seguros gratuita en Madrid. Salud, vida, hogar, autónomos. Respuesta en 30 minutos. Sin compromiso. WhatsApp directo.",
    url: "https://valentinproteccionintegral.com/landing/asesoria-gratuita",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Asesoría Seguros GRATIS Madrid - Valentín Protección Integral",
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
  "description": "Asesoría gratuita seguros Madrid. Encuentra el mejor seguro para ti en 30 minutos.",
};

export const dynamic = "force-static";

export default function AsesoriaGratuitaPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero una asesoría gratuita sobre seguros. ¿Podéis ayudarme?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Asesoría Gratuita",url:"/landing/asesoria-gratuita"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Blanco premium con halo naranja suave */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          {/* Halo radial naranja muy suave */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-orange-100/40 via-orange-50/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div className="text-center lg:text-left">
                {/* Badge sobrio */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-sm mb-8">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span className="font-medium">+1.200 personas asesoradas</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">DGSFP verificado</span>
                </div>
                
                {/* H1 fuerte */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
                  Asesoría Seguros Gratis Madrid:
                  <br />
                  <span className="text-orange-500">Respuesta en 30 Minutos</span>
                </h1>
                
                {/* Subheadline clara */}
                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                  Encuentra el mejor seguro para ti en{" "}
                  <span className="font-semibold text-gray-900">30 minutos</span>.
                  <br />
                  Mediadores independientes. Sin compromiso.
                </p>
                
                {/* CTAs elegantes */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" />
                    💬 WhatsApp Ahora
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl text-lg font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    📞 603 44 87 65
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                    100% Gratis
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm">
                    <Clock className="w-4 h-4 text-orange-500" />
                    30 min respuesta
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm">
                    <Shield className="w-4 h-4 text-orange-500" />
                    Sin permanencia
                  </span>
                </div>
              </div>
              
              {/* Right: Imagen con halo sutil */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-amber-50/30 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
                  <Image
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Asesoría seguros profesional Madrid"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS — Cards limpias con borde fino */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] font-bold text-gray-900 leading-tight mb-4">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tres razones claras para confiar en nuestra asesoría
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Users, 
                  title: "Independientes", 
                  desc: "No trabajamos para ninguna aseguradora. Nuestro único objetivo es encontrar lo mejor para ti."
                },
                { 
                  icon: Clock, 
                  title: "Rápidos", 
                  desc: "En 30 minutos conoces todas tus opciones. Sin esperas, sin papeleo, sin complicaciones."
                },
                { 
                  icon: HeartHandshake, 
                  title: "Cercanos", 
                  desc: "Te acompañamos antes, durante y después. Disponibles por WhatsApp siempre que nos necesites."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Blanco puro, foto protagonista */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-transparent rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Tu equipo de asesores"
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover object-[center_20%]"
                    priority
                    style={{ aspectRatio: '1/1' }}
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Mediadores certificados
                </div>
                
                <h2 className="text-[36px] sm:text-[40px] font-bold text-gray-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  +10 años ayudando a familias y profesionales de Madrid a encontrar 
                  la protección adecuada. Conocemos el mercado a fondo y sabemos 
                  dónde está cada cobertura.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">Más de 1.200 personas asesoradas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                    </div>
                    <span className="text-gray-700">95% de clientes satisfechos</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
                  <span className="font-semibold text-gray-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO — Fondo alternado, 3 pasos claros */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] font-bold text-gray-900 leading-tight mb-4">
                Cómo funciona
              </h2>
              <p className="text-lg text-gray-600">
                Tres pasos simples, sin presión
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  num: "01", 
                  title: "WhatsApp", 
                  desc: "Nos cuentas qué necesitas. Sin formularios ni esperas."
                },
                { 
                  num: "02", 
                  title: "Cotización", 
                  desc: "Analizamos el mercado y te damos las mejores opciones en 30 min."
                },
                { 
                  num: "03", 
                  title: "Decisión", 
                  desc: "Tú decides sin presión. Te ayudamos con todo el papeleo si quieres."
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-orange-500/20">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS — Checks y badges naranjas */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] font-bold text-gray-900 leading-tight mb-4">
                Garantías de confianza
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "100% Gratis", desc: "La asesoría no te cuesta nada" },
                { title: "Sin permanencia", desc: "Cambia cuando quieras" },
                { title: "30 min respuesta", desc: "Rápidos y eficientes" },
                { title: "Disponibles 24/7", desc: "WhatsApp siempre abierto" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Fondo blanco con halo naranja cálido */}
        <section className="relative py-24 overflow-hidden">
          {/* Halo naranja suave */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-orange-200/30 via-orange-100/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-gray-900 leading-tight mb-6">
              Tu asesoría gratuita
              <br />
              <span className="text-orange-500">te espera</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Un WhatsApp. 30 minutos. Sin compromiso.
              <br />
              Descubre el seguro que realmente necesitas.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-1"
            >
              <MessageCircle className="w-6 h-6" />
              💬 Empezar Ahora
            </a>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                100% Gratis
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <Clock className="w-4 h-4 text-orange-500" />
                30 min
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-sm shadow-sm">
                <Shield className="w-4 h-4 text-orange-500" />
                Sin compromiso
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mt-8">
              NIF: 79234434D · DGSFP: C012479234434D
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
