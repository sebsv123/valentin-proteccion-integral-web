'use client';

import { useEffect, useState } from 'react';
import { CONSENT_EVENT, CONSENT_KEY, readConsent, synchronizeConsentDocument, type CookieConsent } from '@/lib/cookie-consent';

export function useCookieConsent() {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  useEffect(() => {
    const refresh = () => {
      const next = readConsent();
      synchronizeConsentDocument(next);
      setConsent(next);
    };
    const storage = (event: StorageEvent) => { if (event.key === CONSENT_KEY || event.key === null) refresh(); };
    refresh();
    window.addEventListener(CONSENT_EVENT, refresh);
    window.addEventListener('storage', storage);
    return () => {
      window.removeEventListener(CONSENT_EVENT, refresh);
      window.removeEventListener('storage', storage);
    };
  }, []);
  return consent;
}
