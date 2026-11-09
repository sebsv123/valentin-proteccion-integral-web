export const CONSENT_KEY = 'cookie-consent';
export const CONSENT_EVENT = 'cookie-consent-updated';
export const CONSENT_FOCUS_KEY = 'vpi-cookie-preferences-focus';
export type CookieConsent = { version: 1; necessary: true; analytics: boolean; marketing: boolean };
export const NO_OPTIONAL_CONSENT: CookieConsent = { version: 1, necessary: true, analytics: false, marketing: false };

export function parseConsent(raw: string | null): CookieConsent | null {
  // A historical global acceptance never becomes a new granular permission.
  if (raw === 'rejected') return { ...NO_OPTIONAL_CONSENT };
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (typeof value !== 'object' || value === null) return null;
    const record = value as Record<string, unknown>;
    if (record.version !== 1 || record.necessary !== true || typeof record.analytics !== 'boolean' || typeof record.marketing !== 'boolean') return null;
    return { version: 1, necessary: true, analytics: record.analytics, marketing: record.marketing };
  } catch { return null; }
}

export function readConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try { return parseConsent(window.localStorage.getItem(CONSENT_KEY)); }
  catch { return null; }
}

export function providerPermissions(consent: CookieConsent | null) {
  const analytics = consent?.analytics === true;
  const marketing = consent?.marketing === true;
  return {
    analytics, marketing,
    vercel: analytics,
    clarity: analytics,
    meta: marketing,
    // The external GTM container and Maps embed have no verified purpose split.
    gtm: analytics && marketing,
    maps: analytics && marketing,
  };
}

export function permissionReduced(previous: CookieConsent | null, next: CookieConsent | null) {
  return !!((previous?.analytics && !next?.analytics) || (previous?.marketing && !next?.marketing));
}

export function isOptionalStorageKey(name: string, category: 'analytics' | 'marketing') {
  return category === 'analytics'
    ? /^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_clck$|_clsk$|CLID$)/.test(name)
    : /^(_fbp$|_fbc$|_gcl(?:_|$))/.test(name);
}

/** Only known first-party tracker names; never clear unrelated commercial data. */
export function clearDeniedStorage(consent: CookieConsent | null) {
  if (typeof window === 'undefined') return;
  const deniedKey = (name: string) => (!consent?.analytics && isOptionalStorageKey(name, 'analytics')) || (!consent?.marketing && isOptionalStorageKey(name, 'marketing'));
  try {
    for (const storage of [window.localStorage, window.sessionStorage]) {
      for (const key of Object.keys(storage)) if (deniedKey(key)) storage.removeItem(key);
    }
  } catch { /* Browser restrictions can prevent cleanup; permission still fails closed. */ }
  const domains = ['', window.location.hostname];
  const parts = window.location.hostname.split('.');
  for (let i = 0; i < parts.length - 1; i++) domains.push(`.${parts.slice(i).join('.')}`);
  const paths = new Set(['/']);
  const segments = window.location.pathname.split('/').filter(Boolean);
  for (let i = 1; i <= segments.length; i++) {
    const path = '/' + segments.slice(0, i).join('/');
    paths.add(path); paths.add(path + '/');
  }
  try {
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim();
      if (!deniedKey(name)) continue;
      for (const domain of domains) for (const path of paths) {
        document.cookie = `${name}=; Max-Age=0; Path=${path}${domain ? `; Domain=${domain}` : ''}`;
      }
    }
  } catch { /* HttpOnly, third-party and inaccessible paths cannot be removed here. */ }
}

export function reloadAfterWithdrawal() {
  try { window.sessionStorage.setItem(CONSENT_FOCUS_KEY, '1'); } catch { /* optional focus restoration */ }
  // Unmounting React cannot stop third-party JS already executed in this document.
  window.location.reload();
}

export function saveConsent(analytics: boolean, marketing: boolean): boolean {
  const previous = readConsent();
  const next: CookieConsent = { version: 1, necessary: true, analytics, marketing };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    if (window.localStorage.getItem(CONSENT_KEY) !== JSON.stringify(next)) return false;
  } catch { return false; }
  clearDeniedStorage(next);
  if (permissionReduced(previous, next)) reloadAfterWithdrawal();
  else window.dispatchEvent(new Event(CONSENT_EVENT));
  return true;
}
