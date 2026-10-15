import type { HomeLocale } from '@/components/home-content';

const googleReviewsUrl = 'https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA';

export default function HomeGoogleReviewsFallback({ locale = 'es' }: { locale?: HomeLocale }) {
  const isEnglish = locale === 'en';

  return (
    <section className="bg-white px-5 pb-7 pt-1 text-center" aria-label={isEnglish ? 'Google reviews' : 'Opiniones de Google'}>
      <p className="text-xl leading-none tracking-[0.14em] text-[#f4a126]" aria-hidden="true">★★★★★</p>
      <p className="mt-2 text-sm font-semibold text-[var(--blue-deep)]">
        {isEnglish ? 'Verified reviews on Google' : 'Opiniones verificadas en Google'}
      </p>
      <a
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex min-h-8 items-center text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
      >
        {isEnglish ? 'See our reviews on Google →' : 'Ver nuestras opiniones en Google →'}
      </a>
    </section>
  );
}
