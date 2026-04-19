"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/products";
import { LeadForm } from "@/components/lead-form";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { StickyWhatsApp } from "@/components/sticky-whatsapp";

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
          <div className="flex flex-col items-center max-w-4xl mx-auto">
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
                <WhatsAppIcon className="w-6 h-6" />
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
          </div>
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
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      <StickyWhatsApp />
    </main>
  );
}
