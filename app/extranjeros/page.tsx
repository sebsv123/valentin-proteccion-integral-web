import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { AnswerFirstSection } from '@/components/extranjeros/answer-first-section';
import { FAQAccordion } from '@/components/extranjeros/faq-accordion';
import { ForeignersPartnerNetwork } from '@/components/extranjeros/foreigners-partner-network';
import { ForeignersPartnerTracking } from '@/components/extranjeros/foreigners-partner-tracking';
import { ForeignersTrackedLink } from '@/components/extranjeros/foreigners-tracked-link';
import SpainArrivalGlobe from '@/components/extranjeros/spain-arrival-globe';
import { Footer } from '@/components/footer';
import { GoogleReviewsCarousel } from '@/components/extranjeros/google-reviews-carousel';
import { Header } from '@/components/header';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { foreignersFunnelContent } from '@/lib/foreigners-funnel-content';
import { foreignersPartnerLogos } from '@/lib/foreigners-partners';
import { getForeignersIntakePath, type ForeignersIntakeLocale } from '@/lib/foreigners-intake';
import { buildWhatsAppHref, site } from '@/lib/products';
import { getGoogleReviews } from '@/lib/server/google-reviews';
import styles from './foreigners-funnel.module.css';

const esCopy = foreignersFunnelContent.es;
const googleReviewsUrl = 'https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA';

