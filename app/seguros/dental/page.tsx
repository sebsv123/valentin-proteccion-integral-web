import { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RetroGridWrapper } from "./retro-grid-wrapper";
import { Phone, CheckCircle2, ArrowRight, Smile, ShieldCheck, Zap, Clock, Star, Users, Building2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Dental en Madrid – Sin Carencias – Desde 9€/mes | Valentín Protección Integral",
  description: "Seguro dental en Madrid desde 9€/mes. Sin carencias en revisiones y limpiezas desde el primer día. Implantes, ortodoncia y familiar. Rosa y Sebastián te lo gestionan en 30 minutos. DGSFP C012479234434D.",
  keywords: ["seguro dental madrid","seguro dental sin carencias madrid","seguro dental barato madrid","seguro dental familiar madrid","seguro dental implantes madrid","seguro dental boadilla del monte","seguro dental sin permanencia madrid","cotizar seguro dental madrid","seguro dental majadahonda","seguro dental pozuelo alarcon"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/dental" },
  openGraph: {
    title: "Seguro Dental en Madrid – Sin Carencias – Desde 9€/mes",
    description: "Seguro dental en Madrid desde 9€/mes. Sin carencias en revisiones y limpiezas desde el primer día. Rosa y Sebastián te lo gestionan en 30 minutos.",
    url: "https://valentinproteccionintegral.com/seguros/dental",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín" }],
  },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Seguro Dental en Madrid – Sin Carencias","provider":{"@type":"LocalBusiness","name":"Valentín Protección Integral","telephone":"+34603448765","address":{"@type":"PostalAddress","addressLocality":"Boadilla del Monte","addressRegion":"Madrid","addressCountry":"ES"}},"areaServed":["Madrid","Boadilla del Monte","Majadahonda","Pozuelo de Alarcón","Las Rozas"],"description":"Seguro dental en Madrid desde 9€/mes. Sin carencias en revisiones y limpiezas desde el primer día. Asesoramiento gratuito.","offers":{"@type":"Offer","price":"9","priceCurrency":"EUR","description":"Seguro dental desde 9€/mes. Consulta gratuita sin compromiso."}};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿El seguro dental tiene períodos de carencia?","acceptedAnswer":{"@type":"Answer","text":"En los seguros dentales que gestionamos, revisiones y limpiezas están disponibles desde el primer día sin período de carencia. Para ortodoncia e implantes las condiciones varían según la modalidad elegida. Rosa y Sebastián te explican exactamente qué cubre tu opción antes de decidir, sin letra pequeña."}},{"@type":"Question","name":"¿Cuánto cuesta un seguro dental en Madrid?","acceptedAnswer":{"@type":"Answer","text":"Un seguro dental en Madrid empieza desde 9€/mes si ya tienes seguro de salud gestionado por nosotros. Si lo contratas de forma independiente, una cobertura dental completa va entre 15€ y 25€/mes orientativamente según coberturas y edad. Rosa y Sebastián te calculan el precio exacto para tu situación en 30 minutos, gratis y sin compromiso."}},{"@type":"Question","name":"¿Los seguros dentales cubren implantes?","acceptedAnswer":{"@type":"Answer","text":"Sí. Según la modalidad elegida, los seguros que gestionamos incluyen implantes o los cubren con descuento significativo sobre el precio de clínica. Un implante sin seguro supera los 1.200€. Rosa y Sebastián te explican qué modalidad te conviene según lo que necesitas."}},{"@type":"Question","name":"¿Puedo incluir a toda mi familia en el seguro dental?","acceptedAnswer":{"@type":"Answer","text":"Sí. Gestionamos seguros dentales familiares donde cada miembro tiene su cobertura completa. Cuantos más miembros se incluyan, mejor precio por persona. Rosa y Sebastián lo tramitan todo en una sola llamada."}},{"@type":"Question","name":"¿Puedo combinar dental con salud en el mismo seguro?","acceptedAnswer":{"@type":"Answer","text":"Sí, y es la opción más popular entre nuestros clientes. Combinar salud individual con dental en el mismo contrato suele salir más ventajoso que contratar cada uno por separado, y podemos aplicar un descuento exclusivo en tu primera prima. Rosa y Sebastián te calculan el ahorro real en 15 minutos."}}]};

