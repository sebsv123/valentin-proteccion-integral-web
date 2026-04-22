'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Review {
  author_name: string
  rating: number
  text: string
  relative_time_description: string
  profile_photo_url: string
}

interface Props {
  reviews: Review[]
  rating: number
  user_ratings_total: number
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 fill-current ${
            i < rating ? 'text-yellow-400' : 'text-gray-200'
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsCarousel({ reviews, rating, user_ratings_total }: Props) {
  const [current, setCurrent] = useState(0)
  const total = reviews.length

  useEffect(() => {
    if (total === 0) return
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % total), 5500)
    return () => clearInterval(timer)
  }, [total])

  if (total === 0) return null

  const visibleDesktop = [
    reviews[current % total],
    reviews[(current + 1) % total],
    reviews[(current + 2) % total],
  ]

  return (
    <div>
      {/* Rating global */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-2xl font-bold text-gray-900">{rating?.toFixed(1)}</span>
        <span className="text-gray-500 text-sm">· {user_ratings_total}+ opiniones verificadas en Google</span>
        <a
          href="https://search.google.com/local/reviews?placeid=ChIJM_JBwmqbQQ0R-9vVnwTsuRA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-600 hover:text-blue-800 underline underline-offset-2"
        >
          Ver todas en Google →
        </a>
      </div>

      {/* Desktop: 3 tarjetas */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {visibleDesktop.map((review, i) => (
            <motion.div
              key={`${current}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <Stars rating={review.rating} />
              <p className="text-gray-700 text-sm leading-relaxed mb-5 flex-1 line-clamp-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {review.profile_photo_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-9 h-9 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                    {review.author_name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.author_name}</p>
                  <p className="text-xs text-gray-400">{review.relative_time_description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Móvil: 1 tarjeta */}
      <div className="md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <Stars rating={reviews[current].rating} />
            <p className="text-gray-700 text-sm leading-relaxed mb-5">
              &ldquo;{reviews[current].text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              {reviews[current].profile_photo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={reviews[current].profile_photo_url}
                  alt={reviews[current].author_name}
                  className="w-9 h-9 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">
                  {reviews[current].author_name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-gray-900">{reviews[current].author_name}</p>
                <p className="text-xs text-gray-400">{reviews[current].relative_time_description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots de navegación */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrent(prev => (prev - 1 + total) % total)}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Reseña anterior"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Ver reseña ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-blue-600 w-5' : 'bg-gray-300 w-2'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent(prev => (prev + 1) % total)}
          className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Siguiente reseña"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
