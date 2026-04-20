"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Heart,
  Home,
  Shield,
  Clock,
  FileText,
  UserCheck,
  RefreshCw,
  ChevronDown,
  Phone,
  BadgePercent,
  CheckCircle2,
  Users,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

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

export function VidaLanding() {
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
      q: "¿Es obligatorio el seguro de vida con la hipoteca?",
      a: "No es legalmente obligatorio, aunque el banco puede exigirlo como condición del préstamo. Sin embargo, tienes derecho a contratarlo con cualquier aseguradora, no solo la del banco, lo que puede suponer un ahorro de hasta el 50%.",
    },
    {
      q: "¿Cuánto capital debo asegurar en el seguro de vida?",
      a: "Lo más habitual es cubrir entre 3 y 5 veces tus ingresos anuales, o el capital pendiente de tu hipoteca. En nuestra consulta gratuita calculamos la cobertura exacta que necesitas.",
    },
    {
      q: "¿Puedo contratar un seguro de vida con enfermedades previas?",
      a: "Sí, aunque las condiciones pueden variar. Trabajamos con varias compañías que tienen criterios diferentes, lo que nos permite encontrar una solución para casi cualquier perfil de salud.",
    },
    {
      q: "¿Cuándo debo contratar un seguro de vida?",
      a: "Cuanto antes mejor: el precio aumenta con la edad y puede verse afectado por el estado de salud. El momento ideal es al firmar una hipoteca, al tener hijos o al iniciar un negocio.",
    },
    {
      q: "¿Qué diferencia hay entre vida e incapacidad?",
      a: "El seguro de vida cubre fallecimiento. La cobertura de incapacidad permanente protege si quedas inválido y no puedes trabajar. Se pueden contratar juntos o por separado según tus necesidades.",
    },
    {
      q: "¿Puedo cancelar cuando quiera?",
      a: "Sí. No hay permanencia. Te explicamos todas las condiciones antes de firmar.",
    },
  ];

  return (
    <>
      {/* 1. BARRA STICKY */}
      <div className="relative w-full bg-blue-900 text-white py-2 sm:py-3 px-4 shadow-md">
        <div className="container mx-auto max-w-5xl flex items-center justify-between gap-3">
          <p className="text-sm font-semibold leading-tight flex-1 truncate">
            <span className="sm:hidden">Seguro de vida desde 10€/mes</span>
            <span className="hidden sm:inline">
              <span className="font-bold">Seguro de vida desde 10€/mes · Sin examen médico en la mayoría de casos</span>
            </span>
          </p>
          <a
            href="#coberturas"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Ver condiciones →
          </a>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-24 bg-background">
        <DotGrid
          className="z-0"
          dotSize={4}
          gap={isTouchDevice ? 32 : 28}
          baseColor="#dbeafe"
          activeColor="#2563eb"
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
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                  <Heart className="h-4 w-4 mr-1.5" /> Más de 1.200 familias protegidas
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Seguro de Vida en Madrid:{" "}
                <span className="underline decoration-blue-500 decoration-4 underline-offset-4">Protege a tu Familia</span>{" "}
                y tu Hipoteca
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Rosa y Sebastián Valentín llevan más de 10 años ayudando a familias madrileñas a elegir la cobertura de vida que realmente necesitan. Sin letra pequeña. Sin presión.
              </motion.p>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> Respuesta en 30 min
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> +1.200 familias
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" /> Asesores independientes
                </span>
              </motion.div>

              <motion.div
                variants={fadeInUpVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <a
                  href="https://wa.me/34603448765"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Pedir presupuesto gratis
                </a>
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
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-100">
                <Image
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián Valentín, asesores de seguros de vida en Madrid"
                  fill
                  priority={true}
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. POR QUÉ UN SEGURO DE VIDA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-accent/30"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">¿Por qué un seguro de vida?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              No es solo un capital para tus beneficiarios. Es tranquilidad para tu familia, protección para tu hipoteca y seguridad para tu futuro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Protección familiar",
                desc: "Tu familia recibe un capital si faltas. Pueden mantener su nivel de vida, pagar estudios y afrontar gastos inesperados.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Home className="h-8 w-8" />,
                title: "Vinculado a hipoteca",
                desc: "El banco puede exigirlo, pero tú eliges con quién contratarlo. Ahorra hasta un 50% respecto a la oferta de tu banco.",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: <Briefcase className="h-8 w-8" />,
                title: "Protección para autónomos",
                desc: "Si eres autónomo o tienes un negocio familiar, el seguro de vida protege la continuidad de tu actividad.",
                color: "bg-amber-100 text-amber-600",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Rentabilidad a largo plazo",
                desc: "Algunas modalidades acumulan valor e incluso pueden recuperar parte de la prima si no se produce el siniestro.",
                color: "bg-purple-100 text-purple-600",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Sin examen médico",
                desc: "En la mayoría de casos para menores de 50 años y capitales razonables, no se requiere reconocimiento médico.",
                color: "bg-pink-100 text-pink-600",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Tranquilidad emocional",
                desc: "Saber que tu familia estará protegida te permite vivir con menos preocupación y más presente.",
                color: "bg-red-100 text-red-600",
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
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">Lo que cubre tu seguro de vida</h2>
            <p className="text-xl text-white/80">Sin letra pequeña. Te explicamos todo antes de firmar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Fallecimiento",
                desc: "El capital asegurado se paga a tus beneficiarios. Pueden usarlo para lo que necesiten: hipoteca, gastos, futuro...",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Incapacidad permanente",
                desc: "Cobertura opcional que te protege si quedas inválido y no puedes seguir trabajando. Fundamental para autónomos.",
              },
              {
                icon: <Home className="h-6 w-6" />,
                title: "Cobertura hipotecaria",
                desc: "El capital se reduce a medida que amortizas tu hipoteca. Paga solo por lo que necesitas proteger en cada momento.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Doble capital en accidente",
                desc: "Algunas modalidades duplican el capital si el fallecimiento es por accidente. Más protección para el mismo precio.",
              },
            ].map((cobertura, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl bg-white/10 border border-white/20"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
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

      {/* 4.5. GARANTÍA DE PRECIO */}
      <section className="py-10 sm:py-14 bg-blue-50 border-y border-blue-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-white border border-blue-200 shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
              <BadgePercent className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-lg sm:text-xl font-bold text-blue-900">
                El mismo seguro. Mejor precio. Garantizado.
              </p>
              <p className="text-sm sm:text-base text-blue-700 mt-1">
                Tráenos el precio de tu banco o gestoría. En 10 años y más de 1.200 familias asesoradas, siempre hemos encontrado un precio mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROSA Y SEBASTIÁN */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUpVariants} className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián Valentín, asesores de seguros de vida en Madrid"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Hablas con personas, no con un call center</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed italic font-light">
                &ldquo;Rosa y Sebastián Valentín llevan más de 10 años ayudando a familias de Madrid a encontrar la protección que realmente necesitan. Cada consulta es personal. Cada recomendación es honesta.&rdquo;
              </p>
              <a
                href="https://www.colegiomediadores.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-400 mb-6 hover:text-blue-300 transition-colors underline underline-offset-2"
              >
                <CheckCircle2 className="h-5 w-5" />
                Agentes de seguros colegiados en Madrid — Verificar →
              </a>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: <WhatsAppIcon className="h-6 w-6" />, text: "Respondemos en menos de 30 minutos" },
                  { icon: <FileText className="h-6 w-6" />, text: "Te explicamos todo antes de firmar" },
                  { icon: <UserCheck className="h-6 w-6" />, text: "Un gestor personal de por vida" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10">
                    {item.icon}
                    <span className="text-sm font-medium">{item.text}</span>
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
              { icon: <UserCheck className="h-8 w-8" />, title: "Gestor personal de por vida", desc: "Rosa o Sebastián, siempre" },
              { icon: <RefreshCw className="h-8 w-8" />, title: "Revisión anual gratuita", desc: "Revisamos tu cobertura cada año" },
            ].map((garantia, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className="text-center p-6 rounded-2xl border bg-card shadow-sm"
              >
                <div className="mb-4 text-blue-600">
                  {garantia.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{garantia.title}</h3>
                <p className="text-muted-foreground text-sm">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 mx-auto max-w-2xl rounded-2xl border border-blue-200 bg-blue-50 px-8 py-6 text-center"
          >
            <p className="text-lg font-bold text-blue-900 mb-2">
              ¿Y si no cumplimos lo que prometemos?
            </p>
            <p className="text-blue-700 text-base leading-relaxed">
              Si no te contactamos en 30 minutos tras tu consulta, Rosa o Sebastián te ofrecen una{" "}
              <span className="text-blue-900 font-semibold">
                cita presencial gratuita en nuestra oficina
              </span>
              {" "}para explicarte todo en persona.
              Así de seguros estamos de lo que prometemos.
            </p>
            <p className="mt-4 text-sm text-blue-500 italic">
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
        className="py-14 sm:py-20 lg:py-24 bg-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Así de sencillo es empezar</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center max-w-6xl mx-auto">
            {/* Columna izquierda: los 3 pasos */}
            <div>
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-blue-200 hidden md:block" />

                {[
                  {
                    num: "1",
                    title: "Escríbenos por WhatsApp o llámanos",
                    desc: "Dos clics y tus datos llegan directamente a Rosa o Sebastián.",
                  },
                  {
                    num: "2",
                    title: "Te llamamos en menos de 30 minutos",
                    desc: "Te explican todo sin presión, respondiendo todas tus dudas.",
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
                    <div className="flex-none w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
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
            <div className="hidden lg:block relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
              <Image
                src="/images/rosa_y_sebastian_mesa.png"
                alt="Rosa y Sebastián Valentín asesorando sobre seguros de vida"
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

      {/* 8. FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-accent/30"
      >
        <div className="container max-w-5xl px-4">
          <h2 className="text-3xl font-bold sm:text-6xl mb-10 text-center lg:hidden">Preguntas frecuentes</h2>
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">

            <div className="hidden lg:block lg:sticky lg:top-24 text-center">
              <h2 className="text-3xl font-bold sm:text-6xl mb-6">Preguntas frecuentes</h2>
              <div className="relative aspect-square rounded-3xl overflow-hidden border bg-muted">
                <Image
                  src="/images/rosa_y_sebastian_conversando.png"
                  alt="Rosa y Sebastián Valentín respondiendo preguntas sobre seguros de vida"
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
        className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-800 to-blue-900 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            Protege a tu familia hoy. Mañana puede ser tarde.
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8">
            Rosa y Sebastián te responden en menos de 30 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34603448765"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
              )}
            >
              <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              Pedir presupuesto gratis
            </a>
            <a
              href="tel:603448765"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-blue-900"
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
