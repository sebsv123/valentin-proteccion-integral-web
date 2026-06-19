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
import { captureUTMs, trackLeadFormSubmit } from '@/lib/analytics';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

const SESSION_KEY = 'valentin_conversion_fired';

export default function GraciasClientPage() {
  useEffect(() => {
    // Capture UTMs on the gracias page (in case they arrived via redirect)
    captureUTMs();

    // sessionStorage guard: only fire events once per session
    if (typeof window !== 'undefined') {
      try {
        if (sessionStorage.getItem(SESSION_KEY)) {
          return; // Already fired — skip to avoid duplicates on refresh
        }
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch { /* ignore */ }
    }

    // Fire lead_form_submit as primary conversion event (GA4 + Meta + dataLayer ya incluidos)
    trackLeadFormSubmit({
      product_slug: 'gracias',
      lead_type: 'thank_you_page',
    });
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
              ¡Recibido! Te llamamos en menos de 24 horas.
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
                <WhatsAppIcon className="h-4 w-4" />
                Escribir por WhatsApp
              </WhatsAppLink>
              <Link href="/seguros" className="btn-secondary inline-flex justify-center">
                Ver seguros
              </Link>
              <Link href="/opiniones" className="btn-ghost inline-flex justify-center">
                Opiniones de clientes
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
