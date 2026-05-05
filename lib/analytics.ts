/**
 * Helper functions for Google Analytics 4 and GTM tracking
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
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
