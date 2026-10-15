import dynamicImport from 'next/dynamic';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { HomePartnerNetwork } from '@/components/home-partner-network';
import { HomeNeedsSection } from '@/components/home-needs-section';
import { foreignersPartnerLogos } from '@/lib/foreigners-partners';
import { HeroLeadSection } from '@/components/hero-sections-wrapper';
import { site } from '@/lib/products';
import SchemaBreadcrumb from '@/components/seo/schema-breadcrumb';
import { getSeoInsuranceCatalog } from '@/lib/seo-insurance-catalog';
import { getGoogleReviews, type GoogleReviewsData } from '@/lib/server/google-reviews';
import HomeGoogleReviewsFallback from '@/components/home-google-reviews-fallback';
import { HomeClarityTeamSection } from '@/components/home-clarity-team-section';
import { HomeClosingSection } from '@/components/home-closing-section';
import reputationStyles from '@/components/home-reputation.module.css';

const ReviewsCarouselWrapper = dynamicImport(() => import('@/components/ReviewsCarouselWrapper'));

function hasRealGoogleReviews(data: GoogleReviewsData | null): data is GoogleReviewsData {
  return Boolean(
    data &&
    Array.isArray(data.reviews) &&
    data.reviews.length > 0 &&
    Number.isFinite(data.rating) &&
    data.rating > 0 &&
    data.rating <= 5 &&
    Number.isInteger(data.user_ratings_total) &&
    data.user_ratings_total > 0 &&
    data.reviews.every((review) =>
      typeof review.author_name === 'string' &&
      typeof review.rating === 'number' &&
      review.rating >= 1 &&
      review.rating <= 5 &&
      typeof review.text === 'string' &&
      typeof review.relative_time_description === 'string' &&
      typeof review.profile_photo_url === 'string'
    )
  );
}

async function getProductionReviewsForDevelopment(): Promise<GoogleReviewsData | null> {
  if (process.env.NODE_ENV !== 'development') return null;

  try {
    const response = await fetch('https://valentinproteccionintegral.com/api/reviews', { cache: 'no-store' });
    if (!response.ok) return null;

    const data: unknown = await response.json();
    if (!data || typeof data !== 'object') return null;

    const candidate = data as GoogleReviewsData;
    return hasRealGoogleReviews(candidate) ? candidate : null;
  } catch {
    return null;
  }
}

export async function HomePageView({ locale = 'es' }: { content?: unknown; locale?: 'es' | 'en' }) {
  const directGoogleData = await getGoogleReviews();
  const directHasRealReviews = hasRealGoogleReviews(directGoogleData);
  const previewGoogleData = directHasRealReviews ? null : await getProductionReviewsForDevelopment();
  const homeReviewData = directHasRealReviews ? directGoogleData : previewGoogleData;
  const validReviewData = hasRealGoogleReviews(homeReviewData) ? homeReviewData : null;
  const aggregateRating = validReviewData
    ? {
        '@type': 'AggregateRating',
        ratingValue: validReviewData.rating,
        bestRating: 5,
        ratingCount: validReviewData.user_ratings_total,
      }
    : undefined;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Valentín Protección Integral',
            '@id': 'https://valentinproteccionintegral.com/#organization',
            description: locale === 'en'
              ? 'Valentín Protección Integral is a commercial brand and project co-founded by Rosa Valentín and Sebastián Sifontes Valentín, providing customer guidance and support around insurance processes.'
              : 'Valentín Protección Integral es una marca y proyecto comercial cofundado por Rosa Valentín y Sebastián Sifontes Valentín que ofrece orientación y acompañamiento al cliente en procesos relacionados con seguros.',
            founder: [
              { '@type': 'Person', '@id': 'https://valentinproteccionintegral.com/sobre-nosotros#rosa-valentin', name: 'Rosa Isabel Valentín González' },
              { '@type': 'Person', '@id': 'https://valentinproteccionintegral.com/sobre-nosotros#sebastian-valentin', name: 'Sebastián Sifontes Valentín' },
            ],
            url: locale === 'en' ? 'https://valentinproteccionintegral.com/en' : 'https://valentinproteccionintegral.com',
            inLanguage: locale,
            logo: 'https://valentinproteccionintegral.com/brand/vpi/logo-horizontal.png',
            sameAs: ['https://www.instagram.com/segurosvalentin/'],
            telephone: '+34-603-44-87-65',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'C. de los Reyes Católicos, 1',
              addressLocality: 'Boadilla del Monte',
              postalCode: '28660',
              addressRegion: 'Madrid',
              addressCountry: 'ES',
            },
            areaServed: { '@type': 'City', name: 'Madrid' },
            priceRange: '€€',
            openingHoursSpecification: [{
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '19:00',
            }],
            ...(aggregateRating ? { aggregateRating } : {}),
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: locale === 'en' ? 'Insurance available' : 'Seguros disponibles',
              itemListElement: getSeoInsuranceCatalog(locale).map((offer) => ({
                ...offer,
                itemOffered: {
                  ...offer.itemOffered,
                  name: `${offer.itemOffered.name} ${locale === 'en' ? 'in Madrid' : 'en Madrid'}`,
                },
              })),
            },
          }),
        }}
      />
      <SchemaBreadcrumb
        items={[{
          name: locale === 'en' ? 'Home' : 'Inicio',
          item: locale === 'en' ? `${site.domain}/en` : site.domain,
          position: 1,
        }]}
      />
      <main>
        <HeroLeadSection />
        <section className="bg-white" aria-labelledby="home-trust-title" data-home-section="trust">
          <div className={reputationStyles.intro}>
            <header className={reputationStyles.introCopy}>
              <p className="kicker">{locale === 'en' ? 'A REPUTATION YOU CAN VERIFY' : 'REPUTACIÓN QUE SE PUEDE COMPROBAR'}</p>
              <h2 id="home-trust-title" className="section-title mx-auto">
                {locale === 'en'
                  ? 'Promises speak about the future. Reputation speaks about what you have already done.'
                  : 'Las promesas hablan del futuro. La reputación habla de lo que ya hiciste.'}
              </h2>
            </header>
          </div>
          {validReviewData ? (
            <div
              className={`${reputationStyles.reviewsArea} pb-8 pt-6 md:pb-10 md:pt-8`}
              data-home-review-source={previewGoogleData ? 'production-api' : 'google-direct'}
            >
              <div className="container-shell">
                <ReviewsCarouselWrapper
                  reviews={validReviewData.reviews}
                  rating={validReviewData.rating}
                  user_ratings_total={validReviewData.user_ratings_total}
                  locale={locale}
                />
              </div>
            </div>
          ) : (
            <div className="pt-5">
              <HomeGoogleReviewsFallback locale={locale} />
            </div>
          )}
          <HomePartnerNetwork locale={locale} logos={foreignersPartnerLogos} />
        </section>
        <HomeNeedsSection locale={locale} />
        <HomeClarityTeamSection locale={locale} />
        <HomeClosingSection locale={locale} />
      </main>
      <div className="[&>footer]:!mt-0">
        <Footer />
      </div>
      <StickyWhatsApp />
    </>
  );
}
