import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase, ClipboardList, HeartHandshake, Instagram, MapPin, Phone, Quote, ShieldCheck, Star, Users } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { buildWhatsAppHref, site } from '@/lib/products';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import HowItWorksSection from '@/components/HowItWorksSection';
import CredentialsBar from '@/components/CredentialsBar';
import RevealLight from '@/components/ui/reveal-light';

export const metadata: Metadata = {
  title: "Sobre Nosotros · Rosa y Sebastián Valentín | Asesoría de Seguros en Madrid",
  description: "Conoce al equipo de Valentín Protección Integral: Rosa y Sebastián, dos asesores con más de 10 años protegiendo familias en Madrid con honestidad, criterio y trato cercano.",
  keywords: "rosa valentin asesora seguros, sebastian valentin asesor seguros, equipo mediadores seguros madrid, asesoria seguros boadilla del monte",
  openGraph: {
    title: "Sobre Nosotros · Rosa y Sebastián Valentín | Asesoría de Seguros en Madrid",
    description: "Conoce al equipo de Valentín Protección Integral: Rosa y Sebastián, dos asesores con más de 10 años protegiendo familias en Madrid con honestidad, criterio y trato cercano.",
    url: "https://valentinproteccionintegral.com/sobre-nosotros",
    siteName: "Valentín Protección Integral",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://valentinproteccionintegral.com/sobre-nosotros",
  },
};

export const dynamic = 'force-static';

