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
import { Globe, CheckCircle2, ArrowRight, Shield, Heart, FileCheck, Check } from "lucide-react";

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
        
        {/* HERO — Impacto Inmediato */}
        <section className="relative min-h-[90vh] flex items-center bg-[#163300] overflow-hidden">
          {/* Fondo con overlay premium */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Seguro médico para extranjeros en España"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#163300] via-[#163300]/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl relative z-10 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-8 border border-emerald-500/30">
                <Globe className="w-4 h-4" />
                Válido para Consulado y Extranjería
              </div>
              
              <h1 className="text-[42px] sm:text-[64px] font-bold text-white leading-[1.1] tracking-tight mb-6">
                Tu Visado en España,<br />
                <span className="text-emerald-400">Garantizado en 24h.</span>
              </h1>

              <p className="text-xl sm:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                Tramitamos el seguro privado exacto que exige el Gobierno Español para conceder residencias y visados. Sin errores, sin esperas.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="https://wa.me/34603448765?text=Hola%2C%20necesito%20seguro%20m%C3%A9dico%20para%20tr%C3%A1mites%20de%20NIE%2FTIE%20en%20el%20consulado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-gray-950 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-emerald-500/20"
                >
                  Consultar por WhatsApp
                </a>
                <div className="flex flex-col justify-center">
                  <p className="text-white font-semibold">Respuesta inmediata</p>
                  <p className="text-white/60 text-sm">Rosa y Sebastián te atienden</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10">
                <div>
                  <p className="text-emerald-400 text-2xl font-bold mb-1">Día 1</p>
                  <p className="text-white/60 text-sm">Cobertura inmediata</p>
                </div>
                <div>
                  <p className="text-emerald-400 text-2xl font-bold mb-1">100%</p>
                  <p className="text-white/60 text-sm">Tasa de aprobación</p>
                </div>
                <div className="hidden sm:block">
                  <p className="text-emerald-400 text-2xl font-bold mb-1">PDF</p>
                  <p className="text-white/60 text-sm">Certificado al instante</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REQUISITOS EXTRANJERÍA — Rediseño Premium */}
        <section className="bg-white py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-[32px] sm:text-[40px] font-bold text-gray-900 leading-tight mb-4">
                Validado para Extranjería y Consulados
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Nuestras pólizas cumplen estrictamente con la normativa vigente para la obtención de visados y residencias en España.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Sin copagos ni carencias", desc: "Cobertura total desde el primer minuto, tal como exige la ley." },
                { title: "Cobertura Nacional e Internacional", desc: "Válido en todo el territorio español y en 190 países." },
                { title: "Certificado Oficial 24h", desc: "Emitimos el certificado necesario para el consulado en menos de 24 horas." },
                { title: "Todos los Visados", desc: "Específico para nómadas digitales, estudiantes y residencia no lucrativa." }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REQUISITOS CONSULADO — Diseño Premium */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Estándares oficiales del Gobierno Español
                </h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Para obtener un visado o residencia, no sirve cualquier seguro privado. La póliza debe cumplir con criterios técnicos muy específicos que nosotros garantizamos por contrato.
                </p>
                <div className="space-y-4">
                  {[
                    "Cobertura equivalente a la Seguridad Social pública",
                    "Contratación obligatoria sin copagos por consulta",
                    "Sin periodos de carencia (cobertura total inmediata)",
                    "Inclusión de hospitalización y urgencias 24h",
                    "Certificado oficial emitido en español para Extranjería"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Garantía de Aceptación</h3>
                </div>
                <p className="text-gray-600 text-center mb-8">
                  Nuestras pólizas están diseñadas para cumplir con el Artículo 31 de la Ley de Extranjería. Si el consulado rechaza el seguro, buscamos una alternativa o gestionamos la solución.
                </p>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 text-center">Importante: Pago Anual</p>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    El Consulado exige demostrar cobertura durante toda la estancia. Por ello, estas pólizas se tramitan con <strong>pago único anual</strong>.
                  </p>
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

        {/* PROCESO SENCILLO — 3 pasos Wise */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-5xl">
            <h2 className="text-4xl font-semibold text-center text-[#163300] mb-12">
              Tan fácil como 1, 2, 3
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Nos cuentas", desc: "Tu situación por WhatsApp. En tu idioma." },
                { num: "02", title: "Buscamos", desc: "La mejor opción entre todas las compañías para ti." },
                { num: "03", title: "Gestionamos", desc: "Todo nosotros. Sin papeleo para ti." }
              ].map((paso, i) => (
                <div key={i} className="text-center">
                  <p className="text-6xl font-bold text-[#9FE870] mb-4">{paso.num}</p>
                  <h3 className="text-xl font-semibold text-[#163300]">{paso.title}</h3>
                  <p className="text-[#4B5563] mt-2">{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQChat
          brandColor="emerald"
          title="Preguntas frecuentes sobre el seguro para extranjeros"
          subtitle="Todo lo que necesitas saber antes de contratar"
          items={[
            {
              q: "¿Necesito NIE o puedo tramitar con pasaporte?",
              a: "Puedes iniciar el proceso con pasaporte. El seguro se contrata antes de tener el NIE/TIE y sirve precisamente para obtenerlo. Te asesoramos según tu situación concreta en 30 minutos."
            },
            {
              q: "¿Una póliza puede cubrir a toda mi familia?",
              a: "Sí. Una misma póliza puede incluir a todo el núcleo familiar y es perfectamente válida para los trámites en el consulado español para cada miembro."
            },
            {
              q: "¿Cuándo recibo la documentación para el consulado?",
              a: "En el momento en que firmas la póliza recibe toda la documentación al instante. El certificado está listo para presentar en el consulado en menos de 24 horas."
            },
            {
              q: "¿Por qué es prima anual y no mensual?",
              a: "Por condiciones del consulado español, estas pólizas deben ser de prima anual. Es un requisito oficial para demostrar que tienes cobertura durante toda tu estancia. Te explicamos el coste exacto antes de contratar."
            },
            {
              q: "¿Qué pasa si necesito volver a mi país?",
              a: "Las pólizas para extranjeros incluyen repatriación al país de ORIGEN del asegurado. Esto es diferente al resto de seguros de salud, que repatrían a España. Es una cobertura específica y muy importante."
            },
            {
              q: "¿La póliza incluye asistencia en viaje?",
              a: "Sí. Todas las pólizas para extranjeros —excepto la modalidad más básica— incluyen asistencia en viaje con cobertura de capital según la póliza contratada. Te detallamos el capital exacto antes de firmar."
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
