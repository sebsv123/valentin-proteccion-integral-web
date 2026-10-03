export type ForeignersIntakeLocale = 'es' | 'en';
export type ForeignersIntakeSituation = 'studies' | 'residence' | 'renewal-family';

/**
 * The only public Google Forms destination used by the client foreigners funnel.
 * Keep these responder URLs here; landing-page CTAs must only point to the
 * internal /start routes below so the destination remains replaceable.
 */
export const foreignersIntakeForms: Record<ForeignersIntakeLocale, string> = {
  es: 'https://docs.google.com/forms/d/e/1FAIpQLSfgJ8nTRnvW8onuF0Mq_1fBKyUb2z-of5a5yIXnxpc39ROv9g/viewform',
  en: 'https://docs.google.com/forms/d/e/1FAIpQLSe83dajswVIh-96JvpQpsGayvjZFQdL9KU8S65Hq-4ihEvfhQ/viewform',
};

const situationSlugByLocale: Record<ForeignersIntakeLocale, Record<ForeignersIntakeSituation, string>> = {
  es: {
    studies: 'estudios',
    residence: 'residencia',
    'renewal-family': 'renovacion-familia',
  },
  en: {
    studies: 'studies',
    residence: 'residence',
    'renewal-family': 'renewal-family',
  },
};

const slugToSituation: Record<ForeignersIntakeLocale, Record<string, ForeignersIntakeSituation>> = {
  es: Object.fromEntries(Object.entries(situationSlugByLocale.es).map(([key, value]) => [value, key])) as Record<string, ForeignersIntakeSituation>,
  en: Object.fromEntries(Object.entries(situationSlugByLocale.en).map(([key, value]) => [value, key])) as Record<string, ForeignersIntakeSituation>,
};

function safeConfiguredUrl(value: string | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return null;
    if (!['docs.google.com', 'forms.gle'].includes(url.hostname)) return null;
    return url;
  } catch {
    return null;
  }
}

export function getForeignersIntakePath(locale: ForeignersIntakeLocale, situation?: ForeignersIntakeSituation) {
  const prefix = locale === 'en' ? '/en/start' : '/start';
  return situation ? `${prefix}/${situationSlugByLocale[locale][situation]}` : prefix;
}

export function getForeignersSituationFromSlug(locale: ForeignersIntakeLocale, slug?: string) {
  return slug ? slugToSituation[locale][slug] ?? null : null;
}

export function getForeignersIntakeUrl(
  locale: ForeignersIntakeLocale,
  _situation?: ForeignersIntakeSituation,
) {
  return safeConfiguredUrl(foreignersIntakeForms[locale])?.toString() ?? null;
}

export function getMissingForeignersIntakeVariables(locale: ForeignersIntakeLocale) {
  return safeConfiguredUrl(foreignersIntakeForms[locale]) ? [] : [`FOREIGNERS_INTAKE_${locale.toUpperCase()}_FORM_URL`];
}

export function isValidForeignersPartnerSlug(value: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}
