import type { Metadata } from "next";
import Image from "next/image";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";
import { buildWhatsAppHref } from "@/lib/products";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FAQChat } from "@/components/faq-chat";
import GuaranteeBadge from "@/components/GuaranteeBadge";
import GarantiasSection from "@/components/GarantiasSection";
import GoogleReviewsWidget from "@/components/GoogleReviewsWidget";
import { Globe, CheckCircle2, ArrowRight, Shield, Heart, FileCheck, Check, FileText, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export const metadata: Metadata = {
  title: "Seguro de Salud para Extranjeros en Madrid | Valentín",
  description: "Seguro médico para extranjeros en España listo en 24 horas. Cobertura completa, gestión sencilla y atención personalizada desde el primer día.",
  keywords: ["seguro médico NIE España","seguro residencia Madrid latinos 2026","seguro médico extranjeros","NIE TIE seguro Madrid","seguro extranjería España"],
  alternates: { canonical: "https://valentinproteccionintegral.com/seguros/salud-extranjeros" },
  openGraph: {
    title: "Seguro de Salud para Extranjeros en Madrid | Valentín",
    description: "Seguro médico para extranjeros en España listo en 24 horas. Cobertura completa, gestión sencilla y atención personalizada desde el primer día.",
    url: "https://valentinproteccionintegral.com/seguros/salud-extranjeros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Seguro Médico NIE/TIE Extranjeros Madrid - Valentín Protección Integral",
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
  "description": "Seguro médico residencia España 2026. Cumple requisitos NIE/TIE. +100 clientes latinos/EEUU aprobados. Certificado 24h.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Necesito NIE para contratar el seguro de salud?",
      "acceptedAnswer": { "@type": "Answer", "text": "No siempre es obligatorio. Te asesoramos según tu situación particular. Algunas modalidades permiten contratación con pasaporte. Escríbenos por WhatsApp y estudiamos tu caso en 30 minutos." }
    },
    {
      "@type": "Question",
      "name": "Do I need to speak Spanish?",
      "acceptedAnswer": { "@type": "Answer", "text": "No, we speak English. Rosa and Sebastián can assist you in English throughout the entire process." }
    },
    {
      "@type": "Question",
      "name": "¿Cuándo empieza la cobertura?",
      "acceptedAnswer": { "@type": "Answer", "text": "La cobertura comienza entre 24-48 horas después de la contratación, dependiendo de la compañía y modalidad elegida. Te explicamos los detalles específicos antes de contratar." }
    }
  ]
};

export const dynamic = "force-static";

