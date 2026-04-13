"use client";

import { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, PenLine, MapPin } from 'lucide-react';
import { GOOGLE_REVIEWS, REVIEWS_CONFIG } from '@/lib/reviews';

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} estrellas sobre 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < count ? 'fill-[var(--orange)] text-[var(--orange)]' : 'text-[var(--border)]'}`} 
        />
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
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

interface Props {
  totalCount?: number;
}

export function GoogleReviewsGrid({
  totalCount: propTotalCount,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const total = propTotalCount || REVIEWS_CONFIG.totalCount;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Seleccionamos 5 aleatorias en cada carga
  const visible = useMemo(() => {
    return [...GOOGLE_REVIEWS].sort(() => Math.random() - 0.5).slice(0, 5);
  }, []);

  if (!mounted) return null;

  return (
    <div className="soft-card p-7 md:p-9">
      {/* Cabecera */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <p className="kicker">Lo que dicen nuestros clientes</p>
          <div className="mt-2 flex items-center gap-4">
            <span className="font-heading text-5xl font-extrabold text-[var(--blue-deep)]">
              {REVIEWS_CONFIG.rating.toFixed(1).replace('.', ',')}
            </span>
            <div>
              <StarRating count={5} />
              <p className="mt-1 text-sm text-[var(--muted)]">
                {total} reseñas verificadas · Google
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="shrink-0">
            <GoogleIcon />
          </div>
          <span className="text-sm font-medium text-[var(--muted)]">Perfil de Empresa verificado</span>
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
            className="flex flex-col gap-4 rounded-[20px] border border-[var(--border)] bg-white p-5 shadow-sm hover:border-[var(--blue-soft)] transition-colors"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] text-sm font-bold text-white shadow-sm">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-[var(--blue-deep)]">
                    {review.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[var(--muted)]">{review.date}</p>
                </div>
              </div>
              <div className="shrink-0 opacity-40">
                <GoogleIcon />
              </div>
            </div>

            <StarRating count={review.rating} />

            <p className="flex-1 text-sm leading-7 text-[var(--muted)] italic">
              &ldquo;{review.text}&rdquo;
            </p>
          </motion.article>
        ))}
      </div>

      {/* Bloque de Acciones y Mapa */}
      <div className="mt-10 border-t border-[var(--border)] pt-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <h4 className="font-heading text-xl font-bold text-[var(--blue-deep)]">
              {total} reseñas · 5,0 <Star className="inline h-4 w-4 fill-[var(--orange)] text-[var(--orange)]" /> en Google
            </h4>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Tu tranquilidad es nuestra prioridad. Únete a nuestros clientes satisfechos.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={REVIEWS_CONFIG.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary whitespace-nowrap"
            >
              <ExternalLink className="h-4 w-4" />
              Ver todas las reseñas
            </a>
            <a
              href={REVIEWS_CONFIG.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost whitespace-nowrap"
            >
              <PenLine className="h-4 w-4" />
              Escribe tu reseña
            </a>
            <a
              href={REVIEWS_CONFIG.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--blue)] hover:bg-[var(--bg-soft)] transition-colors"
              title="Ver en Google Maps"
            >
              <MapPin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
