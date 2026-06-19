export const FOREIGNERS_PARTNER_EVENT = 'foreigners_partner' as const;

export const FOREIGNERS_PARTNER_ACTIONS = [
  'cta_click',
  'section_view',
  'form_start',
  'form_submit',
  'form_submit_success',
  'form_submit_error',
  'whatsapp_click',
  'google_reviews_click',
  'email_click',
  'dgsfp_click',
] as const;

export type ForeignersPartnerAction = (typeof FOREIGNERS_PARTNER_ACTIONS)[number];

type ForeignersPartnerParams = {
  action: ForeignersPartnerAction;
  label?: string;
  section?: string;
};

const isKnownAction = (action: string): action is ForeignersPartnerAction =>
  FOREIGNERS_PARTNER_ACTIONS.includes(action as ForeignersPartnerAction);

const professionalLabels = ['partner', 'colaboradores', 'b2b', 'professional', 'form'];
const particularLabels = ['particulares', 'profile_', 'iberia_journey', 'final_cta'];

function resolveAudience(label?: string) {
  const normalized = label ?? '';
  if (professionalLabels.some((value) => normalized.includes(value))) return 'professional';
  if (particularLabels.some((value) => normalized.includes(value))) return 'particular';
  return undefined;
}

function resolveEventName(action: ForeignersPartnerAction, label?: string) {
  if (action === 'form_start') return 'foreigners_partner_form_start';
  if (action === 'form_submit' || action === 'form_submit_success') return 'foreigners_partner_form_submit_success';
  if (action === 'form_submit_error') return 'foreigners_partner_form_submit_error';
  if (action === 'whatsapp_click') return 'foreigners_whatsapp_click';
  if (action === 'google_reviews_click') return 'foreigners_google_reviews_click';
  if (action === 'cta_click') {
    return resolveAudience(label) === 'professional'
      ? 'foreigners_partner_cta_click'
      : 'foreigners_particular_cta_click';
  }

  return null;
}

export function trackForeignersPartner({ action, label, section }: ForeignersPartnerParams) {
  if (typeof window === 'undefined' || !isKnownAction(action)) return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;

  const eventName = resolveEventName(action, label);
  if (!eventName) return;

  const audienceType = resolveAudience(label);

  gtag('event', eventName, {
    page_path: window.location.pathname,
    ...(label ? { cta_location: label } : {}),
    ...(section ? { cta_location: section } : {}),
    ...(audienceType ? { audience_type: audienceType } : {}),
    ...(action.startsWith('form_') ? { form_type: 'professional_referral' } : {}),
    ...(action === 'whatsapp_click' ? { destination: 'whatsapp' } : {}),
    ...(action === 'google_reviews_click' ? { destination: 'google_reviews' } : {}),
  });
}
