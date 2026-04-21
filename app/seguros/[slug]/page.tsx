import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  
  // Obtener imagen de Pexels para el producto
  const pexelsImage = await getPexelsImage(slug);
  
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
      images: [{ url: pexelsImage, alt: product.heroAlt }],
    },
    twitter: {
      title: twitterTitle,
      description: product.metaDescription,
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
        <ProductCTASection product={product} title={`¿Quieres que te ayudemos con ${product.label}?`} text={`Te ayudamos a entender, comparar y elegir mejor, con una orientación humana y útil antes de contratar.`} message={product.whatsappMessage} />
        <RelatedProducts product={product} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
