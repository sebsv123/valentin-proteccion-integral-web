"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
const DotGrid = dynamic(() => import("@/components/ui/dot-grid"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0" />,
});

const Globe = dynamic(() => import("@/components/magicui/globe"), {
  ssr: false,
  loading: () => null,
});
import {
  Plane,
  Globe as GlobeIcon,
  Users,
  Clock,
  FileText,
  UserCheck,
  RefreshCw,
  ChevronDown,
  ArrowRight,
  Shield,
  Heart,
  Zap,
  Phone,
  BadgePercent,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

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

export function ExtranjeroLanding() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    situacion: "Viajo por trabajo frecuentemente",
  });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const fadeInUpVariants = getFadeInUp(prefersReducedMotion);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y necesito información sobre el seguro de salud para el extranjero.\n\n📞 Teléfono: ${form.telefono}\n✈️ Situación: ${form.situacion}\n\nGracias.`
    );
    window.open(`https://wa.me/34603448765?text=${msg}`, "_blank");
    setSent(true);
  };

  const faqs = [
    {
      q: "¿Cubre todo el mundo o solo algunos países?",
      a: "Cubre más de 190 países. Solo algunos destinos con conflicto armado activo pueden tener limitaciones específicas. Te lo detallamos antes de contratar.",
    },
    {
      q: "¿También tengo cobertura cuando estoy en España?",
      a: "Sí. La póliza no se desactiva cuando estás en España. Tienes cobertura completa tanto dentro como fuera.",
    },
    {
      q: "¿Qué pasa si me hospitalizan en el extranjero?",
      a: "La aseguradora gestiona directamente con el hospital en la mayoría de casos. Si pagas tú primero, el reembolso es ágil. Rosa o Sebastián te acompañan en todo el proceso desde España.",
    },
    {
      q: "¿Puedo contratar si ya vivo en el extranjero?",
      a: "Sí, siempre que seas residente español o tengas vínculos con España. Cuéntanos tu situación y lo estudiamos sin compromiso.",
    },
    {
      q: "¿Hay diferencia de precio según el destino?",
      a: "Puede haberla según la zona geográfica y la duración. Te preparamos un presupuesto personalizado en 30 minutos.",
    },
    {
      q: "¿Y si ya tengo salud individual con vosotros?",
      a: "Perfecto. Ampliar tu cobertura al extranjero es sencillo y tendrás condiciones especiales por ser ya cliente. Una llamada y lo gestionamos.",
    },
  ];

  return (
    <>
      {/* 1. BARRA STICKY */}
      <div className="sticky top-0 z-50 bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">

          {/* Texto CORTO en móvil, texto LARGO en desktop */}
          <p className="text-sm font-medium leading-snug flex-1 min-w-0">
            <span className="sm:hidden">
              ✈️ Cobertura médica en 190+ países
            </span>
            <span className="hidden sm:inline">
              ✈️ ¿Viajas al extranjero por trabajo o vives fuera? Cobertura médica completa desde el primer día.
            </span>
          </p>

          {/* CTA: siempre visible, siempre a la derecha */}
          <a
            href="#contacto"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Pedir presupuesto →
          </a>

        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-32 bg-background">
        <DotGrid 
          className="z-0"
          dotSize={4}
          gap={isTouchDevice ? 32 : 28}
          baseColor="#bfdbfe"
          activeColor="#1d4ed8"
          proximity={isTouchDevice ? 0 : 80}
          shockStrength={isTouchDevice ? 0 : 2}
        />
        {/* Degradado decorativo solo para móvil - sustituye visualmente al Globe */}
        <div className="absolute inset-x-0 top-0 h-64 lg:hidden pointer-events-none z-[3] bg-gradient-to-b from-blue-900/15 via-blue-800/8 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-[55%] hidden lg:block pointer-events-none z-[5]">
          <Globe className="inset-0" />
          <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-background to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Columna izquierda - Texto */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUpVariants} className="mb-6">
                <AnimatedShinyText className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
                  ✈️ Cobertura en más de 190 países
                </AnimatedShinyText>
              </motion.div>

              <motion.h1
                variants={fadeInUpVariants}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Atención médica privada donde estés.{" "}
                <span className="underline decoration-blue-500">Sin fronteras</span>. Sin sorpresas.
              </motion.h1>

              <motion.p
                variants={fadeInUpVariants}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8"
              >
                Tanto si vives fuera, viajas por trabajo o pasas temporadas en el extranjero, 
                Rosa y Sebastián te gestionan la cobertura completa en una sola llamada.
              </motion.p>

              <motion.div variants={fadeInUpVariants} className="flex flex-col gap-4 mb-8">
                {[
                  "Cobertura en todo el mundo",
                  "Asistencia en tu idioma",
                  "Gestor personal de por vida",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-none w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUpVariants} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/34603448765?text=${encodeURIComponent(
                    "Hola, me gustaría información sobre el seguro de salud para el extranjero."
                  )}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white gap-2"
                  )}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  WhatsApp ahora
                </a>
                <a
                  href="tel:603448765"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-14 px-8 text-lg font-bold border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  )}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  603 448 765
                </a>
              </motion.div>
            </motion.div>

            {/* Columna derecha - Formulario */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              id="contacto"
              className="relative"
            >
              <div className="bg-card border rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg sm:shadow-2xl">
                <h3 className="text-2xl font-bold mb-2">Dinos a dónde viajas y te preparamos tu cobertura</h3>
                <p className="text-muted-foreground mb-6">Sin compromiso. Respuesta en 30 min.</p>

                {sent ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mb-2">¡Mensaje enviado!</h4>
                    <p className="text-muted-foreground">Rosa o Sebastián te contactarán en menos de 30 minutos.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Nombre</label>
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-background"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Teléfono</label>
                      <input
                        type="tel"
                        required
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-background"
                        placeholder="Ej: 612 345 678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Tu situación</label>
                      <select
                        value={form.situacion}
                        onChange={(e) => setForm({ ...form, situacion: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-background"
                      >
                        <option>Viajo por trabajo frecuentemente</option>
                        <option>Vivo en el extranjero</option>
                        <option>Temporadas largas fuera</option>
                        <option>Viaje puntual largo</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full h-14 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white"
                      )}
                    >
                      Enviar y recibir info por WhatsApp
                    </button>
                    <p className="text-xs text-center text-muted-foreground">
                      Al enviar, aceptas que te contactemos por WhatsApp. Sin spam.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PARA QUIÉN ES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-blue-50/50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">¿Para quién es este seguro?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Plane className="h-8 w-8" />,
                title: "Profesionales que viajan",
                desc: "Directivos, consultores o comerciales con viajes frecuentes a Europa, América o Asia. Cobertura activa desde que subes al avión.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <GlobeIcon className="h-8 w-8" />,
                title: "Residentes en el extranjero",
                desc: "Si vives fuera de España de forma temporal o permanente, necesitas una póliza que te cubra donde estás, no donde estabas.",
                color: "bg-indigo-100 text-indigo-600",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Familias con movilidad internacional",
                desc: "Parejas o familias que se trasladan temporalmente o pasan largas temporadas en otro país. Todos protegidos, en una sola póliza.",
                color: "bg-purple-100 text-purple-600",
              },
            ].map((item, i) =>
              isTouchDevice ? (
                <div
                  key={i}
                  className="flex flex-col gap-4 items-center text-center p-6 rounded-2xl border bg-card shadow-sm"
                >
                  <div className={cn("p-3 rounded-xl", item.color)}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ) : (
                <MagicContainer key={i}>
                  <MagicCard className="flex flex-col gap-4 items-center text-center p-6">
                    <div className={cn("p-3 rounded-xl", item.color)}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </MagicCard>
                </MagicContainer>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* NUEVO: EL MOMENTO QUE NADIE QUIERE VIVIR SIN COBERTURA */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-3">
              La realidad que nadie te cuenta
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
              Son las 2 de la madrugada en Tokio.<br className="hidden sm:block" />
              <span className="text-blue-400">¿A quién llamas?</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              No a un robot. No a un call center con música de espera. 
              A Rosa o Sebastián. Con tu póliza activa y alguien que ya te conoce 
              gestionando la situación desde España.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🏥",
                scenario: "Hospitalización urgente",
                without: "Pagas de tu bolsillo, pides reembolso 3 meses después con facturas en japonés.",
                with: "La aseguradora coordina directamente con el hospital. Rosa gestiona el papeleo desde aquí.",
              },
              {
                emoji: "✈️",
                scenario: "Repatriación médica",
                without: "Coste mínimo de 15.000€ que adelantas tú. Papeleo en otro idioma. Solo.",
                with: "Cubierto. Un teléfono 24h. Sebastián al tanto de todo mientras tú te recuperas.",
              },
              {
                emoji: "👨‍⚕️",
                scenario: "Especialista urgente fuera",
                without: "Buscas por Google, pagas sin saber si te devuelven. Facturas que no entiendes.",
                with: "Red de clínicas concertadas en más de 190 países. Cita gestionada en tu idioma.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-4 text-white">{item.scenario}</h3>
                <div className="space-y-3">
                  <div className="flex gap-2 items-start">
                    <span className="text-red-400 mt-0.5 flex-none">✗</span>
                    <p className="text-white/60 text-sm">{item.without}</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-blue-400 mt-0.5 flex-none">✓</span>
                    <p className="text-blue-100 text-sm font-medium">{item.with}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COBERTURAS TABLA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border">
            <Image
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Profesional viajando con cobertura médica internacional"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={75}
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 text-center lg:text-left">Lo que incluye tu cobertura internacional</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center lg:text-left">Sin letra pequeña. Te lo explicamos todo antes de firmar.</p>

            <div className="overflow-hidden rounded-2xl border bg-card/50 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 font-bold">Cobertura</th>
                    <th className="px-6 py-4 font-bold text-center">Incluido</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { s: "Asistencia médica en el extranjero",    d: "✅ Mundial", highlight: false },
                    { s: "Hospitalización fuera de España",        d: "✅ Mundial", highlight: false },
                    { s: "Urgencias 24h en cualquier país",        d: "✅ Mundial", highlight: false },
                    { s: "Repatriación sanitaria",                 d: "✅ Incluida", highlight: false },
                    { s: "Cobertura en España también",            d: "✅ Incluida", highlight: false },
                    { s: "Atención en tu idioma",                  d: "✅ Incluida", highlight: false },
                    { s: "Consultas telemédicas internacionales",  d: "✅ Incluida", highlight: false },
                    { s: "Enfermedades crónicas preexistentes",    d: "⚠️ Estudio previo", highlight: true },
                  ].map((row, i) => (
                    <tr key={i} className={cn(
                      "transition-colors",
                      row.highlight
                        ? "bg-amber-50/60 hover:bg-amber-50"
                        : "hover:bg-muted/50"
                    )}>
                      <td className="px-6 py-4 font-medium">{row.s}</td>
                      <td className={cn(
                        "px-6 py-4 text-center font-semibold",
                        row.highlight ? "text-amber-600" : "text-primary"
                      )}>{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Nota empresa */}
            <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4 flex gap-3 items-start">
              <span className="text-2xl leading-none mt-0.5">💼</span>
              <div>
                <p className="font-bold text-blue-800 text-sm">
                  ¿Eres directivo o tienes equipo que viaja?
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  Diseñamos pólizas colectivas para empresas con empleados viajeros. 
                  Mejor precio por volumen, gestión centralizada y un solo interlocutor.
                </p>
                <a
                  href={`https://wa.me/34603448765?text=${encodeURIComponent(
                    "Hola, soy directivo/empresario y necesito cobertura médica para viajes de empresa."
                  )}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 
                             underline underline-offset-2 hover:opacity-80 transition-opacity mt-2"
                >
                  Consultar póliza de empresa →
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. POR QUÉ ELEGIRNOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-800 text-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUpVariants} className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián Valentín"
                fill
                className="object-cover object-top"
              />
            </motion.div>
            <motion.div variants={fadeInUpVariants} className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Hablas con personas, no con un call center</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-4 leading-relaxed italic font-light">
                &ldquo;Rosa y Sebastián Valentín llevan más de 10 años ayudando a familias de Madrid a encontrar la protección que realmente necesitan. Cada consulta es personal. Cada recomendación es honesta.&rdquo;
              </p>
              <a
                href="https://rrpp.dgsfp.mineco.es/Mediador"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-blue-400 mb-6 hover:text-blue-300 transition-colors underline underline-offset-2"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
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
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">Nuestras garantías</h2>
            <p className="text-xl text-white/80">Promesas que cumplimos</p>
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
                className="text-center p-6 rounded-2xl bg-white/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  {garantia.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{garantia.title}</h3>
                <p className="text-white/70 text-sm">{garantia.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUpVariants}
            className="mt-12 mx-auto max-w-2xl rounded-2xl border border-white/20 
                       bg-white/5 px-8 py-6 text-center"
          >
            <p className="text-lg font-bold text-white mb-2">
              ¿Y si no cumplimos lo que prometemos?
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Si no te contactamos en 30 minutos tras tu consulta, 
              Rosa o Sebastián te ofrecen una{" "}
              <span className="text-white font-semibold">
                cita presencial gratuita en nuestra oficina
              </span>
              {" "}para explicarte todo en persona.
              Así de seguros estamos de lo que prometemos.
            </p>
            <p className="mt-4 text-sm text-white/40 italic">
              Nadie en el sector hace esta garantía. Nosotros sí.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* NUEVO: TESTIMONIOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-5xl mb-4">
              Lo que dicen quienes ya viajan con nosotros
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Carlos M.",
                role: "Consultor, viaja 3 meses al año",
                text: "Tuve un problema en Dubái. Llamé a Sebastián un domingo por la tarde y en 20 minutos tenía clínica y cita confirmada. No sé qué habría hecho sin ellos.",
                flag: "🇦🇪",
              },
              {
                name: "Lucía y Javier",
                role: "Familia, 6 meses en Alemania",
                text: "Nos fuimos a vivir a Múnich temporalmente con dos niños. Rosa nos montó una póliza que cubría a los cuatro, con pediatra incluido. Sin esperas, sin burocracia.",
                flag: "🇩🇪",
              },
              {
                name: "Ana B.",
                role: "Directiva, viajes frecuentes a LATAM",
                text: "Viajo a México y Colombia casi mensualmente. Tengo la tranquilidad de saber que si pasa algo, hay alguien que me conoce al otro lado del teléfono.",
                flag: "🇲🇽",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUpVariants}
                className={cn(
                  "rounded-2xl border bg-card p-5 sm:p-6 flex flex-col gap-4",
                  i === 2 && "hidden sm:flex"
                )}
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground italic flex-1">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2 border-t">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                    {t.flag}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. PROCESO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
                    title: "Escríbenos por WhatsApp o rellena el formulario",
                    desc: "Dos clics y tus datos llegan directamente a Rosa o Sebastián.",
                  },
                  {
                    num: "2",
                    title: "Rosa o Sebastián te llaman en menos de 30 minutos",
                    desc: "Te explican todo sin presión, respondiendo todas tus dudas.",
                  },
                  {
                    num: "3",
                    title: "Te explicamos todo. Sin firmar nada hasta que estés seguro.",
                    desc: "Solo cuando entiendas todo y estés convencido, procedemos.",
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

            {/* Columna derecha: imagen — oculta en móvil */}
            <div className="hidden lg:block relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Equipo profesional planificando viaje internacional con cobertura médica"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. CROSS-SELL */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 
                              text-blue-700 font-semibold text-xs uppercase tracking-widest mb-4">
                🔗 Protección 360°
              </div>
              <h3 className="text-2xl font-bold mb-3">
                ¿Y cuando vuelves a España?
              </h3>
              <p className="text-muted-foreground mb-4">
                Nuestros clientes de salud extranjera tienen también cobertura completa 
                en España. Un solo gestor, una sola llamada para todo. 
                Al combinarlo, las condiciones son mejores.
              </p>
              <a
                href="/seguros/salud-individual"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" }),
                  "border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
                )}
              >
                Ver seguro de salud en España →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🌍", label: "Extranjero", desc: "Cobertura activa en 190+ países" },
                { icon: "🏠", label: "España", desc: "Médico, especialistas y urgencias" },
                { icon: "👨‍👩‍👧", label: "Familia", desc: "Todos en una sola póliza" },
                { icon: "📞", label: "Gestor único", desc: "Rosa o Sebastián, siempre" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl bg-white border p-4 text-center shadow-sm">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <p className="font-bold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
                  src="/images/rosa_y_sebastian.jpeg"
                  alt="Rosa y Sebastián responden tus dudas"
                  fill
                  className="object-cover object-top"
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

      {/* 9.5. GARANTÍA DE PRECIO */}
      <section className="py-10 sm:py-14 bg-[var(--bg-soft)] border-y border-[var(--border)]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
              <BadgePercent className="h-6 w-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <p className="font-heading text-lg sm:text-xl font-bold text-[var(--blue-deep)]">
                El mismo seguro. Mejor precio. Garantizado.
              </p>
              <p className="text-sm sm:text-base text-[var(--muted)] mt-1">
                Tráenos el precio de tu banco o gestoría. En 10 años y más de 1.200 familias asesoradas, siempre hemos encontrado un precio mejor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA FINAL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        className="py-14 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-800 to-blue-900 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6">
            El mundo es tu consulta médica. Protégete donde estés.
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8">
            Rosa y Sebastián te preparan tu cobertura internacional en menos de 30 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34603448765"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 sm:h-16 px-10 text-lg sm:text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white gap-2"
              )}
            >
              <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              WhatsApp ahora
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
