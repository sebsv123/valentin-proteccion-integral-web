'use client';

import type { ForeignersPartnerLogo } from '@/lib/foreigners-partners';
import type { CSSProperties, KeyboardEvent } from 'react';
import styles from './foreigners-partner-network.module.css';

type ForeignersPartnerNetworkProps = {
  locale: 'es' | 'en';
  logos?: ForeignersPartnerLogo[];
};

const logoSizeClasses: Record<NonNullable<ForeignersPartnerLogo['visualScale']>, string> = {
  large: 'max-h-16 max-w-[15rem]',
  standard: 'max-h-12 max-w-[13rem]',
  compact: 'max-h-10 max-w-[11rem]',
};

export function ForeignersPartnerNetwork({ locale, logos = [] }: ForeignersPartnerNetworkProps) {
  const en = locale === 'en';
  if (logos.length === 0) return null;
  const marqueeStyle = { '--marquee-duration': `${Math.max(30, Math.round(logos.length * 3.8))}s` } as CSSProperties;
  const handleRailKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step = Math.max(180, Math.round(event.currentTarget.clientWidth * 0.6));
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      event.currentTarget.scrollBy({ left: step, behavior: 'smooth' });
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      event.currentTarget.scrollBy({ left: -step, behavior: 'smooth' });
    } else if (event.key === 'Home') {
      event.preventDefault();
      event.currentTarget.scrollTo({ left: 0, behavior: 'smooth' });
    } else if (event.key === 'End') {
      event.preventDefault();
      event.currentTarget.scrollTo({ left: event.currentTarget.scrollWidth, behavior: 'smooth' });
    }
  };

  return (
    <section className="border-y border-[var(--border)] bg-[var(--bg)] py-12 md:py-14" data-foreigners-section="partners" aria-labelledby="foreigners-partner-network-title">
      <div className="container-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker">{en ? 'PARTNER NETWORK' : 'RED DE COLABORADORES'}</p>
          <h2 id="foreigners-partner-network-title" className="mt-3 section-title text-3xl md:text-4xl">
            {en ? 'Some of the organisations we work with' : 'Algunas de las organizaciones con las que colaboramos'}
          </h2>
          <p className="section-copy mx-auto mt-4 max-w-2xl">
            {en ? 'We work with education, immigration and international-service organisations supporting people moving to Spain.' : 'Trabajamos con entidades de educación, inmigración y servicios internacionales que acompañan a personas que vienen a España.'}
          </p>
        </div>

        <div className={`${styles.viewport} mx-auto mt-7`} role="region" tabIndex={0} onKeyDown={handleRailKeyDown} aria-label={en ? 'Partner organisations' : 'Organizaciones colaboradoras'}>
          <div className={styles.track} style={marqueeStyle}>
            {[false, true].map((duplicate) => (
              <div key={duplicate ? 'duplicate' : 'primary'} className={`${styles.sequence} ${duplicate ? styles.duplicate : ''}`} aria-hidden={duplicate || undefined}>
                {logos.map((logo) => (
                  <div key={`${duplicate ? 'duplicate-' : ''}${logo.name}`} className={styles.logoItem}>
                    <div className={`${styles.logoSurface} ${logo.surface === 'dark' ? styles.darkSurface : ''}`}>
                      <img src={logo.logo} alt={duplicate ? '' : logo.alt} loading="lazy" decoding="async" className={`h-auto w-auto object-contain ${logoSizeClasses[logo.visualScale ?? 'standard']}`} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
