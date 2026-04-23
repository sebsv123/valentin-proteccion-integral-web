import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, TrendingDown, AlertTriangle, Briefcase, Stethoscope, Umbrella, Award, TrendingUp, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros para Autónomos Madrid | Valentín Protección",
  description: "Seguros adaptados a autónomos Madrid. IRPF, RC, accidentes. Gestión personal con Rosa y Sebastián. Respuesta 30min por WhatsApp.",
  keywords: ["seguros autonomos Madrid","seguro autonomos deducible IRPF","seguro RC autonomos Madrid","proteccion autonomos"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/autonomos" },
  openGraph: {
    title: "Seguros para Autónomos Madrid | Valentín Protección",
    description: "Seguros adaptados a autónomos Madrid. IRPF, RC, accidentes. Gestión personal con Rosa y Sebastián. Respuesta 30min por WhatsApp.",
    url: "https://valentinproteccionintegral.com/para/autonomos",
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
  "description": "Seguros autónomos Madrid. IRPF 100% deducible. Salud, RC profesional, accidentes. Ahorra y protege.",
};

export const dynamic = "force-static";

export default function AutonomosPage() {
  const wCotiza = buildWhatsAppHref("Hola, soy autónomo en Madrid y quiero información sobre seguros deducibles IRPF.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Autónomos",url:"/para/autonomos"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Profesional, tech limpio */}
        <section className="relative pt-20 pb-16 bg-slate-50 overflow-hidden">
          {/* Halo tech sutil */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-gradient-radial from-slate-200/50 via-slate-100/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm mb-8 shadow-sm">
                  <Sparkles className="w-4 h-4 text-slate-700" />
                  <span className="font-medium">+1.200 autónomos protegidos</span>
                  <span className="text-slate-300">|</span>
                  <span>DGSFP</span>
                </div>
                
                {/* H1 */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-slate-900 leading-[0.95] tracking-tight mb-6">
                  Seguros para
                  <br />
                  <span className="text-slate-700">autónomos</span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-2xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                  IRPF 100% deducible.
                  <br />
                  <span className="text-slate-500">Ahorra y protege tu negocio.</span>
                </p>
                
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Cotizar ahora
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-medium border border-slate-200 hover:border-slate-400 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    📞 603 44 87 65
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <TrendingDown className="w-4 h-4 text-green-600" />
                    IRPF deducible
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <Clock className="w-4 h-4 text-slate-700" />
                    30 min gestión
                  </span>
                </div>
              </div>
              
              {/* Right: Profesional */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/40 to-slate-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Autónomo profesional Madrid"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMAS — Lo que enfrenta el autónomo */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                El autónomo está expuesto
              </h2>
              <p className="text-xl text-slate-600">
                Tres riesgos que necesitas cubrir
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: AlertTriangle, 
                  title: "Responsabilidad", 
                  desc: "Un error profesional puede costar miles. Tu patrimonio personal en riesgo."
                },
                { 
                  icon: Stethoscope, 
                  title: "Salud", 
                  desc: "Sin seguro privado, dependes de la lista de espera. Tu negocio no puede parar."
                },
                { 
                  icon: Briefcase, 
                  title: "Accidentes", 
                  desc: "Una baja como autónomo es ingresos a cero. Sin protección, sin renta."
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                    <item.icon className="w-7 h-7 text-slate-700" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS — Útiles para autónomos */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                Coberturas que necesitas
              </h2>
              <p className="text-xl text-slate-600">
                Todo deducible en tu IRPF
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Stethoscope, title: "Salud", desc: "Sin copagos" },
                { icon: Umbrella, title: "RC Profesional", desc: "Errores cubiertos" },
                { icon: AlertTriangle, title: "Accidentes", desc: "Baja protegida" },
                { icon: Shield, title: "Vida", desc: "Hipoteca segura" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 text-center">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VENTAJAS FISCALES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                Ventajas fiscales reales
              </h2>
              <p className="text-xl text-slate-600">
                Tu seguro te cuesta la mitad
              </p>
            </div>
            
            <div className="bg-slate-900 rounded-2xl p-10 text-white">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Ejemplo real</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-slate-700">
                      <span className="text-slate-300">Prima anual seguro salud</span>
                      <span className="font-semibold">Consultar</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-slate-700">
                      <span className="text-slate-300">Deducción IRPF (50%)</span>
                      <span className="font-semibold text-green-400">-50%</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-lg font-semibold">Coste real anual</span>
                      <span className="text-2xl font-bold text-green-400">Mitad de precio</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-green-400 mb-2">50%</div>
                  <p className="text-xl text-slate-300">de ahorro fiscal</p>
                  <p className="text-slate-400 mt-4">El seguro médico de autónomos es 100% deducible en tu IRPF</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EQUIPO */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/40 to-slate-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Especialistas en autónomos"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Especialistas en autónomos
                </div>
                
                <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Entendemos el mundo de los autónomos porque trabajamos con ellos cada día. 
                  Sabemos que cada euro cuenta, por eso optimizamos tus seguros para que 
                  ahorres en impuestos y estés protegido.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-slate-700" />
                    </div>
                    <span className="text-slate-700">+1.200 autónomos ahorrando</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-slate-700" />
                    </div>
                    <span className="text-slate-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-slate-700" />
                    </div>
                    <span className="text-slate-700">Ahorro fiscal garantizado</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
                  <span className="font-semibold text-slate-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative py-24 bg-slate-900 overflow-hidden">
          {/* Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-slate-700/50 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-white leading-tight mb-6">
              Ahorra y protege tu negocio
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Un WhatsApp. 30 minutos. Sin compromiso.
              <br />
              Descubre cuánto puedes ahorrar en tu IRPF.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Calcular ahorro fiscal
            </a>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm">
                <TrendingDown className="w-4 h-4 text-green-400" />
                IRPF deducible
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm">
                <Clock className="w-4 h-4" />
                30 min
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm">
                <Shield className="w-4 h-4" />
                DGSFP verificado
              </div>
            </div>
            
            <p className="text-lg text-slate-500 mt-8">
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
