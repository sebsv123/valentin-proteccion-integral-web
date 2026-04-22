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
import { Phone, CheckCircle2, ArrowRight, HeartPulse, Users, Briefcase, Calculator, TrendingUp, ShieldCheck, Zap, Clock, Star, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Seguro Autónomos IRPF Madrid – RC + Salud desde 20€ | Valentín Protección Integral",
  description: "Seguro para autónomos en Madrid con deducción IRPF hasta 500€/año. RC + salud desde 20€/mes real. Checklist IRPF 2026 gratis. Rosa y Sebastián, tus asesores autónomos. DGSFP C012479234434D.",
  keywords: ["seguro autonomos irpf madrid","seguro rc autonomos madrid","seguro salud autonomo deducible irpf","deduccion 500 euros irpf autonomo","seguro accidentes autonomos madrid","rc profesional autonomos madrid","seguros autonomos boadilla del monte","checklist irpf autonomo 2026"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/autonomos" },
  openGraph: {
    title: "Seguro Autónomos IRPF Madrid – RC + Salud desde 20€",
    description: "Seguro para autónomos en Madrid con deducción IRPF hasta 500€/año. Checklist IRPF 2026 gratis. Rosa y Sebastián.",
    url: "https://valentinproteccionintegral.com/para/autonomos",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín" }],
  },
};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Seguros para Autónomos en Madrid – IRPF, RC y Salud","provider":{"@type":"LocalBusiness","name":"Valentín Protección Integral","telephone":"+34603448765","address":{"@type":"PostalAddress","addressLocality":"Boadilla del Monte","addressRegion":"Madrid","addressCountry":"ES"}},"areaServed":["Madrid","Boadilla del Monte","Majadahonda","Pozuelo de Alarcón","Las Rozas"],"description":"Seguros para autónomos en Madrid con deducción IRPF. RC+Accidentes desde 15€/mes, Salud desde 25€/mes. Asesoramiento gratuito.","offers":{"@type":"Offer","price":"20","priceCurrency":"EUR","description":"RC + Salud desde 20€/mes real tras deducción. Consulta gratuita."}};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Cuánto puede deducirse un autónomo por su seguro médico en el IRPF?","acceptedAnswer":{"@type":"Answer","text":"Hasta 500€ anuales por ti, 500€ más por cónyuge y 500€ más por cada hijo menor de 25 años. Si tienes familia de 4, la deducción máxima es 2.000€/año. Es una deducción directa en la cuota íntegra del IRPF — dinero real que dejas de pagar a Hacienda. Rosa y Sebastián te calculan tu cifra exacta gratis en 30 minutos."}},{"@type":"Question","name":"¿El seguro dental también es deducible para autónomos?","acceptedAnswer":{"@type":"Answer","text":"No. La deducción de 500€ aplica solo a seguros de salud/enfermedad. Los seguros exclusivamente dentales no califican para esta deducción individual. Sin embargo, si tienes empleados, su seguro dental sí puede ser deducible al 100% como gasto de empresa."}},{"@type":"Question","name":"¿Qué es la RC profesional para autónomos y necesito contratarla?","acceptedAnswer":{"@type":"Answer","text":"La Responsabilidad Civil profesional cubre los daños que puedas causar a terceros en el ejercicio de tu actividad. Para muchas actividades es obligatoria por ley o la exigen los clientes. Es deducible al 100% como gasto de empresa. Rosa y Sebastián analizan si la necesitas según tu actividad concreta."}},{"@type":"Question","name":"¿Puedo deducirme el seguro de mis empleados?","acceptedAnswer":{"@type":"Answer","text":"Sí. El seguro médico de tus trabajadores es deducible al 100% como gasto de empresa. Doble beneficio: ahorro fiscal real y retención de talento. Rosa y Sebastián gestionan todo el proceso para autónomos con equipo."}}]};

export const dynamic = "force-static";

