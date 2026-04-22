import { Metadata } from "next";
import { RetroGridWrapper } from "./retro-grid-wrapper";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Phone, CheckCircle2, ArrowRight, HeartPulse, Smile, Shield, Umbrella, Star, Clock, ShieldCheck } from "lucide-react";


export const metadata: Metadata = {
  title: "Seguros para Familias en Madrid – Protección Completa desde 25€/mes | Valentín Protección Integral",
  description: "Seguros familiares en Madrid desde 25€/mes. Salud, vida, dental y decesos para toda tu familia. Rosa y Sebastián os asesoran gratis en 30 minutos. Sin letra pequeña.",
  keywords: ["seguros familia madrid","seguro salud familiar madrid","seguro dental familia madrid","seguro vida familia madrid","seguro decesos familiar madrid","proteccion familiar madrid","seguros familias boadilla del monte","seguro medico familia madrid"],
  alternates: { canonical: "https://valentinproteccionintegral.com/para/familias" },
  openGraph: {
    title: "Seguros para Familias en Madrid – Protección Completa desde 25€/mes",
    description: "Seguros familiares en Madrid desde 25€/mes. Rosa y Sebastián os asesoran gratis.",
    url: "https://valentinproteccionintegral.com/para/familias",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
    images: [{ url: "https://valentinproteccionintegral.com/images/rosa_y_sebastian_mesa.png", alt: "Rosa y Sebastián Valentín" }],
  },
};

export const dynamic = "force-static";

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Seguros para Familias en Madrid","provider":{"@type":"LocalBusiness","name":"Valentín Protección Integral","telephone":"+34603448765","address":{"@type":"PostalAddress","addressLocality":"Boadilla del Monte","addressRegion":"Madrid","addressCountry":"ES"}},"areaServed":["Madrid","Boadilla del Monte","Majadahonda","Pozuelo de Alarcón","Las Rozas"],"description":"Seguros familiares en Madrid desde 25€/mes. Salud, vida, dental y decesos para toda tu familia.","offers":{"@type":"Offer","price":"25","priceCurrency":"EUR","description":"Seguros familiares desde 25€/mes. Consulta gratuita."}};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"¿Qué seguros necesita una familia en Madrid?","acceptedAnswer":{"@type":"Answer","text":"Una familia completa suele necesitar salud privada para evitar listas de espera, dental para niños y adultos, vida para proteger a los que dependen del sueldo principal, y decesos para que nadie tenga que gestionar nada en los momentos difíciles. Rosa y Sebastián analizan tu situación exacta y te dicen qué es prioritario según tu presupuesto — gratis y sin compromiso."}},{"@type":"Question","name":"¿Cuánto cuesta un seguro de salud familiar en Madrid?","acceptedAnswer":{"@type":"Answer","text":"Los seguros de salud familiar que gestionamos en Madrid empiezan desde 25€/mes para adultos y menos de 15€/mes por niño. El precio depende de las edades y coberturas. En 30 minutos Rosa y Sebastián te dan el precio exacto para tu familia sin compromiso."}},{"@type":"Question","name":"¿Puedo contratar salud y dental juntos para toda la familia?","acceptedAnswer":{"@type":"Answer","text":"Sí, y además cuando contratas salud junto con dental, vida o decesos, aplicamos un descuento exclusivo en la primera prima. Es nuestro pack familiar. Muchas familias no saben que por 20-30€ más al mes sobre el dental pueden tener salud completa con especialistas y urgencias para todos."}},{"@type":"Question","name":"¿Qué pasa si ya tengo un seguro familiar?","acceptedAnswer":{"@type":"Answer","text":"Lo analizamos sin coste. Te decimos si estás pagando de más, si tienes coberturas duplicadas o si te faltan coberturas importantes para tu situación actual. Las familias cambian: nacen hijos, crecen los niños, cambia el trabajo. Tu seguro debería adaptarse. Nosotros hacemos esa revisión gratis."}}]};

