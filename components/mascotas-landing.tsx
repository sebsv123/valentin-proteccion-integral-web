"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Shield,
  Heart,
  Cat,
  Pill,
  Scale,
  Target,
  Clock,
  FileText,
  UserCheck,
  RefreshCw,
  ChevronDown,
  Phone,
  BadgePercent,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { GarantiaPrecio } from "@/components/garantia-precio";
import { WhatsAppLink } from '@/components/whatsapp-link';

const DotGrid = dynamic(() => import("@/components/ui/dot-grid"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

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

interface MascotasLandingProps {
  teamImageSrc?: string;
}

export function MascotasLanding({ teamImageSrc = "/images/rosa_y_sebastian.jpeg" }: MascotasLandingProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const fadeInUpVariants = getFadeInUp(prefersReducedMotion);

  const faqs = [
    {
      q: "¿Es obligatorio el seguro para perros en España?",
      a: "Sí. Desde la Ley de Bienestar Animal 7/2023, todos los perros en España deben tener seguro de responsabilidad civil. El incumplimiento puede acarrear multas de hasta 10.000€. El seguro de RC parte desde 5€/mes.",
    },
    {
      q: "¿Cuánto cuesta un seguro para mascotas en Madrid?",
      a: "El seguro de RC obligatoria para perros parte desde 5€/mes. Los seguros con veterinaria completa oscilan entre 20€ y 60€/mes según raza, edad y coberturas. En nuestra consulta gratuita te explicamos las opciones reales.",
    },
    {
      q: "¿Los seguros de mascotas cubren al gato también?",
      a: "Sí. Los seguros para gatos cubren asistencia veterinaria y urgencias según modalidad. No tienen RC obligatoria, pero protegerlos veterinariamente es una decisión inteligente ante el coste creciente de las consultas.",
    },
    {
      q: "¿Qué cubre exactamente la RC para perros?",
      a: "La RC cubre los daños que tu perro cause a terceras personas o sus bienes. Si tu perro muerde a alguien o causa un accidente, el seguro paga la indemnización. Es el mínimo legal exigido desde 2023.",
    },
    {
      q: "¿Los seguros de mascotas cubren enfermedades crónicas?",
      a: "Depende de la modalidad. La mayoría excluyen enfermedades preexistentes, por eso es importante contratar cuanto antes. Te explicamos en detalle las condiciones antes de que firmes nada.",
    },
    {
      q: "¿Puedo cancelar cuando quiera?",
      a: "Sí. No hay permanencia mínima. Te explicamos todas las condiciones antes de firmar.",
    },
  ];

  return (
    <>
      {/* 1. BARRA STICKY */}
      <div className="sticky top-16 z-40 w-full bg-[#002244] text-white py-2 sm:py-3 px-4 shadow-md">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-3">
          <p className="text-sm font-semibold leading-tight flex-1">
            <span className="sm:hidden">Tráenos cualquier presupuesto que tengas.</span>
            <span className="hidden sm:inline">
              <span className="font-bold">Tráenos cualquier presupuesto que tengas. En más de 10 años y 1.200 familias asesoradas, siempre encontramos uno mejor.</span>
            </span>
          </p>
          <WhatsAppLink
            href="https://wa.me/34603448765?text=Hola%2C%20quiero%20revisar%20precios%20de%20seguro%20para%20mi%20mascota"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Compruébalo gratis →
          </WhatsAppLink>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-24 bg-background">
        <DotGrid
          className="z-0"
          dotSize={4}
          gap={isTouchDevice ? 32 : 28}
          baseColor="#fef3c7"
          activeColor="#d97706"
          proximity={isTouchDevice ? 0 : 80}
          shockStrength={isTouchDevice ? 0 : 2}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Columna izquierda - Texto */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeInUpVariants} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold">
                  <span className="mr-1.5">🐾</span> +1.200 familias protegidas · Boadilla del Monte, Madrid
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Seguro Veterinario para Mascotas en Madrid:{" "}
                <span className="underline decoration-amber-500 decoration-4 underline-offset-4">Perros y Gatos</span>{" "}
                desde 5€/mes
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Rosa Valentín lleva más de 10 años ayudando a familias de Madrid a proteger a sus mascotas. RC obligatoria para perros, asistencia veterinaria para gatos y perros, y coberturas opcionales explicadas sin letra pequeña.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" /> RC obligatoria cubierta
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" /> Desde 5€/mes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-amber-600" /> Respuesta en 30 min
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <WhatsAppLink
                  href="https://wa.me/34603448765"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Pedir presupuesto gratis
                </WhatsAppLink>
                <a
                  href="tel:603448765"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 px-8 text-lg font-bold border-2"
                  )}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  603 448 765
                </a>
              </motion.div>
            </motion.div>

            {/* Columna derecha - Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-amber-100">
                <Image
                  src="/images/premium/happy-pets.webp"
                  alt="Perro y gato protegidos con seguro veterinario en Madrid"
                  fill
                  priority={true}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ¿POR QUÉ ASEGURAR A TU MASCOTA? */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-soft)]"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">¿Por qué asegurar a tu mascota en Madrid?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Proteger a tu compañero peludo no es solo un gasto, es una inversión en tranquilidad y cumplimiento legal.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "RC Obligatoria para perros",
                desc: "Desde la Ley de Bienestar Animal 2023, todos los perros en España deben tener RC. El incumplimiento puede acarrear multas de hasta 10.000€.",
                color: "bg-red-100 text-red-600",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Veterinaria sin sorpresas",
                desc: "Una visita de urgencias puede costar entre 200€ y 800€. Con seguro, lo gestionas sin que te afecte al bolsillo.",
                color: "bg-amber-100 text-amber-600",
              },
              {
                icon: <Cat className="h-8 w-8" />,
                title: "También para gatos",
                desc: "El seguro para gatos cubre asistencia veterinaria y urgencias. Protege a tu minino con coberturas adaptadas.",
                color: "bg-orange-100 text-orange-600",
              },
              {
                icon: <Pill className="h-8 w-8" />,
                title: "Enfermedades crónicas",
                desc: "Cuanto antes contratas, mejor. Los seguros excluyen enfermedades preexistentes. Contratar joven es la clave.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: <Scale className="h-8 w-8" />,
                title: "Responsabilidad Civil",
                desc: "Si tu perro causa daños a una persona o sus bienes, el seguro cubre la indemnización. Protección legal incluida.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "Cobertura personalizada",
                desc: "Puedes combinar RC + veterinaria + opcionales como robo o fallecimiento accidental según lo que realmente necesitas.",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((beneficio, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 items-center text-center p-6 rounded-2xl border bg-card shadow-sm"
              >
                <div className={cn("p-3 rounded-xl", beneficio.color)}>
                  {beneficio.icon}
                </div>
                <h3 className="text-xl font-bold">{beneficio.title}</h3>
                <p className="text-muted-foreground">{beneficio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. COBERTURAS */}
      <section
        id="coberturas"
        className="py-14 sm:py-20 lg:py-24 bg-[#002244] text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Lo que cubre tu seguro para mascotas</h2>
            <p className="text-xl text-white/80">Sin letra pequeña. Te explicamos todo antes de firmar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Responsabilidad Civil",
                desc: "Obligatoria para perros desde 2023. Cubre daños a terceras personas o sus bienes causados por tu mascota. Desde 5€/mes.",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Asistencia Veterinaria",
                desc: "Consultas, urgencias y diagnósticos según modalidad. Para perros y gatos. El coste de una urgencia puede superar los 500€.",
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Coberturas Opcionales",
                desc: "Robo, fallecimiento accidental, determinados gastos asociados. Tú eliges qué añadir según lo que de verdad te resulte útil.",
              },
              {
                icon: <Scale className="h-6 w-6" />,
                title: "Cumplimiento Legal",
                desc: "Te ayudamos a cumplir la Ley de Bienestar Animal sin complicaciones. Gestión rápida y documentación en orden.",
              },
            ].map((cobertura, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-white/10 border border-white/20"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  {cobertura.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{cobertura.title}</h3>
                  <p className="text-white/70">{cobertura.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5. ALERTA LEY */}
      <section className="py-10 sm:py-14 bg-white border-y border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-[var(--bg-soft)] border border-[var(--border)] shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-lg sm:text-xl font-bold text-[var(--blue-deep)]">
                Ley de Bienestar Animal 2023 — Es obligatorio
              </p>
              <p className="text-sm sm:text-base text-[var(--muted)] mt-1">
                Desde la entrada en vigor de la Ley 7/2023, todos los perros en España necesitan seguro de responsabilidad civil. Las multas por incumplimiento pueden llegar a 10.000€. Contratar desde 5€/mes es la solución más sencilla.
              </p>
              <WhatsAppLink
                href="https://wa.me/34603448765?text=Hola%2C%20quiero%20contratar%20la%20RC%20obligatoria%20para%20mi%20perro"
                className="inline-flex items-center gap-1 text-sm font-bold text-[var(--blue)] mt-3 underline underline-offset-2 hover:text-[var(--blue-deep)] transition-colors"
              >
                Contratar RC ahora →
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROSA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUpVariants} className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[var(--border)]">
              <Image
                src={teamImageSrc}
                alt="Rosa Valentín, asesora de seguros para mascotas en Madrid"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8 text-[var(--blue-deep)]">Hablas con Rosa, no con un call center</h2>
              <p className="text-xl md:text-2xl text-[var(--muted)] mb-4 leading-relaxed italic font-light">
                &ldquo;Rosa lleva más de 10 años protegiendo a las mascotas de las familias de Boadilla del Monte y Madrid. Cada seguro que gestiona lo trata como si fuera el de su propia mascota.&rdquo;
              </p>
              <a
                href="https://rrpp.dgsfp.mineco.es/Mediador"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[var(--blue)] mb-6 hover:text-[var(--blue-deep)] transition-colors underline underline-offset-2"
              >
                <CheckCircle2 className="h-5 w-5" />
                Agentes de seguros colegiados en Madrid — Verificar →
              </a>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: <WhatsAppIcon className="h-6 w-6" />, text: "Responde en menos de 30 minutos" },
                  { icon: <FileText className="h-6 w-6" />, text: "Te explica todo antes de firmar" },
                  { icon: <UserCheck className="h-6 w-6" />, text: "Tu gestor personal de por vida" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--bg-soft)] border border-[var(--border)]">
                    <div className="text-[var(--blue)]">{item.icon}</div>
                    <span className="text-sm font-medium text-[var(--foreground)]">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 6. GARANTÍAS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-background"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Nuestras garantías</h2>
            <p className="text-xl text-muted-foreground">Promesas que cumplimos</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Clock className="h-8 w-8" />, title: "Respuesta en 30 minutos", desc: "O te llamamos nosotros" },
              { icon: <FileText className="h-8 w-8" />, title: "Sin letra pequeña", desc: "Te explicamos todo antes de firmar" },
              { icon: <UserCheck className="h-8 w-8" />, title: "Gestora personal de por vida", desc: "Rosa, siempre" },
              { icon: <RefreshCw className="h-8 w-8" />, title: "Revisión anual gratuita", desc: "Revisamos tu cobertura cada año" },
            ].map((garantia, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="text-center p-6 rounded-2xl border bg-card shadow-sm"
              >
                <div className="mb-4 text-[var(--blue)]">
                  {garantia.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{garantia.title}</h3>
                <p className="text-muted-foreground text-sm">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 mx-auto max-w-2xl rounded-2xl border border-[var(--blue)]/20 bg-[var(--blue)]/5 px-8 py-6 text-center"
          >
            <p className="text-lg font-bold text-[var(--blue-deep)] mb-2">
              ¿Y si no cumplimos lo que prometemos?
            </p>
            <p className="text-[var(--muted)] text-base leading-relaxed">
              Si no te contactamos en 30 minutos, Rosa te ofrece una{" "}
              <span className="text-[var(--blue-deep)] font-semibold">
                cita presencial gratuita en nuestra oficina
              </span>
              {" "}de Boadilla del Monte para explicarte todo en persona.
              Así de seguros estamos de lo que prometemos.
            </p>
            <p className="mt-4 text-sm text-[var(--blue)] italic">
              Nadie en el sector hace esta garantía. Nosotros sí.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* 7. PROCESO EN 3 PASOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-soft)]"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Así de sencillo es proteger a tu mascota</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center max-w-6xl mx-auto">
            {/* Columna izquierda: los 3 pasos */}
            <div>
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-[var(--border)] hidden md:block" />

                {[
                  {
                    num: "1",
                    title: "Escríbenos por WhatsApp o llámanos",
                    desc: "Cuéntanos si es perro o gato, la edad y qué coberturas te interesan.",
                  },
                  {
                    num: "2",
                    title: "Rosa te llama en menos de 30 minutos",
                    desc: "Te explica sin presión qué modalidad encaja mejor con tu mascota.",
                  },
                  {
                    num: "3",
                    title: "Recibes tu presupuesto personalizado",
                    desc: "Sin compromiso. Solo cuando estés convencido, procedemos.",
                  },
                ].map((paso, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUpVariants}
                    className="flex gap-8 relative"
                  >
                    <div className="flex-none w-12 h-12 rounded-full bg-[var(--blue)] text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                      {paso.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{paso.title}</h3>
                      <p className="text-muted-foreground text-lg">{paso.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Columna derecha: imagen */}
            <div className="hidden lg:block relative aspect-[3/4] rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl">
              <Image
                src={teamImageSrc}
                alt="Rosa Valentín asesorando sobre seguros para mascotas"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* GARANTÍA DE PRECIO (COMPONENTE REUTILIZABLE) */}
      <GarantiaPrecio />

      {/* 8. FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-white"
      >
        <div className="container max-w-5xl px-4">
          <h2 className="text-3xl font-bold sm:text-6xl mb-10 text-center lg:hidden">Preguntas frecuentes</h2>
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">

            <div className="hidden lg:block lg:sticky lg:top-24 text-center">
              <h2 className="text-3xl font-bold sm:text-6xl mb-6">Preguntas frecuentes</h2>
              <div className="relative aspect-square rounded-3xl overflow-hidden border bg-muted">
                <Image
                  src="/images/premium/happy-pets.webp"
                  alt="Rosa Valentín respondiendo preguntas sobre seguros para mascotas"
                  fill
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-top"
                  sizes="40vw"
                />
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUpVariants}
                  className="rounded-2xl border bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-semibold pr-4">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-shrink-0 transition-transform",
                        openFaq === i && "rotate-180"
                      )}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground">{faq.a}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* 9. CTA FINAL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-amber-700 to-amber-900 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            Protege a tu mascota hoy. La RC es obligatoria.
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8">
            Rosa te responde en menos de 30 minutos. Desde 5€/mes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink
              href="https://wa.me/34603448765?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20seguro%20para%20mi%20mascota"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
              )}
            >
              <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              Pedir presupuesto gratis
            </WhatsAppLink>
            <a
              href="tel:603448765"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-amber-900"
              )}
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              603 448 765
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
