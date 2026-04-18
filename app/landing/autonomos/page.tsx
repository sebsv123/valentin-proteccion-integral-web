"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/products";
import { LeadForm } from "@/components/lead-form";

const RetroGrid = dynamic(() => import("@/components/magicui/retro-grid"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

const MagicContainer = dynamic(() => import("@/components/magicui/magic-card").then(m => m.MagicContainer), {
  ssr: false,
});
const MagicCard = dynamic(() => import("@/components/magicui/magic-card").then(m => m.MagicCard), {
  ssr: false,
});

import {
  MessageCircle,
  Phone,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  Heart,
  Briefcase,
  HelpCircle
} from "lucide-react";

const trackLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', { content_name: 'landing-autonomos' });
  }
};

const tracksLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', { content_name: 'landing-autonomos-whatsapp' });
  }
};

export default function LandingAutonomosPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const whatsappHref = `https://wa.me/34603448765?text=${encodeURIComponent(
    'Hola, soy autónomo en Madrid y quiero información sobre el seguro médico con deducción IRPF.'
  )}`;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-blue-100">
      
      {/* HEADER PREMIUM */}
      <nav className="border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative h-[44px] w-[160px] overflow-hidden rounded-[20px] border border-white/20 bg-white px-2 py-1 shadow-sm transition-transform hover:scale-105">
              <Image
                src="/brand/logo-vpi.webp"
                alt="Valentín Protección Integral"
                width={440}
                height={181}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${site.phoneHref}`}
              className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{site.phone}</span>
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO PRINCIPAL */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-background border-b">
        <RetroGrid className="z-0 opacity-40" />
        
        <div className="container relative z-20 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center max-w-4xl mx-auto"
          >
            {/* KICKER */}
            <div className="group rounded-full border border-slate-200 bg-slate-100/50 text-sm transition-all hover:bg-slate-100 mb-8 z-10 backdrop-blur-sm px-6 py-2">
              <span className="inline-flex items-center justify-center text-slate-600">
                <span>🕹️ Autónomos en Madrid</span>
                <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1] text-slate-900">
              Tu seguro médico puede deducirse <span className="underline decoration-[#0F5E9C] decoration-8 underline-offset-4">hasta 500€</span> al año.
            </h1>

            <p className="max-w-[700px] text-lg sm:text-2xl text-slate-500 mb-12 font-medium">
              Asesoría gratuita en 15 minutos. Nosotros te decimos si te compensa y cómo optimizar tu cuota.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg">
              <a
                href={whatsappHref}
                onClick={trackLead}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "w-full sm:w-auto h-16 px-10 text-xl font-bold bg-[#128C7E] hover:bg-[#0e6b60] text-white rounded-2xl shadow-2xl shadow-green-500/20 gap-3"
                )}
              >
                <MessageCircle className="w-6 h-6" />
                Consultar WhatsApp
              </a>
              <a
                href={`tel:${site.phoneHref}`}
                onClick={trackLead}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "w-full sm:w-auto h-16 px-10 text-xl font-bold border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 rounded-2xl transition-all"
                )}
              >
                <Phone className="mr-2 w-5 h-5 text-blue-600" />
                Llamar ahora
              </a>
            </div>
            
            {/* Badge */}
            <p className="mt-8 text-sm font-bold text-slate-400 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              Respuesta en menos de 2 horas hábiles
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN: DEDUCCIÓN */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-5xl font-black text-slate-900 mb-2">500€</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Por ti al año en el IRPF</p>
            </div>
            <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-5xl font-black text-slate-900 mb-2">x4</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Cónyuge e hijos incluidos</p>
            </div>
            <div className="p-8 rounded-[40px] bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-5xl font-black text-slate-900 mb-2">0€</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Coste de nuestra asesoría</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: PERFIL */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-[48px] p-8 md:p-16 shadow-xl border border-slate-100">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-12 text-center text-slate-900 tracking-tight">Esto es para ti si...</h2>
            <div className="grid gap-6">
              {[
                'Estás dado de alta como autónomo en Madrid',
                'Tienes familia a tu cargo y quieres optimizar gastos',
                'No tienes seguro médico o pagas de más por el actual',
                'Buscas una explicación honesta, no una venta a presión'
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

      {/* SECCIÓN: CROSS-SELL */}
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
              <h3 className="text-3xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
                Si contratas salud junto con vida o accidentes, te aplicamos un descuento exclusivo en tu primera prima.
              </h3>
              <button 
                onClick={() => window.open(whatsappHref, '_blank')}
                className="inline-flex items-center gap-3 bg-white text-[#0f172a] hover:bg-[#25D366] hover:text-white px-12 py-6 rounded-2xl text-xl font-black transition-all shadow-xl"
              >
                Quiero saber más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PASO 5: SECCIÓN PROCESO (FOTO) */}
      <section className="py-24 lg:py-32 bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight text-white">Así de sencillo es empezar</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                { n: 1, t: "Escríbenos por WhatsApp", d: "Dos clics y Rosa o Sebastián recibirán tu consulta directamente." },
                { n: 2, t: "Te contactamos en menos de 2 horas", d: "Resolvemos tus dudas y buscamos la mejor opción para tu actividad." },
                { n: 3, t: "Propuesta personalizada sin compromiso", d: "Recibes tu análisis de deducción IRPF y opciones claras. Tú decides." }
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
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <footer className="py-16 border-t bg-slate-50 text-center text-slate-400 text-sm">
        <div className="container mx-auto px-4">
          <p className="flex flex-wrap justify-center items-center gap-4">
            <span className="font-bold text-slate-900">© 2025 Valentín Protección Integral</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/privacidad" className="hover:text-blue-600 transition-colors">Privacidad</Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/aviso-legal" className="hover:text-blue-600 transition-colors">Aviso legal</Link>
          </p>
        </div>
      </footer>

      {/* GLOBO WHATSAPP FLOTANTE */}
      <a
        href={whatsappHref}
        onClick={trackLead}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-[999] flex h-16 w-16 items-center justify-center 
                   rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,0.5)] 
                   hover:scale-110 transition-transform duration-200 shadow-xl"
      >
        <svg viewBox="0 0 24 24" fill="white" className="h-8 w-8">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

    </main>
  );
}
