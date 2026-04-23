import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Users, Umbrella, FileCheck, Award, TrendingUp, Phone, HandHeart } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Decesos Madrid | Deja todo resuelto para tu familia | Valentín Protección Integral",
  description: "Seguro de decesos en Madrid. Cubre todos los gastos de sepelio. Tu familia no paga nada, no tramita nada. Solo tiene que llamarnos. Desde 15€/mes.",
  keywords: ["seguro decesos Madrid","seguro gastos sepelio Madrid","seguro fallecimiento Madrid","protección familiar decesos"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/decesos" },
  openGraph: {
    title: "Seguro Decesos Madrid | Deja todo resuelto para tu familia",
    description: "Tu familia no paga nada, no tramita nada. Solo tiene que llamarnos. Cubrimos todo.",
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

export const dynamic = "force-static";

export default function DecesosPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero información sobre seguro de decesos para dejar todo resuelto para mi familia.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Decesos",url:"/seguros/decesos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Limpio, elegante, sobrio */}
        <section className="relative pt-24 pb-20 bg-slate-50/50 overflow-hidden">
          {/* Halo sutil */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-indigo-100/40 via-slate-100/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge credenciales */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm mb-8 shadow-sm">
                  <Sparkles className="w-4 h-4 text-indigo-500" />
                  <span className="font-medium">+500 familias protegidas</span>
                  <span className="text-slate-300">|</span>
                  <span>DGSFP verificado</span>
                </div>
                
                {/* H1 claro */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-slate-900 leading-[0.95] tracking-tight mb-6">
                  Seguro decesos
                  <br />
                  en <span className="text-indigo-600">Madrid</span>
                </h1>
                
                {/* Subheadline emocional */}
                <p className="text-2xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                  Deja todo resuelto para tu familia.
                  <br />
                  <span className="text-slate-500">Ellos no pagan nada. Solo tienen que llamarnos.</span>
                </p>
                
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-10">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    💬 Hablar por WhatsApp
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-medium border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    📞 603 44 87 65
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    Gastos cubiertos al 100%
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <HandHeart className="w-4 h-4 text-indigo-500" />
                    Gestión completa
                  </span>
                </div>
              </div>
              
              {/* Right: Imagen serena */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-slate-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Familia tranquila con previsión"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MENSAJE PRINCIPAL — Qué resuelve */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-[32px] sm:text-[40px] font-bold text-slate-900 leading-tight mb-6">
              En un momento difícil, tu familia merece tranquilidad
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              El seguro de decesos cubre todos los gastos del funeral y deja un capital 
              para quienes más quieres. Tu familia no tendrá que preocuparse por el dinero 
              ni por los trámites en el peor momento.
            </p>
          </div>
        </section>

        {/* BENEFICIOS — 4 cards claras */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] font-bold text-slate-900 leading-tight mb-4">
                Lo que resolvemos por ti
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: Umbrella, 
                  title: "Gastos cubiertos", 
                  desc: "Sepelio, traslado, velatorio. Todo pagado. Nada sale del bolsillo de tu familia."
                },
                { 
                  icon: HandHeart, 
                  title: "Apoyo real", 
                  desc: "Estamos con tu familia desde el primer minuto. Solo tienen que llamarnos una vez."
                },
                { 
                  icon: Shield, 
                  title: "Tranquilidad económica", 
                  desc: "Un funeral puede costar 6.000€ o más. Con nosotros, eso no es un problema."
                },
                { 
                  icon: FileCheck, 
                  title: "Gestión completa", 
                  desc: "Nos ocupamos de todos los trámites. Papeleo, llamadas, gestiones. Todo."
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Sección ordenada */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] font-bold text-slate-900 leading-tight mb-4">
                Cobertura completa
              </h2>
              <p className="text-lg text-slate-600">
                Todo lo que incluye tu seguro de decesos
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { icon: Heart, title: "Gastos de sepelio", desc: "Todo incluido" },
                { icon: Users, title: "Capital", desc: "Hasta 50.000€" },
                { icon: Umbrella, title: "Traslado", desc: "Funerario incluido" },
                { icon: FileCheck, title: "Gestoría", desc: "Trámites cubiertos" },
                { icon: Shield, title: "Repatriación", desc: "Si es necesario" },
                { icon: Clock, title: "Servicio 24h", desc: "Siempre disponible" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-sm">
                    <item.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO — Foto protagonista, acompañamiento */}
        <section className="py-24 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-transparent rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Tu apoyo en momentos difíciles"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6">
                  <HandHeart className="w-4 h-4" />
                  Acompañamiento real
                </div>
                
                <h2 className="text-[36px] sm:text-[40px] font-bold text-slate-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Sabemos lo difícil que es perder a alguien. Por eso estamos aquí: 
                  para que tu familia no tenga que preocuparse por nada más que por despedirse 
                  con tranquilidad. Nosotros nos ocupamos de todo lo demás.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-slate-700">+500 familias acompañadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-slate-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-slate-700">Gestión disponible 24h</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
                  <span className="font-semibold text-slate-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GARANTÍAS — Honestidad y transparencia */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[36px] sm:text-[40px] font-bold text-slate-900 leading-tight mb-4">
                Nuestra promesa
              </h2>
              <p className="text-lg text-slate-600">
                Por qué puedes confiar en nosotros
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Award, 
                  title: "Honestidad", 
                  desc: "Te explicamos todo con claridad. Sin letra pequeña, sin sorpresas."
                },
                { 
                  icon: Users, 
                  title: "Transparencia", 
                  desc: "Sabes exactamente qué cubre tu seguro y cuánto cuesta. Siempre."
                },
                { 
                  icon: HandHeart, 
                  title: "Acompañamiento humano", 
                  desc: "No eres un número. Estamos contigo y con tu familia en cada paso."
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 mx-auto">
                    <item.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL — Suave, claro, directo */}
        <section className="relative py-24 bg-slate-50/50 overflow-hidden">
          {/* Halo sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-indigo-100/40 via-slate-100/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-slate-900 leading-tight mb-6">
              Deja la tranquilidad resuelta
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Un WhatsApp. 30 minutos. Sin compromiso.
              <br />
              Tu familia lo agradecerá.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl shadow-indigo-600/20 hover:shadow-2xl hover:shadow-indigo-600/30 hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-6 h-6" />
              💬 Hablar por WhatsApp
            </a>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                Gastos cubiertos 100%
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <HandHeart className="w-4 h-4 text-indigo-500" />
                Gestión completa
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm shadow-sm">
                <Shield className="w-4 h-4 text-indigo-500" />
                DGSFP verificado
              </div>
            </div>
            
            <p className="text-sm text-slate-400 mt-8">
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
