import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asesor Seguros Madrid Gratis – Análisis en <30 Min | Valentín Protección Integral",
  description: "Asesoría de seguros gratuita en Madrid. Rosa y Sebastián analizan salud, vida y autónomos en menos de 30 minutos. Sin presión, sin letra pequeña, sin compromiso. DGSFP C012479234434D.",
  keywords: ["asesor seguros madrid", "asesor seguros madrid gratis", "consulta gratuita seguros madrid", "comparar seguros madrid", "seguro barato madrid", "mediador seguros madrid", "asesoría seguros boadilla del monte", "cotizar seguro madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/landing/asesoria-gratuita" },
  openGraph: {
    title: "Asesor Seguros Madrid Gratis – Análisis en <30 Min",
    description: "Asesoría de seguros gratuita en Madrid. Analizamos salud, vida y autónomos en menos de 30 minutos.",
    url: "https://valentinproteccionintegral.com/landing/asesoria-gratuita",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín, asesores de seguros en Madrid" }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Asesoría de Seguros Gratuita en Madrid",
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
  "areaServed": ["Madrid", "Boadilla del Monte", "Majadahonda", "Pozuelo de Alarcón", "Las Rozas", "Madrid Oeste"],
  "description": "Asesoría gratuita de seguros en Madrid. Análisis de salud, vida y seguros para autónomos en menos de 30 minutos. Sin compromiso.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "Consulta gratuita sin compromiso." }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un mediador de seguros independiente?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un mediador independiente como Valentín Protección Integral trabaja con varias compañías a la vez y no tiene obligación de colocar productos de ninguna en concreto. Eso significa que te recomendamos lo que realmente te conviene, no lo que nos da más comisión. Es la diferencia entre un asesor y un vendedor." }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta la asesoría?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutamente nada. La consulta inicial, el análisis de tus necesidades y la propuesta personalizada son siempre gratuitas. Solo cobramos si decides contratar, y eso lo paga la compañía aseguradora, no tú." }
    },
    {
      "@type": "Question",
      "name": "¿En cuánto tiempo me responden?",
      "acceptedAnswer": { "@type": "Answer", "text": "Menos de 30 minutos en horario hábil. Si tardamos más, te regalamos un chequeo completo de todas tus pólizas actuales sin coste alguno. Nadie en el sector garantiza su tiempo. Nosotros sí." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo cambiar de seguro si ya tengo uno?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Analizamos tu póliza actual, te decimos si estás pagando de más o si tienes coberturas que no necesitas, y buscamos alternativas sin que pierdas la protección ni un solo día. Rosa y Sebastián gestionan el cambio por ti de principio a fin." }
    }
  ]
};

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import RetroGrid from "@/components/magicui/retro-grid";

import {
  Phone, CheckCircle2, ArrowRight, Clock, ShieldCheck, Zap, Users,
  Star, MapPin, Gift, Heart, Briefcase, FileText, TrendingUp,
} from "lucide-react";

