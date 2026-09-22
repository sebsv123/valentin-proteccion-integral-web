'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

const storageKey = 'vpi_isfas_partner';
const pagePath = '/mutualistas/isfas';

type Props = { partners: Record<string, string>; whatsappNumber: string };

export function IsfasInteractions({ partners, whatsappNumber }: Props) {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedRef = params.get('ref');
    let ref = '';

    if (requestedRef && Object.hasOwn(partners, requestedRef)) {
      ref = requestedRef;
      try { window.sessionStorage.setItem(storageKey, ref); } catch { /* storage can be disabled */ }
    } else if (requestedRef) {
      try { window.sessionStorage.removeItem(storageKey); } catch { /* storage can be disabled */ }
    } else if (!requestedRef) {
      try {
        const stored = window.sessionStorage.getItem(storageKey);
        if (stored && Object.hasOwn(partners, stored)) ref = stored;
      } catch { /* storage can be disabled */ }
    }

    const eventParams = (extra: Record<string, string> = {}) => ({
      page_path: pagePath,
      ...(ref ? { partner_ref: ref } : {}),
      ...extra,
    });

    const hasConsent = () => {
      try { return window.localStorage.getItem('cookie-consent') === 'accepted'; }
      catch { return false; }
    };
    let pageViewSent = false;
    const sendPageView = () => {
      if (!hasConsent() || pageViewSent) return;
      pageViewSent = true;
      window.dataLayer ||= [];
      // GA/Vercel already send their standard page_view; this identifies the ISFAS guide.
      trackEvent('isfas_page_view', eventParams());
    };
    sendPageView();
    window.addEventListener('cookie-consent-updated', sendPageView);

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>('a[data-isfas-track]');
      if (!anchor || !anchor.closest('[data-isfas-page]')) return;

      const action = anchor.dataset.isfasTrack;
      const context = anchor.dataset.isfasContext || '';
      if (action && hasConsent()) trackEvent(`isfas_${action}`, eventParams(context ? { context } : {}));

      const message = anchor.dataset.isfasMessage;
      if (message) {
        const origin = ref ? ` Vengo de ${partners[ref]}.` : '';
        anchor.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message + origin)}`;
      }
    };

    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      window.removeEventListener('cookie-consent-updated', sendPageView);
    };
  }, [partners, whatsappNumber]);

  return null;
}
