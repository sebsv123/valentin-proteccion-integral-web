"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, products, site } from '@/lib/products';
import CountUp from './ui/count-up';
import { HeroImage } from './hero-image';

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

export function HeroLeadSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640

  return (
    <section ref={heroRef} id="hero" aria-labelledby="hero-title" className="section-pad pt-4 md:pt-8 overflow-hidden bg-white-pure relative">
      <div className="container-shell hero-grid items-stretch gap-8">
        <div className="soft-card glass relative overflow-hidden p-8 md:p-12 xl:p-16 border-white/40 shadow-2xl bg-premium-glow">
          {/* IMAGEN — Estática, pinta inmediato sin esperar hidratación */}
          <div className="absolute inset-0 overflow-hidden" style={{ willChange: 'transform' }}>
            {/* HeroImage estático para LCP óptimo */}
            <div className="absolute inset-0 scale-110">
              <HeroImage />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.94)_0%,rgba(248,250,252,0.88)_42%,rgba(248,250,252,0.68)_70%,rgba(248,250,252,0.18)_100%)]" />
            {/* Parallax overlay solo desktop — único uso de framer-motion en hero */}
            {!isMobile && (
              <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 pointer-events-none"
                initial={false}
              />
            )}
          </div>
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
                Asesor de Seguros en Madrid — Consulta Gratuita, Sin Compromiso
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
                  <span className="text-green-500">✓</span> Asesores independientes
                </span>
              </div>
            </CSSReveal>

            {/* Ramos como subtítulo */}
            <CSSReveal delay={0.3}>
              <p className="text-base sm:text-lg text-[var(--muted)] leading-7 max-w-2xl">
                Seguros de salud, vida, dental, mascotas, viaje y más. Comparamos las mejores opciones para ti, sin letra pequeña ni compromiso.
              </p>
            </CSSReveal>

            {/* CTAs */}
            <CSSReveal delay={0.4}>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://wa.me/34603448765?text=Hola%2C%20quiero%20una%20consulta%20gratuita%20sobre%20seguros."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 text-lg font-bold shadow-xl shadow-green-500/20 transition-all hover:scale-105 w-full sm:w-auto"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 flex-none">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Hablar con un asesor — Consulta gratuita
                </a>
                <a
                  href="tel:+34603448765"
                  className="block text-center text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors font-medium"
                >
                  📞 O llámanos al 603 44 87 65
                </a>
              </div>
            </CSSReveal>

            {/* 3 mini-cards de confianza */}
            <CSSReveal delay={0.55}>
              <div className="mt-6 hidden sm:grid gap-3 md:grid-cols-3">
                {[
                  ['Te ayudamos a decidir', 'Comparamos opciones contigo y te explicamos la letra pequeña sin prisas ni presión.'],
                  ['Experiencia a tu servicio', 'No somos un comparador automático. Hay un equipo experto detrás de cada recomendación.'],
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
        </div>
        {/* Lead Form — CSS animation */}
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
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { label: 'Años de experiencia', value: 10, suffix: '+' },
    { label: 'Familias protegidas', value: 1200, suffix: '+' },
    { label: 'Ramos de seguro', value: 9, suffix: '' },
    { label: 'Asesoría cercana', value: 100, suffix: '%' },
  ];

  return (
    <section id="stats" aria-label="Estadísticas de impacto" className="bg-[var(--blue-deep)] py-12 md:py-16 overflow-hidden">
      <div className="container-shell">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#81C784] mb-2">
                <CountUp to={stat.value} suffix={stat.suffix} delay={index * 0.15} />
              </div>
              <div className="text-white/70 text-sm md:text-base font-semibold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