export const dynamic = "force-static";

export default function DentalPage() {
  const wMain = buildWhatsAppHref("Hola, quiero información sobre seguro dental en Madrid sin carencias. ¿Podéis asesorarme?");
  const wImplantes = buildWhatsAppHref("Hola, quiero saber si vuestro seguro dental cubre implantes en Madrid y cuánto cuesta.");
  const wFamiliar = buildWhatsAppHref("Hola, quiero un seguro dental familiar en Madrid. Somos [indicar número] personas.");
  const wPack = buildWhatsAppHref("Hola, me interesa el pack dental + salud en Madrid. ¿Podéis decirme el precio?");
  const wSinCarencias = buildWhatsAppHref("Hola, necesito un seguro dental en Madrid sin carencias desde el primer día.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Seguro Dental",url:"/seguros/dental"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">

        {/* 1 HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-background border-b">
          <div className="absolute inset-0 z-0"><RetroGridWrapper className="opacity-40" /></div>
          <div className="container relative z-20 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="group rounded-full border border-slate-200 bg-slate-100/50 text-sm transition-all hover:bg-slate-100 mb-8 z-10 backdrop-blur-sm px-6 py-2 inline-flex items-center justify-center">
                <span className="inline-flex items-center justify-center text-slate-600"><span>🦷 Seguro Dental · Madrid · Sin Carencias</span><ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" /></span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">Seguro Dental Madrid Sin Carencias – Desde 9€/mes</h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 mb-8 font-medium">Revisiones, limpiezas y empastes incluidos desde el primer día. Rosa y Sebastián te asesoran por WhatsApp en menos de 30 minutos. Sin permanencia.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={wMain} className={cn(buttonVariants({size:"lg"}),"h-16 px-10 text-xl font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white rounded-2xl shadow-2xl shadow-green-500/20 gap-3")}><WhatsAppIcon className="w-6 h-6" />Quiero mi cotización gratuita</a>
                <a href="tel:603448765" className={cn(buttonVariants({variant:"outline",size:"lg"}),"h-16 px-10 text-xl font-bold border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 rounded-2xl transition-all")}><Phone className="mr-2 w-5 h-5 text-blue-600" />Llamar: 603 44 87 65</a>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-sm font-bold text-amber-700"><Star className="w-4 h-4 text-amber-500" />+1.200 familias protegidas · Sin carencias desde día 1 · DGSFP C012479234434D</div>
              <p className="mt-6 text-sm font-bold text-slate-400 flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-amber-500" />⏱ Cotización en 30 minutos · Sin compromiso · Sin permanencia</p>
            </div>
          </div>
        </section>

        {/* 2 METRICAS */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6"><Smile className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">9€/mes</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Dental desde (con salud)</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><CheckCircle2 className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">Día 1</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Sin carencias en revisiones y limpiezas</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><ShieldCheck className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">0€</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Coste de la asesoría</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 3 PREGUNTAS CLAVE */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Las 3 preguntas que todos nos hacen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[32px] bg-white border-2 border-emerald-200 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><CheckCircle2 className="w-7 h-7" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">¿Tiene carencias?</h3>
                <p className="text-slate-600 leading-relaxed">Revisiones y limpiezas: desde el primer día, sin esperar. Implantes y ortodoncia: depende de la modalidad. Rosa y Sebastián te explican exactamente qué cubre tu opción antes de firmar.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white border-2 border-blue-200 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Building2 className="w-7 h-7" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">¿Cubre implantes?</h3>
                <p className="text-slate-600 leading-relaxed">Sí. Según la modalidad, con cobertura completa o descuento significativo. Un implante sin seguro supera los 1.200€. Cuéntanos qué necesitas y te decimos la opción más adecuada.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white border-2 border-indigo-200 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6"><Users className="w-7 h-7" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">¿Puedo añadir a mi familia?</h3>
                <p className="text-slate-600 leading-relaxed">Sí. Cuantos más miembros, mejor precio por persona. Gestionamos dentales familiares completos en una sola llamada o mensaje de WhatsApp.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4 TABLA COBERTURAS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-10 text-center text-slate-900 tracking-tight">Coberturas principales</h2>
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm overflow-x-auto">
              <table className="w-full text-left">
                <thead><tr className="bg-slate-100"><th className="px-4 py-3 font-bold text-slate-700">Cobertura</th><th className="px-4 py-3 font-bold text-slate-700">Detalle</th><th className="px-4 py-3 font-bold text-slate-700">Precio orientativo</th></tr></thead>
                <tbody className="divide-y">
                  <tr className="hover:bg-accent/30 transition-colors"><td className="px-4 py-3 font-medium">Dental básico</td><td className="px-4 py-3 text-slate-600">Revisiones + limpiezas sin carencias</td><td className="px-4 py-3 font-bold text-blue-600">Desde 9€/mes*</td></tr>
                  <tr className="hover:bg-accent/30 transition-colors"><td className="px-4 py-3 font-medium">Dental completo</td><td className="px-4 py-3 text-slate-600">+ Empastes y extracciones incluidos</td><td className="px-4 py-3 font-bold text-blue-600">Desde 15€/mes</td></tr>
                  <tr className="hover:bg-accent/30 transition-colors"><td className="px-4 py-3 font-medium">Dental + ortodoncia</td><td className="px-4 py-3 text-slate-600">Niños y adultos según modalidad</td><td className="px-4 py-3 font-bold text-blue-600">Desde 18€/mes</td></tr>
                  <tr className="hover:bg-accent/30 transition-colors"><td className="px-4 py-3 font-medium">Pack Dental + Salud</td><td className="px-4 py-3 text-slate-600">Cobertura completa, descuento exclusivo</td><td className="px-4 py-3 font-bold text-blue-600">Desde 35€/mes</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-slate-400 text-center max-w-xl mx-auto">*Precio desde 9€/mes para clientes con seguro de salud gestionado por Valentín Protección Integral. Precios orientativos para adulto en Madrid. Coberturas exactas y precio real según edad, modalidad y composición familiar. Rosa y Sebastián te calculan tu precio en 30 minutos.</p>
          </div>
        </section>

        {/* 5 COBERTURAS DETALLE */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">¿Qué incluye tu seguro dental?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6"><Smile className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Revisiones y limpiezas</h3>
                <p className="text-slate-600 leading-relaxed flex-1">Sin carencias desde el primer día. Revisión anual completa y limpieza dental profesional. La base de cualquier buena salud bucal, cubierta desde el día 1.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Zap className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Empastes y extracciones</h3>
                <p className="text-slate-600 leading-relaxed flex-1">Tratamientos básicos incluidos en la mayoría de modalidades. Para que un dolor de muelas no se convierta en un gasto inesperado de cientos de euros.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6"><Star className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Implantes dentales</h3>
                <p className="text-slate-600 leading-relaxed flex-1">Un implante sin seguro supera los 1.200€. Con las modalidades que gestionamos, puedes cubrirlos o acceder a descuentos significativos. Consulta qué opción te conviene.</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6"><Users className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Ortodoncia familiar</h3>
                <p className="text-slate-600 leading-relaxed flex-1">Brackets, invisalign y correctores cubiertos según modalidad. Especialmente interesante para familias con hijos: cuantos más miembros, mejor precio por persona.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 BENEFICIOS */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Por qué elegir a Rosa y Sebastián para tu dental</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[40px] bg-white border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6"><MessageCircle className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">1 mensaje → Cotización en 30 minutos</h3>
                <p className="text-slate-600 leading-relaxed">Dinos cuántas personas sois y qué necesitáis. Rosa o Sebastián os responden con opciones reales, precios exactos y qué cubre cada modalidad. Sin formularios, sin esperas.</p>
              </div>
              <div className="p-8 rounded-[40px] bg-white border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6"><span className="text-3xl">🎁</span></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Pack dental + salud con descuento exclusivo</h3>
                <p className="text-slate-600 leading-relaxed">Si contratas dental con salud individual, podemos aplicarte un descuento exclusivo en tu primera prima. Y hacemos un análisis gratuito de qué cobertura necesitas realmente antes de que firmes nada — orientativo sujeto a condiciones.</p>
              </div>
              <div className="p-8 rounded-[40px] bg-white border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6"><ShieldCheck className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Sin carencias en revisiones · Sin permanencia</h3>
                <p className="text-slate-600 leading-relaxed">Revisiones y limpiezas cubiertas desde el día 1. Sin permanencia mínima. Todo explicado antes de firmar — qué cubre, qué no, cuándo empieza cada cobertura. Revisión anual gratuita de tu póliza con nosotros.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 CROSS-SELL SALUD */}
        <section className="py-24 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-6 bg-white/10 rounded-[24px] mb-8 backdrop-blur-xl"><span className="text-6xl">🦷➕❤️</span></div>
              <h3 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">El dental es el primer paso. El siguiente es salud completa.</h3>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Muchos de nuestros clientes empezaron con dental y después añadieron salud individual. Es el upgrade más natural — misma confianza, cobertura completa. Y podemos aplicarte un descuento exclusivo por contratarlo junto.</p>
              <a href={wPack} className={cn(buttonVariants({size:"lg"}),"h-16 px-12 text-xl font-black bg-white text-slate-900 hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl transition-all shadow-xl")}><WhatsAppIcon className="h-6 w-6" />Quiero el pack dental + salud →</a>
            </div>
          </div>
        </section>

        {/* 8 PROCESO + FOTO */}
        <section className="py-24 lg:py-32 bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16"><h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">Así de fácil es tener tu seguro dental en Madrid</h2></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {[ {n:1,t:"Cuéntanos qué necesitas",d:"¿Para ti solo, en pareja, con hijos? ¿Quieres implantes? Un mensaje por WhatsApp con tu situación. Rosa o Sebastián lo reciben directamente."}, {n:2,t:"Opciones con precios reales en 30 minutos",d:"Te explicamos qué cubre cada modalidad, las carencias exactas y el precio para tu perfil. Sin tecnicismos, sin letra pequeña."}, {n:3,t:"Póliza activa — primer día de cobertura en revisiones",d:"Si decides contratar, gestionamos todo. En 24h tienes tu póliza activa y puedes pedir tu primera revisión sin esperar períodos de carencia."} ].map((step,i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="flex-none w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#0F5E9C] transition-colors shadow-lg">{step.n}</div>
                    <div><h3 className="text-2xl font-bold mb-3 text-white">{step.t}</h3><p className="text-white/60 text-lg leading-relaxed">{step.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10 group">
                <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián Valentín" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white"><p className="font-bold text-lg">Rosa y Sebastián · Valentín Protección Integral</p><p className="text-white/80">Boadilla del Monte · +10 años asesorando en Madrid</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* 9 RESEÑAS REALES */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <GoogleReviewsWidget title="Lo que dicen nuestros clientes sobre el dental" />
            <div className="mt-12 text-center">
              <p className="text-sm text-slate-500 mb-3">Asesoría dental para toda la zona Madrid Oeste — clínicas dentales de red en tu zona incluidas según modalidad.</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {["Madrid","Boadilla del Monte","Majadahonda","Pozuelo de Alarcón","Las Rozas"].map(z => (
                  <span key={z} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">{z}</span>
                ))}
              </div>
              <p className="text-xs text-slate-400 font-mono">NIF: 79234434D · DGSFP: C012479234434D · Boadilla del Monte, Madrid</p>
            </div>
          </div>
        </section>

        {/* 10 FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Preguntas frecuentes sobre seguro dental en Madrid</h2>
            <div className="grid gap-6">
              {[ {q:"¿El seguro dental tiene períodos de carencia?",a:"En los seguros dentales que gestionamos, revisiones y limpiezas están disponibles desde el primer día sin período de carencia. Para ortodoncia e implantes las condiciones varían según la modalidad elegida. Rosa y Sebastián te explican exactamente qué cubre tu opción antes de decidir, sin letra pequeña."}, {q:"¿Cuánto cuesta un seguro dental en Madrid?",a:"Un seguro dental en Madrid empieza desde 9€/mes si ya tienes seguro de salud gestionado por nosotros. Si lo contratas de forma independiente, una cobertura dental completa va entre 15€ y 25€/mes orientativamente según coberturas y edad. Rosa y Sebastián te calculan el precio exacto para tu situación en 30 minutos, gratis y sin compromiso."}, {q:"¿Los seguros dentales cubren implantes?",a:"Sí. Según la modalidad elegida, los seguros que gestionamos incluyen implantes o los cubren con descuento significativo sobre el precio de clínica. Un implante sin seguro supera los 1.200€. Rosa y Sebastián te explican qué modalidad te conviene según lo que necesitas."}, {q:"¿Puedo incluir a toda mi familia en el seguro dental?",a:"Sí. Gestionamos seguros dentales familiares donde cada miembro tiene su cobertura completa. Cuantos más miembros se incluyan, mejor precio por persona. Rosa y Sebastián lo tramitan todo en una sola llamada."}, {q:"¿Puedo combinar dental con salud en el mismo seguro?",a:"Sí, y es la opción más popular entre nuestros clientes. Combinar salud individual con dental en el mismo contrato suele salir más ventajoso que contratar cada uno por separado, y podemos aplicar un descuento exclusivo en tu primera prima. Rosa y Sebastián te calculan el ahorro real en 15 minutos."} ].map((f,i) => (
                <div key={i} className="p-6 rounded-[24px] bg-white border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{f.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11 GARANTIAS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Nuestro compromiso contigo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ {e:"🦷",t:"Sin carencias en revisiones",d:"Desde el primer día, sin esperar"}, {e:"📄",t:"Sin permanencia",d:"Sin letra pequeña, sin sorpresas"}, {e:"👤",t:"Asesor personal de por vida",d:"Rosa o Sebastián, siempre el mismo"}, {e:"🔄",t:"Revisión anual gratuita",d:"Tu cobertura crece con tus necesidades"} ].map((g,i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{g.e}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{g.t}</h3>
                  <p className="text-slate-600 text-sm">{g.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-[32px] bg-slate-50 border border-blue-200 shadow-md text-center">
              <p className="text-slate-700 leading-relaxed text-lg">"El seguro dental es el seguro que más se agradece tener cuando de verdad lo necesitas. Un implante, una ortodoncia, una extracción urgente — los gastos dentales sin cobertura pueden ser de cientos o miles de euros. Por 9€/mes puedes tener revisiones cubiertas desde el primer día, y con las modalidades completas, mucho más. Rosa y Sebastián te explican exactamente qué te conviene según tu situación. Gratis y sin compromiso."</p>
              <p className="mt-4 font-bold text-slate-900">— Rosa Valentín y Sebastián</p>
            </div>
          </div>
        </section>

        {/* 12 CTA FINAL */}
        <section className="py-24 bg-[#0F5E9C] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5E9C] to-[#123B68] opacity-90" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Tu seguro dental en Madrid, gestionado en 30 minutos.</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Cuéntanos cuántas personas sois y qué necesitáis. Sin formularios, sin papeles, sin permanencia.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={wMain} className={cn(buttonVariants({size:"lg"}),"h-16 lg:h-20 px-10 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white rounded-2xl shadow-2xl gap-3 transition-all")}>Quiero mi cotización gratuita →</a>
              <a href="tel:603448765" className={cn(buttonVariants({variant:"outline",size:"lg"}),"h-16 lg:h-20 px-10 text-xl font-bold border-2 border-white/40 text-white hover:bg-white/10 rounded-2xl transition-all")}><Phone className="mr-2 w-5 h-5" />Llamar: 603 44 87 65</a>
            </div>
            <p className="mt-8 text-sm text-white/50 font-mono">Valentín Protección Integral · NIF: 79234434D · DGSFP: C012479234434D</p>
            <p className="mt-2 text-sm text-white/50 font-mono">Boadilla del Monte, Madrid · +10 años · +1.200 personas protegidas</p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
