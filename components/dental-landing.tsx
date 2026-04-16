"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  Clock, 
  ShieldCheck, 
  Users, 
  FileText, 
  Award, 
  MessageCircle, 
  Phone,
  ArrowRight,
  Heart,
  Stethoscope,
  Smile,
  Zap,
  HelpCircle,
  ChevronDown,
  BadgeCheck
} from "lucide-react";

// Componente Logo WhatsApp oficial
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import RetroGrid from "@/components/magicui/retro-grid";
import { MagicCard, MagicContainer } from "@/components/magicui/magic-card";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import Globe from "@/components/magicui/globe";

export function DentalLanding() {
  const [form, setForm] = useState({ nombre: "", telefono: "", personas: "Solo yo", comentario: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hola Rosa y Sebastián 👋\n\nMe llamo *${form.nombre}* y me gustaría información sobre el seguro dental.\n\n📞 Teléfono: ${form.telefono}\n👥 Para: ${form.personas}${form.comentario ? `\n💬 ${form.comentario}` : ""}\n\nGracias.`
    );
    window.open(`https://wa.me/34603448765?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-background">
      {/* 🚀 HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center border-b overflow-hidden py-20">
        <RetroGrid className="z-0 opacity-40 absolute inset-0" />
        {/* Globe — fondo mitad izquierda, solo desktop */}
        <div className="absolute inset-y-0 left-0 w-[55%] hidden lg:block pointer-events-none z-[5]">
          <Globe className="inset-0" />
          <div className="absolute bottom-0 inset-x-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-2/5 bg-gradient-to-l from-background to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">

            {/* Columna izquierda: Texto */}
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="group rounded-full border border-black/5 bg-neutral-100 text-base transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>⭐ Más de 200 familias madrileñas confían en nosotros</span>
                </AnimatedShinyText>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Tu sonrisa protegida desde <br />
                <span className="text-primary underline decoration-primary/30 decoration-8 underline-offset-8">el primer día.</span> Sin esperas.
              </h1>

              <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed max-w-xl">
                Seguro dental en Madrid sin períodos de carencia para revisiones y limpiezas.
                Rosa y Sebastián te responden en menos de 30 minutos, de forma personal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href="https://wa.me/34603448765"
                  className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-14 px-8 text-lg font-semibold bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg shadow-emerald-500/25")}
                >
                  <WhatsAppLogo className="mr-2 h-5 w-5" />
                  WhatsApp ahora
                </a>
                <a
                  href="tel:603448765"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-14 px-8 text-lg font-semibold border-2")}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  603 448 765
                </a>
              </div>

            </div>

            {/* Columna derecha: Formulario */}
            <div className="w-full animate-fade-in-up" id="contacto" style={{ animationDelay: "0.2s" }}>
              <div className="bg-background border rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-primary/5">
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
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-70">Comentario (opcional)</label>
                    <textarea
                      placeholder="Cuéntanos brevemente qué buscas..."
                      value={form.comentario}
                      onChange={e => setForm(p => ({ ...p, comentario: e.target.value }))}
                      className="w-full h-28 p-6 rounded-xl border bg-muted/30 focus:bg-background focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                    />
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
                      <WhatsAppLogo className="h-5 w-5" />
                      Enviar por WhatsApp
                    </button>
                  )}
                  <p className="text-center text-sm text-muted-foreground opacity-70">
                    Al enviar, te abrimos WhatsApp con tus datos para que te llamemos en menos de 30 min.
                  </p>
                  <p className="text-center text-xs text-muted-foreground/60">
                    🔒 Consulta sin compromiso. Si decides no contratar, no te llamamos más.
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Globe — visible solo en móvil, debajo del formulario */}
          <div className="lg:hidden relative w-full max-w-[360px] aspect-square mx-auto mt-12">
            <Globe className="top-0" />
          </div>
        </div>
      </section>

      {/* 🦷 SECCIÓN BENEFICIOS */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">¿Por qué elegirnos?</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <MagicContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MagicCard className="flex flex-col gap-4 items-center text-center">
              <div className="p-3 rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Sin carencias en lo esencial</h3>
              <p className="text-muted-foreground">Revisiones y limpiezas desde el primer día, sin esperar meses.</p>
            </MagicCard>

            <MagicCard className="flex flex-col gap-4 items-center text-center">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Respuesta en 30 minutos</h3>
              <p className="text-muted-foreground">Te llama Rosa o Sebastián personalmente. No un call center.</p>
            </MagicCard>

            <MagicCard className="flex flex-col gap-4 items-center text-center">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-900/30">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Desde 8€/mes por persona</h3>
              <p className="text-muted-foreground">Protección dental real que no notarás en tu bolsillo.</p>
            </MagicCard>

            <MagicCard className="flex flex-col gap-4 items-center text-center">
              <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Toda la familia en una póliza</h3>
              <p className="text-muted-foreground">Cuantos más miembros, mejor precio por persona.</p>
            </MagicCard>

            <MagicCard className="flex flex-col gap-4 items-center text-center">
              <div className="p-3 rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-900/30">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Sin letra pequeña</h3>
              <p className="text-muted-foreground">Te explicamos exactamente qué cubre y qué no. Antes de firmar nada.</p>
            </MagicCard>

            <MagicCard className="flex flex-col gap-4 items-center text-center">
              <div className="p-3 rounded-xl bg-red-100 text-red-600 dark:bg-red-900/30">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Más de 10 años de experiencia</h3>
              <p className="text-muted-foreground">Conocemos el sector por dentro para darte siempre la mejor opción.</p>
            </MagicCard>
          </MagicContainer>
        </div>
      </section>

      {/* 📊 SECCIÓN COBERTURAS */}
      <section className="py-24">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border">
            <Image 
              src="/images/dental/clinica-dental.jpg" 
              alt="Clínica dental en Madrid" 
              fill 
              className="object-cover"
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
                    { s: "Revisión y diagnóstico", d: "✅ Desde el día 1" },
                    { s: "Limpieza dental (2/año)", d: "✅ Desde el día 1" },
                    { s: "Radiografías", d: "✅ Desde el día 1" },
                    { s: "Empastes y obturaciones", d: "⏱ 1 a 3 meses" },
                    { s: "Endodoncias", d: "⏱ 3 a 6 meses" },
                    { s: "Ortodoncia", d: "⏱ A partir de 6 meses" },
                    { s: "Implantes dentales", d: "⏱ A partir de 12 meses" },
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
              Los períodos de espera exactos dependen del plan elegido. Te lo explicamos todo antes de contratar.
            </p>
          </div>
        </div>
      </section>

      {/* ⚡ SECCIÓN PROCESO */}
      <section className="py-24 bg-accent/30 border-y">
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

              <div className="mt-16 p-6 rounded-2xl bg-primary text-primary-foreground flex items-center gap-4 shadow-xl">
                <Zap className="h-10 w-10 text-yellow-400 fill-yellow-400" />
                <p className="text-lg font-bold">
                  GARANTÍA DE VELOCIDAD: Si no te llamamos en 30 minutos, te devolvemos la prima íntegra del primer mes. Sin excepciones. Lo prometemos.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border shadow-2xl">
              <Image 
                src="/images/dental/asesora-seguros.jpg" 
                alt="Asesora de seguros dentales" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 👨‍💼 SECCIÓN ASESORES */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            {/* Foto limpia — sin marco oval */}
            <div className="relative w-full max-w-sm mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
              <Image
                src="/images/rosa_y_sebastian.jpeg"
                alt="Rosa y Sebastián Valentín"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Texto */}
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-8">Hablas con personas, no con un call center</h2>
              <p className="text-xl md:text-2xl opacity-90 mb-6 leading-relaxed italic font-light">
                &ldquo;Rosa y Sebastián Valentín llevan más de 10 años ayudando a familias de Madrid a encontrar la protección que realmente necesitan.
                Cada consulta es personal. Cada recomendación es honesta. Nunca te recomendaremos algo que no te convenga a ti.&rdquo;
              </p>
              <a 
                href="https://www.coam.es/colegiados/buscador" 
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
                  <WhatsAppLogo className="mr-3 h-6 w-6" />
                  Escríbenos por WhatsApp
                </a>
                <div className="text-2xl font-bold">
                  📞 O llámenos: <a href="tel:603448765" className="underline hover:opacity-80 transition-opacity">603 448 765</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎁 SECCIÓN OFERTA CRUZADA */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 items-center bg-accent/20 rounded-[3rem] p-8 md:p-16 border shadow-inner">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
              <Image 
                src="/images/dental/familia-salud.jpg" 
                alt="Familia feliz con salud completa" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <div className="mb-6 inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm tracking-widest uppercase border border-emerald-200">
                🎁 Clientes dentales: –5% en Salud al ampliar tu cobertura
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
            <span className="underline decoration-2">8€/mes más por persona</span>. Te lo gestionamos en una sola llamada, sin papeleo.
          </p>
          <a
            href={`https://wa.me/34603448765?text=${encodeURIComponent("Hola, ya tengo seguro de salud y quiero añadir dental desde 8€/mes.")}`}
            className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:opacity-80 transition-opacity underline"
          >
            <WhatsAppLogo className="h-5 w-5" />
            Escríbenos ahora →
          </a>
        </div>
      </section>

      {/* 🛡️ SECCIÓN GARANTÍA */}
      <section className="py-24 bg-card border-y">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShieldCheck className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl mb-8">Nuestra garantía de transparencia</h2>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            Si tras hablar con nosotros sientes que no hemos sido 100% claros, o que algo no era como esperabas, te devolvemos la prima del primer mes. Sin preguntas.
          </p>
          <p className="text-lg italic font-medium opacity-70 border-t pt-6 max-w-2xl mx-auto">
            &ldquo;En más de 10 años nunca hemos tenido que aplicarla. Pero existe, porque la honestidad no es solo una palabra.&rdquo;
          </p>
        </div>
      </section>

      {/* ❓ SECCIÓN FAQ */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-3xl font-bold sm:text-6xl mb-6 text-center">Preguntas frecuentes</h2>
              <div className="relative aspect-square rounded-3xl overflow-hidden border">
                <Image src="/images/dental/cuidado-dental.jpg" alt="Cuidado dental profesional" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "¿Hay períodos de carencia?",
                  a: "Para revisiones y limpiezas, no. Para tratamientos más complejos como endodoncias o implantes, existe un período que te explicamos antes de contratar. Sin letra pequeña, siempre."
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
                }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-accent/20 border hover:bg-accent/40 transition-colors">
                  <h3 className="text-xl font-bold mb-4 flex gap-3 items-start">
                    <HelpCircle className="h-6 w-6 text-primary flex-none mt-1" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed pl-9">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
