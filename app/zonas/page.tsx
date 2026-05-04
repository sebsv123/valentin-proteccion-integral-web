import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { zonas } from '@/lib/zonas';
import { site } from '@/lib/products';
import { MapPin, ArrowRight, Shield, Phone, BadgeCheck } from 'lucide-react';
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

        {/* Featured Card - Hero Zone */}
        <section className="pb-8 bg-white">
          <div className="container-shell">
            <Link
              href={`/zonas/${featuredZona.slug}`}
              className="group block relative overflow-hidden rounded-3xl bg-slate-900"
            >
              {/* Background with gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-800/60" />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-deep)]/20 to-transparent" />

              {/* Content */}
              <div className="relative p-8 sm:p-12 lg:p-16 min-h-[320px] sm:min-h-[380px] flex flex-col justify-end">
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 w-fit px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Sede Principal
                </span>

                {/* Title */}
                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                  {featuredZona.nombre}
                </h2>

                {/* Excerpt */}
                <p className="text-white/80 text-base sm:text-lg max-w-2xl mb-6 line-clamp-3">
                  {featuredZona.intro.slice(0, 160)}{featuredZona.intro.length > 160 ? '…' : ''}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                  Ver seguros en {featuredZona.nombreCorto}
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Intro contenido SEO */}
        <section className="pb-12 bg-white">
          <div className="container-shell">
            <div className="prose prose-lg max-w-3xl text-[var(--muted)]">
              <h2 className="font-heading text-2xl font-bold text-[var(--blue-deep)] mb-4">
                Por qué importa un asesor de seguros con conocimiento local
              </h2>
              <p className="leading-relaxed mb-4">
                No es lo mismo asesorar a una familia con hipoteca en Boadilla del Monte que a un autónomo de Las Rozas que factura desde el polo digital, ni a un senior de Pozuelo que busca reembolso premium. Cada zona del noroeste de Madrid tiene un perfil demográfico, un hospital de referencia y unas necesidades de protección distintas. Y si ese contexto no se entiende, la cobertura se queda corta o se sobredimensiona — pagas por lo que no necesitas o falta lo que de verdad importa.
              </p>
              <p className="leading-relaxed mb-4">
                Llevamos más de 10 años trabajando exclusivamente en esta zona. Conocemos los hospitales (Puerta de Hierro en Majadahonda, HM Montepríncipe a 5 minutos de Boadilla, Gregorio Marañón y 12 de Octubre en Madrid centro), los perfiles típicos de cada municipio y las particularidades del seguro de hogar en urbanizaciones residenciales. Esa cercanía no es un eslogan — es lo que permite que la recomendación encaje con tu situación real.
              </p>
              <h2 className="font-heading text-2xl font-bold text-[var(--blue-deep)] mt-10 mb-4">
                Lo que cubrimos en cada zona
              </h2>
              <ul className="grid gap-2 sm:grid-cols-2 list-disc pl-5">
                <li>Salud privada con y sin copagos, modalidades familiares y senior</li>
                <li>Vida riesgo y vida hipoteca con capital decreciente</li>
                <li>Dental para particulares, familias y empresas</li>
                <li>Mascotas con responsabilidad civil obligatoria desde 2023</li>
                <li>Accidentes 24/7 para autónomos y profesionales liberales</li>
                <li>Viaje multiviaje anual, escapadas y estudios en el extranjero</li>
                <li>Decesos familiares con traslados nacionales e internacionales</li>
                <li>Salud para extranjeros con NIE/TIE y certificado en 24 h</li>
              </ul>
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
                      className="group block p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-[var(--blue)] transition-all h-full"
                    >
                      {/* Kicker */}
                      <p className="text-[var(--blue)] font-bold tracking-widest text-[10px] uppercase mb-3">
                        {z.provincia.toUpperCase()}
                      </p>

                      {/* Title */}
                      <h3 className="font-heading text-xl font-bold text-[var(--blue-deep)] mb-3 group-hover:text-[var(--blue)] transition-colors">
                        {z.nombre}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-sm text-[var(--muted)] leading-6 mb-4 line-clamp-3">
                        {z.intro.slice(0, 100)}{z.intro.length > 100 ? '…' : ''}
                      </p>

                      {/* Footer */}
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--blue)] group-hover:gap-2 transition-all">
                        Ver cobertura
                        <ArrowRight className="h-4 w-4" />
                      </span>
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
