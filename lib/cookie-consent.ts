export const CONSENT_KEY = 'cookie-consent';
export const CONSENT_EVENT = 'cookie-consent-updated';
export const CONSENT_FOCUS_KEY = 'vpi-cookie-preferences-focus';
// This identifier binds the candidate policy text; publication remains gated by
// approval of that text and the provider inventory (see implementation report).
export const CONSENT_POLICY_VERSION = 'vpi-cookies-20261110-730d-candidate1';
export const CONSENT_MAX_AGE_MS = 730 * 24 * 60 * 60 * 1000;
export const CONSENT_NOT_BEFORE = Date.UTC(2026, 10, 9);
export type ConsentPurposes = { necessary: true; analytics: boolean; marketing: boolean };
export type ConsentDecision = ConsentPurposes & {
  version: 2; policyVersion: string; decidedAt: number; expiresAt: number;
};
export type LegacyRejection = { version: 1; necessary: true; analytics: false; marketing: false };
export type CookieConsent = ConsentDecision | LegacyRejection;
// Legacy denials have no invented decision date and can never grant a purpose.
export const NO_OPTIONAL_CONSENT: LegacyRejection = { version: 1, necessary: true, analytics: false, marketing: false };

const clockOrigin = Date.now();
const monotonicOrigin = typeof performance === 'undefined' ? 0 : performance.now();
let lastObservedTime = clockOrigin;
function consentTime() {
  const elapsed = typeof performance === 'undefined' ? 0 : Math.max(0, performance.now() - monotonicOrigin);
  // A backwards clock adjustment cannot extend grants in this document.
  lastObservedTime = Math.max(lastObservedTime, Date.now(), clockOrigin + elapsed);
  return Math.floor(lastObservedTime);
}

export function createConsentDecision(analytics: boolean, marketing: boolean, now = consentTime()): ConsentDecision {
  if (!Number.isSafeInteger(now) || now < CONSENT_NOT_BEFORE || !Number.isSafeInteger(now + CONSENT_MAX_AGE_MS)) {
    throw new Error('Invalid device time');
  }
  return { version: 2, policyVersion: CONSENT_POLICY_VERSION, decidedAt: now,
    expiresAt: now + CONSENT_MAX_AGE_MS, necessary: true, analytics, marketing: false };
}

export function parseConsent(raw: string | null, now = consentTime()): CookieConsent | null {
  if (raw === 'rejected') return { ...NO_OPTIONAL_CONSENT };
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (typeof value !== 'object' || value === null) return null;
    const r = value as Record<string, unknown>;
    if (r.version === 1 && r.necessary === true && r.analytics === false && r.marketing === false) {
      return { ...NO_OPTIONAL_CONSENT };
    }
    if (r.version !== 2 || r.policyVersion !== CONSENT_POLICY_VERSION || r.necessary !== true ||
        typeof r.analytics !== 'boolean' || r.marketing !== false ||
        !Number.isSafeInteger(now) || now < CONSENT_NOT_BEFORE ||
        typeof r.decidedAt !== 'number' || !Number.isSafeInteger(r.decidedAt) ||
        typeof r.expiresAt !== 'number' || !Number.isSafeInteger(r.expiresAt) ||
        r.decidedAt < CONSENT_NOT_BEFORE || r.decidedAt > now ||
        r.expiresAt <= r.decidedAt || r.expiresAt - r.decidedAt > CONSENT_MAX_AGE_MS || now >= r.expiresAt) return null;
    return { version: 2, policyVersion: CONSENT_POLICY_VERSION, decidedAt: r.decidedAt,
      expiresAt: r.expiresAt, necessary: true, analytics: r.analytics, marketing: false };
  } catch { return null; }
}

export function readConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null;
  try { return parseConsent(window.localStorage.getItem(CONSENT_KEY)); }
  catch { return null; }
}

export function providerPermissions(consent: ConsentPurposes | null) {
  const analytics = consent?.analytics === true;
  const marketing = consent?.marketing === true;
  return {
    analytics, marketing: false,
    vercel: analytics,
    clarity: false,
    meta: false,
    gtm: false,
    maps: false,
  };
}

export function permissionReduced(previous: ConsentPurposes | null, next: ConsentPurposes | null) {
  return !!((previous?.analytics && !next?.analytics) || (previous?.marketing && !next?.marketing));
}

// Executed scripts survive React unmounts. Remember grants for the lifetime of
// this document, rather than relying on a banner effect's current closure.
export function createConsentLifetime() {
  let granted: ConsentPurposes = { ...NO_OPTIONAL_CONSENT };
  return {
    observe(consent: ConsentPurposes | null) {
      if (permissionReduced(granted, consent)) return true;
      granted = {
        ...NO_OPTIONAL_CONSENT,
        analytics: granted.analytics || consent?.analytics === true,
        marketing: granted.marketing || consent?.marketing === true,
      };
      return false;
    },
  };
}

const documentLifetime = createConsentLifetime();
let withdrawalReloadRequested = false;
let documentMonitoringStarted = false;
let expiryTimer: number | undefined;

function refreshConsentDocument() {
  synchronizeConsentDocument(readConsent());
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function synchronizeConsentDocument(consent: CookieConsent | null) {
  if (typeof window === 'undefined') return;
  if (!documentMonitoringStarted) {
    documentMonitoringStarted = true;
    // Executed SDKs outlive React consumers. Keep these until document unload.
    window.addEventListener('storage', (event) => {
      if (event.key === CONSENT_KEY || event.key === null) refreshConsentDocument();
    });
    window.addEventListener(CONSENT_EVENT, () => synchronizeConsentDocument(readConsent()));
    window.addEventListener('focus', refreshConsentDocument);
    window.addEventListener('pageshow', refreshConsentDocument);
    document.addEventListener('visibilitychange', refreshConsentDocument);
  }
  if (expiryTimer !== undefined) window.clearTimeout(expiryTimer);
  expiryTimer = undefined;
  if (consent === null) {
    // Invalid/expired positive records must not revive after a clock correction.
    try { if (window.localStorage.getItem(CONSENT_KEY) !== null) window.localStorage.removeItem(CONSENT_KEY); } catch { /* still denied */ }
  }
  if (documentLifetime.observe(consent)) {
    clearDeniedStorage(consent);
    reloadAfterWithdrawal();
  }
  if (!withdrawalReloadRequested && consent?.version === 2) {
    // Recheck wall-clock changes and avoid the ~24.8-day native timer overflow.
    const delay = Math.min(60_000, Math.max(0, consent.expiresAt - consentTime()));
    expiryTimer = window.setTimeout(refreshConsentDocument, delay);
  }
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
  if (withdrawalReloadRequested) return;
  withdrawalReloadRequested = true;
  try { window.sessionStorage.setItem(CONSENT_FOCUS_KEY, '1'); } catch { /* optional focus restoration */ }
  // Unmounting React cannot stop third-party JS already executed in this document.
  window.location.reload();
}

export function saveConsent(analytics: boolean, marketing: boolean): boolean {
  const previous = readConsent();
  let next: ConsentDecision;
  try {
    next = createConsentDecision(analytics, marketing);
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(next));
    if (window.localStorage.getItem(CONSENT_KEY) !== JSON.stringify(next)) return false;
  } catch { return false; }
  clearDeniedStorage(next);
  if (permissionReduced(previous, next)) reloadAfterWithdrawal();
  else window.dispatchEvent(new Event(CONSENT_EVENT));
  return true;
}
