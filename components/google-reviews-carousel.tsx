"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { trackForeignersPartner } from '@/lib/foreigners-partner-analytics';
import type { GoogleReview } from '@/lib/google-reviews';

type GoogleReviewsCarouselProps = {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
  allReviewsUrl: string;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="mb-3 flex gap-0.5">
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
        className="h-9 w-9 rounded-full object-cover"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
      {review.author_name.charAt(0)}
    </div>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <StarRating rating={review.rating} />
      <p className="mb-5 line-clamp-5 flex-1 text-sm leading-relaxed text-gray-700">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <ReviewerAvatar review={review} />
        <div>
          <p className="text-sm font-semibold text-gray-900">{review.author_name}</p>
          <p className="text-xs text-gray-400">{review.relative_time_description}</p>
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
}: GoogleReviewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = reviews.length;

  useEffect(() => {
    if (count === 0) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % count);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [count]);

  if (count === 0) return null;

  const visibleReviews = [
    reviews[activeIndex % count],
    reviews[(activeIndex + 1) % count],
    reviews[(activeIndex + 2) % count],
  ];

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        <div className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} className="h-6 w-6 fill-current text-yellow-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-2xl font-bold text-gray-900">{rating.toFixed(1)}</span>
        <span className="text-sm text-gray-500">
          · {user_ratings_total}+ opiniones verificadas en Google
        </span>
        <a
          href={allReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackForeignersPartner({ action: 'google_reviews_click', label: 'reviews_carousel' })}
          className="text-sm font-medium text-blue-600 underline underline-offset-2 hover:text-blue-800"
        >
          Ver todas en Google →
        </a>
      </div>

      <div className="hidden grid-cols-3 gap-6 md:grid">
        <AnimatePresence mode="wait">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={`${activeIndex}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            <ReviewCard review={reviews[activeIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setActiveIndex((current) => (current - 1 + count) % count)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50"
          aria-label="Reseña anterior"
        >
          <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={`${review.author_name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver reseña ${index + 1}`}
              className={`h-2 w-2 origin-center rounded-full transition-all duration-300 ${
                index === activeIndex ? 'scale-x-[2.5] bg-blue-600' : 'bg-gray-300 opacity-60 hover:opacity-80'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setActiveIndex((current) => (current + 1) % count)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-50"
          aria-label="Siguiente reseña"
        >
          <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
