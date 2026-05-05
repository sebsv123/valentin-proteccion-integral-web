"use client";

import Link from 'next/link';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, products } from '@/lib/products';
import { WhatsAppIcon } from './ui/whatsapp-icon';
import { Phone, BadgePercent } from 'lucide-react';
import { WhatsAppLink } from '@/components/whatsapp-link';

export function HeroLeadForm() {
  return (
    <div 
      id="lead-form"
      style={{
        animationName: 'hero-fade-in-right',
        animationDuration: '0.42s',
        animationDelay: '0.05s',
        animationFillMode: 'forwards',
        animationTimingFunction: 'ease-out',
        opacity: 0,
      }}
    >
      <LeadForm defaultProduct="salud" compact />
    </div>
  );
}

// CSS Animation wrapper for zero-JS animations
function CSSReveal({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: React.ReactNode; 
  delay?: number; 
  className?: string;
}) {
  return (
    <div 
      className={className}
      style={{
        animationName: 'hero-fade-in-up',
        animationDuration: '0.8s',
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
        animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
}

export function HeroContentClient() {
  return (
    <>
      {/* CONTENIDO — CSS animations, cero TBT */}
      <div className="relative z-10 max-w-3xl">
        {/* KICKER — pequeño, arriba */}
        <CSSReveal delay={0}>
          <p className="kicker text-[var(--blue)] font-bold tracking-[0.3em] text-xs sm:text-sm uppercase">
            Asesores de Seguros en Madrid · Sin Letra Pequeña
          </p>
        </CSSReveal>

        {/* H1 — protagonista visual */}
        <CSSReveal delay={0.1}>
          <h1 
            id="hero-title"
            className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-gradient leading-[1.1]"
          >
            Protección real. Sin letra pequeña.
          </h1>
        </CSSReveal>

        {/* Badges de confianza */}
        <CSSReveal delay={0.2}>
          <div className="flex items-center gap-3 mt-3 mb-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
              <span className="text-green-500">✓</span> +10 años de experiencia
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--muted)]/40" />
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
              <span className="text-green-500">✓</span> +1.200 familias protegidas
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--muted)]/40 hidden sm:block" />
            <span className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
              <span className="text-green-500">✓</span> Agentes registrados DGSFP
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--muted)]/40 hidden sm:block" />
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[var(--muted)]">
              <BadgePercent className="h-4 w-4 text-green-500" /> Precio garantizado
            </span>
          </div>
        </CSSReveal>

        {/* Ramos como subtítulo */}
        <CSSReveal delay={0.3}>
          <p className="text-base sm:text-lg text-[var(--muted)] leading-7 max-w-2xl">
            Protegemos a familias y particulares con asesoría clara, sin letra pequeña y sin compromiso.
          </p>
        </CSSReveal>

        {/* CTAs */}
        <CSSReveal delay={0.4}>
          <div className="mt-6 flex flex-col gap-3">
            <WhatsAppLink
              href="https://wa.me/34603448765?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20seguros."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg font-bold shadow-xl shadow-green-500/20 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-6 w-6 flex-none" />
              Hablar con un asesor — Consulta gratuita
            </WhatsAppLink>
            <a
              href="tel:+34603448765"
              className="flex items-center justify-center gap-1.5 text-center text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors font-medium"
            >
              <Phone className="h-3.5 w-3.5" />
              O llámanos al 603 44 87 65
            </a>
          </div>
        </CSSReveal>

        {/* 3 mini-cards de confianza */}
        <CSSReveal delay={0.55}>
          <div className="mt-6 hidden sm:grid gap-3 md:grid-cols-3">
            {[
              ['Te ayudamos a decidir', 'Analizamos según tu perfil y te explicamos la letra pequeña sin prisas ni presión.'],
              ['Experiencia a tu servicio', 'No somos un portal automático. Hay un equipo experto detrás de cada recomendación.'],
              ['Consulta sin coste', 'Empieza por llamada, WhatsApp o formulario corto para resolver tus primeras dudas.'],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[22px] bg-white/92 p-4 shadow-sm backdrop-blur">
                <p className="font-heading text-sm font-semibold text-[var(--blue-deep)]">{title}</p>
                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">{copy}</p>
              </div>
            ))}
          </div>
        </CSSReveal>

        {/* Pills de ramos */}
        <CSSReveal delay={0.65}>
          <div className="mt-8 hidden sm:flex flex-wrap gap-3 text-sm font-bold text-[var(--blue-deep)]">
            {products.map((product) => (
              <Link key={product.slug} href={`/seguros/${product.slug}`} className="glass rounded-full border border-white/60 bg-white/40 px-5 py-3 tracking-wider hover:bg-white hover:text-[var(--blue)] hover:border-[var(--blue)] transition-all">
                {product.label}
              </Link>
            ))}
          </div>
        </CSSReveal>
      </div>
    </>
  );
}
