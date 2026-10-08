"use client";

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { type FocusEvent, useEffect, useRef, useState } from 'react';
import { trackForeignersPartner } from '@/lib/extranjeros/foreigners-partner-analytics';
import type { GoogleReview } from '@/lib/extranjeros/google-reviews';

type GoogleReviewsCarouselProps = {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
  allReviewsUrl: string;
  locale?: 'es' | 'en';
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="relative z-10 mb-3 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`h-5 w-5 fill-current ${index < rating ? 'text-yellow-400' : 'text-gray-200'}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewerAvatar({ review }: { review: GoogleReview }) {
  if (review.profile_photo_url) {
    return (
      <img
        src={review.profile_photo_url.replace('=s128', '=s40')}
        alt={review.author_name}
        className="h-9 w-9 rounded-full object-cover shadow-sm ring-2 ring-white"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700 shadow-sm ring-2 ring-white">
      {review.author_name.charAt(0)}
    </div>
  );
}

function ReviewCard({ review, locale }: { review: GoogleReview; locale: 'es' | 'en' }) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-white p-6 shadow-[0_14px_34px_-28px_rgba(15,42,77,0.55)] before:pointer-events-none before:absolute before:right-5 before:top-1 before:font-heading before:text-7xl before:leading-none before:text-blue-950/[0.045] before:content-['“']">
      <StarRating rating={review.rating} />
      <p className="relative z-10 mb-5 flex-1 whitespace-pre-line text-sm leading-6 text-slate-700">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="relative z-10 flex items-center gap-3">
        <ReviewerAvatar review={review} />
        <div>
          <p className="text-sm font-bold text-slate-900">{review.author_name}</p>
          <p className="mt-0.5 text-xs text-slate-500">{locale === 'en' ? review.relative_time_description_en ?? review.relative_time_description : review.relative_time_description}</p>
        </div>
      </div>
    </article>
  );
}

export function GoogleReviewsCarousel({
  reviews,
  rating,
  user_ratings_total,
  allReviewsUrl,
  locale = 'es',
}: GoogleReviewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const usableReviews = reviews.filter((review) => review.text.trim().length > 0);
  const count = usableReviews.length;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 },
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (count === 0 || !isVisible || isHovered || isFocusWithin || prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [count, isFocusWithin, isHovered, isVisible, prefersReducedMotion]);

  const handleBlurCapture = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsFocusWithin(false);
  };

  if (count === 0) return null;

  const visibleReviews = [
    usableReviews[activeIndex % count],
    usableReviews[(activeIndex + 1) % count],
    usableReviews[(activeIndex + 2) % count],
  ];

  return (
    <div
      ref={carouselRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocusWithin(true)}
      onBlurCapture={handleBlurCapture}
    >
      <div className="mb-10 flex justify-center">
        <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1.5 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-2.5 shadow-[0_12px_28px_-24px_rgba(15,42,77,0.5)] sm:gap-x-3 sm:px-5">
          <span className="text-2xl font-extrabold tracking-tight text-slate-950">{rating.toFixed(1)}</span>
          <div className="flex gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg key={index} className="h-6 w-6 fill-current text-yellow-400" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs font-medium text-slate-600 sm:text-sm">
            · {user_ratings_total} {locale === 'en' ? 'Google reviews' : 'opiniones en Google'}
          </span>
          <a
            href={allReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackForeignersPartner({ action: 'google_reviews_click', label: 'reviews_carousel' })}
            className="text-xs font-semibold text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800 sm:text-sm"
          >
            {locale === 'en' ? 'View all on Google →' : 'Ver todas en Google →'}
          </a>
        </div>
      </div>

      <div className="hidden grid-cols-3 gap-6 md:grid">
        <AnimatePresence mode="sync">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={`${activeIndex}-${index}`}
              className="h-full"
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: -16 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
            >
            <ReviewCard review={review} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            <ReviewCard review={usableReviews[activeIndex]} locale={locale} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setActiveIndex((current) => (current - 1 + count) % count)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label={locale === 'en' ? 'Previous review' : 'Reseña anterior'}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          {usableReviews.map((review, index) => (
            <button
              key={`${review.author_name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={locale === 'en' ? `View review ${index + 1}` : `Ver reseña ${index + 1}`}
              className="flex h-10 w-10 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <span aria-hidden="true" className={`block h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-5 bg-blue-600' : 'w-2 bg-slate-300 opacity-70 hover:opacity-100'}`} />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActiveIndex((current) => (current + 1) % count)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-label={locale === 'en' ? 'Next review' : 'Siguiente reseña'}
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
