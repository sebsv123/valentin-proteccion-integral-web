/** Public organisation code only. No personal identifiers or browser storage. */
export type BlueprintPartner = 'blueprint' | undefined;
export function getBlueprintPartner(value: unknown): BlueprintPartner {
  return value === 'blueprint' ? 'blueprint' : undefined;
}

export const blueprintQuoteForm = 'https://docs.google.com/forms/d/e/1FAIpQLSeRH-NPSLCwX5eQKqiW0BKIgByM0BIF-4BtZOp3nNFYCOBffA/viewform';

export function withBlueprintReferral(href: string, partner: BlueprintPartner) {
  if (!partner || !href.startsWith('/') || href.startsWith('//')) return href;
  const url = new URL(href, 'https://valentinproteccionintegral.com');
  url.searchParams.set('partner', partner);
  return `${url.pathname}${url.search}${url.hash}`;
}

export function blueprintWhatsAppMessage(locale: 'es' | 'en') {
  return locale === 'en'
    ? 'Hello, Blueprint Spain referred me to VPI. I would like a health insurance quote for my move to Spain.'
    : 'Hola, vengo de Blueprint Spain. Quisiera un presupuesto de seguro médico para mi traslado a España.';
}
