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
import { WhatsAppLink } from '@/components/whatsapp-link';
import { CheckCircle } from 'lucide-react';

export default function GraciasClientPage() {
  useEffect(() => {
    // GA4 — Evento de conversión primaria
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'Contactar', {
        event_category: 'conversion',
        event_label: 'gracias_page',
      });
    }
    // Meta Pixel — Lead
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
    // Google Ads conversion tracking is handled via GTM — do not duplicate here
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
              ¡Gracias! Ya tenemos tus datos.
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Rosa o Sebastián Valentín te contactarán en menos de 2 horas en horario de atención
              <strong className="text-[var(--blue-deep)]"> (L-V 9h-19h, S 10h-14h)</strong>.
            </p>
            <p className="mt-3 text-base text-[var(--muted)]">
              Si tienes urgencia, escríbenos directamente:
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row justify-center">
              <WhatsAppLink
                href="https://wa.me/34603448765?text=Hola%2C+acabo+de+enviar+un+formulario+y+tengo+urgencia"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp inline-flex justify-center"
              >
                Escribir por WhatsApp
              </WhatsAppLink>
              <Link href="/" className="btn-secondary inline-flex justify-center">
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
