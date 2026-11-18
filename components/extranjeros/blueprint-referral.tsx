'use client';

import Link from 'next/link';
import { createContext, useContext, type ComponentProps, type ReactNode } from 'react';
import { withBlueprintReferral, type BlueprintPartner } from '@/lib/blueprint-referral';

const ReferralContext = createContext<BlueprintPartner>(undefined);
export const useBlueprintPartner = () => useContext(ReferralContext);

export function BlueprintReferralProvider({ partner, children }: { partner: BlueprintPartner; children: ReactNode }) {
  return <ReferralContext.Provider value={partner}>{children}</ReferralContext.Provider>;
}

/** Keeps the public code in links within the insurance enquiry journey. */
export function ReferralLink({ href, ...props }: ComponentProps<typeof Link>) {
  const partner = useBlueprintPartner();
  return <Link {...props} href={typeof href === 'string' ? withBlueprintReferral(href, partner) : href} />;
}
