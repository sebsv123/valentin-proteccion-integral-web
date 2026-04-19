'use client';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
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
    // Meta Pixel — Lead
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
    // Google Ads — Conversion
    // IMPORTANTE: reemplaza AW-XXXXXXXXX/YYYYYYYYYYY con tu ID real de conversión de Google Ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-XXXXXXXXX/YYYYYYYYYYY',
        value: 1.0,
        currency: 'EUR',
      });
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
              ¡Gracias! Rosa o Sebastián te contactarán en menos de 2 horas.
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Hemos recibido tu solicitud. Rosa o Sebastián Valentín te responderán personalmente con una orientación clara y sin compromiso.
            </p>
            <p className="mt-3 text-base text-[var(--muted)]">
              Mientras tanto, si tienes urgencia, escríbenos directamente al{' '}
              <a href="https://wa.me/34603448765" className="font-bold text-[var(--blue-deep)] underline underline-offset-2">603 44 87 65</a>.
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
