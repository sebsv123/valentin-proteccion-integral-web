"use client";

import { useState } from "react";
import { buildWhatsAppHref, site } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Clock, Shield, User, Home, Car, Heart, Briefcase } from "lucide-react";

const tracksLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', { content_name: 'asesoria-gratuita' });
  }
};

export default function AsesoriaGratuitaPage() {
  const [selectedNeed, setSelectedNeed] = useState<string | null>(null);

  const needs = [
    { id: "salud", label: "Mi salud (y la de mi familia)", icon: Heart, query: "salud" },
    { id: "negocio", label: "Mi negocio como autónomo", icon: Briefcase, query: "mi negocio" },
    { id: "hogar", label: "Mi hogar", icon: Home, query: "mi hogar" },
    { id: "coche", label: "Mi coche", icon: Car, query: "mi coche" },
    { id: "familia", label: "Mi familia si me falta yo", icon: Shield, query: "seguro de vida/familia" },
  ];

  const handleWhatsAppClick = (message: string) => {
    tracksLead();
    window.location.href = buildWhatsAppHref(message);
  };

  const getButtonText = () => {
    if (!selectedNeed) return "Quiero mi asesoría gratuita";
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
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans selection:bg-[var(--blue)] selection:text-white">
      {/* HEADER MÍNIMO - CERO header real, solo logo central */}
      <nav className="p-8 flex justify-center">
        <Link href="/">
          <Image 
            src="/brand/logo-vpi.webp" 
            alt={site.name} 
            width={180} 
            height={74} 
            className="h-14 w-auto object-contain hover:opacity-80 transition-opacity"
            priority 
          />
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="container-shell section-pad pt-2 text-center animate-in">
        <span className="kicker block mb-4">Asesoría de seguros · Madrid</span>
        <h1 className="section-title text-gradient mb-6 text-balance leading-tight">
          Te ayudamos a elegir el seguro correcto.<br />
          Sin presión. Sin letra pequeña. Sin coste.
        </h1>
        <p className="section-copy mx-auto mb-10 text-balance text-lg md:text-xl">
          En 15 minutos sabes exactamente qué necesitas y cuánto te cuesta. O te decimos que no lo necesitas.
        </p>
        
        <div className="flex justify-center mb-16">
          <button 
            onClick={() => handleWhatsAppClick("Hola, me gustaría recibir asesoría gratuita sobre seguros.")}
            className="btn-whatsapp px-8 py-5 text-xl flex items-center gap-3 animate-pulse-soft shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Quiero mi asesoría gratuita</span>
          </button>
        </div>
      </section>

      {/* SELECTOR DE NECESIDAD */}
      <section className="container-shell mb-20">
        <div className="bg-white-pure rounded-[40px] p-8 md:p-12 shadow-sm border border-[var(--border)]">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl mb-4">¿Qué quieres proteger?</h2>
            <p className="section-copy mx-auto">Elige y te preparamos una propuesta personalizada</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {needs.map((need) => (
              <button
                key={need.id}
                onClick={() => setSelectedNeed(need.id)}
                className={`glass-card-premium p-6 flex flex-col items-center gap-4 text-center group transition-all duration-300 ${
                  selectedNeed === need.id 
                    ? 'ring-2 ring-[var(--blue)] border-[var(--blue)] scale-[1.05] shadow-lg bg-blue-50/50' 
                    : 'hover:scale-[1.02]'
                }`}
              >
                <div className={`p-4 rounded-2xl transition-all duration-300 ${
                  selectedNeed === need.id 
                    ? 'bg-[var(--blue)] text-white' 
                    : 'bg-[var(--bg-soft)] text-[var(--blue-deep)] group-hover:bg-[var(--blue)] group-hover:text-white'
                }`}>
                  <need.icon className="w-8 h-8" />
                </div>
                <span className="font-bold text-sm text-[var(--blue-deep)] leading-tight">{need.label}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => {
                if (selectedNeed) {
                  const query = needs.find(n => n.id === selectedNeed)?.query;
                  handleWhatsAppClick(`Hola, me gustaría recibir asesoría gratuita sobre ${query}.`);
                } else {
                  document.getElementById('selector-anchor')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`btn-primary px-10 py-5 text-lg min-w-[300px] transition-all duration-300 ${!selectedNeed ? 'opacity-50 cursor-not-allowed grayscale' : 'hover:scale-105 shadow-2xl'}`}
              disabled={!selectedNeed}
            >
              {getButtonText()}
            </button>
          </div>
          <div id="selector-anchor" className="h-1" />
        </div>
      </section>

      {/* SECCIÓN GARANTÍAS (3 columnas) */}
      <section className="container-shell section-pad pt-0 grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="glass-card-premium p-8 flex flex-col items-center text-center">
          <Clock className="w-12 h-12 text-[var(--blue)] mb-6" />
          <h3 className="font-bold text-xl text-[var(--blue-deep)] mb-3">Respuesta en menos de 2 horas</h3>
          <p className="text-[var(--muted)] leading-relaxed">Hábiles. No el lunes siguiente.</p>
        </div>
        <div className="glass-card-premium p-8 flex flex-col items-center text-center">
          <Shield className="w-12 h-12 text-[var(--blue)] mb-6" />
          <h3 className="font-bold text-xl text-[var(--blue-deep)] mb-3">Sin compromiso de contratación</h3>
          <p className="text-[var(--muted)] leading-relaxed">La asesoría es gratuita siempre, compres o no.</p>
        </div>
        <div className="glass-card-premium p-8 flex flex-col items-center text-center">
          <User className="w-12 h-12 text-[var(--blue)] mb-6" />
          <h3 className="font-bold text-xl text-[var(--blue-deep)] mb-3">Asesor real, no comparador</h3>
          <p className="text-[var(--muted)] leading-relaxed">Hablarás con Valentín, no con un bot ni un call center.</p>
        </div>
      </section>

      {/* SECCIÓN SORPRESA */}
      <section className="container-shell mb-20">
        <div className="bg-[var(--blue-deep)] text-white p-12 md:p-20 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
            <MessageCircle className="w-48 h-48" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-block p-5 bg-white/10 rounded-3xl mb-8 backdrop-blur-md">
              <span className="text-5xl">🎁</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Si contratas salud junto con vida, decesos o accidentes, te aplicamos un descuento especial en tu primera prima.
            </h2>
            <p className="text-xl md:text-2xl text-white/70 mb-10 italic">Pregúntanos cómo.</p>
            <button 
              onClick={() => handleWhatsAppClick("Hola, me gustaría recibir asesoría gratuita y consultar el descuento especial por contratación combinada.")}
              className="btn-whatsapp bg-white text-[var(--blue-deep)] hover:bg-[#25D366] hover:text-white border-none py-5 px-12 text-xl shadow-2xl"
            >
              Consultar descuento por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN HONESTIDAD */}
      <section className="container-shell section-pad mb-20">
        <div className="glass-card-premium p-12 md:p-24 text-center max-w-5xl mx-auto border-dashed border-2">
          <blockquote className="text-3xl md:text-5xl font-bold text-[var(--blue-deep)] italic mb-12 leading-tight">
            "Somos independientes. No trabajamos para ninguna compañía. Trabajamos para ti."
          </blockquote>
          <p className="text-xl md:text-2xl text-[var(--muted)] font-medium max-w-2xl mx-auto">
            Si lo que buscas no te conviene, te lo decimos. <span className="text-[var(--blue-deep)] font-bold">Así de simple.</span>
          </p>
        </div>
      </section>

      {/* FOOTER MÍNIMO */}
      <footer className="py-16 border-t border-[var(--border)] text-center text-[var(--muted)] text-sm">
        <div className="container-shell">
          <p className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
            <span>© 2025 Valentín Protección Integral</span>
            <span className="hidden md:inline">•</span>
            <Link href="/privacidad" className="hover:text-[var(--blue)] transition-colors underline-offset-4 hover:underline">Privacidad</Link>
            <span className="hidden md:inline">•</span>
            <Link href="/aviso-legal" className="hover:text-[var(--blue)] transition-colors underline-offset-4 hover:underline">Aviso legal</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