export default function Page() {
  const whatsappHref = `https://wa.me/34603448765?text=${encodeURIComponent(
    "Hola, vi tu anuncio y quiero una asesoría gratuita de seguros en Madrid."
  )}`;

  const whatsappFamily = `https://wa.me/34603448765?text=${encodeURIComponent(
    "Hola, somos una familia en Madrid y queremos asesoría de seguros."
  )}`;

  const whatsappAutonomo = `https://wa.me/34603448765?text=${encodeURIComponent(
    "Hola, soy autónomo en Madrid y quiero optimizar mis seguros y deducciones."
  )}`;

  const whatsappPrimera = `https://wa.me/34603448765?text=${encodeURIComponent(
    "Hola, nunca he tenido seguro y quiero que me expliquéis qué necesito."
  )}`;

  const whatsappPack = `https://wa.me/34603448765?text=${encodeURIComponent(
    "Hola, quiero saber más sobre el descuento por contratar varios seguros juntos."
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">

        {/* SECCIÓN 1 — HEADER STICKY MÍNIMO */}
        <nav className="border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative h-[44px] w-[160px] overflow-hidden rounded-[20px] border border-white/20 bg-white px-2 py-1 shadow-sm transition-transform hover:scale-105">
                <Image src="/brand/logo-vpi.webp" alt="Valentín Protección Integral" width={440} height={181} className="h-full w-full object-contain" priority />
              </div>
            </a>
            <a href="tel:603448765" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="hidden sm:inline">603 44 87 65</span>
              <span className="sm:hidden">Llamar</span>
            </a>
          </div>
        </nav>

        {/* SECCIÓN 2 — HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-background border-b">
          <div className="absolute inset-0 z-0">
            <RetroGrid className="opacity-40" />
          </div>
          <div className="container relative z-20 mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Columna izquierda - Texto */}
              <div className="text-center lg:text-left">
                <div className="group rounded-full border border-slate-200 bg-slate-100/50 text-sm transition-all hover:bg-slate-100 mb-8 z-10 backdrop-blur-sm px-6 py-2 inline-flex items-center justify-center">
                  <span className="inline-flex items-center justify-center text-slate-600">
                    <span>📍 Asesoría de Seguros · Madrid</span>
                    <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">
                  Asesor Seguros Madrid Gratis – Análisis en &lt;30 Min
                </h1>

                <p className="max-w-xl text-lg sm:text-xl text-slate-500 mb-8 font-medium">
                  Cotiza salud, vida y seguros para autónomos con Rosa y Sebastián. Proceso simple: WhatsApp → Respuesta ya. Sin papeleo, sin esperas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href={whatsappHref}
                    data-track="lead"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "h-16 px-10 text-xl font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white rounded-2xl shadow-2xl shadow-green-500/20 gap-3"
                    )}
                  >
                    <WhatsAppIcon className="w-6 h-6" />
                    Habla Ahora por WhatsApp
                  </a>
                  <a
                    href="tel:603448765"
                    data-track="lead"
                    className={cn(
                      buttonVariants({ variant: "outline", size: "lg" }),
                      "h-16 px-10 text-xl font-bold border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 rounded-2xl transition-all"
                    )}
                  >
                    <Phone className="mr-2 w-5 h-5 text-blue-600" />
                    Llamar: 603 44 87 65
                  </a>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-sm font-bold text-amber-700">
                  <Star className="w-4 h-4 text-amber-500" />
                  DGSFP C012479234434D · +10 años · +1.200 familias y autónomos protegidos
                </div>

                <p className="mt-6 text-sm font-bold text-slate-400 flex items-center justify-center lg:justify-start gap-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  ⏱ Respuesta en menos de 30 minutos · Análisis gratuito sin compromiso
                </p>
              </div>

              {/* Columna derecha - Foto */}
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-slate-50 group">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián Valentín"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-lg">Rosa Valentín y Sebastián</p>
                  <p className="text-white/80">Tus asesores en Madrid</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3 — 3 MÉTRICAS */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="text-5xl font-black text-slate-900 mb-2">30 min</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Para tu análisis completo gratis</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="text-5xl font-black text-slate-900 mb-2">0€</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Coste de la asesoría, siempre</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <div className="text-5xl font-black text-slate-900 mb-2">+1.200</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Familias y autónomos protegidos</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4 — ESTO ES PARA TI SI... */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-slate-100">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">¿Esta asesoría es para ti?</h2>
              <div className="grid gap-6">
                {[
                  "Tienes seguros pero no sabes si son los correctos para ti",
                  "Nunca has tenido seguro y no sabes por dónde empezar",
                  "Estás pagando de más y quieres una segunda opinión honesta",
                  "Eres autónomo y quieres optimizar gastos y deducciones IRPF"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-green-500/20">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5 — BENEFICIOS CON ICONOS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Por qué elegirnos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">SENCILLEZ</h3>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">1 mensaje = cotización completa</span><br />
                  Escríbenos por WhatsApp y en menos de 30 minutos tienes tu análisis personalizado. Cero formularios, cero complicaciones, cero esperas innecesarias.
                </p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">SORPRESAS</h3>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">Análisis comparativo gratis + descuento pack 5%</span><br />
                  Te enviamos un análisis comparativo de opciones sin coste. Si contratas salud con vida, accidentes o decesos, aplicamos un descuento exclusivo en la primera prima. Autónomos: checklist IRPF personalizado incluido.
                </p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">GARANTÍAS</h3>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-bold text-slate-800">Asesor personal de por vida</span><br />
                  Respuesta en 30 minutos o te llamamos nosotros. Sin letra pequeña. Revisión anual gratuita de tu cobertura. Rosa o Sebastián — siempre la misma persona.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 6 — TABLA PRODUCTOS */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-slate-100">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-10 text-center text-slate-900 tracking-tight">¿Para qué necesitas asesoría?</h2>

              <div className="overflow-hidden rounded-2xl border bg-card/50 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-4 py-3 font-bold text-slate-700">Asesoría Gratis Para</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Desde</th>
                      <th className="px-4 py-3 font-bold text-slate-700">Beneficio Clave</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      { c: "Autónomos en Madrid", p: "20€/mes", b: "IRPF deducible + RC profesional" },
                      { c: "Familias", p: "25€/mes", b: "Vida + Decesos + Salud en pack" },
                      { c: "Salud Privada", p: "25€/mes", b: "Hospitales privados Madrid sin espera" },
                      { c: "Primera vez", p: "Gratis", b: "Te explicamos todo desde cero" },
                    ].map((fila, i) => (
                      <tr key={i} className="hover:bg-accent/30 transition-colors">
                        <td className="px-4 py-3 font-medium">{fila.c}</td>
                        <td className="px-4 py-3 font-bold text-blue-600">{fila.p}</td>
                        <td className="px-4 py-3 text-slate-600">{fila.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-sm text-slate-500 text-center">
                Precios orientativos. Rosa y Sebastián te dan tu presupuesto exacto en 30 minutos, sin compromiso ni letra pequeña.
              </p>

              <div className="mt-8 text-center">
                <a
                  href={whatsappHref}
                  data-track="lead"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Quiero mi análisis gratuito →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 7 — 3 PERFILES DE CLIENTE */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">¿Quién eres tú?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Familias</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Salud, vida, dental y decesos. Unificamos tu protección familiar y eliminamos coberturas duplicadas.
                </p>
                <a
                  href={whatsappFamily}
                  data-track="lead"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full h-12 text-base font-bold bg-slate-900 hover:bg-slate-800 text-white"
                  )}
                >
                  Soy familia →
                </a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Autónomos</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Salud deducible IRPF hasta 500€/año, accidentes laborales y RC. Lo gestionamos todo para que tú te concentres en tu negocio.
                </p>
                <a
                  href={whatsappAutonomo}
                  data-track="lead"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full h-12 text-base font-bold bg-slate-900 hover:bg-slate-800 text-white"
                  )}
                >
                  Soy autónomo →
                </a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Primera vez</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Te explicamos cómo funciona el sistema desde cero. Sin tecnicismos, sin presiones. Si no te conviene nada, te lo decimos.
                </p>
                <a
                  href={whatsappPrimera}
                  data-track="lead"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full h-12 text-base font-bold bg-slate-900 hover:bg-slate-800 text-white"
                  )}
                >
                  Es mi primera vez →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 8 — SIN ASESORÍA vs CON VALENTÍN */}
        <section className="py-24 lg:py-40 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="container mx-auto max-w-5xl px-4 relative z-10">
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">La llamada que lo cambia todo</p>
              <h2 className="text-3xl lg:text-6xl font-extrabold mb-8 tracking-tight">
                Ahorra tiempo, <span className="text-blue-500">dinero y sustos</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="p-8 lg:p-12 rounded-[40px] border border-white/10 bg-white/5">
                <h3 className="text-2xl font-bold mb-10 text-slate-400">Sin asesoría profesional</h3>
                <div className="space-y-6">
                  {[
                    "Contratas lo primero que aparece en Google",
                    "Pagas coberturas que no necesitas o te faltan las que sí",
                    "En un siniestro hablas con un call center genérico",
                    "Nadie te explicó la letra pequeña de las carencias"
                  ].map((item, j) => (
                    <div key={j} className="flex gap-4 items-start">
                      <span className="flex-none mt-1 font-bold text-slate-600">✗</span>
                      <p className="text-lg text-slate-400">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 lg:p-12 rounded-[40px] border border-blue-500/30 bg-blue-600/10 ring-1 ring-blue-500/50">
                <h3 className="text-2xl font-bold mb-10 text-blue-400">Con Valentín Protección Integral</h3>
                <div className="space-y-6">
                  {[
                    "En 30 min tienes el mapa real de lo que te conviene",
                    "Prima ajustada a tu presupuesto real, sin excesos",
                    "Tienes el WhatsApp de Rosa y Sebastián de por vida",
                    "Te traducimos las condiciones al lenguaje normal"
                  ].map((item, j) => (
                    <div key={j} className="flex gap-4 items-start">
                      <span className="flex-none mt-1 font-bold text-blue-500">✓</span>
                      <p className="text-lg text-white font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 9 — PROCESO + FOTO */}
        <section className="py-24 lg:py-32 bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">Así de sencillo es empezar</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {[
                  { n: 1, t: "Escríbenos por WhatsApp", d: "Un mensaje. Rosa o Sebastián lo reciben directamente, sin intermediarios." },
                  { n: 2, t: "Análisis en menos de 30 minutos", d: "Estudiamos tu caso, cotizamos opciones reales y te explicamos todo en lenguaje normal." },
                  { n: 3, t: "Propuesta clara, tú decides", d: "Sin presión, sin letra pequeña. Si decides contratar, en 24h tienes tu póliza activa." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="flex-none w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#0F5E9C] transition-colors shadow-lg">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.t}</h3>
                      <p className="text-white/60 text-lg leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10 group">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián Valentín"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-lg">Rosa Valentín y Sebastián</p>
                  <p className="text-white/80">Tus asesores · Boadilla del Monte, Madrid</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 10 — TESTIMONIOS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Lo que dicen nuestros clientes en Madrid</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { text: "El análisis gratuito me ahorró más de 400€ al año. Me explicaron todo sin prisa y sin intentar venderme nada. Fue una sorpresa muy agradable.", name: "María G.", role: "Boadilla del Monte" },
                { text: "Llevaba años con el mismo seguro sin saber si era el mejor. En 20 minutos Rosa me explicó todo y cambié sin perder ni un día de cobertura.", name: "Laura P.", role: "38 años, Majadahonda" },
                { text: "Lo mejor es que te dicen la verdad aunque no contraten. Eso no lo hace nadie. Ahora somos clientes desde hace 3 años.", name: "Carlos M.", role: "autónomo, Pozuelo de Alarcón" },
              ].map((t, i) => (
                <div key={i} className="p-8 rounded-[40px] bg-slate-50 border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-sm font-bold text-slate-600">
                <MapPin className="w-4 h-4" />
                NIF: 79234434D · Mediador registrado DGSFP: C012479234434D · Boadilla del Monte, Madrid
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Zona de actuación: Madrid · Boadilla del Monte · Majadahonda · Pozuelo · Las Rozas
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 11 — CROSS-SELL */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-[#0f172a] text-white p-12 lg:p-20 rounded-[48px] text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 transition-transform duration-700 group-hover:scale-125">
                <Zap className="w-56 h-56" />
              </div>
              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-block p-6 bg-white/10 rounded-[24px] mb-8 backdrop-blur-xl">
                  <span className="text-6xl">🎁</span>
                </div>
                <h3 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                  Contrata salud con vida, decesos o accidentes y te aplicamos un descuento exclusivo en tu primera prima.
                </h3>
                <p className="text-xl text-white/70 mb-8">
                  + checklist de ahorro fiscal IRPF para autónomos, completamente gratis.
                </p>
                <a
                  href={whatsappPack}
                  data-track="lead"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#0f172a] hover:bg-[#25D366] hover:text-white px-12 py-6 rounded-2xl text-xl font-black transition-all shadow-xl"
                >
                  Quiero el descuento pack →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 12 — GARANTÍAS */}
        <section className="py-14 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-5xl mb-4 text-slate-900">Nuestras Garantías</h2>
              <p className="text-xl text-slate-500">Promesas que cumplimos</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Clock className="h-8 w-8" />, title: "⏱ Respuesta en 30 min", desc: "O te regalamos el chequeo completo de tus pólizas" },
                { icon: <FileText className="h-8 w-8" />, title: "📄 Sin letra pequeña", desc: "Te explicamos todo antes de firmar, siempre" },
                { icon: <Users className="h-8 w-8" />, title: "👤 Asesor personal de por vida", desc: "Rosa o Sebastián. Siempre el mismo." },
                { icon: <Zap className="h-8 w-8" />, title: "🔄 Revisión anual gratuita", desc: "Cada año revisamos que tu cobertura sea óptima" },
              ].map((garantia, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    {garantia.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{garantia.title}</h3>
                  <p className="text-slate-500 text-sm">{garantia.desc}</p>
                </div>
              ))}
            </div>
            <div className="mx-auto max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 px-8 py-6 text-center">
              <p className="text-lg font-bold text-blue-900 mb-2">¿Y si no cumplimos?</p>
              <p className="text-blue-800 leading-relaxed mb-2">
                Te regalamos un chequeo completo de todas tus pólizas actuales sin coste alguno, para detectar errores de capitales que pueden ser vitales.
              </p>
              <p className="text-sm text-blue-700 italic">Nadie en el sector garantiza su tiempo. Nosotros sí. — Rosa Valentín y Sebastián</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN 13 — CTA FINAL */}
        <section className="py-14 sm:py-20 lg:py-24 bg-[#0F5E9C] text-white">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              Tu tranquilidad empieza con una conversación.
            </h2>
            <p className="text-base sm:text-xl text-white/70 mb-8">
              Rosa y Sebastián te dan la claridad que necesitas hoy mismo. Es gratis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={whatsappHref}
                data-track="lead"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-16 lg:h-20 px-12 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white gap-2 rounded-2xl shadow-2xl"
                )}
              >
                <WhatsAppIcon className="h-7 w-7" />
                Habla Ahora por WhatsApp — Es Gratis
              </a>
              <a
                href="tel:603448765"
                data-track="lead"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-16 lg:h-20 px-12 text-xl font-black border-2 border-white text-white hover:bg-white hover:text-[#0F5E9C] rounded-2xl"
                )}
              >
                <Phone className="h-6 w-6 mr-2" />
                Llamar al 603 44 87 65
              </a>
            </div>
            <p className="text-xs text-white/60">
              Valentín Protección Integral · NIF 79234434D · DGSFP C012479234434D
            </p>
          </div>
        </section>

        {/* FOOTER MÍNIMO */}
        <footer className="py-16 border-t bg-slate-50 text-center text-slate-400 text-sm">
          <div className="container mx-auto px-4">
            <p className="flex flex-wrap justify-center items-center gap-4">
              <span className="font-bold text-slate-900">© 2026 Valentín Protección Integral · NIF: 79234434D</span>
              <span className="hidden sm:inline">·</span>
              <a href="/privacidad" className="hover:text-blue-600 transition-colors">Privacidad</a>
              <span className="hidden sm:inline">·</span>
              <a href="/aviso-legal" className="hover:text-blue-600 transition-colors">Aviso legal</a>
            </p>
          </div>
        </footer>

        {/* GLOBO WHATSAPP FLOTANTE */}
        <a
          href={whatsappHref}
          data-track="lead"
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center
                     rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.5)]
                     hover:scale-110 transition-transform duration-200"
        >
          <WhatsAppIcon className="h-8 w-8" />
        </a>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('click', function(e) {
              const el = e.target.closest('[data-track="lead"]');
              if (!el) return;
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'whatsapp_click', {
                  event_category: 'lead',
                  event_label: 'landing-asesoria-gratuita'
                });
              }
              if (typeof window !== 'undefined' && window.fbq) {
                window.fbq('track', 'Lead', { content_name: 'landing-asesoria-gratuita' });
              }
            });
          `
        }}
      />
    </>
  );
}