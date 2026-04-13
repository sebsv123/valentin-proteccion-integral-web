"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, PenLine } from 'lucide-react';
import { ReviewItem } from '@/lib/blog';

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrellas sobre 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" />
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-label="Google" role="img">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function getRandomSubset<T>(arr: T[], count: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, count);
}

interface Props {
  reviews: ReviewItem[];
  totalCount: number;
  googleReviewsUrl: string;
  displayCount?: number;
}

export function GoogleReviewsGrid({
  reviews,
  totalCount,
  googleReviewsUrl,
  displayCount = 5,
}: Props) {
  const [visible, setVisible] = useState<ReviewItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Aleatorización SOLO en cliente para evitar hydration mismatch en Next.js
    setVisible(getRandomSubset(reviews, Math.min(displayCount, reviews.length)));
    setMounted(true);
  }, [reviews, displayCount]);

  if (!mounted) return null;

  return (
    <div className="soft-card p-7 md:p-9">

      {/* Cabecera */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <p className="kicker">Lo que dicen nuestros clientes</p>
          <div className="mt-2 flex items-center gap-4">
            <span className="font-heading text-5xl font-extrabold text-[var(--blue-deep)]">5,0</span>
            <div>
              <StarRating />
              <p className="mt-1 text-sm text-[var(--muted)]">
                {totalCount} reseñas verificadas · Google
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <GoogleIcon />
            Ver todas en Google
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Grid de reseñas aleatorias */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((review, idx) => (
          <motion.article
            key={`${review.name}-${idx}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.07 }}
            className="flex flex-col gap-4 rounded-[20px] border border-[var(--border)] bg-white p-5 shadow-sm"
          >
            {/* Cabecera tarjeta — fiel al estilo Google */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] text-sm font-bold text-white shadow-sm select-none">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-[var(--blue-deep)]">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{review.date}</p>
                </div>
              </div>
              <div className="shrink-0 opacity-60">
                <GoogleIcon />
              </div>
            </div>

            {/* Estrellas (fijas a 5 para este diseño) */}
            <StarRating count={5} />

            {/* Texto literal */}
            <p className="flex-1 text-sm leading-7 text-[var(--muted)]">
              &ldquo;{review.text}&rdquo;
            </p>
          </motion.article>
        ))}
      </div>

      {/* Pie */}
      <div className="mt-6 flex flex-col items-center gap-3 border-t border-[var(--border)] pt-6 text-center">
        <p className="text-xs text-[var(--muted)]">
          Mostrando {visible.length} de {totalCount} reseñas · nuevas cada vez que visitas esta página
        </p>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-deep)] transition-colors underline underline-offset-2"
        >
          <GoogleIcon />
          Ver las {totalCount} reseñas completas en Google →
        </a>
      </div>

    </div>
  );
}
