import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { ProductCTASection, ProductDecisionGrid, ProductFaqSection, RelatedProducts, SubpageHero } from '@/components/product-sections';
import { HealthComprehensiveGuidance } from '@/components/health-comprehensive-guidance';
import { HealthReimbursementGuidance } from '@/components/health-reimbursement-guidance';
import { getProduct, getProductSubpage, site, subpages } from '@/lib/products';
import SchemaFAQ from '@/components/seo/schema-faq';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import { getLocalizedProduct, getLocalizedSubpage, localizedProductPath, localizedSubpagePath } from '@/lib/product-locales';

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
      canonical: `${site.domain}${localizedSubpagePath(subpage.parent, subpage.slug, 'es')}`,
      languages: { es: `${site.domain}${localizedSubpagePath(subpage.parent, subpage.slug, 'es')}`, en: `${site.domain}${localizedSubpagePath(subpage.parent, subpage.slug, 'en')}`, 'x-default': `${site.domain}${localizedSubpagePath(subpage.parent, subpage.slug, 'es')}` },
    },
    openGraph: {
      title: subpage.metaTitle,
      description: subpage.metaDescription,
      images: [{ url: `${site.domain}${subpage.heroImage}`, alt: subpage.heroAlt }],
    },
  };
}

export const dynamic = 'force-static';

export async function ProductSubpagePageView({ parent, subpage: originalSubpage, locale = 'es' }: { parent: string; subpage: NonNullable<ReturnType<typeof getProductSubpage>>; locale?: 'es'|'en' }) {
  const originalProduct = getProduct(parent);
  const product = originalProduct ? getLocalizedProduct(originalProduct, locale) : undefined;
  const subpage = getLocalizedSubpage(originalSubpage, locale);
  if (!product || !subpage) notFound();

  const faqProduct = { ...product, faqs: subpage.faqs };
  const isComprehensive = parent === 'salud' && subpage.slug === 'completa';
  const isReimbursement = parent === 'salud' && subpage.slug === 'reembolso';

  return (
    <>
      <SchemaBreadcrumb 
        locale={locale}
        items={[
          { name: locale === 'en' ? 'Home' : 'Inicio', item: locale === 'en' ? `${site.domain}/en` : site.domain, position: 1 },
          { name: locale === 'en' ? 'Insurance' : 'Seguros', item: locale === 'en' ? `${site.domain}/en/insurance` : `${site.domain}/seguros`, position: 2 },
          { name: product.name, item: `${site.domain}${locale === 'en' ? localizedProductPath(product.slug, 'en') : `/seguros/${product.slug}`}`, position: 3 },
          { name: subpage.name, item: `${site.domain}${locale === 'en' ? localizedSubpagePath(product.slug, subpage.slug, 'en') : `/seguros/${product.slug}/${subpage.slug}`}`, position: 4 }
        ]} 
      />
      <SchemaFAQ locale={locale} faqs={subpage.faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <Header />
      <main>
        <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: locale === 'en' ? 'Home' : 'Inicio', href: locale === 'en' ? '/en' : '/' }, { label: locale === 'en' ? 'Insurance' : 'Seguros', href: locale === 'en' ? '/en/insurance' : '/seguros' }, { label: product.label, href: locale === 'en' ? localizedProductPath(product.slug, 'en') : `/seguros/${product.slug}` }, { label: subpage.label }]} />
        </div>
        <SubpageHero subpage={subpage} showActions={!isComprehensive && !isReimbursement} />
        {isComprehensive ? <HealthComprehensiveGuidance locale={locale} /> : isReimbursement ? <HealthReimbursementGuidance locale={locale} /> : <ProductDecisionGrid product={product} locale={locale} />}
        <ProductFaqSection product={faqProduct} locale={locale} contextualLinks={!isComprehensive && !isReimbursement} />
        <GoogleReviewsWidget title={locale === 'en' ? `Reviews of our ${product.label} guidance` : `Opiniones sobre nuestro asesoramiento en ${product.label}`} />
        <ProductCTASection product={product} locale={locale} suppressPriceGuarantee={isComprehensive || isReimbursement} suppressTrustMetrics={isComprehensive || isReimbursement} trustTitle={isReimbursement ? (locale === 'en' ? 'A clearer reimbursement decision' : 'Una decisión más clara sobre el reembolso') : undefined} trustText={isReimbursement ? (locale === 'en' ? 'We help you connect your preferred provider, expected use and the policy conditions you need to check.' : 'Te ayudamos a relacionar tu profesional de confianza, el uso que prevés y las condiciones de la póliza que conviene comprobar.') : undefined} title={isComprehensive ? (locale === 'en' ? 'I want to review whether I need hospital cover' : 'Quiero revisar si necesito hospitalización') : isReimbursement ? (locale === 'en' ? 'I want to review whether reimbursement fits my doctor and how I use health insurance' : 'Quiero revisar si el reembolso encaja con mi médico y mi forma de usar el seguro') : (locale === 'en' ? `Would you like us to review ${product.label} in more detail?` : `¿Quieres que revisemos ${product.label} con más calma?`)} text={isComprehensive ? (locale === 'en' ? 'We can help you clarify how you expect to use private healthcare and what to verify in the hospital-cover policy before deciding.' : 'Te ayudamos a aclarar cómo esperas usar la sanidad privada y qué comprobar en la póliza con hospitalización antes de decidir.') : isReimbursement ? (locale === 'en' ? 'We can help you review the provider, cash-flow effect and policy conditions before deciding whether reimbursement fits your situation.' : 'Te ayudamos a revisar el profesional, el efecto sobre tu liquidez y las condiciones de la póliza antes de decidir si el reembolso encaja contigo.') : (locale === 'en' ? 'If this profile or plan fits you, we can clarify the details, answer your questions and help you decide with greater confidence.' : 'Si este perfil o modalidad encaja contigo, te ayudamos a aterrizar matices, resolver dudas y decidir con más tranquilidad.')} message={subpage.whatsappMessage} />
        {!isComprehensive && !isReimbursement && <RelatedProducts product={product} locale={locale} />}
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}

export default async function ProductSubpagePage({ params }: { params: Promise<{ slug: string; subslug: string }> }) { const { slug, subslug } = await params; const subpage = getProductSubpage(slug, subslug); if (!subpage) notFound(); return <ProductSubpagePageView parent={slug} subpage={subpage} />; }
