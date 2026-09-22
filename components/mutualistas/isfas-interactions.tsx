'use client';

import { useEffect } from 'react';
import { trackEvent } from '@/lib/analytics';

const storageKey = 'vpi_isfas_partner';
const pagePath = '/mutualistas/isfas';
const trackedActions = new Set([
  'entidad_asisa', 'entidad_adeslas', 'modalidad_desconocida',
  'whatsapp_click', 'phone_click', 'official_isfas_click',
  'medical_directory_click', 'authorization_click', 'emergency_click',
]);

type Props = { partners: Record<string, string>; whatsappNumber: string };

export function IsfasInteractions({ partners, whatsappNumber }: Props) {
  useEffect(() => {
    let selectedEntity: 'asisa' | 'adeslas' | '' = '';
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

    const refreshWhatsAppLinks = () => {
      document.querySelectorAll<HTMLAnchorElement>('[data-isfas-page] a[data-isfas-message]').forEach((anchor) => {
        const message = anchor.dataset.isfasMessage || '';
        const entity = anchor.dataset.isfasEntity;
        const routedMessage = anchor.dataset.isfasContext !== 'new' && !entity && selectedEntity
          ? message.replace('soy mutualista ISFAS y necesito', `soy mutualista ISFAS y estoy con ${selectedEntity === 'asisa' ? 'ASISA' : 'Adeslas'}. Necesito`)
          : message;
        const origin = ref ? ` Vengo de ${partners[ref]}.` : '';
        anchor.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(routedMessage + origin)}`;
      });
    };
    refreshWhatsAppLinks();

    const hasConsent = () => {
      try { return window.localStorage.getItem('cookie-consent') === 'accepted'; }
      catch { return false; }
    };
    let pageViewSent = false;
    let partnerSent = false;
    const sendPageView = () => {
      if (!hasConsent()) return;
      window.dataLayer ||= [];
      if (!pageViewSent) {
        pageViewSent = true;
        // GA/Vercel may also send their standard page_view.
        trackEvent('isfas_page_view', eventParams());
      }
      if (ref && !partnerSent) {
        partnerSent = true;
        trackEvent('isfas_partner_ref', eventParams());
      }
    };
    sendPageView();
    window.addEventListener('cookie-consent-updated', sendPageView);

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>('a[data-isfas-track]');
      if (!anchor || !anchor.closest('[data-isfas-page]')) return;

      const action = anchor.dataset.isfasTrack;
      const entity = anchor.dataset.isfasEntity;
      if (entity === 'asisa' || entity === 'adeslas') { selectedEntity = entity; refreshWhatsAppLinks(); }
      if (entity === 'unknown') { selectedEntity = ''; refreshWhatsAppLinks(); }
      if (action && trackedActions.has(action) && hasConsent()) {
        const entityEvent = action === 'whatsapp_click' || action === 'entidad_asisa' || action === 'entidad_adeslas';
        trackEvent(`isfas_${action}`, eventParams(entityEvent && selectedEntity ? { entity: selectedEntity } : {}));
        if (action === 'emergency_click' && anchor.href.startsWith('tel:')) {
          trackEvent('isfas_phone_click', eventParams({ purpose: 'emergency' }));
        }
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
