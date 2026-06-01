/**
 * Helper functions for Google Analytics 4 and GTM tracking
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Track a custom event in GA4 and GTM
 * @param eventName - The event name (e.g., 'Contactar')
 * @param params - Additional event parameters
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>): void {
  // Push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
  }

  // Also send via gtag for GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track WhatsApp click conversion
 * @param location - Where the button was clicked (e.g., 'hero', 'niveles', 'cta-final')
 */
export function trackWhatsAppClick(location: string): void {
  trackEvent('Contactar', {
    method: 'WhatsApp',
    location: location,
  });
}

/**
 * Handle WhatsApp link click with tracking
 * @param location - Where the button was clicked
 * @param href - The WhatsApp URL to navigate to
 */
export function handleWhatsAppClick(location: string, href: string): void {
  // Track the click
  trackWhatsAppClick(location);
  
  // Give a small delay for the event to be sent before navigation
  // This is especially important for external links
  setTimeout(() => {
    window.location.href = href;
  }, 150);
}

// ─── UTM Helpers ────────────────────────────────────────────────────────────

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const;
const STORAGE_KEY = 'valentin_utm';

/**
 * Capture UTM params from the current URL and persist them in sessionStorage.
 * Call this once on page load (e.g., in a useEffect).
 */
export function captureUTMs(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  
  const params = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};

  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) utms[key] = val;
  }

  if (Object.keys(utms).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utms));
    } catch { /* ignore */ }
  }

  return utms;
}

/**
 * Retrieve persisted UTMs from sessionStorage.
 */
export function getStoredUTMs(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/**
 * Fire a lead_form_submit event with GA4, dataLayer, and fbq.
 */
export function trackLeadFormSubmit(params: {
  product_slug: string;
  lead_type?: string;
  page_location?: string;
}): void {
  const utms = getStoredUTMs();
  const eventParams = {
    ...params,
    page_location: params.page_location || (typeof window !== 'undefined' ? window.location.href : ''),
    ...utms,
  };

  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'lead_form_submit', eventParams);
  }

  // dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'lead_form_submit',
      ...eventParams,
    });
  }

  // Meta Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', { content_name: params.product_slug });
  }
}

/**
 * Fire a generic Contactar event.
 */
export function trackContactar(params?: Record<string, unknown>): void {
  trackEvent('Contactar', params);
}
