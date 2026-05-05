import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { CasesAndForm, CoverageHighlights, ProductCTASection, ProductDecisionGrid, ProductFaqSection, ProductHero, RelatedProducts } from '@/components/product-sections';
import { ProductTabs } from '@/components/product-tabs';
import { getProduct, products, site } from '@/lib/products';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import { getPexelsImage } from '@/lib/pexels';
import { Shield } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { WhatsAppLink } from '@/components/whatsapp-link';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  
  const ogImage = await getPexelsImage(slug);
  
  const twitterTitle = slug === 'salud' 
    ? 'Seguro de Salud en Madrid · Desde 30€/mes | Valentín Protección Integral'
    : product.metaTitle;
  
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `${site.domain}/seguros/${product.slug}`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      images: [{ url: ogImage, alt: product.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: product.metaDescription,
      images: [{ url: ogImage, alt: product.heroAlt }],
    },
  };
}

export const dynamic = 'force-static';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: 'Inicio', url: '/' },
          { name: 'Seguros', url: '/seguros' },
          { name: product.name, url: `/seguros/${product.slug}` }
        ]} 
      />
      <FaqSchema faqs={product.faqs} />
      <Header />
      
      {/* Sticky Banner - Garantía de Precio */}
      <div className="sticky top-[68px] z-40 w-full bg-[#002244] text-white py-2 px-4 shadow-md">
        <div className="container mx-auto max-w-5xl flex items-center justify-center">
          <p className="text-sm font-semibold leading-tight text-center">
            ¿Tienes ya un presupuesto? Tráenoslo y lo mejoramos — o te decimos honestamente si ya es bueno.
          </p>
        </div>
      </div>
      
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros', href: '/seguros' }, { label: product.label }]} />
        </div>
        <ProductHero product={product} />

        {/* Garantía de precio destacada para viaje */}
        {slug === 'viaje' && (
          <div className="bg-[#002244] text-white py-3 px-4">
            <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <p className="text-sm font-semibold text-white/90">
                🛡️ <strong>Garantía de precio:</strong> Si encuentras el mismo seguro más barato, te lo igualamos. Sin letra pequeña.
              </p>
              <WhatsAppLink
                href="https://wa.me/34603448765?text=Quiero%20revisar%20mi%20presupuesto%20de%20seguro%20de%20viaje"
                className="flex-none text-sm font-bold text-emerald-400 underline underline-offset-4 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                Consúltanos →
              </WhatsAppLink>
            </div>
          </div>
        )}

        <ProductTabs slug={product.slug} />
        <CoverageHighlights product={product} />
        
        {/* Sección Comparativa de Salud — Tracción de Landings */}
        {slug === 'salud' && (
          <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-emerald-600 mb-4">Tu elección con criterio</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-950 mb-6 leading-tight">¿Qué póliza se adapta a tu situación?</h2>
                <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                  No todas las pólizas de salud son iguales. Hemos simplificado el mercado en tres tramos para que elijas la que realmente necesitas sin pagar de más.
                </p>
              </div>

              {/* Tabla Comparativa Premium */}
              <div className="relative">
                <div className="overflow-x-auto pb-8">
                  <table className="w-full border-collapse min-w-[800px]">
                    <thead>
                      <tr className="border-b-2 border-gray-900">
                        <th className="text-left py-6 pr-6 text-sm font-bold text-gray-400 uppercase tracking-widest w-1/4">Cobertura Principal</th>
                        <th className="text-center py-6 px-6 text-lg font-bold text-gray-900">
                          Modalidad Entrada<br />
                          <span className="text-emerald-600 text-sm font-semibold">Desde ~22€/mes</span>
                        </th>
                        <th className="text-center py-6 px-6 text-lg font-bold text-gray-950 bg-emerald-50 rounded-t-3xl border-x border-t border-emerald-100">
                          Modalidad Completa<br />
                          <span className="text-emerald-600 text-sm font-semibold">Desde ~50€/mes</span>
                          <div className="mt-2 text-[10px] uppercase tracking-tighter bg-emerald-500 text-white py-1 px-2 rounded-full inline-block">Más recomendada</div>
                        </th>
                        <th className="text-center py-6 px-6 text-lg font-bold text-gray-900">
                          Modalidad Premium<br />
                          <span className="text-gray-400 text-sm font-semibold">Desde ~90€/mes</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ["Médico general y especialistas", "✓", "✓", "✓"],
                        ["Sin copagos (pago fijo mensual)", "Consultar", "✓", "✓"],
                        ["Urgencias 24h y Ambulancia", "✓", "✓", "✓"],
                        ["Hospitalización y Cirugía", "—", "✓", "✓"],
                        ["Pruebas diagnósticas (eco, TAC, RM)", "Básicas", "✓", "✓"],
                        ["Telemedicina y Chat Médico 24h", "—", "✓", "✓"],
                        ["Habitación individual con cama acompañante", "—", "—", "✓"],
                        ["Asistencia en viaje internacional", "—", "✓", "✓"],
                        ["Dental básica (limpiezas/extracciones)", "—", "—", "✓"],
                        ["Reembolso de gastos fuera de red", "—", "—", "✓"],
                      ].map(([feature, entry, complete, premium], i) => (
                        <tr key={i} className="group hover:bg-gray-50 transition-colors">
                          <td className="py-5 pr-6 text-base font-medium text-gray-700">{feature}</td>
                          <td className="py-5 px-6 text-center text-gray-500">{entry}</td>
                          <td className="py-5 px-6 text-center text-base font-bold text-emerald-700 bg-emerald-50 border-x border-emerald-100">{complete}</td>
                          <td className="py-5 px-6 text-center text-gray-600">{premium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Disclaimer y Acción */}
                <div className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="max-w-xl text-center md:text-left">
                    <p className="text-gray-600 leading-relaxed italic">
                      "Los precios varían según la edad y el código postal en Madrid. Lo ideal es que Rosa o Sebastián te preparen una comparativa real de las 3 opciones en 30 minutos."
                    </p>
                  </div>
                  <WhatsAppLink
                    href="https://wa.me/34603448765?text=Hola%20Rosa%2C%20me%20gustar%C3%ADa%20ver%20la%20comparativa%20de%20los%203%20tramos%20de%20salud."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20 whitespace-nowrap"
                  >
                    <WhatsAppIcon className="w-5 h-5" /> Ver mi comparativa real
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Sección Perfiles de Negocio - Solo para negocio */}
        {slug === 'negocio' && (
          <section className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-soft)]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <p className="text-sm font-bold tracking-widest uppercase text-[var(--blue)] mb-3">Soluciones por tipo de negocio</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--blue-deep)] mb-4">Seguro adaptado a tu actividad</h2>
                <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto">
                  Cada negocio tiene riesgos específicos. Estas son las coberturas más relevantes según tu sector.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* COMERCIOS */}
                <div className="soft-card bg-white p-8 border-l-4 border-[var(--blue)]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">COMERCIOS</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Para tiendas, bazares, supermercados y cualquier comercio con local físico. 
                    Lo más relevante: protección del stock y mercancía, cobertura de robo con o sin violencia, 
                    RC de explotación y daños por agua o incendio.
                  </p>
                </div>
                {/* OFICINAS */}
                <div className="soft-card bg-white p-8 border-l-4 border-[var(--green)]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">OFICINAS</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Para despachos, agencias, consultoras y empresas de servicios. 
                    Lo más relevante: equipos electrónicos, RC profesional, defensa jurídica 
                    y cobertura de robo de material informático.
                  </p>
                </div>
                {/* AUTÓNOMOS */}
                <div className="soft-card bg-white p-8 border-l-4 border-[var(--orange)]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">AUTÓNOMOS</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Para profesionales independientes que trabajan desde casa o en local propio. 
                    Lo más relevante: RC profesional ante clientes, accidentes del titular 
                    y cobertura de equipos de trabajo.
                  </p>
                </div>
                {/* TALLERES */}
                <div className="soft-card bg-white p-8 border-l-4 border-[#4CAF50]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">TALLERES</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Para talleres mecánicos, imprentas, carpinterías y actividades con maquinaria. 
                    Lo más relevante: daños a bienes de terceros en tus instalaciones, 
                    RC de explotación y cobertura de maquinaria propia.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        
        <ProductDecisionGrid product={product} />
        <CasesAndForm product={product} defaultProduct={product.slug} />
        
        {/* Sección Garantía de Precio Justo */}
        <section className="py-14 sm:py-20 lg:py-24 bg-[#002244] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Nuestra Garantía de Precio Justo</h2>
            </div>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Si encuentras el mismo seguro más barato con otra agencia de seguros, te lo igualamos. Sin letra pequeña.
            </p>
            {slug === 'viaje' && (
              <p className="text-base text-emerald-300 font-medium mb-4 -mt-4">
                ¿Tienes fecha de viaje fijada? Cuéntanos destino y duración — en menos de 30 minutos tienes opciones reales encima de la mesa.
              </p>
            )}
            <WhatsAppLink
              href="https://wa.me/34603448765?text=Quiero%20comparar%20mi%20presupuesto"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
              )}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Compara ahora gratis
            </WhatsAppLink>
          </div>
        </section>
        
        <ProductFaqSection product={product} />
        <GoogleReviewsWidget title={`Opiniones sobre nuestro seguro de ${product.label}`} />
        
        {/* Sección Equipo - Solo para negocio */}
        {slug === 'negocio' && (
          <section className="py-14 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Imagen izquierda en desktop */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián Valentín, asesores de seguros para negocios y pymes en Madrid"
                    width={480}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-[center_20%] w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Texto derecha en desktop */}
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--blue-deep)] mb-4">Rosa y Sebastián, tus asesores de seguros para negocios en Madrid</h2>
                  <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
                    Con más de 10 años asesorando a comercios, pymes y autónomos en Madrid, 
                    te ayudamos a elegir el seguro que realmente protege tu actividad, 
                    sin coberturas innecesarias y sin letra pequeña.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <WhatsAppLink
                      href="https://wa.me/34603448765?text=Hola%2C%20quiero%20proteger%20mi%20NEGOCIO%20con%20un%20seguro%20a%20medida."
                      className={cn(
                        buttonVariants({ size: 'lg' }),
                        'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
                      )}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Hablar con Rosa Valentín
                    </WhatsAppLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Sección Equipo - Solo para salud */}
        {slug === 'salud' && (
          <section className="py-14 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Imagen izquierda en desktop */}
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián Valentín, asesores de seguros de salud en Madrid"
                    width={480}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-[center_20%] w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Texto derecha en desktop */}
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--blue-deep)] mb-4">Rosa y Sebastián, tus asesores de seguros de salud en Madrid</h2>
                  <p className="text-lg text-[var(--muted)] leading-relaxed mb-6">
                    Con más de 10 años comparando seguros de salud en Madrid y más de 
                    1.200 familias asesoradas, te ayudamos a elegir la modalidad que realmente 
                    encaja contigo: sin presión, sin letra pequeña y con seguimiento real 
                    antes y después de contratar.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <WhatsAppLink
                      href="https://wa.me/34603448765?text=Hola%2C%20quiero%20orientaci%C3%B3n%20sobre%20SALUD%20y%20entender%20qu%C3%A9%20modalidad%20me%20encaja%20mejor."
                      className={cn(
                        buttonVariants({ size: 'lg' }),
                        'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
                      )}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Hablar con Rosa Valentín
                    </WhatsAppLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sección Equipo - Solo para viaje */}
        {slug === 'viaje' && (
          <section className="py-14 sm:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián Valentín, asesores de seguros de viaje en Madrid"
                    width={480}
                    height={480}
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-[center_20%] w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[var(--blue-deep)] mb-4">
                    Rosa y Sebastián te ayudan a elegir el seguro de viaje que realmente necesitas
                  </h2>
                  <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">
                    Con más de 10 años comparando opciones para familias y viajeros frecuentes en Madrid, 
                    sabemos que el seguro que vende el banco rara vez es el más completo. 
                    Te explicamos qué hay detrás de cada modalidad antes de que contrates.
                  </p>
                  <p className="text-base font-semibold text-[var(--muted)] leading-relaxed mb-6">
                    ¿Viajas pronto? Cuéntanos destino y fechas — te preparamos opciones en menos de 30 minutos.
                  </p>
                  <WhatsAppLink
                    href="https://wa.me/34603448765?text=Hola%2C%20quiero%20orientaci%C3%B3n%20sobre%20un%20seguro%20de%20viaje."
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
                    )}
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Hablar con Rosa Valentín
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>
        )}
        
        <ProductCTASection product={product} title={`¿Quieres que te ayudemos con ${product.label}?`} text={`Te ayudamos a entender, comparar y elegir mejor, con una orientación humana y útil antes de contratar.`} message={product.whatsappMessage} />
        <RelatedProducts product={product} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