export default function SobreNosotrosPage() {

  return (
    <>
      <SchemaBreadcrumb
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Sobre nosotros', item: `${site.domain}/sobre-nosotros`, position: 2 },
        ]}
      />
      <Header />
      <main>
        {/* Hero split section */}
         <RevealLight>
          <section id="sobre-nosotros-hero" aria-labelledby="sobre-nosotros-title" className="section-pad pt-6 md:pt-10">
            <div className="container-shell">
              <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Sobre nosotros' }]} />
              <div className="mt-6 grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
                {/* Photo section */}
                <div className="space-y-6">
                  <div className="soft-card overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] duration-500">
                    <div className="relative aspect-[4/5] w-full">
                      <Image src="/images/agent/rosa-despacho.jpg" alt="Rosa Valentín, asesora personal de seguros en Madrid" fill className="object-cover object-top" priority />
                    </div>
                  </div>
  
                  {/* Name & Title - Now separate from image card */}
                  <div className="soft-card bg-white p-6 text-center shadow-md">
                    <p className="font-heading text-3xl font-bold text-[var(--blue-deep)]">Rosa Valentín</p>
                    <p className="mt-1 text-base font-semibold text-[var(--blue)]">Socia y asesora experta en VPI</p>
                    <div className="mt-3 flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                      <MapPin className="h-4 w-4" />
                      Boadilla del Monte, Madrid
                    </div>
                  </div>
  
                  {/* Values grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: HeartHandshake, text: 'Enfoque personalizado' },
                      { icon: ShieldCheck, text: 'Sin presión comercial' },
                      { icon: ClipboardList, text: 'Comparativa real' },
                      { icon: MessageCircle, text: 'Escucha activa' },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.text} className="flex flex-col items-center gap-2 rounded-[24px] bg-white px-4 py-5 text-center text-sm font-bold text-[var(--blue-deep)] shadow-sm border border-[var(--border)] transition-all hover:border-[var(--blue)]/20 hover:shadow-md">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--blue)]/5 text-[var(--blue)]">
                            <Icon className="h-5 w-5" />
                          </div>
                          {item.text}
                        </div>
                      );
                    })}
                  </div>
                </div>

              {/* Content */}
              <div className="soft-card p-8 md:p-10 lg:p-12">
                <p className="kicker font-bold tracking-[0.3em]">Dos personas. Un mismo compromiso.</p>
                <h1 id="sobre-nosotros-title" className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-gradient md:text-5xl xl:text-6xl leading-[1.08]">
                  Rosa y Sebastián: El equipo que protege lo que más te importa
                </h1>
                <p className="mt-6 text-lg leading-9 text-[var(--muted)]">
                  Valentín Protección Integral nace con una idea sencilla: ayudar a familias y particulares a entender mejor lo que están contratando. No se trata de empujar un producto, sino de comparar con criterio y acompañar cada decisión con más contexto.
                </p>

                {/* BLOQUE ROSA */}
                <p className="kicker font-bold text-[var(--blue)] mt-8">Rosa Valentín</p>
                <p className="text-sm text-[var(--muted)] mb-4">Socia fundadora · Mediadora certificada</p>
                <p className="text-base leading-8 text-[var(--muted)]">
                  Mi nombre es Rosa Valentín. Soy asesora certificada con <strong>más de 10 años de experiencia</strong> en seguros de salud, vida, mascotas, viaje, dental, accidentes, hospitalización y decesos. Trabajo desde <strong>Boadilla del Monte, Madrid</strong>, atendiendo a familias y particulares de toda España.
                </p>
                <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                  No trabajo con presión comercial. Cada conversación empieza con tus preguntas, no con mis productos. Y cada orientación busca darte más claridad, no más confusión.
                </p>

                {/* Stats */}
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {[
                    { icon: Award, stat: '+10 años', desc: 'Asesorando familias con cercanía' },
                    { icon: Briefcase, stat: 'Certificada', desc: 'Formación continua y actualizada' },
                    { icon: Users, stat: '8 ramos', desc: 'Salud, vida, mascotas, viaje y más' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.stat} className="rounded-[22px] bg-[var(--bg)] px-5 py-5 text-center border border-[var(--border)]">
                        <Icon className="h-6 w-6 mx-auto text-[var(--blue)] mb-2" />
                        <p className="font-heading text-2xl font-bold text-[var(--blue-deep)]">{item.stat}</p>
                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Quote */}
                <div className="mt-8 rounded-[24px] border border-[var(--blue)]/15 bg-gradient-to-r from-[rgba(15,94,156,0.04)] to-transparent px-6 py-6">
                  <Quote className="h-6 w-6 text-[var(--blue)]/30 mb-2" />
                  <em className="text-base leading-8 text-[var(--muted)]">&ldquo;La prioridad es ayudarte a separar lo importante de lo accesorio, revisar qué cambia según modalidad y orientarte para que contrates con más tranquilidad y menos dudas.&rdquo;</em>
                </div>

                {/* BLOQUE SEBASTIÁN */}
                <div className="mt-10 pt-8 border-t border-[var(--border)]">
                  <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] items-start">

                    {/* Foto Sebastián */}
                    <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden
                                    shadow-xl border border-[var(--border)]">
                      <Image
                        src="/images/agent/sebastian-enhanced.png"
                        alt="Sebastián Valentín, asesor especializado en vida y salud en Valentín Protección Integral"
                        fill
                        className="object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    {/* Texto Sebastián */}
                    <div>
                      <p className="kicker font-bold text-[var(--blue)]">Sebastián Valentín</p>
                      <p className="text-sm text-[var(--muted)] mb-4">Socio · Especialista en Vida y Salud</p>
                      <h3 className="font-heading text-2xl font-bold text-[var(--blue-deep)] mb-4">
                        El rigor técnico al servicio de tu tranquilidad
                      </h3>
                      <p className="text-base leading-8 text-[var(--muted)]">
                        Sebastián aporta al equipo una visión más técnica y analítica del mundo asegurador.
                        Especializado en seguros de salud, vida y accidentes, su trabajo es asegurarse de
                        que cada propuesta que llega al cliente es la más adecuada — no la más cómoda.
                      </p>
                      <p className="mt-4 text-base leading-8 text-[var(--muted)]">
                        Cree que la confianza se construye siendo directo: explicando exactamente qué cubre
                        una póliza, qué no cubre y por qué. Sin atajos. Sin letra pequeña escondida.
                      </p>

                      {/* Mini-stats Sebastián */}
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {[
                          { icon: ShieldCheck, text: 'Especialista Salud y Vida' },
                          { icon: ClipboardList, text: 'Análisis técnico detallado' },
                        ].map((item) => {
                          const Icon = item.icon;
                          return (
                            <div key={item.text}
                                 className="flex items-center gap-3 rounded-[18px] bg-[var(--bg)]
                                            px-4 py-3 text-sm font-semibold text-[var(--blue-deep)]
                                            border border-[var(--border)]">
                              <Icon className="h-5 w-5 text-[var(--blue)] flex-none" />
                              {item.text}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <p className="mt-8 text-sm font-semibold text-[var(--muted)]">
                  ¿Quieres hablar directamente con nosotros?
                </p>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <a href={buildWhatsAppHref('Hola Rosa, quiero hablar contigo sobre un seguro.')} className="btn-whatsapp"><WhatsAppIcon className="h-4 w-4" /> Hablar por WhatsApp</a>
                  <Link href="/contacto" className="btn-secondary"><Phone className="h-4 w-4" /> Contactar</Link>
                  <a href={site.instagram} target="_blank" rel="noreferrer" className="btn-ghost"><Instagram className="h-4 w-4" /> Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealLight>

        <HowItWorksSection />

        {/* Rosa lifestyle photo block */}
         <RevealLight>
          <section id="galeria" aria-label="Galería de Rosa Valentín" className="section-pad pt-0">
            <div className="container-shell">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl border border-[var(--border)]">
                  <Image src="/images/agent/rosa-oficina-2.jpg" alt="Rosa Valentín en su oficina de Boadilla del Monte" fill className="object-cover object-top" />
                </div>
                <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden shadow-xl border border-[var(--border)]">
                  <Image src="/images/agent/rosa-exterior-2.jpg" alt="Rosa Valentín, cercanía y profesionalidad" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </section>
        </RevealLight>

        <GoogleReviewsWidget title="Lo que dicen quienes ya han confiado en nosotros" />

        <CredentialsBar />

        {/* Final CTA */}
        <section id="cta-sobre-nosotros" aria-labelledby="cta-sobre-nosotros-title" className="section-pad pt-0">
          <div className="container-shell">
            <div className="soft-card bg-[linear-gradient(135deg,rgba(18,59,104,0.96),rgba(15,94,156,0.9))] p-8 text-white md:p-10 text-center">
              <p className="kicker !text-white/70">¿Quieres que hablemos?</p>
              <h2 id="cta-sobre-nosotros-title" className="mt-3 font-heading text-4xl font-bold tracking-tight md:text-5xl">Una consulta sin compromiso puede ser el mejor primer paso</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg leading-9 text-white/80">
                Cuéntame tu situación y te ayudo a entender qué opciones tienen sentido para ti. Sin presión, sin compromiso, con toda la claridad.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row justify-center">
                <a href={buildWhatsAppHref('Hola Rosa, quiero una consulta para entender qué seguro me conviene.')} className="btn-whatsapp !bg-white !text-[var(--blue-deep)]"><WhatsAppIcon className="h-4 w-4" /> Hablar por WhatsApp</a>
                <Link href="/contacto" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-[var(--blue-deep)]">Contactar</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