export default function SaludExtranjerosPage() {
  const wCotiza = buildWhatsAppHref("Hello, I'm a foreigner living in Madrid and I need health insurance. Can you help me?");

  return (
    <>
      <BreadcrumbSchema items={[{name:"Inicio",url:"/"},{name:"Seguros",url:"/seguros"},{name:"Salud Extranjeros",url:"/seguros/salud-extranjeros"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(serviceSchema)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between h-16">
          <a href="/" className="font-bold text-[#163300] text-lg tracking-tight">
            Valentín <span className="text-emerald-600">Protección Integral</span>
          </a>
          <a
            href="https://wa.me/34603448765"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            Cotizar ahora
          </a>
        </div>
      </header>
      <main className="min-h-screen bg-white pt-16">
        
        {/* HERO — Despacho Serio / Autoridad */}
        <section className="relative min-h-[85vh] flex items-center bg-slate-50 overflow-hidden">
          {/* Fondo decorativo sutil */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 skew-x-12 translate-x-32" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 py-20">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-8 border border-emerald-200">
                  <Shield className="w-4 h-4" />
                  Garantía de Aceptación Administrativa
                </div>
                
                <h1 className="text-[40px] sm:text-[60px] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                  Seguro de salud para extranjeros en España <span className="text-emerald-600">aprobado para visado</span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                  Sin copagos. Sin complicaciones. Listo para presentar en extranjería en 24h.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                  <a
                    href="https://wa.me/34603448765?text=Hola%2C%20necesito%20seguro%20m%C3%A9dico%20para%20tr%C3%A1mites%20de%20NIE%2FTIE%20en%20el%20consulado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-emerald-600/20"
                  >
                    Consultar por WhatsApp ahora
                  </a>
                  <div className="flex items-center gap-3 px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-bold leading-none">Respuesta en minutos</p>
                      <p className="text-slate-500 text-sm mt-1">Rosa y Sebastián</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 pt-8 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    Válido para NIE / TIE / visado
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    +1.200 familias ya protegidas
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    Asesor personal por WhatsApp
                  </div>
                </div>
              </div>

              {/* Tarjeta tipo "Documento Oficial" */}
              <div className="hidden lg:block relative">
                <div className="absolute inset-0 bg-emerald-600/5 rounded-[40px] blur-3xl" />
                <div className="relative bg-white border border-slate-200 rounded-[32px] p-10 shadow-2xl transform rotate-2">
                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 rounded-full bg-slate-50 border-4 border-white shadow-inner flex items-center justify-center overflow-hidden opacity-20">
                      <Globe className="w-10 h-10 text-slate-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-600/30">
                      <FileCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Certificado Oficial</p>
                      <p className="text-lg font-bold text-slate-900">Validez Consular</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                    <div className="h-2 w-full bg-slate-100 rounded-full" />
                    <div className="h-2 w-5/6 bg-slate-100 rounded-full" />
                    <div className="pt-4 grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Sin Copagos</p>
                        <p className="text-emerald-600 font-bold text-sm">CUMPLIDO</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Carencias</p>
                        <p className="text-emerald-600 font-bold text-sm">0 DÍAS</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-dashed border-slate-200 text-center">
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Sello de aprobación</p>
                      <div className="w-20 h-20 border-4 border-emerald-100 rounded-full mx-auto flex items-center justify-center">
                        <Check className="w-10 h-10 text-emerald-200" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decoración extra */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce-soft">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-sm font-bold text-slate-700">Listo en 24h</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESO SENCILLO — 3 pasos Wise (Conversión Inmediata) */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-4">
                Agilidad Máxima
              </div>
              <h2 className="text-[32px] sm:text-[44px] font-bold text-slate-900 mb-4">
                Lo tienes en 3 pasos
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Línea decorativa entre pasos en desktop */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-100 z-0" />
              
              {[
                { num: "01", title: "Escríbenos por WhatsApp", desc: "Rosa o Sebastián te atienden personalmente. Sin centralitas." },
                { num: "02", title: "Recibes opciones en minutos", desc: "Comparamos y te enviamos la mejor póliza para tu visado." },
                { num: "03", title: "Listo para presentar", desc: "Firmas digitalmente y recibes tu certificado oficial en 24h." }
              ].map((paso, i) => (
                <div key={i} className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-emerald-500 text-emerald-600 flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl shadow-emerald-500/10">
                    {paso.num}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{paso.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{paso.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="https://wa.me/34603448765?text=Hola%2C%20quiero%20conseguir%20mi%20seguro%20para%20extranjeros%20en%203%20pasos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#163300] hover:bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-xl"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Hablar por WhatsApp ahora
              </a>
            </div>
          </div>
        </section>

        {/* PROTOCOLO DE CUMPLIMIENTO OFICIAL — Diseño Ultra Premium */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="bg-[#163300] rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-500/30">
                    <Shield className="w-4 h-4" />
                    Validación Técnica Superior
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                    Estándares legales para tu visado
                  </h2>
                  <p className="text-emerald-100/80 text-lg mb-8 leading-relaxed">
                    Gestionamos pólizas de salud de grado residencial que cumplen con los requisitos de seguro exigidos para trámites de extranjería en España.
                  </p>
                  
                  <div className="space-y-6">
                    {[
                      { t: "Grado de Sanidad Pública", d: "Sin exclusiones, equivalente a la Seguridad Social." },
                      { t: "Sin Copagos", d: "Acceso total a medicina y especialistas sin abonos extra por consulta." },
                      { t: "Cobertura de Repatriación", d: "Punto crítico valorado por todas las oficinas de extranjería." },
                      { t: "Vigencia Documental", d: "Certificados oficiales listos para presentar en menos de 24h." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="mt-1">
                          <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-[#163300]" />
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-white">{item.t}</p>
                          <p className="text-emerald-100/60 text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-white text-[#163300] flex items-center justify-center mb-6 shadow-xl">
                      <FileText className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Garantía de Aceptación</h3>
                    <p className="text-emerald-100/70 mb-8 leading-relaxed text-sm">
                      Aunque la ley no exige el pago anual por escrito, la práctica administrativa en consulados y oficinas de extranjería lo ha convertido en el <strong>estándar de seguridad</strong> para evitar denegaciones por dudas sobre la vigencia del seguro.
                    </p>
                    <div className="w-full h-px bg-white/10 mb-8" />
                    <p className="text-xs font-medium text-emerald-400 uppercase tracking-widest leading-relaxed">
                      Pólizas adaptadas a los criterios técnicos de la normativa de extranjería vigente
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* GARANTÍA RESPUESTA — Fondo diferenciado */}
        <section className="py-20 bg-gradient-to-br from-[#F0FAE5] via-[#E8F5E9] to-[#F1F8E9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl shadow-[#9FE870]/20 border border-[#C8E6C9]">
              <h2 className="text-[36px] sm:text-[44px] font-bold text-[#163300] leading-tight mb-6 text-center">
                ¿Y si no te respondemos en 30 minutos?
              </h2>
              
              <p className="text-xl text-[#4B5563] leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                Rosa o Sebastián te llaman directamente.
                <br />
                Sin esperas. Sin centralitas. Sin excusas.
                <br />
                <span className="text-[#2E7D32] font-semibold">Nadie en el sector ofrece esta garantía. Nosotros sí.</span>
              </p>
              
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa Valentín"
                    fill
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#163300]">Rosa Valentín</p>
                  <p className="text-sm text-[#4B5563]">Mediadora DGSFP · NIF 79234434D</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOTO EQUIPO Wise cálido */}
        <section className="bg-[#F7F8F9] py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="rounded-3xl shadow-2xl overflow-hidden border border-[#E5E7EB]">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián — Tu equipo en Madrid"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover object-[center_20%]"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <div>
                <p className="text-[#2E7D32] font-medium mb-3 uppercase tracking-widest text-sm">
                  Tu equipo local en Madrid
                </p>
                <h2 className="text-4xl font-semibold text-[#163300] leading-tight">
                  Rosa y Sebastián.
                  <br/>
                  Hablan tu idioma.
                </h2>
                <p className="text-[#4B5563] text-lg mt-6 leading-relaxed">
                  +10 años ayudando a extranjeros residentes en Madrid
                  a encontrar la cobertura médica que necesitan.
                  Sin burocracia. Sin sorpresas. En tu idioma.
                </p>
                {/* Trust badges */}
                <div className="flex gap-4 mt-8 flex-wrap">
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ DGSFP: C012479234434D
                  </span>
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ +1.200 clientes protegidos
                  </span>
                  <span className="bg-[#F0FAE5] border border-[#9FE870] text-[#163300] px-4 py-2 rounded-full text-sm">
                    ✓ English spoken
                  </span>
                </div>
                <WhatsAppButton 
                  href={wCotiza}
                  location="salud-extranjeros-garantias"
                  className="mt-8 inline-flex items-center gap-3 bg-[#163300] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#1a3d00] transition-all"
                >
                  Habla con nosotros
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>

        {/* EL VALOR DE LA TRANQUILIDAD — Banner de Autoridad */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-emerald-50 rounded-[40px] -rotate-2" />
                <div className="relative aspect-square rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="https://images.pexels.com/photos/5920775/pexels-photo-5920775.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Gestión profesional de seguros para extranjeros"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Efecto Despacho Serio</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Alguien que ya lo ha hecho <span className="text-emerald-600">mil veces por ti</span>
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  El éxito de un visado no depende solo de la póliza, sino de cómo se presenta la documentación. Rosa y Sebastián conocen los criterios específicos de cada consulado para que no pierdas tiempo ni dinero en denegaciones evitables.
                </p>
                <ul className="space-y-4">
                  {[
                    "Asesoramiento preventivo sobre requisitos de consulado",
                    "Certificados emitidos con la redacción exacta exigida",
                    "Soporte directo por WhatsApp en español e inglés",
                    "Gestión integral sin que tengas que desplazarte"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQChat
          brandColor="emerald"
          title="Resolvemos tus dudas sobre el visado"
          subtitle="Información real, sin jerga técnica"
          items={[
            {
              q: "¿Sirve mi seguro de viaje para el visado?",
              a: "Rotundamente no. El consulado exige una póliza de salud con hospitalización y sin copagos. Los seguros de viaje son para incidentes puntuales, no para residencia. Nosotros tramitamos la opción correcta directamente."
            },
            {
              q: "¿Puedo tramitar con pasaporte?",
              a: "Sí. La mayoría de nuestros clientes inician el proceso con pasaporte. El seguro es el paso previo necesario para obtener tu NIE o TIE."
            },
            {
              q: "¿Por qué el pago suele ser anual?",
              a: "Aunque la ley no lo exige literalmente, es la práctica estándar más segura. El consulado necesita verificar que la cobertura es estable y está pagada por adelantado para toda la duración de tu estancia inicial. El pago anual evita denegaciones por dudas sobre la vigencia del seguro."
            },
            {
              q: "¿Cuánto tarda el certificado?",
              a: "Una vez emitida la póliza, el certificado oficial en español para el consulado está listo en menos de 24 horas. Te lo enviamos en PDF para que lo presentes de inmediato."
            },
            {
              q: "¿Qué incluye la repatriación?",
              a: "Incluye el traslado sanitario o por fallecimiento hasta tu país de origen. Es una cobertura obligatoria por ley para extranjeros y nosotros la incluimos por defecto."
            },
            {
              q: "¿Hay pediatras incluidos?",
              a: "Sí, si viajas con familia, la póliza incluye pediatría y todas las especialidades desde el primer día, sin listas de espera."
            },
          ]}
        />

        {/* CTA SECTION — Certificado Residencia */}
        <section className="py-20 bg-[#F7F8F9]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#163300] mb-4">
              Presupuesto + Certificado Residencia
            </h2>
            <p className="text-lg text-[#4B5563] mb-8">
              Recibe tu póliza y certificado para extranjería en menos de 24 horas
            </p>
            <WhatsAppButton 
              href={wCotiza}
              location="salud-extranjeros-cta-final"
              showIcon
              className="inline-flex items-center gap-3 bg-[#163300] hover:bg-[#1a3d00] text-white font-semibold px-10 py-5 rounded-2xl text-xl transition-all hover:scale-[1.02] shadow-xl"
            >
              Solicitar por WhatsApp
            </WhatsAppButton>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-[#4B5563]">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                seguro médico NIE España
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                seguro residencia Madrid latinos 2026
              </span>
            </div>
            <p className="text-[#4B5563]/60 text-sm mt-6">
              DGSFP: C012479234434D
            </p>
          </div>
        </section>

        {/* RESEÑAS GOOGLE */}
        <GoogleReviewsWidget title="Opiniones de clientes extranjeros sobre seguro médico" />

        {/* GARANTÍAS PREMIUM */}
        <GarantiasSection brandColor="#163300" />



      </main>
      <footer className="bg-gray-950 text-white/50 py-8 text-center text-xs">
        <p>© 2026 Valentín Protección Integral · NIF: 79234434D · DGSFP: C012479234434D</p>
        <p className="mt-1">Mediadores de seguros independientes · Boadilla del Monte, Madrid</p>
      </footer>
      <StickyWhatsApp />
    </>
  );
}
