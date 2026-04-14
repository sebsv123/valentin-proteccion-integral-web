import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { ProductCTASection, ProductDecisionGrid, ProductFaqSection, RelatedProducts, SubpageHero } from '@/components/product-sections';
import { getProduct, getProductSubpage, site, subpages } from '@/lib/products';
import SchemaFAQ from '@/components/seo/schema-faq';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';

export function generateStaticParams() {
  return subpages.map((subpage) => ({ slug: subpage.parent, subslug: subpage.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; subslug: string }> }): Promise<Metadata> {
  const { slug, subslug } = await params;
  const subpage = getProductSubpage(slug, subslug);
  if (!subpage) return {};
  
  return {
    title: subpage.metaTitle,
    description: subpage.metaDescription,
    alternates: {
      canonical: `${site.domain}/seguros/${subpage.parent}/${subpage.slug}`,
    },
    openGraph: {
      title: subpage.metaTitle,
      description: subpage.metaDescription,
      images: [{ url: `${site.domain}${subpage.heroImage}`, alt: subpage.heroAlt }],
    },
  };
}

export const dynamic = 'force-static';

export default async function ProductSubpagePage({ params }: { params: Promise<{ slug: string; subslug: string }> }) {
  const { slug, subslug } = await params;
  const product = getProduct(slug);
  const subpage = getProductSubpage(slug, subslug);
  if (!product || !subpage) notFound();

  const faqProduct = { ...product, faqs: subpage.faqs };

  return (
    <>
      <SchemaBreadcrumb 
        items={[
          { name: 'Inicio', item: site.domain, position: 1 },
          { name: 'Seguros', item: `${site.domain}/seguros`, position: 2 },
          { name: product.name, item: `${site.domain}/seguros/${product.slug}`, position: 3 },
          { name: subpage.name, item: `${site.domain}/seguros/${product.slug}/${subpage.slug}`, position: 4 }
        ]} 
      />
      <SchemaFAQ faqs={subpage.faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <Header />
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Seguros', href: '/seguros' }, { label: product.label, href: `/seguros/${product.slug}` }, { label: subpage.label }]} />
        </div>
        <SubpageHero subpage={subpage} />
        <ProductDecisionGrid product={product} />
        <ProductFaqSection product={faqProduct} />
        <GoogleReviewsWidget title={`Opiniones sobre nuestro asesoramiento en ${product.label}`} />
        <ProductCTASection product={product} title={`¿Quieres que revisemos ${product.label} con más calma?`} text="Si este perfil o modalidad encaja contigo, te ayudamos a aterrizar matices, resolver dudas y decidir con más tranquilidad." message={subpage.whatsappMessage} />
        <RelatedProducts product={product} />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
