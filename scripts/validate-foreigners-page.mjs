import { readFileSync } from 'node:fs';

const files = {
  page: readFileSync('app/extranjeros/page.tsx', 'utf8'),
  form: readFileSync('components/foreigners-partner-form.tsx', 'utf8'),
  api: readFileSync('app/api/professional-referrals/route.ts', 'utf8'),
  analytics: readFileSync('lib/foreigners-partner-analytics.ts', 'utf8'),
};

const requiredSnippets = [
  ['professional name field', files.form, 'professionalName'],
  ['organization field', files.form, 'organization'],
  ['professional email field', files.form, 'professionalEmail'],
  ['client name field', files.form, 'clientName'],
  ['client contact field', files.form, 'clientContact'],
  ['procedure type field', files.form, 'procedureType'],
  ['authorization checkbox', files.form, 'clientAuthorization'],
  ['privacy link', files.form, '/privacidad'],
  ['sensitive document notice', files.form, 'No adjuntes pasaportes'],
  ['server validation schema', files.api, 'referralSchema.safeParse'],
  ['server lead webhook', files.api, 'LEAD_WEBHOOK_URL'],
  ['server lead secret', files.api, 'LEAD_WEBHOOK_SECRET'],
  ['lead secret header', files.api, "'X-Lead-Secret'"],
  ['honeypot', files.form, 'website'],
  ['success state', files.form, "'success'"],
  ['error state', files.form, "'error'"],
  ['generic event', files.analytics, 'foreigners_partner'],
  ['production title', files.page, 'Seguro médico para extranjeros en España | Valentín Protección Integral'],
  ['production description', files.page, 'Seguro médico para estudios, visado, residencia o renovación en España.'],
  ['canonical', files.page, 'site.domain}/extranjeros'],
  ['webpage schema', files.page, "'@type': 'WebPage'"],
  ['breadcrumb schema', files.page, "'@type': 'BreadcrumbList'"],
  ['faq schema', files.page, "'@type': 'FAQPage'"],
];

const forbiddenPageSnippets = [
  ['DGSFP hero link text', 'Consultar en el registro público de la DGSFP'],
];

const requiredActions = [
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
];

const requiredEvents = [
  'foreigners_particular_cta_click',
  'foreigners_partner_cta_click',
  'foreigners_whatsapp_click',
  'foreigners_google_reviews_click',
  'foreigners_partner_form_start',
  'foreigners_partner_form_submit_success',
  'foreigners_partner_form_submit_error',
];

const missing = [];

for (const [name, content, snippet] of requiredSnippets) {
  if (!content.includes(snippet)) missing.push(name);
}

for (const [name, snippet] of forbiddenPageSnippets) {
  if (files.page.includes(snippet)) missing.push(`forbidden ${name}`);
}

for (const action of requiredActions) {
  if (!files.analytics.includes(`'${action}'`)) missing.push(`analytics action ${action}`);
}

for (const event of requiredEvents) {
  if (!files.analytics.includes(event)) missing.push(`analytics event ${event}`);
}

if (missing.length) {
  console.error(`Missing foreigners page requirements: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Foreigners page related checks passed.');