export default function AutonomosPage() {
  const wMain = buildWhatsAppHref("Hola, soy autónomo en Madrid y quiero cotizar RC + salud con deducción IRPF.");
  const wSolo = buildWhatsAppHref("Hola, soy autónomo sin familia y quiero optimizar mi seguro con deducción IRPF.");
  const wFam = buildWhatsAppHref("Hola, soy autónomo con familia y quiero calcular la deducción IRPF máxima.");
  const wEmp = buildWhatsAppHref("Soy autónomo con empleados y quiero info sobre seguros deducibles para mi equipo.");
  const wPack = buildWhatsAppHref("Hola, quiero el pack accidentes+salud con descuento y el checklist IRPF 2026 gratis.");
  const wChecklist = buildWhatsAppHref("Hola, quiero recibir el checklist IRPF 2026 para autónomos gratuito.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros para Autónomos",url:"/para/autonomos"}]} />
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
                <span className="inline-flex items-center justify-center text-slate-600"><span>💼 Autónomos en Madrid · IRPF + RC + Salud</span><ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" /></span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">Seguro Autónomos IRPF Madrid – RC + Salud desde 20€</h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 mb-8 font-medium">Cotiza con Rosa y Sebastián. Proceso: WhatsApp → Análisis fiscal gratis en 30 minutos. Checklist IRPF 2026 incluido sin compromiso.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={wMain} className={cn(buttonVariants({size:"lg"}),"h-16 px-10 text-xl font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white rounded-2xl shadow-2xl shadow-green-500/20 gap-3")}><WhatsAppIcon className="w-6 h-6" />Cotiza IRPF por WhatsApp</a>
                <a href="tel:603448765" className={cn(buttonVariants({variant:"outline",size:"lg"}),"h-16 px-10 text-xl font-bold border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 rounded-2xl transition-all")}><Phone className="mr-2 w-5 h-5 text-blue-600" />Llamar: 603 44 87 65</a>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-sm font-bold text-amber-700"><Star className="w-4 h-4 text-amber-500" />+1.200 autónomos y familias protegidos · DGSFP C012479234434D · +10 años</div>
              <p className="mt-6 text-sm font-bold text-slate-400 flex items-center justify-center gap-2"><Clock className="w-4 h-4 text-amber-500" />⏱ Respuesta en 30 minutos · Análisis IRPF gratuito · Sin compromiso</p>
            </div>
          </div>
        </section>

        {/* 2 METRICAS */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><TrendingUp className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">500€</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Deducción IRPF por ti al año</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><ShieldCheck className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">20€/mes</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">RC + Salud desde (real tras IRPF)</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6"><Zap className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">0€</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Coste del análisis fiscal</p>
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
                {["Estás dado de alta como autónomo en España","No estás aprovechando la deducción de 500€ en el IRPF","Necesitas RC profesional o no sabes si tu actividad la requiere","Quieres una explicación fiscal honesta, no que te vendan a presión"].map((item,i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-green-500/20"><CheckCircle2 className="w-6 h-6" /></div>
                    <span className="text-xl font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 BENEFICIOS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Por qué los autónomos de Madrid nos eligen</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-6"><Zap className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">1 clic = cotización RC + salud + deducción completa</h3>
                <p className="text-slate-600 leading-relaxed">Un mensaje por WhatsApp y Rosa o Sebastián te devuelven tu análisis IRPF exacto, la cotización de RC y las mejores opciones de salud en menos de 30 minutos. Sin formularios, sin esperas.</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-6"><span className="text-3xl">🎁</span></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Checklist IRPF 2026 gratis + 5% pack accidentes+salud</h3>
                <p className="text-slate-600 leading-relaxed">Al contactarnos te enviamos el checklist IRPF 2026 para autónomos personalizado — deducciones reales que muchos pierden cada año. Si contratas accidentes con salud, descuento exclusivo del 5% en la primera prima.</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6"><ShieldCheck className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Experto dedicado + revisión anual fiscal</h3>
                <p className="text-slate-600 leading-relaxed">Respuesta en 30 minutos o te llamamos nosotros. Deducciones explicadas en lenguaje normal, sin tecnicismos. Revisión anual gratuita de cobertura y optimización fiscal. Rosa o Sebastián — siempre el mismo asesor.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5 TABLA COBERTURAS */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-slate-100">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-center text-slate-900 tracking-tight">Coberturas para autónomos — Precios y deducción IRPF</h2>
              <p className="text-center text-slate-500 mb-10 font-medium">Precios orientativos. Te damos el precio exacto en 30 minutos.</p>
              <div className="overflow-hidden rounded-2xl border bg-card/50 overflow-x-auto">
                <table className="w-full text-left">
                  <thead><tr className="bg-slate-100"><th className="px-4 py-3 font-bold text-slate-700">Cobertura</th><th className="px-4 py-3 font-bold text-slate-700">Precio desde</th><th className="px-4 py-3 font-bold text-slate-700">Deducción IRPF</th></tr></thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-accent/30 transition-colors"><td className="px-4 py-3 font-medium">RC + Accidentes</td><td className="px-4 py-3 font-bold text-blue-600">15€/mes</td><td className="px-4 py-3 text-slate-600">100% deducible como gasto empresa</td></tr>
                    <tr className="hover:bg-accent/30 transition-colors"><td className="px-4 py-3 font-medium">Salud Pro</td><td className="px-4 py-3 font-bold text-blue-600">25€/mes</td><td className="px-4 py-3 text-slate-600">Hasta 500€ ahorro real al año</td></tr>
                    <tr className="hover:bg-accent/30 transition-colors"><td className="px-4 py-3 font-medium">Pack Integral</td><td className="px-4 py-3 font-bold text-blue-600">35€/mes</td><td className="px-4 py-3 text-slate-600">Descuento 5% + checklist IRPF gratis</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-slate-500 text-center">*RC: Responsabilidad Civil profesional. Deducción IRPF sujeta a normativa vigente. Rosa y Sebastián te confirman tu caso exacto.</p>
              <div className="mt-8 text-center">
                <a href={wPack} className={cn(buttonVariants({size:"lg"}),"h-14 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}><WhatsAppIcon className="h-5 w-5" />Quiero el pack con descuento y el checklist IRPF →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 6 PERFILES */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">¿Cuál es tu situación?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><HeartPulse className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Autónomo solo</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Salud individual con deducción IRPF. Desde 25€/mes brutos, ~20€/mes real tras deducción. RC profesional desde 15€/mes si tu actividad lo requiere.</p>
                <a href={wSolo} className={cn(buttonVariants({variant:"ghost"}),"text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Ver opciones para mí →</a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6"><Users className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Autónomo con familia</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Deducción máxima hasta 2.000€ con cónyuge e hijos. Salud familiar completa con pediatras. Pack optimizado para tu situación fiscal exacta.</p>
                <a href={wFam} className={cn(buttonVariants({variant:"ghost"}),"text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Calcular mi deducción familiar →</a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><Briefcase className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Autónomo con empleados</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Seguro médico del equipo deducible al 100% como gasto empresa. Ahorro fiscal + retención de talento. Gestión completa del proceso.</p>
                <a href={wEmp} className={cn(buttonVariants({variant:"ghost"}),"text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Info para mi equipo →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 7 CALCULADORA FISCAL */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-blue-200">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-none w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-700"><Calculator className="w-7 h-7" /></div>
                <div><h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">¿Cuánto te puedes deducir exactamente?</h2></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3 text-slate-900">¿Quién puede deducirse?</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />Tú como autónomo: hasta 500€</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />Tu cónyuge/pareja: otros 500€</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />Cada hijo menor de 25: 500€ más</li>
                    <li className="flex items-center gap-2 font-bold text-slate-900"><TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />Total familiar máximo: 2.000€/año</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-3 text-slate-900">Ejemplo con números reales</h4>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li>Seguro de salud: <strong className="text-slate-900">55€/mes</strong> (660€/año)</li>
                    <li>Deducción IRPF máxima: <strong className="text-blue-600">500€</strong></li>
                    <li>Coste real anual: <strong className="text-slate-900">~540€ netos</strong></li>
                    <li className="text-blue-600 font-bold text-lg mt-2">= 45€/mes real</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
                <p className="text-amber-800 text-sm"><strong>Importante:</strong> Esta deducción es directa sobre la cuota íntegra del IRPF, no una reducción de base imponible. Es dinero real que dejas de pagar a Hacienda. Rosa y Sebastián te confirman tu cifra exacta sin compromiso.</p>
              </div>
              <div className="text-center">
                <a href={wFam} className={cn(buttonVariants({size:"lg"}),"h-14 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}><WhatsAppIcon className="h-5 w-5" />Calcular mi deducción exacta →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 8 INSIGHT EMPLEADOS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-blue-200">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-none w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl shadow-sm">💼</div>
                <div><h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Si tienes empleados, su seguro también es deducible</h2></div>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>Al 100% como gasto de empresa. Muchos autónomos con pequeños equipos no saben que el seguro médico de sus trabajadores es completamente deducible.</p>
                <p>Doble beneficio: ahorro fiscal real y retención de talento. Rosa y Sebastián gestionan todo el proceso.</p>
              </div>
              <div className="mt-10 text-center">
                <a href={wEmp} className={cn(buttonVariants({size:"lg"}),"h-14 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}><WhatsAppIcon className="h-5 w-5" />Quiero info sobre seguros para mi equipo →</a>
              </div>
            </div>
          </div>
        </section>

        {/* 9 CROSS-SELL */}
        <section className="py-24 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-6 bg-white/10 rounded-[24px] mb-8 backdrop-blur-xl"><span className="text-6xl">🎁</span></div>
              <h3 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">Contrata accidentes con salud y te aplicamos un descuento exclusivo del 5% en tu primera prima.</h3>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">+ checklist IRPF 2026 para autónomos personalizado, gratis.</p>
              <a href={wPack} className={cn(buttonVariants({size:"lg"}),"h-16 px-12 text-xl font-black bg-white text-slate-900 hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl transition-all shadow-xl")}><WhatsAppIcon className="h-6 w-6" />Quiero el pack con descuento →</a>
            </div>
          </div>
        </section>

        {/* 10 PROCESO + FOTO */}
        <section className="py-24 lg:py-32 bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16"><h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">Así de sencillo es empezar</h2></div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {[ {n:1,t:"Cuéntanos tu situación",d:"¿Solo, con familia, con empleados? Un mensaje. Rosa o Sebastián lo reciben directamente."}, {n:2,t:"Análisis fiscal en 30 minutos",d:"Calculamos tu deducción IRPF exacta, cotizamos RC y salud y te lo explicamos en lenguaje normal."}, {n:3,t:"Propuesta sin compromiso",d:"Precios netos reales tras deducción. Si decides contratar, en 24h tienes tu póliza activa."} ].map((step,i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="flex-none w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#0F5E9C] transition-colors shadow-lg">{step.n}</div>
                    <div><h3 className="text-2xl font-bold mb-3 text-white">{step.t}</h3><p className="text-white/60 text-lg leading-relaxed">{step.d}</p></div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10 group">
                <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián Valentín" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white"><p className="font-bold text-lg">Rosa y Sebastián</p><p className="text-white/80">Tus asesores autónomos · Boadilla del Monte, Madrid</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* 11 RESEÑAS REALES */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <GoogleReviewsWidget title="Lo que dicen nuestros autónomos en Madrid" />
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

        {/* 12 FAQ FISCAL */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Preguntas frecuentes sobre deducción IRPF y RC</h2>
            <div className="grid gap-6">
              {[ {q:"¿Cuánto puede deducirse un autónomo por su seguro médico en el IRPF?",a:"Hasta 500€ anuales por ti, 500€ más por cónyuge y 500€ más por cada hijo menor de 25 años. Si tienes familia de 4, la deducción máxima es 2.000€/año. Es una deducción directa en la cuota íntegra del IRPF — dinero real que dejas de pagar a Hacienda. Rosa y Sebastián te calculan tu cifra exacta gratis en 30 minutos."}, {q:"¿El seguro dental también es deducible para autónomos?",a:"No. La deducción de 500€ aplica solo a seguros de salud/enfermedad. Los seguros exclusivamente dentales no califican para esta deducción individual. Sin embargo, si tienes empleados, su seguro dental sí puede ser deducible al 100% como gasto de empresa."}, {q:"¿Qué es la RC profesional para autónomos y necesito contratarla?",a:"La Responsabilidad Civil profesional cubre los daños que puedas causar a terceros en el ejercicio de tu actividad. Para muchas actividades es obligatoria por ley o la exigen los clientes. Es deducible al 100% como gasto de empresa. Rosa y Sebastián analizan si la necesitas según tu actividad concreta."}, {q:"¿Puedo deducirme el seguro de mis empleados?",a:"Sí. El seguro médico de tus trabajadores es deducible al 100% como gasto de empresa. Doble beneficio: ahorro fiscal real y retención de talento. Rosa y Sebastián gestionan todo el proceso para autónomos con equipo."} ].map((f,i) => (
                <div key={i} className="p-6 rounded-[24px] bg-white border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-lg mb-2 text-slate-900">{f.q}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13 GARANTIAS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Nuestro compromiso con los autónomos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ {e:"⏱",t:"Respuesta en 30 min",d:"O te llamamos nosotros"}, {e:"📄",t:"Deducciones explicadas claras",d:"Sin tecnicismos, antes de firmar"}, {e:"👤",t:"Experto dedicado de por vida",d:"Rosa o Sebastián, siempre el mismo"}, {e:"🔄",t:"Revisión anual fiscal gratuita",d:"Optimizamos cobertura y deducción cada año"} ].map((g,i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{g.e}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{g.t}</h3>
                  <p className="text-slate-600 text-sm">{g.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-[32px] bg-slate-50 border border-emerald-200 shadow-md text-center">
              <p className="text-slate-700 leading-relaxed text-lg">“Como autónomo sabes que el tiempo es dinero. Nosotros también. Si tardamos más de 30 minutos en responderte en horario hábil, te regalamos un análisis completo de todas tus pólizas actuales para detectar coberturas innecesarias o mejorables. Sin coste.”</p>
              <p className="mt-4 font-bold text-slate-900">— Rosa Valentín y Sebastián</p>
            </div>
          </div>
        </section>

        {/* 14 CTA FINAL */}
        <section className="py-24 bg-[#0F5E9C] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5E9C] to-[#123B68] opacity-90" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Aprovecha la deducción IRPF que ya tienes disponible.</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">Cuéntanos tu situación. Te calculamos exactamente cuánto puedes ahorrar. Es gratis y sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={wMain} className={cn(buttonVariants({size:"lg"}),"h-16 lg:h-20 px-10 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white rounded-2xl shadow-2xl gap-3 transition-all")}>Cotiza IRPF por WhatsApp →</a>
              <a href="tel:603448765" className={cn(buttonVariants({variant:"outline",size:"lg"}),"h-16 lg:h-20 px-10 text-xl font-bold border-2 border-white/40 text-white hover:bg-white/10 rounded-2xl transition-all")}><Phone className="mr-2 w-5 h-5" />Llamar al 603 44 87 65</a>
            </div>
            <p className="mt-8 text-sm text-white/50 font-mono">Valentín Protección Integral · NIF: 79234434D · DGSFP: C012479234434D</p>
            <p className="mt-2 text-sm text-white/50 font-mono">Boadilla del Monte, Madrid · +10 años · +1.200 autónomos y familias protegidos</p>
          </div>
        </section>

      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
