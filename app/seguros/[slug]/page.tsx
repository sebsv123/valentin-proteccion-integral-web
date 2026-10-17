import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { CasesAndForm, CoverageHighlights, ProductCTASection, ProductDecisionGrid, ProductFaqSection, ProductHero, RelatedProducts } from '@/components/product-sections';
import { ProductTabs } from '@/components/product-tabs';
import { HealthModalitiesSection } from '@/components/health-modalities-section';
import { HealthSectionsTransition } from '@/components/health-sections-transition';
import { HealthDecisionGuideSection } from '@/components/health-insurance-insights';
import { HealthFaqSection } from '@/components/health-faq-section';
import { getProduct, products, site } from '@/lib/products';
import { getLocalizedProduct, localizedProductPath } from '@/lib/product-locales';
import FaqSchema from '@/components/FaqSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import GoogleReviewsWidget from '@/components/GoogleReviewsWidget';
import { getPexelsImage } from '@/lib/pexels';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { WhatsAppLink } from '@/components/whatsapp-link';
import { healthContent } from '@/app/seguros/health-content';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const ogImage = await getPexelsImage(slug);

  const twitterTitle = product.metaTitle;
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `${site.domain}/seguros/${product.slug}`,
      ...(slug === 'salud' ? { languages: { es: `${site.domain}/seguros/salud`, en: `${site.domain}/en/insurance/health`, 'x-default': `${site.domain}/seguros/salud` } } : {}),
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

export async function ProductPageView({ slug, locale = 'es' }: { slug: string; locale?: 'es' | 'en' }) {
  const baseProduct = getProduct(slug);
  if (!baseProduct) notFound();
  const product = getLocalizedProduct(baseProduct, locale);
  const en = locale === 'en';
  const healthFaqs = en ? healthContent.en.faq : healthContent.es.faq;

  return (
    <>
      <BreadcrumbSchema
        locale={locale}
        items={[
          { name: en ? 'Home' : 'Inicio', url: en ? '/en' : '/' },
          { name: en ? 'Insurance' : 'Seguros', url: en ? '/en/insurance' : '/seguros' },
          { name: product.name, url: en ? localizedProductPath(product.slug, 'en') : `/seguros/${product.slug}` }
        ]}
      />
      <FaqSchema locale={locale} faqs={slug === 'salud' ? healthFaqs.map((item) => ({ q: item.question, a: item.answer })) : product.faqs} />
      <Header />

      {/* Sticky Banner - Garantía de Precio */}
      {slug !== 'salud' && <div className="sticky top-[68px] z-40 w-full bg-[#002244] text-white py-2 px-4 shadow-md">
        <div className="container mx-auto max-w-5xl flex items-center justify-center">
          <p className="text-sm font-semibold leading-tight text-center">
            {slug === 'salud'
              ? (en ? 'Already have insurance or a quote? Before switching, we review what you have, what would change and what is worth checking with you.' : '¿Ya tienes seguro o un presupuesto? Antes de cambiar, revisamos contigo qué tienes, qué cambiaría y qué conviene comprobar.')
              : (en ? 'Do you already have a quote? Bring it to us and we will review it with you — or honestly tell you if it already fits.' : '¿Tienes ya un presupuesto? Tráenoslo y lo revisamos contigo — o te decimos honestamente si ya encaja.')}
          </p>
        </div>
      </div>}

      <main className="overflow-x-clip">
        {slug !== 'salud' && <div className="container-shell pt-6 md:pt-8">
          <Breadcrumbs items={[{ label: en ? 'Home' : 'Inicio', href: en ? '/en' : '/' }, { label: en ? 'Insurance' : 'Seguros', href: en ? '/en/insurance' : '/seguros' }, { label: en ? product.name : product.label }]} />
        </div>}
        <ProductHero product={product} locale={locale} breadcrumbs={slug === 'salud' ? <Breadcrumbs items={[{ label: en ? 'Home' : 'Inicio', href: en ? '/en' : '/' }, { label: en ? 'Insurance' : 'Seguros', href: en ? '/en/insurance' : '/seguros' }, { label: en ? product.name : product.label }]} /> : undefined} />
        {product.slug === 'salud' ? <><HealthSectionsTransition /><HealthModalitiesSection /></> : <ProductTabs slug={product.slug} locale={locale} />}
        {product.slug !== 'salud' && <CoverageHighlights product={product} locale={locale} />}

        {product.slug === 'salud' ? <HealthDecisionGuideSection /> : <ProductDecisionGrid product={product} locale={locale} />}
        {product.slug !== 'salud' ? <CasesAndForm product={product} defaultProduct={product.slug} locale={locale} /> : null}

        {slug === 'salud' ? <HealthFaqSection /> : <>
          <ProductFaqSection product={product} locale={locale} />
          <GoogleReviewsWidget title={en ? `Reviews of our ${product.label}` : `Opiniones sobre nuestro seguro de ${product.label}`} />
        </>}

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
                    {en ? 'Rosa and Sebastián help you choose the travel insurance you actually need' : 'Rosa y Sebastián te ayudan a elegir el seguro de viaje que realmente necesitas'}
                  </h2>
                  <p className="text-lg text-[var(--muted)] leading-relaxed mb-4">
                    {en ? 'With more than 10 years reviewing cover for families and frequent travellers in Madrid, we explain what sits behind each available plan before you arrange it.' : 'Con más de 10 años revisando coberturas para familias y viajeros frecuentes en Madrid, te explicamos qué hay detrás de cada modalidad que podemos ofrecer antes de que contrates.'}
                  </p>
                  <p className="text-base font-semibold text-[var(--muted)] leading-relaxed mb-6">
                    {en ? 'Travelling soon? Tell us your destination and dates — we will prepare options during our opening hours.' : '¿Viajas pronto? Cuéntanos destino y fechas — te preparamos opciones en nuestro horario de atención.'}
                  </p>
                  <WhatsAppLink
                    href="https://wa.me/34603448765?text=Hola%2C%20quiero%20orientaci%C3%B3n%20sobre%20un%20seguro%20de%20viaje."
                    className={cn(
                      buttonVariants({ size: 'lg' }),
                      'h-14 px-8 text-lg font-bold bg-emerald-500 hover:bg-emerald-600 text-white gap-2 inline-flex items-center'
                    )}
                  >
                      <WhatsAppIcon className="h-5 w-5" />
                      {en ? 'Talk to Rosa Valentín' : 'Hablar con Rosa Valentín'}
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          </section>
        )}

        {slug !== 'salud' && <ProductCTASection product={product} locale={locale} title={en ? `Would you like help with ${product.label}?` : `¿Quieres que te ayudemos con ${product.label}?`} text={en ? 'We help you understand, compare and choose with clear, human guidance before arranging cover.' : 'Te ayudamos a entender, comparar y elegir mejor, con una orientación humana y útil antes de contratar.'} message={product.whatsappMessage} />}
        {product.slug !== 'salud' && <RelatedProducts product={product} locale={locale} />}
      </main>
      <Footer healthVariant={product.slug === 'salud'} />
      <StickyWhatsApp />
    </>
  );
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductPageView slug={slug} locale="es" />;
}
