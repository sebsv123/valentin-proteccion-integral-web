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

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  
  // Obtener imagen de Pexels para el producto
  const pexelsImage = await getPexelsImage(slug);
  
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
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros', href: '/seguros' }, { label: product.label }]} />
        </div>
        <ProductHero product={product} />
        <ProductTabs slug={product.slug} />
        <CoverageHighlights product={product} />
        <ProductDecisionGrid product={product} />
        <CasesAndForm product={product} />
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
