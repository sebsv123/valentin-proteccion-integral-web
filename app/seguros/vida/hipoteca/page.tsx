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
import { CheckCircle2, Shield, Home, Wallet, TrendingDown, AlertTriangle, Phone, Building, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Vida Hipoteca Madrid | Ahorra vs Tu Banco | Valentín",
  description: "Seguro de vida para hipoteca en Madrid. Ahorra hasta 50% comparado con tu banco. Mismo cobertura, mejor precio. WhatsApp 30 min.",
  keywords: ["seguro vida hipoteca Madrid","seguro vida hipoteca banco","cambiar seguro vida hipoteca","ahorrar seguro hipoteca"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/vida/hipoteca" },
  openGraph: {
    title: "Seguro Vida Hipoteca Madrid | Ahorra vs Tu Banco | Valentín",
    description: "Seguro de vida para hipoteca en Madrid. Ahorra hasta 50% comparado con tu banco. Mismo cobertura, mejor precio. WhatsApp 30 min.",
    url: "https://valentinproteccionintegral.com/seguros/vida/hipoteca",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Seguro Vida Hipoteca Madrid - Valentín Protección Integral",
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
  "description": "Seguro de vida para hipoteca en Madrid con ahorro garantizado frente al banco",
};

export const dynamic = "force-static";

export default function VidaHipotecaPage() {
  const wCotiza = buildWhatsAppHref("Hola, tengo una hipoteca y quiero cambiar el seguro de vida de mi banco. ¿Me podéis ayudar a ahorrar?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Vida",url:"/seguros/vida"},{name:"Hipoteca",url:"/seguros/vida/hipoteca"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* HERO — Ahorro inmediato */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-rose-100/40 via-orange-50/20 to-transparent rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <div>
                <div className="mb-6">
                  <GuaranteeBadge type="vida" />
                </div>
                
                <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold text-gray-900 leading-tight tracking-tight mb-6">
                  Seguro Vida para tu Hipoteca:
                  <span className="text-rose-500"> Ahorra vs el Banco</span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                  El banco te cobra de más. Nosotros ofrecemos la <strong>misma cobertura</strong> por mucho menos. 
                  Cambia tu seguro de vida hipotecario y ahorra desde el primer mes.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-10">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center">
                      <TrendingDown className="w-6 h-6 text-rose-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">-50%</p>
                      <p className="text-sm text-gray-500">vs tu banco</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Home className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">100%</p>
                      <p className="text-sm text-gray-500">misma cobertura</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={wCotiza}
                    className="inline-flex items-center justify-center gap-3 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Comparar con mi banco
                  </a>
                </div>
              </div>
              
              {/* Right: Image */}
              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pareja feliz con su nueva casa Madrid - Seguro vida hipoteca"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Euro className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Ahorro medio</p>
                      <p className="text-xs text-gray-500">+300€/año por cliente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARATIVA BANCO vs VALENTÍN */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ¿Por qué pagar más al banco?
              </h2>
              <p className="text-lg text-gray-600">
                Misma cobertura, menor precio, mejor servicio personal
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Banco */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <Building className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700">Tu banco</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Precio inflado (comisión incluida)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Atención robotizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Cambio complicado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Sin revisión anual</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-500">Precio medio para 100.000€</p>
                  <p className="text-3xl font-bold text-slate-600">~40-60€/mes</p>
                </div>
              </div>

              {/* Valentín */}
              <div className="bg-rose-50 rounded-2xl p-8 border border-rose-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-rose-700">Valentín</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Precio justo (sin intermediarios)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Rosa y Sebastián siempre</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Cambio gestionado gratis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Revisión anual incluida</span>
                  </li>
                </ul>
                <div className="mt-6 pt-6 border-t border-rose-200">
                  <p className="text-sm text-rose-600">Misma cobertura, mejor precio</p>
                  <p className="text-3xl font-bold text-rose-600">~20-35€/mes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO DE CAMBIO */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cambiar es más fácil de lo que crees
              </h2>
              <p className="text-lg text-gray-600">
                Nosotros gestionamos todo. Tú solo ahorras.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-rose-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Comparación</h3>
                <p className="text-sm text-gray-600">Analizamos tu póliza actual del banco</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-rose-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Propuesta</h3>
                <p className="text-sm text-gray-600">Te presentamos opciones de ahorro</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-rose-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cambio</h3>
                <p className="text-sm text-gray-600">Gestionamos la sustitución</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Ahorro</h3>
                <p className="text-sm text-gray-600">Empiezas a pagar menos desde ya</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Tienes hipoteca? Comprueba cuánto pagas de más
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Envíanos tu última cuota del seguro de vida. En 30 minutos te decimos cuánto puedes ahorrar.
            </p>
            <a 
              href={wCotiza}
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-slate-900 px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Enviar cuota por WhatsApp
            </a>
            
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                Sin compromiso
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm">
                <Phone className="w-4 h-4" />
                Respuesta en 30 min
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm">
                <Shield className="w-4 h-4" />
                Misma cobertura garantizada
              </div>
            </div>
            
            <p className="text-sm text-white/40 mt-8">
              DGSFP: C012479234434D · Mediadores independientes
            </p>
          </div>
        </section>

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#e23b4a" />

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
