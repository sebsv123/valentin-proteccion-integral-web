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
        <ProductTabs slug={product.slug} />
        <CoverageHighlights product={product} />
        
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
        <CasesAndForm product={product} />
        
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
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/rosa_y_sebastian.jpeg"
                    alt="Rosa y Sebastián Valentín, asesores de seguros para negocios y pymes en Madrid"
                    width={480}
                    height={320}
                    loading="lazy"
                    decoding="async"
                    className="object-cover object-top w-full h-full"
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
        
        <ProductCTASection product={product} title={`¿Quieres que te ayudemos con ${product.label}?`} text={`Te ayudamos a entender, comparar y elegir mejor, con una orientación humana y útil antes de contratar.`} message={product.whatsappMessage} />
        <RelatedProducts product={product} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
