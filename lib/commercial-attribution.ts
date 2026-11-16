/** Public campaign codes only. Extend these reviewed catalogues before distributing links.
 * Never accept arbitrary strings: even slug-shaped values can contain personal data.
 */
export const attributionCatalog = {
  utm_source: ['google', 'bing', 'newsletter', 'partner', 'vpi'],
  utm_medium: ['organic', 'cpc', 'email', 'referral', 'social'],
  utm_campaign: ['vpi-360-sprint-02'],
  partner: ['blueprint-spain', 'kors-academy', 'student-pro-plus', 'vip-global-peru', 'plan-b-immigration', 'wejha', 'esperon', 'nomadesco', 'aara-consultancy', 'relocation-centers', 'experta-travel'],
} as const;

export type AttributionSearchParams = Record<string, string | string[] | undefined>;
export type CommercialAttribution = Partial<Record<keyof typeof attributionCatalog, string>>;

export function readCommercialAttribution(params: AttributionSearchParams): CommercialAttribution {
  const attribution: CommercialAttribution = {};
  for (const key of Object.keys(attributionCatalog) as (keyof typeof attributionCatalog)[]) {
    const value = params[key];
    if (typeof value === 'string' && (attributionCatalog[key] as readonly string[]).includes(value)) {
      attribution[key] = value;
    }
  }
  return attribution;
}

/** Only decorate local navigation. Destination codes override incoming codes.
 * No storage, cookies, analytics calls, arbitrary query copying or external decoration.
 * Language and procedure remain authoritative in the destination route.
 */
export function withCommercialAttribution(href: string, incoming: AttributionSearchParams): string {
  if (!href.startsWith('/') || href.startsWith('//') || href.includes('\\')) return href;
  const url = new URL(href, 'https://vpi.invalid');
  const destination: AttributionSearchParams = {};
  for (const key of Object.keys(attributionCatalog)) {
    const values = url.searchParams.getAll(key);
    if (values.length) destination[key] = values.length === 1 ? values[0] : values;
    url.searchParams.delete(key);
  }
  const values = { ...readCommercialAttribution(incoming), ...readCommercialAttribution(destination) };
  for (const [key, value] of Object.entries(values)) url.searchParams.set(key, value);
  return `${url.pathname}${url.search}${url.hash}`;
}
