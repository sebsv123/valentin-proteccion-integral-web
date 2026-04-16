'use client';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

import { useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyWhatsApp } from '@/components/sticky-whatsapp';
import { CheckCircle } from 'lucide-react';

export default function GraciasClientPage() {
  useEffect(() => {
    // GA4 Conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXX/YYYYY',
        value: 1.0,
        currency: 'EUR',
      });
    }

    // Meta Pixel Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <>
      <Header />
      <main className="section-pad min-h-[60vh] pt-10">
        <div className="container-shell">
          <div className="soft-card mx-auto max-w-2xl p-8 text-center md:p-12">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle className="h-8 w-8" />
              </div>
            </div>
            <h1 className="font-heading text-3xl font-bold text-[var(--blue-deep)] md:text-4xl">
              ¡Gracias! Rosa o Sebastián te contactarán pronto.
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Hemos recibido tu solicitud. Te responderemos con una orientación clara lo antes posible.
            </p>
            <div className="mt-8">
              <Link href="/" className="btn-primary inline-flex">
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
