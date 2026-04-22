import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
import { Phone, CheckCircle2, ArrowRight, HeartPulse, Home, Shield, Briefcase, Smile, Zap, Clock, Star, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguros para Jóvenes en Madrid – Salud desde 21€/mes | Valentín Protección Integral",
  description: "Seguros para jóvenes profesionales en Madrid desde 21€/mes. Salud, vida e hipoteca. Rosa y Sebastián te asesoran gratis en 15 minutos. Sin letra pequeña. DGSFP C012479234434D.",
  keywords: ["seguros jovenes profesionales madrid","seguro salud joven madrid","seguro hipoteca joven madrid","seguro medico joven madrid","seguro vida hipoteca joven madrid","seguros primer piso madrid","seguro salud sin carencias madrid","seguros jovenes boadilla del monte"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/jovenes-profesionales" },
  openGraph: {
    title: "Seguros para Jóvenes en Madrid – Salud desde 21€/mes",
    description: "Seguros para jóvenes profesionales en Madrid desde 21€/mes. Rosa y Sebastián te asesoran gratis en 15 minutos.",
    url: "https://valentinproteccionintegral.com/para/jovenes-profesionales",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín" }],
  },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Seguros para Jóvenes Profesionales en Madrid","provider":{"@type":"LocalBusiness","name":"Valentín Protección Integral","telephone":"+34603448765","address":{"@type":"PostalAddress","addressLocality":"Boadilla del Monte","addressRegion":"Madrid","addressCountry":"ES"}},"areaServed":["Madrid","Boadilla del Monte","Majadahonda","Pozuelo de Alarcón","Las Rozas"],"description":"Seguros para jóvenes profesionales en Madrid desde 21€/mes. Asesoramiento gratuito.","offers":{"@type":"Offer","price":"21","priceCurrency":"EUR","description":"Seguro de salud desde 21€/mes. Consulta gratuita."}};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué seguro necesita un joven profesional en Madrid?","acceptedAnswer":{"@type":"Answer","text":"Depende de tu situación exacta. Si te has emancipado, lo prioritario es salud privada para no depender de listas de espera. Si tienes hipoteca nueva, el seguro de vida es clave para que nadie herede la deuda. Si eres autónomo además, añade deducción IRPF de hasta 500€. Rosa y Sebastián analizan tu caso en 15 minutos gratis y te dicen exactamente qué necesitas — y qué no."}},{"@type":"Question","name":"¿Cuánto cuesta un seguro de salud para jóvenes en Madrid?","acceptedAnswer":{"@type":"Answer","text":"Los seguros de salud para jóvenes en Madrid que gestionamos empiezan desde 21€/mes. El precio depende de la edad, coberturas y si incluyes dental. En 15 minutos Rosa y Sebastián te dan el precio exacto para tu situación sin compromiso."}},{"@type":"Question","name":"Si tengo hipoteca, ¿tengo que quedarse con el seguro de vida del banco?","acceptedAnswer":{"@type":"Answer","text":"No. El banco puede ofrecerte un seguro de vida vinculado a la hipoteca, pero no estás obligado a contratarlo con ellos. Puedes contratarlo con cualquier mediador independiente, y en muchos casos con coberturas mejores. Rosa y Sebastián analizan tu situación y te explican las opciones reales sin presión."}},{"@type":"Question","name":"¿Merece la pena tener seguro médico privado si ya tengo la Seguridad Social?","acceptedAnswer":{"@type":"Answer","text":"Depende de tu ritmo de vida. La Seguridad Social cubre bien las urgencias graves, pero las listas de espera para especialistas y pruebas diagnósticas pueden ser largas. Si tu trabajo o actividad no te permite esperar semanas para ver a un especialista, el seguro privado marca la diferencia. Rosa y Sebastián te lo explican según tu caso concreto."}}]};

export const dynamic = "force-static";

