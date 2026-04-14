"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { LeadForm } from './lead-form';
import { buildWhatsAppHref, products, site } from '@/lib/products';
import CountUp from './ui/count-up';

export function HeroLeadSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section ref={heroRef} id="hero" aria-labelledby="hero-title" className="section-pad pt-4 md:pt-8 overflow-hidden bg-white-pure relative">
      <div className="container-shell hero-grid items-stretch gap-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="soft-card glass relative overflow-hidden p-8 md:p-12 xl:p-16 border-white/40 shadow-2xl bg-premium-glow">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              style={{ y: bgY }}
              className="absolute inset-0 scale-110"
            >
              <Image
                src="/images/premium/hero-family.png"
                alt="Familia feliz disfrutando de un momento de bienestar y seguridad"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.94)_0%,rgba(248,250,252,0.88)_42%,rgba(248,250,252,0.68)_70%,rgba(248,250,252,0.18)_100%)]" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h1 id="hero-title" className="kicker text-[var(--blue)] font-bold tracking-[0.3em]">
              Asesora de Seguros en Madrid · Consulta Gratuita, Sin Letra Pequeña
            </h1>
            <p className="mt-6 max-w-4xl font-heading text-6xl font-extrabold tracking-tight text-gradient md:text-7xl xl:text-8xl leading-[1.05]">
              {site.heroTagline}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-9 text-[var(--muted)] md:text-xl">
              Asesoramiento personalizado en <strong>SALUD</strong>, <strong>VIDA</strong>, <strong>MASCOTAS</strong>, <strong>VIAJE</strong>, <strong>DENTAL</strong>, <strong>ACCIDENTES</strong>, <strong>PROTECCIÓN JURÍDICA</strong> y <strong>NEGOCIOS</strong>.
              {' '}Protegemos lo que de verdad importa con el seguro adecuado para ti.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contacto" className="btn-primary hover-lift px-10 py-5 text-lg shadow-xl">Solicitar asesoría en seguros</Link>
              <a href={buildWhatsAppHref('Hola, quiero una consulta sin compromiso para elegir un seguro.')} className="btn-whatsapp animate-pulse-soft px-10 py-5 text-lg shadow-xl"><MessageCircle className="h-5 w-5" /> Hablar por WhatsApp</a>
            </div>
            <div className="mt-7 grid gap-3 md:grid-cols-3">
              {[
                ['Te ayudamos a decidir', 'Comparamos opciones contigo y te explicamos la letra pequeña sin prisas ni presión.'],
                ['Experiencia a tu servicio', 'No somos un comparador automático. Hay un equipo experto detrás de cada recomendación.'],
                ['Consulta sin coste', 'Empieza por llamada, WhatsApp o formulario corto para resolver tus primeras dudas.'],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[22px] bg-white/92 p-4 shadow-sm backdrop-blur">
                  <p className="font-heading text-lg font-semibold text-[var(--blue-deep)]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{copy}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4 text-sm font-bold text-[var(--blue-deep)]">
              {products.map((product) => (
                <Link key={product.slug} href={`/seguros/${product.slug}`} className="glass rounded-full border border-white/60 bg-white/40 px-6 py-4 tracking-wider hover:bg-white hover:text-[var(--blue)] hover:border-[var(--blue)] transition-all">
                  {product.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.42, delay: 0.05 }} id="lead-form">
          <LeadForm defaultProduct="salud" compact />
        </motion.div>
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