export default function FamiliasPage() {
  const wMain = buildWhatsAppHref("Hola, somos una familia en Madrid y queremos revisar nuestra protección. ¿Podemos hablar?");
  const wPack = buildWhatsAppHref("Hola, quiero saber más sobre el pack familiar con descuento.");
  const wDental = buildWhatsAppHref("Tengo seguro dental familiar y quiero saber cuánto cuesta pasar a salud completa.");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros para Familias",url:"/para/familias"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <Header />
      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">

        {/* HERO */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-background border-b">
          <div className="absolute inset-0 z-0"><RetroGridWrapper className="opacity-40" /></div>
          <div className="container relative z-20 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="group rounded-full border border-slate-200 bg-slate-100/50 text-sm transition-all hover:bg-slate-100 mb-8 z-10 backdrop-blur-sm px-6 py-2 inline-flex items-center justify-center">
                <span className="inline-flex items-center justify-center text-slate-600">
                  <span>👨‍👩‍👧‍👦 Familias en Madrid · Protección real</span>
                  <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1] text-slate-900">
                Seguros para Familias en Madrid – Protección Completa desde 25€/mes
              </h1>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 mb-8 font-medium">
                Salud, dental, vida y decesos para todos. Rosa y Sebastián os conocen, os escuchan y os acompañan de verdad. Sin letra pequeña.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={wMain} className={cn(buttonVariants({ size: "lg" }), "h-16 px-10 text-xl font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white rounded-2xl shadow-2xl shadow-green-500/20 gap-3")}>
                  <WhatsAppIcon className="w-6 h-6" />
                  Quiero proteger a mi familia
                </a>
                <a href="tel:603448765" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-16 px-10 text-xl font-bold border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 rounded-2xl transition-all")}>
                  <Phone className="mr-2 w-5 h-5 text-blue-600" />
                  Llamar: 603 44 87 65
                </a>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-sm font-bold text-amber-700">
                <Star className="w-4 h-4 text-amber-500" />
                +1.200 familias protegidas · +10 años · DGSFP C012479234434D
              </div>
              <p className="mt-6 text-sm font-bold text-slate-400 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 text-amber-500" />
                ⏱ Análisis gratuito en 30 minutos · Sin compromiso
              </p>
            </div>
          </div>
        </section>

        {/* 3 METRICAS */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6"><HeartPulse className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">25€/mes</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Salud familiar desde</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Shield className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">4 en 1</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Salud · Dental · Vida · Decesos</p>
              </div>
              <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6"><ShieldCheck className="w-8 h-8" /></div>
                <div className="text-5xl font-black text-slate-900 mb-2">0€</div>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Coste de la asesoría</p>
              </div>
            </div>
          </div>
        </section>

        {/* ESTO ES PARA VUESTRA FAMILIA SI... */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-slate-100">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">¿Esta protección es para vuestra familia?</h2>
              <div className="grid gap-6">
                {["Tenéis hijos y queréis acceso rápido a pediatras sin listas de espera","Solo tenéis dental y queréis saber si merece la pena ampliar a salud completa","Queréis que si falta el sustentador principal, la familia esté protegida","Buscáis un asesor que os conozca y os acompañe de por vida, no un call center"].map((item,i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:shadow-md">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-green-500/20"><CheckCircle2 className="w-6 h-6" /></div>
                    <span className="text-xl font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 PRODUCTOS FAMILIA */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Lo que suelen necesitar las familias como la tuya</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mb-6"><HeartPulse className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Salud Familiar</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Especialistas, pediatras, urgencias y hospitalización para todos. Sin listas de espera, sin sorpresas.</p>
                <a href="/seguros/salud-individual" className={cn(buttonVariants({ variant: "ghost" }), "text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Ver más →</a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center mb-6"><Smile className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Dental Familiar</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Limpiezas, empastes y revisiones para adultos y niños. Los pequeños aprenden a cuidar su sonrisa desde el principio.</p>
                <a href="/seguros/dental" className={cn(buttonVariants({ variant: "ghost" }), "text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Ver más →</a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6"><Shield className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Seguro de Vida</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Protección para los que dependen de ti. Tranquilidad de que tu familia estará bien, pase lo que pase.</p>
                <a href="/seguros/vida" className={cn(buttonVariants({ variant: "ghost" }), "text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Ver más →</a>
              </div>
              <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6"><Umbrella className="w-8 h-8" /></div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Decesos</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-1">Gestión completa en los momentos más difíciles. Para que tu familia no tenga que preocuparse por nada.</p>
                <a href="/seguros/accidentes-decesos" className={cn(buttonVariants({ variant: "ghost" }), "text-blue-600 font-bold gap-2 hover:gap-3 transition-all")}>Ver más →</a>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHT DENTAL -> SALUD */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-blue-200">
              <div className="flex items-start gap-6 mb-8">
                <div className="flex-none w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl shadow-sm">💡</div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 text-slate-900 tracking-tight">Muchas familias en Madrid solo tienen seguro dental</h2>
                </div>
              </div>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>Por solo 20-30€ más al mes pueden tener médico de cabecera, pediatras, especialistas y urgencias para toda la familia. Te lo calculamos gratis en 30 minutos.</p>
                <p>Si tienes niños pequeños, el acceso rápido a pediatras y especialistas sin listas de espera puede cambiar tu día a día. Nosotros te mostramos las opciones reales para tu situación.</p>
              </div>
              <div className="mt-10 text-center">
                <a href={wDental} className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white gap-2")}>
                  <WhatsAppIcon className="h-5 w-5" />
                  Quiero ver cuánto me costaría ampliar →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CROSS-SELL PACK */}
        <section className="py-24 bg-[#020617] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block p-6 bg-white/10 rounded-[24px] mb-8 backdrop-blur-xl">
                <span className="text-6xl">🎁</span>
              </div>
              <h3 className="text-3xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight">Contrata salud con dental, vida o decesos y te aplicamos un descuento exclusivo en la primera prima.</h3>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">El pack familiar más completo de Madrid. Pregúntanos cómo conseguirlo.</p>
              <a href={wPack} className={cn(buttonVariants({ size: "lg" }), "h-16 px-12 text-xl font-black bg-white text-slate-900 hover:bg-[#25D366] hover:text-white gap-3 rounded-2xl transition-all shadow-xl")}>
                <WhatsAppIcon className="h-6 w-6" />
                Quiero el pack familiar con descuento →
              </a>
            </div>
          </div>
        </section>

        {/* PROCESO + FOTO */}
        <section className="py-24 lg:py-32 bg-slate-900 overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">Así de sencillo es empezar</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-12">
                {[ {n:1,t:"Cuéntanos cuántos sois",d:"Edades, si tenéis niños, qué tenéis ahora. Un mensaje por WhatsApp es suficiente."}, {n:2,t:"Analizamos vuestra situación en 30 minutos",d:"Rosa o Sebastián revisan vuestra protección actual y calculan las opciones reales para vuestro presupuesto."}, {n:3,t:"Propuesta sin compromiso, tú decides",d:"Recibís las opciones explicadas en lenguaje normal. Si decidís contratar, en 24h tenéis vuestra póliza activa."} ].map((step,i) => (
                  <div key={i} className="flex gap-8 items-start group">
                    <div className="flex-none w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#0F5E9C] transition-colors shadow-lg">{step.n}</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.t}</h3>
                      <p className="text-white/60 text-lg leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-white/10 group">
                <Image src="/images/rosa_y_sebastian.jpeg" alt="Rosa y Sebastián Valentín" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-lg">Rosa Valentín y Sebastián</p>
                  <p className="text-white/80">Vuestros asesores · Boadilla del Monte</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Familias de Madrid que ya confían en nosotros</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[ {txt:"Llevábamos años con un seguro dental que apenas usábamos. Rosa nos explicó que por 28€ más al mes teníamos salud completa para los cuatro. No nos lo podíamos creer.",who:"Marta y Javier, 2 hijos, Majadahonda"}, {txt:"Lo mejor es que te dicen la verdad aunque no contraten. Revisaron nuestros seguros y nos dijeron que uno estaba bien y otro lo podíamos mejorar. Eso genera confianza.",who:"Ana G., familia de 4, Pozuelo de Alarcón"}, {txt:"Tenemos a Rosa como nuestra asesora desde hace 6 años. Cuando nació nuestro segundo hijo nos llamó ella para actualizar la cobertura. Eso no lo hace nadie.",who:"Carlos y Elena, Boadilla del Monte"} ].map((t,i) => (
                <div key={i} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6 flex-1 italic">“{t.txt}”</p>
                  <p className="text-slate-500 font-bold text-sm">— {t.who}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-sm font-bold text-slate-400 mb-4">Atendemos a familias en toda la zona Madrid Oeste:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Boadilla del Monte","Majadahonda","Pozuelo de Alarcón","Las Rozas","Madrid capital"].map(z => (
                  <span key={z} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">{z}</span>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-400 font-mono">NIF: 79234434D · DGSFP: C012479234434D · Boadilla del Monte, Madrid</p>
            </div>
          </div>
        </section>

        {/* GARANTIAS */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Nuestro compromiso con vuestra familia</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ {e:"⏱",t:"Respuesta en 30 min",d:"O os llamamos nosotros"}, {e:"📄",t:"Sin letra pequeña",d:"Os explicamos todo antes de firmar"}, {e:"👤",t:"Asesor personal de por vida",d:"Rosa o Sebastián, siempre el mismo"}, {e:"🔄",t:"Revisión anual gratuita",d:"Cada año revisamos si vuestra protección sigue siendo la mejor"} ].map((g,i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{g.e}</div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">{g.t}</h3>
                  <p className="text-slate-600 text-sm">{g.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 max-w-3xl mx-auto p-8 rounded-[32px] bg-white border border-blue-200 shadow-md text-center">
              <p className="text-slate-700 leading-relaxed text-lg">
                “Si lleváis más de un año con nosotros y nunca os hemos contactado para revisar vuestra cobertura: este es ese momento. Las familias cambian, nacen hijos, crecen, cambia el trabajo. Vuestro seguro debería cambiar con vosotros. La revisión es siempre gratuita.”
              </p>
              <p className="mt-4 font-bold text-slate-900">— Rosa Valentín y Sebastián</p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-[#0F5E9C] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F5E9C] to-[#123B68] opacity-90" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight">Protege a tu familia con alguien que os conoce de verdad.</h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Cuéntanos cuántos sois, las edades de los niños y qué tenéis ahora. Os proponemos lo que realmente necesitáis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={wMain} className={cn(buttonVariants({ size: "lg" }), "h-16 px-10 text-xl font-black bg-white text-[#0F5E9C] hover:bg-[#25D366] hover:text-white rounded-2xl shadow-2xl gap-3 transition-all")}>
                Quiero proteger a mi familia →
              </a>
              <a href="tel:603448765" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-16 px-10 text-xl font-bold border-2 border-white/40 text-white hover:bg-white/10 rounded-2xl transition-all")}>
                <Phone className="mr-2 w-5 h-5" />
                Llamar al 603 44 87 65
              </a>
            </div>
            <p className="mt-8 text-sm text-white/50 font-mono">
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