export const metadata: Metadata = {
  title: esCopy.metaTitle,
  description: esCopy.metaDescription,
  alternates: {
    canonical: `${site.domain}/extranjeros`,
    languages: {
      es: `${site.domain}/extranjeros`,
      en: `${site.domain}/en/foreigners`,
      'x-default': `${site.domain}/extranjeros`,
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: esCopy.metaTitle,
    description: esCopy.metaDescription,
    url: `${site.domain}/extranjeros`,
    type: 'website',
    siteName: site.name,
    locale: 'es_ES',
    images: [{ url: '/images/extranjeros/extranjeros-hero.webp', width: 1400, height: 788, alt: esCopy.heroAlt }],
  },
};

function buildSchemas(locale: ForeignersIntakeLocale) {
  const copy = foreignersFunnelContent[locale];
  const en = locale === 'en';
  const url = `${site.domain}${en ? '/en/foreigners' : '/extranjeros'}`;
  const homeUrl = `${site.domain}${en ? '/en' : ''}`;

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: copy.metaTitle,
      url,
      inLanguage: locale,
      description: copy.metaDescription,
      isPartOf: { '@type': 'WebSite', name: site.name, url: site.domain },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: en ? 'Home' : 'Inicio', item: homeUrl || site.domain },
        { '@type': 'ListItem', position: 2, name: en ? 'Foreigners' : 'Extranjeros', item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: locale,
      mainEntity: copy.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
}
export async function ExtranjerosPageView({ locale = 'es' }: { locale?: ForeignersIntakeLocale } = {}) {
  const copy = foreignersFunnelContent[locale];
  const en = locale === 'en';
  const intakeHref = getForeignersIntakePath(locale);
  const personalWhatsApp = buildWhatsAppHref(en ? 'Hello, I would like guidance about health insurance for my process in Spain.' : 'Hola, quiero orientación sobre un seguro médico para mi trámite en España.');
  const professionalWhatsApp = buildWhatsAppHref(en ? 'Hello, I work with international students or clients and would like to discuss a referral partnership.' : 'Hola, trabajo con estudiantes o clientes extranjeros y quiero consultar una posible colaboración.');
  const googleReviewsData = await getGoogleReviews();
  const hasGoogleReviews = Boolean(
    googleReviewsData?.reviews.some((review) => review.text.trim().length > 0),
  );

  return (
    <>
      <Header />
      <ForeignersPartnerTracking />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchemas(locale)) }} />

      <main className={`${styles.page} overflow-x-clip`} data-foreigners-page="true">
        <section className={`${styles.heroSectionBackdrop} border-b border-[var(--border)] bg-[var(--bg)] py-12 md:py-20`} data-foreigners-section="hero">
          <div className="container-shell">
            <div className={styles.heroGrid}>
              <div className="max-w-3xl">
                <p className="kicker">{copy.heroEyebrow}</p>
                <h1 className="mt-5 font-heading text-5xl font-extrabold leading-[1.02] tracking-tight text-[var(--blue-deep)] md:text-7xl">{copy.heroTitle}</h1>
                <p className="section-copy mt-6 text-lg md:text-xl">{copy.heroDescription}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <ForeignersTrackedLink href={intakeHref} action="cta_click" label="hero_quote" className="btn-primary min-h-12 px-6">
                    {copy.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </ForeignersTrackedLink>
                  <ForeignersTrackedLink href={personalWhatsApp} external action="whatsapp_click" label="hero_whatsapp_secondary" className="btn-whatsapp min-h-12 px-6">
                    <WhatsAppIcon className="h-4 w-4" /> {copy.whatsappCta}
                  </ForeignersTrackedLink>
                </div>
                <p className={styles.heroReassurance}>{copy.heroReassurance}</p>
                <div className="mt-8 flex flex-wrap gap-2 text-sm font-semibold text-[var(--blue-deep)]" role="group" aria-label={en ? 'Trust signals' : 'Señales de confianza'}>
                  {copy.trust.map((item) => <span key={item} className="rounded-full border border-[var(--border)] bg-white px-4 py-2">{item}</span>)}
                  <span className="rounded-full border border-[var(--border)] bg-white px-4 py-2">{copy.trustReviews}</span>
                </div>
              </div>

              <div className={styles.heroMediaFrame}>
                <div className={styles.heroMedia}>
                  <Image src="/images/extranjeros/extranjeros-hero.webp" alt={copy.heroAlt} width={1400} height={788} priority quality={75} className={styles.heroImage} sizes="(min-width: 1024px) 52vw, calc(100vw - 32px)" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm font-semibold text-[var(--blue-deep)] shadow-lg backdrop-blur md:bottom-6 md:left-6 md:right-auto md:max-w-xs">
                    {en ? 'Clarity for your next step.' : 'Claridad para tu siguiente paso.'}
                  </div>
                </div>
                <Image
                  src="/brand/valentin/valentin-hero-peek.png"
                  alt=""
                  aria-hidden="true"
                  width={1122}
                  height={1402}
                  className={styles.heroValentin}
                  sizes="(min-width: 1280px) 208px, (min-width: 768px) 152px, 96px"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="situacion" className="section-pad bg-white" data-foreigners-section="selector">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="kicker">{copy.selectorEyebrow}</p>
              <h2 className="mt-3 section-title">{copy.selectorTitle}</h2>
              <p className="section-copy mt-4">{copy.selectorDescription}</p>
            </div>
            <div className={`${styles.selectorGrid} mt-8 grid gap-5 md:grid-cols-3`}>
              {copy.situations.map((situation) => (
                <article key={situation.key} className={`${styles.situationCard} overflow-hidden rounded-[26px] border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl`}>
                  <Image src={situation.image} alt="" width={1200} height={800} className="aspect-[4/2.6] w-full object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                  <div className={`${styles.situationBody} p-5`}>
                    <h3 className="font-heading text-2xl font-bold leading-tight text-[var(--blue-deep)]">{situation.title}</h3>
                    <p className="mt-3 min-h-14 text-base leading-7 text-[var(--muted)]">{situation.description}</p>
                    <ForeignersTrackedLink href={getForeignersIntakePath(locale, situation.key)} action="cta_click" label={situation.key === 'renewal-family' ? 'situation_renewal_family' : `situation_${situation.key}`} className={styles.situationAction}>
                      {situation.primaryLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </ForeignersTrackedLink>
                    <Link href={situation.evidenceHref} className="mt-4 inline-flex text-sm font-semibold text-[var(--blue)] underline decoration-[var(--blue)]/25 underline-offset-4">{situation.evidenceLabel} →</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <AnswerFirstSection
          eyebrow={copy.quickAnswerEyebrow}
          title={copy.quickAnswerTitle}
          answer={copy.quickAnswer}
          facts={copy.quickAnswerFacts}
          factTitles={copy.quickAnswerFactTitles}
          links={copy.quickAnswerLinks}
          linksAriaLabel={en ? 'Detailed guidance' : 'Guías detalladas'}
          emphasizeFirstLink
          firstLinkTracking={{ action: 'cta_click', label: 'quick_answer_quote' }}
          sectionDataAttribute="quick-answer"
          visual={<SpainArrivalGlobe />}
        />

        <section className="py-12 bg-[var(--bg)] md:py-16" data-foreigners-section="proceso">
          <div className="container-shell">
            <div className="max-w-3xl">
              <p className="kicker">{copy.processEyebrow}</p>
              <h2 className="mt-3 section-title">{copy.processTitle}</h2>
            </div>
            <div className={`${styles.processGrid} mt-6 grid gap-4 md:grid-cols-3`}>
              {copy.process.map((step, index) => (
                <article key={step.title} data-step={index + 1} className={`${styles.processCard} rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-sm`}>
                  <div className={`${styles.processNumber} flex h-10 w-10 items-center justify-center rounded-full bg-[var(--blue-deep)] font-heading text-lg font-bold text-white`}>{index + 1}</div>
                  <h3 className="mt-4 font-heading text-2xl font-bold text-[var(--blue-deep)]">{step.title}</h3>
                  <p className="mt-2 text-base leading-7 text-[var(--muted)]">{step.description}</p>
                </article>
              ))}
            </div>
            <div className={styles.processCta}>
              <ForeignersTrackedLink href={intakeHref} action="cta_click" label="process_quote" className={`${styles.processCtaButton} btn-primary`}>
                {copy.primaryCta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ForeignersTrackedLink>
              <p className={styles.processCtaMicrocopy}>{en ? 'Takes around 2 minutes · No payment required' : 'Te llevará unos 2 minutos · Sin pago'}</p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white" data-foreigners-section="beneficios">
          <div className="container-shell">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="kicker">{copy.benefitsEyebrow}</p>
                <h2 className="mt-3 section-title">{copy.benefitsTitle}</h2>
                <div className={styles.benefitsValentin} aria-hidden="true">
                  <Image
                    src="/brand/valentin/valentin-por-que-vpi.png"
                    alt=""
                    width={1374}
                    height={1145}
                    sizes="(min-width: 1280px) 264px, (min-width: 1024px) 188px, 0px"
                    className={styles.benefitsValentinImage}
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {copy.benefits.map((benefit) => (
                  <article key={benefit.title} className="rounded-[22px] border border-[var(--border)] bg-[var(--bg)] p-5">
                    <Check className="h-5 w-5 text-[var(--green)]" aria-hidden="true" />
                    <h3 className="mt-3 font-heading text-xl font-bold text-[var(--blue-deep)]">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{benefit.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ForeignersPartnerNetwork locale={locale} logos={foreignersPartnerLogos} />

        <section
          className={`${styles.reviewsSection} ${hasGoogleReviews ? 'section-pad' : 'py-10 md:py-12'} bg-white`}
          data-foreigners-section="opiniones"
          aria-labelledby="foreigners-reviews-title"
        >
          {hasGoogleReviews ? (
            <Image
              src="/brand/valentin/valentin-reviews-gala.png"
              alt=""
              width={1254}
              height={1254}
              className={styles.reviewsValentin}
              aria-hidden="true"
            />
          ) : null}
          <div className={`container-shell ${styles.reviewsContent}`}>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker">{copy.reviewsEyebrow}</p>
              <h2 id="foreigners-reviews-title" className="mt-3 section-title text-3xl md:text-4xl">{copy.reviewsTitle}</h2>
            </div>
            <div className={hasGoogleReviews ? 'mt-8' : 'mt-4'}>
              <GoogleReviewsCarousel
                reviews={googleReviewsData?.reviews ?? []}
                rating={googleReviewsData?.rating ?? null}
                user_ratings_total={googleReviewsData?.user_ratings_total ?? null}
                allReviewsUrl={googleReviewsUrl}
                locale={locale}
              />
            </div>
          </div>
        </section>

        <section id="profesionales" className="scroll-mt-24 bg-[var(--blue-deep)] py-12 text-white md:py-14" data-foreigners-section="profesionales">
          <div className="container-shell">
            <div className="mx-auto flex max-w-4xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div>
                <p className="kicker !text-white/70">{copy.partnerEyebrow}</p>
                <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{copy.partnerTitle}</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">{copy.partnerDescription}</p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <ForeignersTrackedLink href="mailto:contacto@valentinproteccionintegral.com?subject=Professional%20client%20referral" action="cta_click" label="professional_referral_cta" className="btn-primary min-h-11 px-5">{copy.partnerCta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></ForeignersTrackedLink>
                <ForeignersTrackedLink href={professionalWhatsApp} external action="whatsapp_click" label="professional_collaboration" className="btn-whatsapp min-h-11 px-5"><WhatsAppIcon className="h-4 w-4" />{copy.partnerWhatsappCta}</ForeignersTrackedLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[var(--bg)]" data-foreigners-section="faq">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div>
              <p className="kicker">{copy.faqEyebrow}</p>
              <h2 className="mt-3 section-title">{copy.faqTitle}</h2>
              <p className="section-copy mt-4">{copy.faqDescription}</p>
            </div>
            <FAQAccordion items={copy.faq} locale={locale} />
          </div>
        </section>

        <section className="bg-[var(--bg)] py-10 md:py-14" data-foreigners-section="cierre">
          <div className="container-shell">
            <div className={styles.finalCard}>
              <div className="max-w-2xl">
                <p className="kicker !text-white/70">{copy.finalEyebrow}</p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">{copy.finalTitle}</h2>
                <p className="mt-3 text-base leading-7 text-white/75">{copy.finalDescription}</p>
              </div>
              <div className={styles.finalActions}>
                <ForeignersTrackedLink href={intakeHref} action="cta_click" label="final_quote" className="btn-primary min-h-14 px-7 text-base">{copy.finalCta}<ArrowRight className="h-4 w-4" aria-hidden="true" /></ForeignersTrackedLink>
                <ForeignersTrackedLink href={personalWhatsApp} external action="whatsapp_click" label="final_whatsapp_secondary" className="btn-whatsapp min-h-12 px-6"><WhatsAppIcon className="h-4 w-4" />{copy.whatsappCta}</ForeignersTrackedLink>
                <p className="text-center text-xs font-semibold text-white/65">{copy.finalReassurance}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyWhatsApp mobileVariant="floating" mobileAvoidSelector={'[data-foreigners-section="selector"], [data-foreigners-section="quick-answer"], [data-foreigners-section="proceso"], [data-foreigners-section="profesionales"], [data-foreigners-section="faq"], [data-foreigners-section="cierre"]'} />
    </>
  );
}

export default function ExtranjerosPage() {
  return <ExtranjerosPageView locale="es" />;
}
