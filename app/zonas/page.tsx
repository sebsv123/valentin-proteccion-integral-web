import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { zonas } from '@/lib/zonas';
import { site } from '@/lib/products';
import Image from 'next/image';
import { MapPin, ArrowRight, Shield, Phone, BadgeCheck, Heart, HeartPulse, Smile, PawPrint, Activity, Plane, Flower2, Globe2, Building2, Stethoscope, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

export const metadata: Metadata = {
  title: 'Asesores de Seguros por Zonas en Madrid · VPI',
  description: 'Asesores de seguros independientes en Boadilla del Monte, Las Rozas, Majadahonda, Pozuelo de Alarcón y Madrid. +10 años, consulta gratuita.',
  alternates: { canonical: `${site.domain}/zonas` },
};

export const dynamic = 'force-static';

export default function ZonasPage() {
  // Boadilla del Monte como featured, o la primera zona si no existe
  const featuredIndex = zonas.findIndex(z => z.slug === 'boadilla-del-monte');
  const featuredZona = featuredIndex >= 0 ? zonas[featuredIndex] : zonas[0];
  const remainingZonas = zonas.filter(z => z.slug !== featuredZona.slug);

  return (
    <>
      <Header />
      <main>
        {/* Header Section - Editorial */}
        <section className="pt-20 pb-12 bg-white">
          <div className="container-shell">
            <p className="text-[var(--blue)] font-bold tracking-widest text-xs uppercase mb-3">
              Cobertura Local
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--blue-deep)] leading-tight mb-4">
              Asesores de Seguros en el Noroeste de Madrid
            </h1>
            <div className="w-20 h-1 bg-[var(--blue)] mb-6 rounded-full" />
            <p className="text-[var(--muted)] max-w-2xl text-lg leading-relaxed">
              Atendemos de forma presencial desde Boadilla del Monte y por videollamada en toda la Comunidad de Madrid. Consulta gratuita y sin compromiso.
            </p>
          </div>
        </section>

        {/* Featured Card - Hero Zone con imagen real */}
        <section className="pb-8 bg-white">
          <div className="container-shell">
            <Link
              href={`/zonas/${featuredZona.slug}`}
              className="group block relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl"
            >
              {featuredZona.heroImage && (
                <Image
                  src={featuredZona.heroImage}
                  alt={featuredZona.heroImageAlt || featuredZona.nombre}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${featuredZona.heroAccent || '#003366'}E6 0%, rgba(0,34,68,0.85) 60%, rgba(0,0,0,0.7) 100%)`,
                }}
              />
              <div className="relative p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[460px] flex flex-col justify-end">
                <span className="inline-flex items-center gap-1.5 w-fit px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30 backdrop-blur">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Sede Principal
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 leading-tight">
                  Seguros en {featuredZona.nombre}
                </h2>
                <p className="text-white/85 text-base sm:text-lg max-w-2xl mb-6 line-clamp-3">
                  {featuredZona.intro.slice(0, 180)}{featuredZona.intro.length > 180 ? '…' : ''}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white text-[var(--blue-deep)] px-6 py-3 text-sm font-bold group-hover:gap-3 transition-all">
                    Ver seguros en {featuredZona.nombreCorto}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                  {featuredZona.landmarks && featuredZona.landmarks.slice(0, 2).map((lm) => (
                    <span
                      key={lm.name}
                      className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur border border-white/20 px-3 py-1.5 text-xs font-semibold text-white"
                    >
                      <span aria-hidden>{lm.icon}</span> {lm.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Por qué importa un asesor local — editorial layout */}
        <section className="py-16 bg-gradient-to-b from-white via-[#F8FAFC] to-white relative overflow-hidden">
          {/* Decorative blueprint dots */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--blue-deep) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="container-shell relative">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
              {/* Left column: narrative */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--blue-deep)]/5 border border-[var(--blue-deep)]/10 px-3 py-1 text-xs font-bold tracking-widest uppercase text-[var(--blue-deep)] mb-4">
                  <BadgeCheck className="w-3.5 h-3.5" /> Conocimiento de zona
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--blue-deep)] leading-tight mb-6">
                  Por qué importa un asesor con <span className="text-[var(--blue)]">conocimiento local</span>
                </h2>
                <p className="text-lg text-[var(--muted)] leading-relaxed mb-5">
                  <span className="float-left text-5xl font-extrabold text-[var(--blue)] leading-none mr-2 mt-1 font-heading">N</span>
                  o es lo mismo asesorar a una familia con hipoteca en <strong className="text-[var(--blue-deep)]">Boadilla del Monte</strong> que a un autónomo de <strong className="text-[var(--blue-deep)]">Las Rozas</strong> que factura desde el polo digital, ni a un senior de <strong className="text-[var(--blue-deep)]">Pozuelo</strong> que busca reembolso premium. Cada zona del noroeste de Madrid tiene un perfil demográfico, un hospital de referencia y unas necesidades de protección distintas. Si ese contexto no se entiende, la cobertura se queda corta o se sobredimensiona — pagas por lo que no necesitas o falta lo que de verdad importa.
                </p>
                <p className="text-lg text-[var(--muted)] leading-relaxed mb-8">
                  Llevamos <strong className="text-[var(--blue-deep)]">más de 10 años</strong> trabajando exclusivamente en esta zona. Conocemos los hospitales, los perfiles típicos de cada municipio y las particularidades del seguro de hogar en urbanizaciones residenciales. Esa cercanía no es un eslogan — es lo que permite que la recomendación encaje con tu situación real.
                </p>

                {/* Hospitals chips card */}
                <div className="rounded-2xl border border-[var(--blue-deep)]/10 bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.04)]">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-[var(--blue)]/10 text-[var(--blue)]">
                      <Stethoscope className="w-5 h-5" />
                    </span>
                    <p className="font-heading font-bold text-[var(--blue-deep)]">Hospitales de referencia que conocemos</p>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {[
                      { name: 'Puerta de Hierro', loc: 'Majadahonda' },
                      { name: 'HM Montepríncipe', loc: 'a 5 min de Boadilla' },
                      { name: 'Gregorio Marañón', loc: 'Madrid centro' },
                      { name: '12 de Octubre', loc: 'Madrid sur' },
                    ].map(h => (
                      <li key={h.name} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex w-7 h-7 shrink-0 items-center justify-center rounded-md bg-[var(--blue-deep)]/5 text-[var(--blue-deep)]">
                          <Building2 className="w-4 h-4" />
                        </span>
                        <div className="leading-tight">
                          <p className="font-semibold text-[var(--blue-deep)] text-sm">{h.name}</p>
                          <p className="text-xs text-[var(--muted)]">{h.loc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column: "Lo que cubrimos en cada zona" cards */}
              <div className="lg:sticky lg:top-24">
                <div className="flex items-end justify-between mb-5">
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[var(--blue-deep)] leading-tight">
                    Lo que cubrimos<br/>en cada zona
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[var(--blue)]">
                    <Shield className="w-3.5 h-3.5" /> 8 ramos
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {[
                    { Icon: HeartPulse, t: 'Salud privada', d: 'Con y sin copagos · familiar y senior', c: '#E11D48', href: '/seguros/salud' },
                    { Icon: Heart, t: 'Vida', d: 'Riesgo y vida hipoteca · capital decreciente', c: '#0EA5E9', href: '/seguros/vida' },
                    { Icon: Smile, t: 'Dental', d: 'Particulares, familias y empresas', c: '#06B6D4', href: '/seguros/dental' },
                    { Icon: PawPrint, t: 'Mascotas', d: 'Con RC obligatoria desde 2023', c: '#10B981', href: '/seguros/mascotas' },
                    { Icon: Activity, t: 'Accidentes', d: 'Autónomos y profesionales liberales · 24/7', c: '#F59E0B', href: '/seguros/accidentes' },
                    { Icon: Plane, t: 'Viaje', d: 'Multiviaje anual · estudios en el extranjero', c: '#6366F1', href: '/seguros/viaje' },
                    { Icon: Flower2, t: 'Decesos', d: 'Familiares · traslados nacionales e internacionales', c: '#8B5CF6', href: '/seguros/decesos' },
                    { Icon: Globe2, t: 'Extranjeros', d: 'NIE/TIE · certificado en 24 h', c: '#EC4899', href: '/seguros/salud-extranjeros' },
                  ].map(({ Icon, t, d, c, href }) => (
                    <li key={t}>
                      <Link
                        href={href}
                        className="group block rounded-xl border border-gray-200 bg-white p-4 hover:border-[var(--blue)] hover:shadow-md transition-all"
                      >
                        <span
                          className="inline-flex w-9 h-9 items-center justify-center rounded-lg mb-3"
                          style={{ backgroundColor: `${c}15`, color: c }}
                        >
                          <Icon className="w-5 h-5" />
                        </span>
                        <p className="font-heading font-bold text-[var(--blue-deep)] text-sm leading-tight mb-1 flex items-center gap-1">
                          {t}
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </p>
                        <p className="text-xs text-[var(--muted)] leading-snug">{d}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-xl bg-[var(--blue-deep)] text-white p-4 flex items-center gap-3">
                  <Users className="w-5 h-5 shrink-0 text-[var(--gold,#F4C24C)]" />
                  <p className="text-sm leading-snug">
                    <strong>+1.200 familias</strong> ya confían en nosotros en el noroeste de Madrid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-12 bg-white">
          <div className="container-shell max-w-3xl">
            <h2 className="font-heading text-2xl font-bold text-[var(--blue-deep)] mb-6">
              Preguntas frecuentes sobre cobertura por zona
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: '¿Atendéis presencialmente en todas las zonas?',
                  a: 'Nuestra sede está en Boadilla del Monte y allí atendemos presencialmente con cita previa. En Las Rozas, Majadahonda, Pozuelo y Madrid capital atendemos por videollamada, teléfono o WhatsApp. La calidad del asesoramiento es exactamente la misma — y para muchos clientes resulta más cómodo no tener que desplazarse.'
                },
                {
                  q: '¿Hay diferencia de precio según la zona donde viva?',
                  a: 'En la mayoría de seguros (salud, vida, mascotas, dental, accidentes y viaje) el precio no depende del código postal sino de tu edad, situación familiar y la modalidad elegida. En seguros de hogar y de auto sí influye la zona, ya que las aseguradoras valoran riesgo de robo, siniestralidad y tipo de inmueble. Para los productos vinculados a salud y vida, vivir en Boadilla, Las Rozas, Majadahonda o Madrid centro no cambia tu prima.'
                },
                {
                  q: '¿Trabajáis fuera de Madrid?',
                  a: 'Atendemos a clientes de toda España por videollamada o WhatsApp, especialmente en seguros de salud para extranjeros (NIE, TIE, visado), vida y mascotas. Nuestro foco geográfico es el noroeste de Madrid por la atención presencial, pero el asesoramiento independiente no tiene fronteras.'
                }
              ].map(faq => (
                <details key={faq.q} className="rounded-2xl border border-gray-200 bg-white p-5 group">
                  <summary className="cursor-pointer font-semibold text-[var(--blue-deep)] flex items-center justify-between">
                    {faq.q}
                    <span className="text-[var(--blue)] group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="mt-3 text-[var(--muted)] leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Schema FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                { '@type': 'Question', name: '¿Atendéis presencialmente en todas las zonas?', acceptedAnswer: { '@type': 'Answer', text: 'Nuestra sede está en Boadilla del Monte. En Las Rozas, Majadahonda, Pozuelo y Madrid capital atendemos por videollamada, teléfono o WhatsApp.' } },
                { '@type': 'Question', name: '¿Hay diferencia de precio según la zona?', acceptedAnswer: { '@type': 'Answer', text: 'En salud, vida, mascotas, dental, accidentes y viaje el precio no depende del código postal. En hogar y auto sí influye la zona.' } },
                { '@type': 'Question', name: '¿Trabajáis fuera de Madrid?', acceptedAnswer: { '@type': 'Answer', text: 'Atendemos a clientes de toda España por videollamada o WhatsApp, especialmente en salud para extranjeros, vida y mascotas.' } }
              ]
            })
          }}
        />

        {/* Grid + Sidebar Layout */}
        <section className="pb-20 bg-white">
          <div className="container-shell">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
              {/* Main Column - Grid of remaining zones */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-[var(--blue-deep)] mb-6">
                  Otras zonas de cobertura
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {remainingZonas.map(z => (
                    <Link
                      key={z.slug}
                      href={`/zonas/${z.slug}`}
                      className="group block rounded-3xl bg-white overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        {z.heroImage && (
                          <Image
                            src={z.heroImage}
                            alt={z.heroImageAlt || z.nombre}
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        )}
                        <div
                          className="absolute inset-0 opacity-50"
                          style={{ background: `linear-gradient(180deg, transparent 50%, ${z.heroAccent || '#003366'}AA 100%)` }}
                        />
                        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 shadow-sm">
                          <MapPin className="h-3 w-3" style={{ color: z.heroAccent || 'var(--blue)' }} />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--blue-deep)]">{z.provincia}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading text-xl font-bold text-[var(--blue-deep)] mb-2 group-hover:text-[var(--blue)] transition-colors">
                          {z.nombre}
                        </h3>
                        <p className="text-sm text-[var(--muted)] leading-6 mb-4 line-clamp-2">
                          {z.heroSubtitle}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--blue)] group-hover:gap-2 transition-all">
                          Ver seguros en {z.nombreCorto}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Block 1 - CTA WhatsApp */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">
                    ¿No sabes qué zona cubre tu seguro?
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Cuéntanos tu caso. En menos de 30 minutos te orientamos sin compromiso.
                  </p>
                  <a
                    href="https://wa.me/34603448765"
                    className={cn(
                      buttonVariants({ size: "default" }),
                      "w-full bg-emerald-500 hover:bg-emerald-600 text-white gap-2"
                    )}
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Consultar por WhatsApp
                  </a>
                </div>

                {/* Block 2 - Zone List */}
                <div className="p-6 rounded-2xl border border-gray-100 bg-white">
                  <h3 className="font-heading text-lg font-bold text-[var(--blue-deep)] mb-4">
                    Zonas disponibles
                  </h3>
                  <ul className="space-y-3">
                    {zonas.map(z => (
                      <li key={z.slug}>
                        <Link
                          href={`/zonas/${z.slug}`}
                          className="group flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--blue)] transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-[var(--blue)]" />
                          <span className="group-hover:underline underline-offset-2">
                            {z.nombre}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Block 3 - Guarantee Badge */}
                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">
                        Garantía de precio
                      </h4>
                      <p className="text-sm text-blue-700 leading-relaxed">
                        Tráenos cualquier presupuesto. Siempre encontramos algo mejor o te lo decimos.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
