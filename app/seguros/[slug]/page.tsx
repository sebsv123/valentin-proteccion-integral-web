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

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  
  // Usar imagen local OG para negocio, Pexels para otros
  const ogImage = slug === 'negocio' 
    ? `${site.domain}/og-image-negocio.webp`
    : await getPexelsImage(slug);
  
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
                🛡️ <strong>Garantía de precio:</strong> Si tu banco o comparador te da el mismo seguro más barato, te lo igualamos. Sin letra pequeña.
              </p>
              <a
                href="https://wa.me/34603448765?text=Quiero%20comparar%20mi%20presupuesto%20de%20seguro%20de%20viaje"
                className="flex-none text-sm font-bold text-emerald-400 underline underline-offset-4 hover:text-emerald-300 transition-colors whitespace-nowrap"
              >
                Compara ahora →
              </a>
            </div>
          </div>
        )}

        <ProductTabs slug={product.slug} />
        <CoverageHighlights product={product} />
        
        {/* Sección Perfiles de Salud - Solo para salud */}
        {slug === 'salud' && (
          <section className="py-14 sm:py-20 lg:py-24 bg-[var(--bg-soft)]">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-12">
                <p className="text-sm font-bold tracking-widest uppercase text-[var(--blue)] mb-3">Encuentra tu modalidad</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--blue-deep)] mb-4">Seguro de salud adaptado a tu perfil</h2>
                <p className="text-lg text-[var(--muted)] max-w-3xl mx-auto">
                  Cada persona y familia tiene necesidades diferentes. Estas son las modalidades más demandadas en Madrid.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* COMPLETA */}
                <div className="soft-card bg-white p-8 border-l-4 border-[var(--blue)]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">COMPLETA</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    La modalidad más habitual para quien quiere acceso a medicina general, especialidades, urgencias, 
                    pruebas y hospitalización en un solo seguro. Incluye ingreso y cirugía en las opciones más completas. 
                    Recomendada para uso frecuente o familias que quieren cubrirlo todo con una sola póliza.
                  </p>
                </div>
                {/* FAMILIAS */}
                <div className="soft-card bg-white p-8 border-l-4 border-[var(--green)]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">FAMILIAS</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Un seguro que cubre a toda la unidad familiar con una sola contratación. Permite incluir a hijos, 
                    pareja y dependientes. Especialmente valorado por familias que quieren acceso privado rápido 
                    para pediatría, urgencias y especialidades sin esperas.
                  </p>
                </div>
                {/* AUTÓNOMOS */}
                <div className="soft-card bg-white p-8 border-l-4 border-[var(--orange)]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">AUTÓNOMOS</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Los autónomos pueden deducirse hasta 500€/año por el seguro médico propio y hasta 500€ adicionales 
                    por cada miembro de la unidad familiar incluido. Una ventaja fiscal que convierte el seguro de salud 
                    en una decisión también económica, no solo sanitaria.
                  </p>
                </div>
                {/* SENIOR */}
                <div className="soft-card bg-white p-8 border-l-4 border-[#4CAF50]">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">SENIOR</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Para mayores de 55 años que priorizan tranquilidad, acompañamiento médico personalizado y cobertura 
                    sin copagos. Incluye asistencia en viaje ampliada. Una opción diseñada para la plenitud, 
                    con acceso a especialistas sin barreras.
                  </p>
                </div>
                {/* REEMBOLSO */}
                <div className="soft-card bg-white p-8 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">REEMBOLSO</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Libertad de elegir cualquier especialista en el mundo y recuperar entre el 80% y el 90% de la factura. 
                    Ideal para quienes ya tienen médico de confianza, viajan con frecuencia o necesitan cobertura 
                    fuera de España de forma habitual.
                  </p>
                </div>
                {/* CON COPAGO */}
                <div className="soft-card bg-white p-8 border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">CON COPAGO</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Modalidad con un pequeño pago por cada consulta o prueba, que permite reducir significativamente 
                    la prima mensual. Recomendada para personas sanas con uso puntual del seguro que buscan precio 
                    ajustado sin renunciar a la red privada.
                  </p>
                </div>
                {/* SIN COPAGO */}
                <div className="soft-card bg-white p-8 border-l-4 border-emerald-500 md:col-span-2 lg:col-span-1">
                  <h3 className="text-xl font-bold text-[var(--blue-deep)] mb-3">SIN COPAGO</h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    Sin coste adicional en cada consulta. Pagas tu prima mensual y accedes a toda la red sin 
                    desembolso por visita. La opción preferida por familias con hijos o personas con uso frecuente 
                    del seguro que valoran la previsibilidad del gasto.
                  </p>
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
              Si encuentras el mismo seguro más barato con otra correduría independiente, te lo igualamos. Sin letra pequeña.
            </p>
            {slug === 'viaje' && (
              <p className="text-base text-emerald-300 font-medium mb-4 -mt-4">
                ¿Tienes fecha de viaje fijada? Cuéntanos destino y duración — en menos de 30 minutos tienes opciones reales encima de la mesa.
              </p>
            )}
            <a
              href="https://wa.me/34603448765?text=Quiero%20comparar%20mi%20presupuesto"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
              )}
            >
              <WhatsAppIcon className="h-5 w-5" />
              Compara ahora gratis
            </a>
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
                    <a
                      href="https://wa.me/34603448765?text=Hola%2C%20quiero%20proteger%20mi%20NEGOCIO%20con%20un%20seguro%20a%20medida."
                      className={cn(
                        buttonVariants({ size: 'lg' }),
                        'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
                      )}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Hablar con Rosa Valentín
                    </a>
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
                    <a
                      href="https://wa.me/34603448765?text=Hola%2C%20quiero%20orientaci%C3%B3n%20sobre%20SALUD%20y%20entender%20qu%C3%A9%20modalidad%20me%20encaja%20mejor."
                      className={cn(
                        buttonVariants({ size: 'lg' }),
                        'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
                      )}
                    >
                      <WhatsAppIcon className="h-5 w-5" />
                      Hablar con Rosa Valentín
                    </a>
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
                  <a
                    href="https://wa.me/34603448765?text=Hola%2C%20quiero%20orientaci%C3%B3n%20sobre%20un%20seguro%20de%20viaje."
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
                    )}
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Hablar con Rosa Valentín
                  </a>
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
