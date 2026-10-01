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

// Keep ISFAS events intentionally small and local: no WhatsApp text, href or
// user-entered value is ever copied into an event payload.
const allowedEventFields = new Set(['page_path', 'partner_ref', 'entity', 'purpose']);

type Props = { partners: Record<string, string>; whatsappNumber: string };

export function IsfasInteractions({ partners, whatsappNumber }: Props) {
  useEffect(() => {
    let selectedEntity: 'asisa' | 'adeslas' | '' = window.location.hash === '#asisa' ? 'asisa' : window.location.hash === '#adeslas' ? 'adeslas' : '';
    const faqTabs = document.querySelector<HTMLElement>('[data-isfas-faq-tabs]');
    const faqGroups = document.querySelector<HTMLElement>('[data-isfas-faq-groups]');
    const faqIds = ['faq-isfas', 'faq-asisa', 'faq-adeslas'];
    const activateFaq = (id: string) => {
      if (!faqIds.includes(id)) return;
      faqGroups?.querySelectorAll<HTMLDetailsElement>('details[id^="faq-"]').forEach((group) => {
        if (faqIds.includes(group.id)) group.open = group.id === id;
      });
      faqTabs?.querySelectorAll<HTMLButtonElement>('button[data-isfas-faq-tab]').forEach((button) => {
        button.setAttribute('aria-pressed', String(button.dataset.isfasFaqTab === id));
      });
    };
    const openFaqFromHash = () => {
      const id = window.location.hash.slice(1);
      if (faqIds.includes(id)) activateFaq(id);
    };
    activateFaq(faqIds.includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : 'faq-isfas');
    if (faqTabs && faqGroups) {
      faqTabs.hidden = false;
      faqGroups.dataset.enhanced = 'true';
    }
    const params = new URLSearchParams(window.location.search);
    const requestedRef = params.get('ref');
    let ref = '';

    if (requestedRef && Object.hasOwn(partners, requestedRef)) {
      ref = requestedRef;
      try { window.sessionStorage.setItem(storageKey, ref); } catch { /* storage can be disabled */ }
    } else if (requestedRef) {
      // An invalid later ref never replaces a valid attribution already held
      // by this tab. The proxy also strips the invalid query before navigation.
      try {
        const stored = window.sessionStorage.getItem(storageKey);
        if (stored && Object.hasOwn(partners, stored)) ref = stored;
      } catch { /* storage can be disabled */ }
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
      const faqLink = target.closest<HTMLAnchorElement>('a[data-isfas-faq-target]');
      if (faqLink) {
        activateFaq(faqLink.dataset.isfasFaqTarget || '');
      }
      const anchor = target.closest<HTMLAnchorElement>('a[data-isfas-track]');
      if (!anchor || !anchor.closest('[data-isfas-page]')) return;

      const action = anchor.dataset.isfasTrack;
      const entity = anchor.dataset.isfasEntity;
      if (entity === 'asisa' || entity === 'adeslas') { selectedEntity = entity; refreshWhatsAppLinks(); }
      if (entity === 'unknown') { selectedEntity = ''; refreshWhatsAppLinks(); }
      if (action && trackedActions.has(action) && hasConsent()) {
        const entityEvent = action === 'whatsapp_click' || action === 'entidad_asisa' || action === 'entidad_adeslas';
        const payload = eventParams(entityEvent && selectedEntity ? { entity: selectedEntity } : {});
        trackEvent(`isfas_${action}`, Object.fromEntries(Object.entries(payload).filter(([key]) => allowedEventFields.has(key))));
        if (action === 'emergency_click' && anchor.href.startsWith('tel:')) {
          const payload = eventParams({ purpose: 'emergency' });
          trackEvent('isfas_phone_click', Object.fromEntries(Object.entries(payload).filter(([key]) => allowedEventFields.has(key))));
        }
      }
    };

    const onFaqTabClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest<HTMLButtonElement>('button[data-isfas-faq-tab]');
      const id = button?.dataset.isfasFaqTab;
      if (!id || !faqIds.includes(id)) return;
      activateFaq(id);
      const url = new URL(window.location.href);
      url.hash = id;
      window.history.replaceState(null, '', url);
    };

    document.addEventListener('click', onClick, true);
    faqTabs?.addEventListener('click', onFaqTabClick);
    window.addEventListener('hashchange', openFaqFromHash);
    return () => {
      document.removeEventListener('click', onClick, true);
      faqTabs?.removeEventListener('click', onFaqTabClick);
      window.removeEventListener('hashchange', openFaqFromHash);
      window.removeEventListener('cookie-consent-updated', sendPageView);
    };
  }, [partners, whatsappNumber]);

  return null;
}
