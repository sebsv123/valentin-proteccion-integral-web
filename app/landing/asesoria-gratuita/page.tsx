"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { buildWhatsAppHref, site } from "@/lib/products";

// UI Components
const DotGrid = dynamic(() => import("@/components/ui/dot-grid"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

import {
  MessageCircle,
  Clock,
  Shield,
  User,
  Home,
  Car,
  Heart,
  Briefcase,
  Zap,
  Phone,
  ArrowRight,
  CheckCircle2,
  Users,
  Plane,
  ChevronDown
} from "lucide-react";

// Icons for selection
const needs = [
  { id: "salud", label: "Mi salud (y la de mi familia)", icon: Heart, query: "salud" },
  { id: "negocio", label: "Mi negocio como autónomo", icon: Briefcase, query: "mi negocio" },
  { id: "hogar", label: "Mi hogar", icon: Home, query: "mi hogar" },
  { id: "coche", label: "Mi coche", icon: Car, query: "mi coche" },
  { id: "familia", label: "Mi familia si me falta yo", icon: Shield, query: "seguro de vida/familia" },
];

const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const tracksLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', { content_name: 'asesoria-gratuita-redesign' });
  }
};

const getFadeInUp = (prefersReducedMotion: boolean) => ({
  hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 20 },
  visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.5 } },
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function AsesoriaGratuitaPage() {
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const fadeInUpVariants = getFadeInUp(prefersReducedMotion);

  const handleWhatsAppClick = (query?: string) => {
    const msg = query 
      ? `Hola, me gustaría recibir asesoría gratuita sobre ${query}.`
      : "Hola, me gustaría recibir asesoría gratuita sobre seguros.";
    tracksLead();
    window.open(buildWhatsAppHref(msg), "_blank");
  };

  const getButtonText = () => {
    if (!selectedNeed) return "Quiero asesoría gratuita →";
    const labels: Record<string, string> = {
      salud: "salud",
      negocio: "mi negocio",
      hogar: "mi hogar",
      coche: "mi coche",
      familia: "mi familia"
    };
    return `Quiero asesoría sobre ${labels[selectedNeed]} →`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      
      {/* 1. BARRA STICKY */}
      <div className="sticky top-0 z-50 bg-[#002244] text-white">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <p className="text-sm font-medium leading-snug flex-1 min-w-0">
            <span className="sm:hidden">
              ✉️ Asesoría gratuita · Madrid · Respuesta {"<"} 2h
            </span>
            <span className="hidden sm:inline">
              ✉️ Asesoría gratuita de seguros · Madrid · Respuesta en menos de 2 horas hábiles.
            </span>
          </p>
          <a
            href="#contacto"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Pedir asesoría →
          </a>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-12 lg:py-24 bg-background border-b">
        <DotGrid 
          className="z-0"
          dotSize={4}
          gap={isTouchDevice ? 32 : 28}
          baseColor="#bfdbfe"
          activeColor="#0F5E9C"
          proximity={isTouchDevice ? 0 : 80}
          shockStrength={isTouchDevice ? 0 : 2}
        />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Columna izquierda - Texto */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-left"
            >
              <nav className="mb-10 lg:mb-12">
                <Link href="/">
                  <Image 
                    src="/brand/logo-vpi.webp" 
                    alt={site.name} 
                    width={180} 
                    height={74} 
                    className="h-12 w-auto object-contain"
                    priority 
                  />
                </Link>
              </nav>

              <motion.div variants={fadeInUpVariants} className="mb-6">
                <AnimatedShinyText className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-bold text-sm">
                  📍 Asesoría de seguros en Madrid
                </AnimatedShinyText>
              </motion.div>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
              >
                Te ayudamos a elegir el seguro correcto.{" "}
                <span className="text-[#0F5E9C]">Sin presión</span>. Sin letra pequeña. Sin coste.
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl"
              >
                En 15 minutos sabes exactamente qué necesitas y cuánto te cuesta. O te decimos que no lo necesitas.
              </motion.p>

              <motion.div variants={fadeInUpVariants} className="flex flex-col gap-4 mb-10">
                {[
                  "Análisis de coberturas gratuito",
                  "Independencia total (no somos compañía)",
                  "Gestión de siniestros incluida",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-none" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUpVariants} className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleWhatsAppClick()}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-[#25D366] hover:bg-[#128C7E] text-white gap-3 rounded-2xl shadow-xl shadow-green-500/10"
                  )}
                >
                  <WhatsAppLogo className="h-6 w-6" />
                  WhatsApp ahora
                </button>
                <a
                  href={`tel:${site.phoneHref}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 px-8 text-lg font-bold border-2 border-slate-200 text-slate-700 hover:bg-slate-50 rounded-2xl"
                  )}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {site.phone}
                </a>
              </motion.div>
            </motion.div>

            {/* Columna derecha - Form/Selector */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              id="contacto"
              className="relative"
            >
              <div className="bg-white border-2 border-slate-100 rounded-[32px] p-6 lg:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
                <h3 className="text-2xl font-bold mb-2">¿Qué quieres proteger?</h3>
                <p className="text-muted-foreground mb-8 text-sm">Elige una opción y te preparamos tu propuesta</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {needs.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedNeed(item.id)}
                      className={cn(
                        "relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 gap-2 overflow-hidden group",
                        selectedNeed === item.id 
                          ? "border-[#0F5E9C] bg-blue-50/50 shadow-md" 
                          : "border-slate-100 bg-white hover:border-slate-200"
                      )}
                    >
                      <div className={cn(
                        "p-2 rounded-xl transition-colors",
                        selectedNeed === item.id ? "bg-[#0F5E9C] text-white" : "bg-slate-50 text-slate-400 group-hover:text-slate-600"
                      )}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <span className={cn(
                        "text-[11px] sm:text-xs font-bold leading-tight",
                        selectedNeed === item.id ? "text-[#0F5E9C]" : "text-slate-500"
                      )}>{item.label.split(" (")[0]}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handleWhatsAppClick(needs.find(n => n.id === selectedNeed)?.query)}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full h-14 text-lg font-bold bg-[#002244] hover:bg-slate-900 text-white rounded-2xl transition-all",
                    !selectedNeed && "opacity-50 pointer-events-none grayscale"
                  )}
                >
                  {getButtonText()}
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-4">
                  Respuesta profesional en menos de 2 horas hábiles. Sin spam.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN PARA QUIÉN ES */}
      <section className="py-20 lg:py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight mb-6">¿Para quién es esta asesoría?</h2>
            <p className="text-lg text-muted-foreground">Estrategia real para personas que valoran su tiempo y su seguridad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <MagicContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-10 w-10" />,
                  title: "Familias que quieren protección completa",
                  desc: "Desde salud y dental hasta vida y decesos. Unificamos criterios para que no paguéis por coberturas duplicadas.",
                  color: "bg-red-50 text-red-600"
                },
                {
                  icon: <Briefcase className="h-10 w-10" />,
                  title: "Autónomos que quieren optimizar gastos",
                  desc: "Analizamos las mejores opciones de baja laboral y salud con beneficios fiscales específicos para tu actividad.",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: <Zap className="h-10 w-10" />,
                  title: "Personas que nunca han tenido seguro",
                  desc: "Te explicamos cómo funciona el sistema desde cero. Sin tecnicismos, sin presiones comerciales.",
                  color: "bg-amber-50 text-amber-600"
                }
              ].map((item, i) => (
                <MagicCard key={i} className="flex flex-col gap-6 items-start p-8 rounded-[32px] border-none bg-white shadow-xl">
                  <div className={cn("p-4 rounded-2xl flex-none", item.color)}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                </MagicCard>
              ))}
            </MagicContainer>
          </div>
        </div>
      </section>

      {/* 4. SECCIÓN OSCURA - ESCENARIOS */}
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
            {[
              {
                title: "Sin asesoría profesional",
                items: [
                  "Contratas lo primero que ves en Google Ads.",
                  "Pagas de más por coberturas que no necesitas.",
                  "En caso de siniestro, hablas con un call center genérico.",
                  "Nadie te explicó la letra pequeña de las carencias."
                ],
                isNegative: true
              },
              {
                title: "Con Valentín Protección Integral",
                items: [
                  "En 15 min tienes el mapa real de lo que te conviene.",
                  "Ajustamos la prima a tu presupuesto real, sin exceso.",
                  "Tienes el WhatsApp de Rosa y Sebastián de por vida.",
                  "Te traducimos las condiciones al lenguaje de la calle."
                ],
                isNegative: false
              }
            ].map((col, i) => (
              <div key={i} className={cn(
                "p-8 lg:p-12 rounded-[40px] border relative overflow-hidden group",
                col.isNegative ? "bg-white/5 border-white/10" : "bg-blue-600/10 border-blue-500/30 ring-1 ring-blue-500/50"
              )}>
                <h3 className={cn(
                  "text-2xl font-bold mb-10",
                  col.isNegative ? "text-slate-400" : "text-blue-400"
                )}>{col.title}</h3>
                <div className="space-y-6">
                  {col.items.map((item, j) => (
                    <div key={j} className="flex gap-4 items-start">
                      <span className={cn(
                        "flex-none mt-1 font-bold",
                        col.isNegative ? "text-slate-600" : "text-blue-500"
                      )}>{col.isNegative ? "✗" : "✓"}</span>
                      <p className={cn(
                        "text-lg",
                        col.isNegative ? "text-slate-400" : "text-white font-medium"
                      )}>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN GARANTÍAS */}
      <section className="py-24 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">Nuestras Garantías</h2>
            <p className="text-slate-400 text-lg">Por qué miles de familias confían en nosotros.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: <Clock className="h-8 w-8 text-blue-400" />, title: "Respuesta < 2h", desc: "Hábiles. No el lunes siguiente." },
              { icon: <Shield className="h-8 w-8 text-blue-400" />, title: "Sin compromiso", desc: "Asesoría gratuita siempre." },
              { icon: <Users className="h-8 w-8 text-blue-400" />, title: "Asesor real", desc: "Valentín, no un robot." },
              { icon: <Zap className="h-8 w-8 text-blue-400" />, title: "Revisión anual gratis", desc: "Si cambias, te ayudamos." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/50 border border-slate-700/50 p-8 rounded-3xl text-center flex flex-col items-center">
                <div className="mb-6 p-4 rounded-full bg-slate-800">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-[32px] max-w-3xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-4">¿Y si no cumplimos?</h4>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Si tardamos más de 2 horas hábiles en contactarte, te regalamos un chequeo completo de todas tus pólizas actuales sin compromiso alguno, para que detectes errores de capitales que pueden ser vitales.
            </p>
            <p className="text-xs text-slate-500 italic">Nadie en el sector garantiza su tiempo. Nosotros sí.</p>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN SORPRESA */}
      <section className="py-20 lg:py-32">
        <div className="container-shell mx-auto px-4">
          <div className="bg-[#002244] text-white p-12 lg:p-24 rounded-[48px] text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 rotate-12 transition-transform duration-700 group-hover:scale-125">
              <MessageCircle className="w-56 h-56" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-block p-6 bg-white/10 rounded-[24px] mb-8 backdrop-blur-xl">
                <span className="text-6xl">🎁</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight">
                Si contratas salud junto con vida, decesos o accidentes, te aplicamos un descuento especial en tu primera prima.
              </h2>
              <p className="text-xl lg:text-2xl text-white/70 mb-12">Pregúntanos cómo.</p>
              <button 
                onClick={() => handleWhatsAppClick("Hola, me gustaría consultar el descuento especial por contratación combinada.")}
                className="inline-flex items-center gap-3 bg-white text-[#002244] hover:bg-[#25D366] hover:text-white px-12 py-6 rounded-2xl text-xl font-black transition-all shadow-xl"
              >
                <WhatsAppLogo className="h-6 w-6" />
                Consultar descuento por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN HONESTIDAD */}
      <section className="py-24 lg:py-40 bg-slate-950 text-white">
        <div className="container-shell mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center border-y border-white/10 py-20 bg-gradient-to-b from-white/[0.02] to-transparent rounded-[40px]">
            <blockquote className="text-4xl lg:text-7xl font-black italic mb-12 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              "Somos independientes. No trabajamos para ninguna compañía. Trabajamos para ti."
            </blockquote>
            <p className="text-2xl lg:text-3xl text-slate-400 font-medium max-w-3xl mx-auto">
              Si lo que buscas no te conviene, te lo decimos. <span className="text-white">Así de simple.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 8. PROCESO 3 PASOS */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">Así de sencillo es empezar</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                { n: 1, t: "Escríbenos por WhatsApp o rellena el formulario", d: "Dos clics y tus dudas llegan directamente a Rosa o Sebastián." },
                { n: 2, t: "Te contactamos en menos de 2 horas", d: "Resolvemos tus dudas iniciales y agendamos una breve llamada si es necesario." },
                { n: 3, t: "Analizamos y proponemos sin compromiso", d: "Recibes una propuesta clara, comparada e independiente. Tú decides." }
              ].map((step, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="flex-none w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-2xl group-hover:bg-[#0F5E9C] transition-colors shadow-lg">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{step.t}</h3>
                    <p className="text-slate-500 text-lg leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-4 border-slate-50">
              <Image 
                src="/images/rosa_y_sebastian.jpeg" 
                alt="Rosa y Sebastián Valentín"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section className="py-24 lg:py-40 bg-gradient-to-br from-[#002244] to-[#003366] text-white overflow-hidden relative">
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter">
            Tu tranquilidad empieza con una conversación.
          </h2>
          <p className="text-xl lg:text-2xl text-white/70 mb-12">
            No contrates a ciegas. Rosa y Sebastián te dan la claridad que necesitas hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => handleWhatsAppClick()}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-16 lg:h-20 px-12 text-xl lg:text-2xl font-black bg-white text-[#002244] hover:bg-[#25D366] hover:text-white rounded-2xl shadow-2xl shadow-black/20 gap-3"
              )}
            >
              <WhatsAppLogo className="h-7 w-7" />
              WhatsApp ahora
            </button>
            <a
              href={`tel:${site.phoneHref}`}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-16 lg:h-20 px-12 text-xl lg:text-2xl font-black border-2 border-white/20 text-white hover:bg-white hover:text-[#002244] rounded-2xl"
              )}
            >
              Llamar al {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 10. FOOTER MÍNIMO */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <div className="container mx-auto px-4">
          <p className="flex flex-wrap justify-center items-center gap-4">
            <span className="font-bold text-slate-900">© 2025 Valentín Protección Integral</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/privacidad" className="hover:text-blue-600">Privacidad</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/aviso-legal" className="hover:text-blue-600">Aviso legal</Link>
          </p>
        </div>
      </footer>

    </div>
  );
}
