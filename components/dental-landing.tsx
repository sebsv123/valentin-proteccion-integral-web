"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Clock, 
  ShieldCheck, 
  Users, 
  FileText, 
  Award, 
  Phone,
  Stethoscope,
  ChevronDown,
  BadgeCheck
} from "lucide-react";

import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { motion } from "framer-motion";

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
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export function DentalLanding() {
  const [form, setForm] = useState({ nombre: "", telefono: "", personas: "Solo yo" });
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
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y me gustaría información sobre el seguro dental.\n\n📞 Teléfono: ${form.telefono}\n👥 Para: ${form.personas}\n\nGracias.`
    );
    window.open(`https://wa.me/34603448765?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <>
      {/* 🦷 BARRA STICKY */}
      <div className="sticky top-0 z-50 bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-3">
          <p className="text-sm font-medium leading-snug flex-1 min-w-0">
            <span className="sm:hidden">
              🦷 Sin carencias desde el día 1.
            </span>
            <span className="hidden sm:inline">
              🦷 Sin carencias en revisiones y limpiezas desde el primer día. Si no es así, te lo decimos antes de firmar.
            </span>
          </p>
          <a
            href="#contacto"
            className="flex-none text-sm font-bold underline underline-offset-4 hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Pedir presupuesto →
          </a>
        </div>
      </div>

      {/* 🚀 HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20 pt-32 bg-background">
        <DotGrid
          className="z-0"
          dotSize={4}
          gap={isTouchDevice ? 32 : 28}
          baseColor="#bbf7d0"
          activeColor="#16a34a"
          proximity={isTouchDevice ? 0 : 80}
          shockStrength={isTouchDevice ? 0 : 2}
        />
        <div className="absolute inset-x-0 top-0 h-64 lg:hidden pointer-events-none z-[3] bg-gradient-to-b from-green-900/15 via-green-800/8 to-transparent" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

            {/* Columna izquierda: Texto */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
            >
              <motion.div variants={fadeInUpVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">
                <AnimatedShinyText className="inline-flex items-center">
                  <span>⭐ Más de 200 familias madrileñas confían en nosotros</span>
                </AnimatedShinyText>
              </motion.div>

              <motion.h1 variants={fadeInUpVariants} className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight">
                Tu sonrisa protegida desde <br className="hidden sm:block" />
                <span className="text-primary underline decoration-primary/30 decoration-8 underline-offset-8">el primer día.</span> Sin esperas.
              </motion.h1>

              <motion.p variants={fadeInUpVariants} className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Seguro dental en Madrid sin períodos de carencia en ningún tratamiento.
                Rosa y Sebastián te responden en menos de 30 minutos, de forma personal.
              </motion.p>

              <motion.div variants={fadeInUpVariants} className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href="https://wa.me/34603448765"
                  className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-14 px-8 text-lg font-semibold bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/25")}
                >
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  WhatsApp ahora
                </a>
                <a
                  href="tel:603448765"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 px-8 text-lg font-semibold border-2")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  603 448 765
                </a>
              </motion.div>

            </motion.div>

            {/* Columna derecha: Formulario */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              id="contacto"
              className="relative"
            >
              <div className="bg-background border rounded-[2rem] p-5 sm:p-8 md:p-10 shadow-2xl shadow-primary/5">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold tracking-tight mb-2">Recibe tu presupuesto en 30 min</h2>
                  <p className="text-muted-foreground">Sin compromiso. Sin letra pequeña.</p>
                </div>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-70">Nombre completo</label>
                    <input
                      type="text"
                      placeholder="Tu nombre completo"
                      value={form.nombre}
                      onChange={e => setForm(p => ({ ...p, nombre: e.target.value }))}
                      className="w-full h-14 px-6 rounded-xl border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-70">Teléfono</label>
                    <input
                      type="tel"
                      placeholder="Ej: 600 000 000"
                      value={form.telefono}
                      onChange={e => setForm(p => ({ ...p, telefono: e.target.value }))}
                      className="w-full h-14 px-6 rounded-xl border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-70">¿Para cuántas personas?</label>
                    <div className="relative">
                      <select
                        value={form.personas}
                        onChange={e => setForm(p => ({ ...p, personas: e.target.value }))}
                        className="w-full h-14 px-6 pr-12 rounded-xl border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all appearance-none"
                      >
                        <option>Solo yo</option>
                        <option>Pareja</option>
                        <option>Familia con hijos</option>
                        <option>Más de 4 personas</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  {sent ? (
                    <div className="w-full py-5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                      <p className="text-emerald-700 font-bold text-lg">✅ ¡Perfecto! WhatsApp abierto.</p>
                      <p className="text-emerald-600 text-sm mt-1">Rosa o Sebastián te responden en menos de 30 minutos.</p>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className={cn(buttonVariants({ size: "lg" }), "w-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform gap-2")}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Enviar por WhatsApp
                    </button>
                  )}
                  <p className="text-center text-sm text-muted-foreground opacity-70">
                    Al enviar, te abrimos WhatsApp con tus datos para que te llamemos en menos de 30 min.
                  </p>
                  <p className="text-center text-xs font-semibold text-emerald-600 flex items-center justify-center gap-1.5">
                    <span>🎁</span>
                    <span>Al contratar dental, obtienes descuentos especiales si añades salud en el futuro</span>
                  </p>
                  <p className="text-center text-xs text-muted-foreground/60">
                    🔒 Consulta sin compromiso. Si decides no contratar, no te llamamos más.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 👨‍💼 SECCIÓN ASESORES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-14 sm:py-20 lg:py-24 bg-slate-900 text-white overflow-hidden"
      >
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            {/* Foto limpia — sin marco oval */}
            <motion.div
              variants={fadeInUpVariants}
              className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20"
            >
              <Image
                src="/images/rosa_y_sebastian_conversando.png"
                alt="Rosa y Sebastián Valentín, asesores de seguros dentales en Madrid"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
              />
            </motion.div>
            {/* Texto */}
            <motion.div variants={fadeInUpVariants} className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Hablas con personas, no con un call center</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-6 leading-relaxed italic font-light">
                &ldquo;Rosa y Sebastián Valentín llevan más de 10 años ayudando a familias de Madrid a encontrar la protección que realmente necesitan.
                Cada consulta es personal. Cada recomendación es honesta. Nunca te recomendaremos algo que no te convenga a ti.&rdquo;
              </p>
              <a 
                href="https://www.colegiomediadores.es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-400 mb-8 hover:text-emerald-300 transition-colors underline underline-offset-2"
              >
                <BadgeCheck className="h-5 w-5" />
                <span>Agentes de seguros colegiados en Madrid — Verificar en Colegio Oficial de Mediadores →</span>
              </a>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://wa.me/34603448765"
                  className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "h-16 px-10 text-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white border-0")}
                >
                  <WhatsAppIcon className="mr-3 h-6 w-6" />
                  Escríbenos por WhatsApp
                </a>
                <div className="text-2xl font-bold">
                  📞 O llámenos: <a href="tel:603448765" className="underline hover:opacity-80 transition-opacity">603 448 765</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 🦷 SECCIÓN BENEFICIOS */}
      <section className="py-14 sm:py-20 lg:py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">¿Por qué elegirnos?</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck className="h-8 w-8" />,
                title: "Sin carencias en lo esencial",
                desc: "Revisiones y limpiezas desde el primer día, sin esperar meses.",
                color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Respuesta en 30 minutos",
                desc: "Te llama Rosa o Sebastián personalmente. No un call center.",
                color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30",
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Precio justo, sin letra pequeña",
                desc: "Te decimos exactamente lo que pagas antes de contratar. Sin costes ocultos. Sin sorpresas al primer recibo.",
                color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Toda la familia en una póliza",
                desc: "Cuantos más miembros, mejor precio por persona. Y si amplías a salud completa, tendrás descuentos especiales por ser ya cliente nuestro.",
                color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30",
              },
              {
                icon: <Stethoscope className="h-8 w-8" />,
                title: "Tu dentista, cuando lo necesitas",
                desc: "Acceso a nuestra red de clínicas dentales en Madrid desde el primer día. Sin colas. Sin listas de espera.",
                color: "bg-slate-100 text-slate-600 dark:bg-slate-900/30",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Más de 10 años de experiencia",
                desc: "Conocemos el sector por dentro para darte siempre la mejor opción.",
                color: "bg-red-100 text-red-600 dark:bg-red-900/30",
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
                  <MagicCard className="flex flex-col gap-4 items-center text-center">
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
      </section>

      {/*  SECCIÓN COBERTURAS */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border bg-muted">
            <Image 
              src="/images/sebastian_con_cliente.png" 
              alt="Sebastián Valentín explicando coberturas de seguro dental a un cliente en Madrid" 
              fill 
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 text-center">Lo que tienes disponible desde el primer día</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">Sin sorpresas. Sin letras pequeñas. Así de claro.</p>
            
            <div className="overflow-hidden rounded-2xl border bg-card/50 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 font-bold">Servicio</th>
                    <th className="px-6 py-4 font-bold text-center">Disponibilidad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { s: "Revisión y diagnóstico",    d: "✅ Desde el día 1" },
                    { s: "Limpieza dental (2/año)",   d: "✅ Desde el día 1" },
                    { s: "Radiografías",              d: "✅ Desde el día 1" },
                    { s: "Empastes y obturaciones",   d: "✅ Desde el día 1" },
                    { s: "Endodoncias",               d: "✅ Desde el día 1" },
                    { s: "Ortodoncia",                d: "✅ Desde el día 1" },
                    { s: "Implantes dentales",        d: "✅ Desde el día 1" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{row.s}</td>
                      <td className="px-6 py-4 text-center font-semibold text-primary">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-muted-foreground italic">
              Cobertura completa desde el primer día.
              Te explicamos todos los detalles antes de contratar.
            </p>
          </div>
        </div>
      </section>

      {/* ⚡ SECCIÓN PROCESO */}
      <section className="py-14 sm:py-20 lg:py-24 bg-accent/30 border-y">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-12 text-center">Contrata tu seguro en 3 minutos. <br/>En serio.</h2>
              <div className="space-y-12 relative">
                {/* Connector Line */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border hidden md:block" />
                
                <div className="flex gap-8 relative">
                  <div className="flex-none w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Paso 1 — 📝 Rellenas el formulario</h3>
                    <p className="text-muted-foreground text-lg">Solo tu nombre, teléfono y cuántas personas necesitan cobertura.</p>
                  </div>
                </div>

                <div className="flex gap-8 relative">
                  <div className="flex-none w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Paso 2 — 📞 Te llamamos en 30 minutos</h3>
                    <p className="text-muted-foreground text-lg">Rosa o Sebastián te explican la mejor opción para ti, sin presión.</p>
                  </div>
                </div>

                <div className="flex gap-8 relative">
                  <div className="flex-none w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Paso 3 — ✅ Empiezas protegido</h3>
                    <p className="text-muted-foreground text-lg">Confirmación inmediata. Tu seguro activo en 24-48 horas.</p>
                    <p className="text-sm text-emerald-600 mt-2 font-medium">💬 Recibirás un mensaje personalizado de Rosa o Sebastián — no un email automático</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="p-5 rounded-2xl border-2 border-primary/30 bg-primary/5 flex items-start gap-4">
                  <span className="text-2xl flex-none">⏱️</span>
                  <p className="text-base font-semibold text-foreground leading-relaxed">
                    Si no respondemos en 30 minutos, te lo explicamos y te compensamos con
                    una revisión de toda tu póliza actual — gratis.
                  </p>
                </div>
                <div className="p-5 rounded-2xl border-2 border-emerald-200 bg-emerald-50 flex items-start gap-4">
                  <span className="text-2xl flex-none">🎁</span>
                  <p className="text-base font-semibold text-emerald-800 leading-relaxed">
                    Cuando contratas con nosotros recibes un mensaje personal de bienvenida
                    de Rosa o Sebastián — no un email automático. Siempre una persona real.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl bg-muted">
              <Image 
                src="https://images.pexels.com/photos/5355915/pexels-photo-5355915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Asesora de seguros dentales" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🎁 SECCIÓN OFERTA CRUZADA */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center bg-accent/20 rounded-[3rem] p-8 md:p-16 border shadow-inner">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg bg-muted">
              <Image 
                src="https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Familia feliz con salud completa" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
              />
            </div>
            <div className="text-center">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm tracking-widest uppercase border border-emerald-200">
                🎁 Clientes dentales: descuentos especiales al ampliar tu cobertura
              </div>
              <h2 className="text-3xl font-bold sm:text-5xl mb-6">Los que empiezan con dental, <br/>acaban con más tranquilidad</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                La mayoría de nuestros clientes comienzan con un seguro dental y, en poco tiempo, amplían a salud completa para toda la familia. 
                Cuando lo hagas, tendrás condiciones especiales por ser ya cliente nuestro. Con la misma gestión personal de Rosa y Sebastián.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💡 BANNER UPGRADE: dental + salud */}
      <section className="py-10 bg-emerald-50 border-y border-emerald-200">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <p className="text-lg md:text-xl font-bold text-emerald-800">
            💡 ¿Ya tienes seguro de salud? Añade dental desde{" "}
            <span className="underline decoration-2">9€/mes más por persona</span>. Te lo gestionamos en una sola llamada, sin papeleo.
          </p>
          <a
            href={`https://wa.me/34603448765?text=${encodeURIComponent("Hola, ya tengo seguro de salud y quiero añadir dental desde 9€/mes.")}`}
            className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:opacity-80 transition-opacity underline"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escríbenos ahora →
          </a>
        </div>
      </section>

      {/* 🛡️ SECCIÓN GARANTÍA */}
      <section className="py-14 sm:py-20 lg:py-24 bg-card border-y">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">

            {/* Foto izquierda */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border">
              <Image
                src="/images/rosa_y_sebastian_mesa.png"
                alt="Rosa y Sebastián Valentín revisando pólizas con un cliente"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 480px"
                quality={75}
                className="object-cover object-center"
              />
            </div>

            {/* Texto derecha */}
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Nuestra garantía de transparencia
              </h2>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Si tras hablar con nosotros sientes que no hemos sido 100% claros,
                te buscamos una alternativa mejor. Aunque no sea con nosotros.
              </p>
              <p className="text-lg italic font-medium opacity-70 border-t pt-6">
                &ldquo;En más de 10 años nunca hemos tenido que hacerlo. Pero si llega el día,
                lo haremos. Porque la honestidad no es solo una palabra.&rdquo;
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ❓ SECCIÓN FAQ */}
      <section className="py-14 sm:py-20 lg:py-24">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold sm:text-6xl mb-10 text-center lg:hidden">Preguntas frecuentes</h2>
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">
            <div className="hidden lg:block lg:sticky lg:top-24">
              <h2 className="text-3xl font-bold sm:text-6xl mb-6 text-center">Preguntas frecuentes</h2>
              <div className="relative aspect-square rounded-3xl overflow-hidden border bg-muted">
                <Image 
                  src="https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Cuidado dental profesional" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                />
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "¿Hay períodos de carencia?",
                  a: "No. Toda la cobertura está disponible desde el primer día: revisiones, limpiezas, empastes, endodoncias e incluso implantes. Si en tu caso concreto existiera alguna excepción, te lo decimos antes de firmar. Sin letra pequeña, siempre."
                },
                {
                  q: "¿Puedo incluir a toda mi familia?",
                  a: "Sí. Gestionamos una póliza familiar donde cada miembro tiene su cobertura. Cuantos más miembros, mejor precio por persona."
                },
                {
                  q: "¿Qué pasa si ya tengo un seguro dental?",
                  a: "Lo revisamos gratis. Si el tuyo te conviene, te lo decimos. Si podemos mejorar tus condiciones, también te lo decimos."
                },
                {
                  q: "¿Cuánto tarda en activarse?",
                  a: "Una vez firmada la documentación, tu seguro se activa en 24-48 horas laborables."
                },
                {
                  q: "¿Puedo cancelar cuando quiera?",
                  a: "Sí, con el preaviso indicado en tu póliza (habitualmente 30 días). Sin penalizaciones ocultas de ningún tipo."
                },
                {
                  q: "¿Hay ventajas si luego quiero ampliar mi cobertura?",
                  a: "Sí. Los clientes que empiezan con dental tienen descuentos especiales garantizados al añadir salud completa. Con la misma gestión personal de Rosa y Sebastián, en una sola llamada."
                }
              ].map((faq, i) => (
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
                    animate={{ 
                      height: openFaq === i ? "auto" : 0, 
                      opacity: openFaq === i ? 1 : 0 
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
