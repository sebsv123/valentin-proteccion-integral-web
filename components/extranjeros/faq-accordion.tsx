"use client";

import Link from 'next/link';
import { type KeyboardEvent, useId, useState } from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { buildWhatsAppHref } from '@/lib/products';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { getHomeContent, type HomeLocale } from '@/components/home-content';

export function FAQAccordion({ items, contextualLinks = false, locale = 'es' }: { items: readonly { q: string; a: string }[]; contextualLinks?: boolean; locale?: HomeLocale }) {
  const [open, setOpen] = useState<number | null>(null);
  const accordionId = useId();
  const copy = getHomeContent(locale).faq;

  const toggleItem = (index: number) => {
    setOpen((current) => (current === index ? null : index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if ((event.key === ' ' || event.key === 'Spacebar') && !event.repeat) {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const active = open === index;
        const buttonId = `${accordionId}-button-${index}`;
        const panelId = `${accordionId}-panel-${index}`;
        return (
          <div key={item.q} className="soft-card overflow-hidden">
            <button
              id={buttonId}
              type="button"
              aria-expanded={active}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[rgba(15,94,156,0.3)] md:px-8 md:py-6"
            >
              <div className="flex items-start gap-4">
                <span className={`mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full ${active ? 'bg-[rgba(79,175,78,0.14)] text-[var(--green)]' : 'bg-[rgba(15,94,156,0.08)] text-[var(--blue)]'}`}>
                  <CircleHelp className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-lg font-semibold text-[var(--text)] md:text-xl">{item.q}</p>
                </div>
              </div>
              <ChevronDown className={`h-5 w-5 shrink-0 text-[var(--blue)] transition ${active ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {/* SEO-friendly: texto siempre en DOM, colapsado visualmente con max-height */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!active}
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: active ? '1000px' : '0', opacity: active ? 1 : 0 }}
            >
              <div className="border-t border-[var(--border)] px-6 pb-6 pt-1 md:px-8 md:pb-8">
                <div className="rounded-[24px] bg-[linear-gradient(180deg,rgba(248,250,252,0.92),rgba(238,242,247,0.72))] p-5 text-base leading-8 text-[var(--muted)]">
                  <p>{item.a}</p>
                </div>
                {contextualLinks ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={buildWhatsAppHref(locale === 'en' ? `Hello, I have a question about: ${item.q}` : `Hola, tengo una duda sobre: ${item.q}`)} className="btn-whatsapp !px-4 !py-3 text-sm"><WhatsAppIcon className="h-4 w-4" /> {locale === 'en' ? 'Chat on WhatsApp' : 'Hablar por WhatsApp'}</a>
                    <Link href={locale === 'en' ? '/en/contact' : '/contacto'} className="btn-ghost !px-4 !py-3 text-sm">{copy.ask}</Link>
                    <Link href={locale === 'en' ? '/en/insurance/health' : '/seguros/salud'} className="btn-ghost !px-4 !py-3 text-sm">{copy.productLinks[0]}</Link>

                    <Link href={locale === 'en' ? '/en/insurance/pet-insurance' : '/seguros/mascotas'} className="btn-ghost !px-4 !py-3 text-sm">{copy.productLinks[1]}</Link>
                    <Link href={locale === 'en' ? '/en/insurance/travel-insurance' : '/seguros/viaje'} className="btn-ghost !px-4 !py-3 text-sm">{copy.productLinks[2]}</Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
