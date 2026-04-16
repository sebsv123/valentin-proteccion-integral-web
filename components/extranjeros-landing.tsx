"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import DotGrid from "@/components/ui/dot-grid";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import {
  Plane,
  Globe,
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
  MessageCircle,
} from "lucide-react";

const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
    comentario: "",
  });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y necesito información sobre el seguro de salud para el extranjero.\n\n📞 Teléfono: ${form.telefono}\n✈️ Situación: ${form.situacion}${form.comentario ? `\n💬 ${form.comentario}` : ""}\n\nGracias.`
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
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <p className="text-sm md:text-base flex-1 truncate">
            ✈️ ¿Viajas al extranjero por trabajo o vives fuera? Cobertura médica completa desde el primer día.
          </p>
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
          gap={28}
          baseColor="#bfdbfe"
          activeColor="#1d4ed8"
          proximity={120}
          shockStrength={3}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Columna izquierda - Texto */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <AnimatedShinyText className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
                  ✈️ Cobertura en más de 190 países
                </AnimatedShinyText>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              >
                Atención médica privada donde estés.{" "}
                <span className="underline decoration-blue-500">Sin fronteras</span>. Sin sorpresas.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground mb-8"
              >
                Tanto si vives fuera, viajas por trabajo o pasas temporadas en el extranjero, 
                Rosa y Sebastián te gestionan la cobertura completa en una sola llamada.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col gap-4 mb-8">
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

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/34603448765?text=${encodeURIComponent(
                    "Hola, me gustaría información sobre el seguro de salud para el extranjero."
                  )}`}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-14 px-8 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white gap-2"
                  )}
                >
                  <WhatsAppLogo className="h-5 w-5" />
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
              variants={fadeInUp}
              id="contacto"
              className="relative"
            >
              <div className="bg-card border rounded-3xl p-8 shadow-2xl">
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
                    <div>
                      <label className="block text-sm font-medium mb-1">Comentario (opcional)</label>
                      <textarea
                        value={form.comentario}
                        onChange={(e) => setForm({ ...form, comentario: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border bg-background h-24 resize-none"
                        placeholder="¿Algo más que deberíamos saber?"
                      />
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
        className="py-24 bg-blue-50/50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">¿Para quién es este seguro?</h2>
          </motion.div>

          <MagicContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Plane className="h-8 w-8" />,
                title: "Profesionales que viajan",
                desc: "Directivos, consultores o comerciales con viajes frecuentes a Europa, América o Asia. Cobertura activa desde que subes al avión.",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: <Globe className="h-8 w-8" />,
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
            ].map((item, i) => (
              <MagicCard
                key={i}
                className="flex flex-col gap-4 items-center text-center p-6"
              >
                <div className={cn("p-3 rounded-xl", item.color)}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </MagicCard>
            ))}
          </MagicContainer>
        </div>
      </motion.section>

      {/* 4. COBERTURAS TABLA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24"
      >
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border">
            <Image
              src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Profesional viajando con cobertura médica internacional"
              fill
              className="object-cover"
              unoptimized
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
        className="py-24 bg-slate-900 text-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUp} className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián Valentín"
                fill
                className="object-cover object-top"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="text-center">
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
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Agentes de seguros colegiados en Madrid — Verificar →
              </a>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {[
                  { icon: <MessageCircle className="h-6 w-6" />, text: "Respondemos en menos de 30 minutos" },
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
        className="py-24 bg-slate-900 text-white"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
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
                variants={fadeInUp}
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

          <motion.p variants={fadeInUp} className="text-center mt-12 text-white/70">
            ¿Qué pasa si no cumplimos? Te ayudamos a resolver cualquier problema personalmente. Sin burocracia.
          </motion.p>
        </div>
      </motion.section>

      {/* 7. PROCESO */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-blue-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-16">
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
                    variants={fadeInUp}
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
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Equipo profesional planificando viaje internacional con cobertura médica"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* 8. CROSS-SELL */}
      <section className="py-10 bg-blue-50 border-y border-blue-200">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-sm tracking-widest uppercase border border-blue-200 mb-4">
            🔗 Combínalo con tu seguro de salud en España
          </div>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Muchos clientes tienen ya su seguro de salud para España 
            con nosotros y añaden la cobertura internacional. 
            Al combinarlos, obtienes condiciones especiales y 
            una gestión centralizada en una sola llamada.
          </p>
          <a
            href="/seguros/salud-individual"
            className="mt-4 inline-flex items-center gap-2 text-blue-700 font-semibold hover:opacity-80 transition-opacity underline"
          >
            Ver seguro de salud individual →
          </a>
        </div>
      </section>

      {/* 9. FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-24 bg-accent/30"
      >
        <div className="container max-w-5xl px-4">
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">

            <div className="lg:sticky lg:top-24 text-center">
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
                  variants={fadeInUp}
                  className="rounded-2xl border bg-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-colors"
                  >
                    <span className="text-lg font-semibold pr-4">{faq.q}</span>
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

      {/* 10. CTA FINAL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-24 bg-gradient-to-br from-blue-800 to-blue-900 text-white"
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            El mundo es tu consulta médica. Protégete donde estés.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Rosa y Sebastián te preparan tu cobertura internacional en menos de 30 minutos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/34603448765"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-16 px-10 text-xl font-bold bg-blue-500 hover:bg-blue-600 text-white gap-2"
              )}
            >
              <WhatsAppLogo className="h-6 w-6" />
              WhatsApp ahora
            </a>
            <a
              href="tel:603448765"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-16 px-10 text-xl font-bold border-2 border-white text-white hover:bg-white hover:text-blue-900"
              )}
            >
              <Phone className="mr-2 h-6 w-6" />
              603 448 765
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