export default function JovenesProfesionalesPage() {
  const wMain = buildWhatsAppHref("Hola, soy joven profesional en Madrid y quiero empezar a protegerme bien. ¿Podemos hablar?");
  const wEmancipado = buildWhatsAppHref("Hola, me acabo de emancipar y quiero saber qué seguros necesito para empezar bien.");
  const wHipoteca = buildWhatsAppHref("Tengo hipoteca reciente y quiero revisar si el seguro de vida que tengo es el más adecuado.");
  const wSalud = buildWhatsAppHref("Hola, quiero información sobre seguro de salud privado en Madrid desde 21€/mes.");
  const wAutonomoJoven = buildWhatsAppHref("Soy autónomo joven en Madrid y quiero saber cómo deducirme el seguro médico en el IRPF.");
  const wPack = buildWhatsAppHref("Hola, quiero información sobre el pack salud + dental para jóvenes en Madrid.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros para Jóvenes",url:"/para/jovenes-profesionales"}]} />
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
                <span className="inline-flex items-center justify-center text-slate-600"><span>🚀 Jóvenes profesionales · Madrid</span><ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" /></span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">Seguros para Jóvenes en Madrid – Salud desde 21€/mes</h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 mb-8 font-medium">Primer piso, hipoteca nueva o simplemente empezar bien. Rosa y Sebastián te asesoran gratis en 15 minutos. Sin letra pequeña.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={wMain} className={cn(buttonVariants({size:"lg"}),"h-16 px-10 text-xl font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white rounded-2xl shadow-2xl shadow-green-500/20 gap-3")}><WhatsAppIcon className="w-6 h-6" />Quiero empezar bien por WhatsApp</a>
                <a href="tel:603448765" className={cn(buttonVariants({variant:"outline",size:"lg"}),"h-16 px-10 text-xl font-bold border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 rounded-2xl transition-all")}><Phone className="mr-2 w-5 h-5 text-blue-600" />Llamar: 603 44 87 65</a>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-sm font-bold text-amber-700"><Star className="w-4 h-4 text-amber-500" />+1.200 familias y jóvenes protegidos · +10 años · DGSFP C012479234434D</div>
              <p className="mt-6 text-sm font-bold text-slate-400 flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-amber-500" />⏱ Análisis gratuito en 15 minutos · Sin compromiso · Sin letra pequeña</p>
            </div>
          </div>
        </section>

        {/* 2 METRICAS */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6"><HeartPulse className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">21€/mes</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Salud privada desde</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Clock className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">15 min</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Para saber exactamente qué necesitas</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><ShieldCheck className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">0€</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Coste de la asesoría</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3 ESTO ES PARA TI SI */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-slate-100">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">¿Esta asesoría es para ti?</h2>
              <div className="grid gap-6">
                {["Acabas de emanciparte o estás a punto de hacerlo","Tienes hipoteca reciente y no sabes si tu seguro de vida es el adecuado","Quieres acceso a médicos y especialistas sin esperar semanas","Buscas una explicación honesta de qué necesitas y qué no"].map((item,i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-green-500/20"><CheckCircle2 className="w-6 h-6" /></div>
                    <span className="text-xl font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 SITUACIONES (4 CARDS) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">¿Cuál es tu momento ahora mismo?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6"><HeartPulse className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Me acabo de emancipar</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Salud privada para no depender de listas de espera. Especialistas, urgencias y pruebas en tu agenda, no en la de la Seguridad Social. Desde 21€/mes.</p>
                <Link href="/seguros/salud-individual" className={cn(buttonVariants({variant:"ghost"}),"text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Ver opciones →</Link>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Home className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Tengo hipoteca nueva</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Protección para que nadie herede tu deuda. Analiza si el seguro que te ofreció el banco es el más adecuado para ti — sin compromiso.</p>
                <a href={wHipoteca} className={cn(buttonVariants({variant:"ghost"}),"text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Revisar mi seguro →</a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><Briefcase className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Soy autónomo</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Tu seguro de salud es deducible hasta 500€ en el IRPF. Rosa y Sebastián te calculan tu ahorro real en 15 minutos.</p>
                <a href={wAutonomoJoven} className={cn(buttonVariants({variant:"ghost"}),"text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Calcular mi deducción →</a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6"><Smile className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Quiero empezar con dental</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Dental sin carencias para revisiones, empastes y limpiezas. El seguro más sencillo para empezar a protegerte desde el primer día.</p>
                <Link href="/seguros/dental" className={cn(buttonVariants({variant:"ghost"}),"text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Ver opciones →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5 INSIGHT HIPOTECA */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-amber-200">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-none w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-2xl">⚠️</div>
                <div><h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Si tienes hipoteca, el banco te ofreció un seguro de vida</h2></div>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>No estás obligado a quedarte con él. Puedes contratar el seguro de vida con cualquier mediador independiente, y en muchos casos con coberturas más completas.</p>
                <p>Rosa y Sebastián analizan tu situación y te explican las opciones reales para tu hipoteca y tu perfil — gratis y sin presión.</p>
              </div>
              <div className="mt-10 text-center">
                <a href={wHipoteca} className={cn(buttonVariants({size:"lg"}),"h-14 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}><WhatsAppIcon className="h-5 w-5" />Quiero revisar mi seguro de vida →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 6 BENEFICIOS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Por qué los jóvenes de Madrid nos eligen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-6"><Zap className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">15 minutos y sabes exactamente qué necesitas</h3>
                <p className="text-slate-600 leading-relaxed">Un mensaje por WhatsApp. Rosa o Sebastián analizan tu situación — emancipación, hipoteca, actividad — y te devuelven opciones reales con precios exactos. Sin formularios, sin esperas.</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6"><span className="text-3xl">🎁</span></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Pack salud + dental con descuento exclusivo</h3>
                <p className="text-slate-600 leading-relaxed">Si contratas salud con dental u otro producto, podemos aplicar un descuento exclusivo en tu primera prima. Muchos jóvenes no saben que por poco más al mes pueden tener salud completa además del dental.</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6"><ShieldCheck className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Tu asesor de por vida, no un call center</h3>
                <p className="text-slate-600 leading-relaxed">Respuesta en 30 minutos o te llamamos nosotros. Cobertura explicada en lenguaje normal, antes de firmar. Rosa o Sebastián — siempre la misma persona que te conoce.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7 CROSS-SELL */}
        <section className="py-24 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-6 bg-white/10 rounded-[24px] mb-8 backdrop-blur-xl"><span className="text-6xl">🎁</span></div>
              <h3 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">Contrata salud con dental y podemos aplicarte un descuento exclusivo en tu primera prima.</h3>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">El pack más popular entre jóvenes profesionales de Madrid.</p>
              <a href={wPack} className={cn(buttonVariants({size:"lg"}),"h-16 px-12 text-xl font-black bg-white text-slate-900 hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl transition-all shadow-xl")}><WhatsAppIcon className="h-6 w-6" />Quiero el pack salud + dental →</a>
            </div>
          </div>
        </section>

        {/* 8 PROCESO + FOTO */}
        <section className="py-24 lg:py-32 bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16"><h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">Así de sencillo es empezar</h2></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {[ {n:1,t:"Cuéntanos tu situación",d:"¿Emancipado, hipoteca nueva, autónomo? Un mensaje. Rosa o Sebastián lo reciben directamente."}, {n:2,t:"Análisis en 15 minutos",d:"Te explicamos qué necesitas según tu situación real — y qué no necesitas todavía. Sin tecnicismos."}, {n:3,t:"Propuesta sin compromiso, tú decides",d:"Opciones con precios reales. Si decides contratar, en 24h tienes tu póliza activa."} ].map((step,i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="flex-none w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#0F5E9C] transition-colors shadow-lg">{step.n}</div>
                    <div><h3 className="text-2xl font-bold mb-3 text-white">{step.t}</h3><p className="text-white/60 text-lg leading-relaxed">{step.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10 group">
                <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián Valentín" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white"><p className="font-bold text-lg">Rosa y Sebastián</p><p className="text-white/80">Boadilla del Monte, Madrid · +10 años asesorando</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* 9 RESEÑAS REALES */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <GoogleReviewsWidget title="Lo que dicen los jóvenes de Madrid que ya confían en nosotros" />
            <div className="mt-12 text-center">
              <p className="text-xs text-slate-400 font-mono mb-4">NIF: 79234434D · DGSFP: C012479234434D · Boadilla del Monte, Madrid</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Madrid","Boadilla del Monte","Majadahonda","Pozuelo de Alarcón","Las Rozas"].map(z => (
                  <span key={z} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">{z}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 10 FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Preguntas frecuentes</h2>
            <div className="grid gap-6">
              {[ {q:"¿Qué seguro necesita un joven profesional en Madrid?",a:"Depende de tu situación exacta. Si te has emancipado, lo prioritario es salud privada para no depender de listas de espera. Si tienes hipoteca nueva, el seguro de vida es clave para que nadie herede la deuda. Si eres autónomo además, añade deducción IRPF de hasta 500€. Rosa y Sebastián analizan tu caso en 15 minutos gratis y te dicen exactamente qué necesitas — y qué no."}, {q:"¿Cuánto cuesta un seguro de salud para jóvenes en Madrid?",a:"Los seguros de salud para jóvenes en Madrid que gestionamos empiezan desde 21€/mes. El precio depende de la edad, coberturas y si incluyes dental. En 15 minutos Rosa y Sebastián te dan el precio exacto para tu situación sin compromiso."}, {q:"Si tengo hipoteca, ¿tengo que quedarme con el seguro de vida del banco?",a:"No. El banco puede ofrecerte un seguro de vida vinculado a la hipoteca, pero no estás obligado a contratarlo con ellos. Puedes contratarlo con cualquier mediador independiente, y en muchos casos con coberturas mejores. Rosa y Sebastián analizan tu situación y te explican las opciones reales sin presión."}, {q:"¿Merece la pena tener seguro médico privado si ya tengo la Seguridad Social?",a:"Depende de tu ritmo de vida. La Seguridad Social cubre bien las urgencias graves, pero las listas de espera para especialistas y pruebas diagnósticas pueden ser largas. Si tu trabajo o actividad no te permite esperar semanas para ver a un especialista, el seguro privado marca la diferencia. Rosa y Sebastián te lo explican según tu caso concreto."} ].map((f,i) => (
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
              {[ {e:"⏱",t:"Respuesta en 30 min",d:"O te llamamos nosotros"}, {e:"📄",t:"Sin letra pequeña",d:"Todo explicado antes de firmar"}, {e:"👤",t:"Asesor personal de por vida",d:"Rosa o Sebastián, siempre el mismo"}, {e:"🔄",t:"Revisión gratuita anual",d:"Tu vida cambia — tu seguro también"} ].map((g,i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{g.e}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{g.t}</h3>
                  <p className="text-slate-600 text-sm">{g.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-[32px] bg-slate-50 border border-blue-200 shadow-md text-center">
              <p className="text-slate-700 leading-relaxed text-lg">“Cuando contratas con nosotros siendo joven, no te dejamos solo. Cada año revisamos contigo si tu cobertura sigue siendo la correcta para tu momento vital. Porque lo que necesitas a los 27 no es lo mismo que a los 33. Y nosotros lo sabemos.”</p>
              <p className="mt-4 font-bold text-slate-900">— Rosa Valentín y Sebastián</p>
            </div>
          </div>
        </section>

        {/* 12 CTA FINAL */}
        <section className="py-24 bg-[#0F5E9C] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5E9C] to-[#123B68] opacity-90" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Empieza a construir tu protección hoy.</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Cuéntanos tu situación — emancipación, hipoteca, autónomo. En 15 minutos sabes exactamente qué necesitas y qué no.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={wMain} className={cn(buttonVariants({size:"lg"}),"h-16 lg:h-20 px-10 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white rounded-2xl shadow-2xl gap-3 transition-all")}>Quiero Empezar Bien →</a>
              <a href="tel:603448765" className={cn(buttonVariants({variant:"outline",size:"lg"}),"h-16 lg:h-20 px-10 text-xl font-bold border-2 border-white/40 text-white hover:bg-white/10 rounded-2xl transition-all")}><Phone className="mr-2 w-5 h-5" />Llamar al 603 44 87 65</a>
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
