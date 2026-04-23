import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { Sparkles, CheckCircle2, Clock, Shield, Heart, Home, Users, Baby, User, GraduationCap, Phone, Award, TrendingUp, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros Familiares Madrid | Todo en Uno | Valentín",
  description: "Seguros para familias en Madrid. Salud, vida, dental y hogar en una sola gestión. Cotiza en WhatsApp 30 minutos. Sin permanencia.",
  keywords: ["seguros familias Madrid","seguro familia completa Madrid","seguro salud vida hogar familia"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/familias" },
  openGraph: {
    title: "Seguros Familiares Madrid | Todo en Uno | Valentín",
    description: "Seguros para familias en Madrid. Salud, vida, dental y hogar en una sola gestión. Cotiza en WhatsApp 30 minutos. Sin permanencia.",
    url: "https://valentinproteccionintegral.com/para/familias",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguros Familias Madrid - Valentín Protección Integral",
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
  "description": "Seguros completos para familias Madrid. Salud, vida, hogar organizado en un solo lugar.",
};

export const dynamic = "force-static";

export default function FamiliasPage() {
  const wCotiza = buildWhatsAppHref("Hola, quiero proteger a toda mi familia en Madrid. Salud, vida, hogar.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Para",url:"/para"},{name:"Familias",url:"/para/familias"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Familiar, organizado */}
        <section className="relative pt-20 pb-16 bg-slate-50 overflow-hidden">
          {/* Halo sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-blue-100/40 via-slate-100/20 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm mb-8 shadow-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">+1.200 familias protegidas</span>
                  <span className="text-slate-300">|</span>
                  <span>DGSFP</span>
                </div>
                
                {/* H1 */}
                <h1 className="text-[48px] sm:text-[56px] lg:text-[64px] font-bold text-slate-900 leading-[0.95] tracking-tight mb-6">
                  Protege a tu
                  <br />
                  <span className="text-blue-600">familia</span>
                </h1>
                
                {/* Subheadline */}
                <p className="text-2xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Salud, vida, hogar, mascotas.
                  <br />
                  <span className="text-slate-500">Todo organizado y simple.</span>
                </p>
                
                {/* CTAs */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={wCotiza}
                    className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Proteger mi familia
                  </a>
                  <a 
                    href="tel:603448765"
                    className="inline-flex items-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-medium border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    📞 603 44 87 65
                  </a>
                </div>
                
                {/* Trust pills */}
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <Package className="w-4 h-4 text-blue-600" />
                    Todo en uno
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    30 min gestión
                  </span>
                </div>
              </div>
              
              {/* Right: Familia */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-slate-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Familia feliz protegida Madrid"
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

        {/* PAQUETES POR NECESIDAD */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                Protección por etapas
              </h2>
              <p className="text-xl text-slate-600">
                Lo que necesita tu familia según su momento
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Baby, 
                  title: "Familias jóvenes", 
                  desc: "Salud completa, vida para hipoteca, protección inicial.",
                  color: "bg-green-50 text-green-600"
                },
                { 
                  icon: Users, 
                  title: "Familias con niños", 
                  desc: "Pediatría incluida, salud dental, protección escolar.",
                  color: "bg-blue-50 text-blue-600"
                },
                { 
                  icon: GraduationCap, 
                  title: "Familias maduras", 
                  desc: "Planificación, decesos, salud senior, patrimonio protegido.",
                  color: "bg-purple-50 text-purple-600"
                },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COBERTURAS POR MIEMBRO */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                Protección para cada miembro
              </h2>
              <p className="text-xl text-slate-600">
                Nadie queda fuera
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: User, title: "Padres", desc: "Salud, vida, accidentes" },
                { icon: Baby, title: "Niños", desc: "Pediatría, dental, escolar" },
                { icon: Users, title: "Abuelos", desc: "Geriatría, domicilio" },
                { icon: Heart, title: "Mascotas", desc: "Veterinario completo" },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-100 text-center">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPO Y CONFIANZA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-slate-100/20 rounded-3xl blur-2xl transform scale-95" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián - Tu familia de confianza"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover object-top"
                    priority
                  />
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                  <Award className="w-4 h-4" />
                  Especialistas en familias
                </div>
                
                <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-6">
                  Rosa y Sebastián
                </h2>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Entendemos lo que significa proteger a una familia porque también tenemos la nuestra. 
                  Organizamos todo para que no tengas que preocuparte por nada.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-slate-700">+1.200 familias protegidas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-slate-700">DGSFP: C012479234434D</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-slate-700">97% familias renuevan</span>
                  </div>
                </div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
                  <span className="font-semibold text-slate-900">NIF:</span> 79234434D
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO SIMPLE */}
        <section className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-14">
              <h2 className="text-[36px] sm:text-[42px] font-bold text-slate-900 leading-tight mb-4">
                Simple y organizado
              </h2>
              <p className="text-xl text-slate-600">
                Tres pasos para proteger a todos
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  num: "01", 
                  title: "Nos cuentas", 
                  desc: "Quién forma tu familia y qué necesitan."
                },
                { 
                  num: "02", 
                  title: "Organizamos", 
                  desc: "Te proponemos el pack perfecto para todos."
                },
                { 
                  num: "03", 
                  title: "Proteges", 
                  desc: "Toda tu familia cubierta, sin complicaciones."
                },
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-blue-600/20">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="relative py-24 bg-blue-600 overflow-hidden">
          {/* Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/50 to-transparent blur-3xl pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl relative z-10 text-center">
            <h2 className="text-[40px] sm:text-[48px] font-bold text-white leading-tight mb-6">
              Tu familia merece lo mejor
            </h2>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Un WhatsApp. 30 minutos. Sin compromiso.
              <br />
              Organizamos la protección completa de tu familia.
            </p>
            
            <a 
              href={wCotiza}
              className="group inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Proteger a mi familia
            </a>
            
            {/* Badges finales */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                <Package className="w-4 h-4" />
                Todo en uno
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                <Clock className="w-4 h-4" />
                30 min
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                <Shield className="w-4 h-4" />
                DGSFP verificado
              </div>
            </div>
            
            <p className="text-lg text-blue-200/70 mt-8">
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
