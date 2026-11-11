"use client";

import { useCookieConsent } from "@/components/use-cookie-consent";
import { providerPermissions, readConsent } from "@/lib/cookie-consent";
import { Analytics } from "@vercel/analytics/react";

export function TrackingScripts() {
  const permissions = providerPermissions(useCookieConsent());
  return permissions.vercel
    ? <Analytics beforeSend={(event) => readConsent()?.analytics ? event : null} />
    : null;
}
