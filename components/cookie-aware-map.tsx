"use client";

import { useLocale } from 'next-intl';

export function CookieAwareMap() {
  const isEnglish = useLocale() === 'en';
  return (
    <div className="flex h-[200px] flex-col items-center justify-center gap-3 bg-[var(--bg-soft)] p-4 text-center text-sm text-[var(--muted)]">
      <p>{isEnglish ? 'View the location in Google Maps.' : 'Consulta la ubicación en Google Maps.'}</p>
      <a href="https://www.google.com/maps/search/?api=1&query=Boadilla%20del%20Monte%2C%20Madrid" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--blue)] underline underline-offset-4">
        {isEnglish ? 'Open location in Google Maps' : 'Abrir ubicación en Google Maps'}
      </a>
    </div>
  );
}
