import { readFileSync } from 'node:fs';

const files = {
  page: readFileSync('app/extranjeros/page.tsx', 'utf8'),
  copy: readFileSync('lib/foreigners-funnel-content.ts', 'utf8'),
  intake: readFileSync('lib/foreigners-intake.ts', 'utf8'),
  intakeStart: readFileSync('components/foreigners-intake-start.tsx', 'utf8'),
  // Production's next-intl path mapping exposes /en/foreigners through this
  // internal route; keep the validator aligned with that routing contract.
  englishPage: readFileSync('app/[locale]/extranjeros/page.tsx', 'utf8'),
  form: readFileSync('components/foreigners-partner-form.tsx', 'utf8'),
  api: readFileSync('app/api/professional-referral/route.ts', 'utf8'),
  analytics: readFileSync('lib/foreigners-partner-analytics.ts', 'utf8'),
  answerFirst: readFileSync('components/answer-first-section.tsx', 'utf8'),
  answerFirstStyles: readFileSync('components/answer-first-section.module.css', 'utf8'),
  funnelStyles: readFileSync('app/extranjeros/foreigners-funnel.module.css', 'utf8'),
  partnerNetwork: readFileSync('components/foreigners-partner-network.tsx', 'utf8'),
  partnerConfig: readFileSync('lib/foreigners-partners.ts', 'utf8'),
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
  ['server validation schema', files.api, 'professionalReferralSchema.safeParse'],
  ['server SMTP delivery', files.api, 'sendLeadEmail'],
  ['local SMTP guard', files.api, 'LeadEmailBlockedError'],
  ['honeypot', files.form, 'website'],
  ['success state', files.form, "'success'"],
  ['error state', files.form, "'error'"],
  ['generic event', files.analytics, 'foreigners_partner'],
  ['production title', files.copy, 'Seguro médico para extranjeros en España | Valentín Protección Integral'],
  ['production description', files.copy, 'Orientación sobre seguro médico en España para estudios, residencia, renovación y familia.'],
  ['canonical', files.page, 'site.domain}/extranjeros'],
  ['English canonical', files.englishPage, '/en/foreigners'],
  ['webpage schema', files.page, "'@type': 'WebPage'"],
  ['breadcrumb schema', files.page, "'@type': 'BreadcrumbList'"],
  ['faq schema', files.page, "'@type': 'FAQPage'"],
  ['controlled ES intake route', files.intake, "locale === 'en' ? '/en/start' : '/start'"],
  ['controlled EN intake route', files.intake, "studies: 'studies'"],
  ['Spanish responder URL', files.intake, '1FAIpQLSfgJ8nTRnvW8onuF0Mq_1fBKyUb2z-of5a5yIXnxpc39ROv9g/viewform'],
  ['English responder URL', files.intake, '1FAIpQLSe83dajswVIh-96JvpQpsGayvjZFQdL9KU8S65Hq-4ihEvfhQ/viewform'],
  ['single source of truth', files.intake, 'foreignersIntakeForms'],
  ['temporary server redirect', files.intake, 'getForeignersIntakeUrl'],
  ['Spanish general quick answer CTA', files.copy, "{ label: 'Obtener mi propuesta', href: '/start' }"],
  ['English general quick answer CTA', files.copy, "{ label: 'Get my personalised quote', href: '/en/start' }"],
  ['quick answer globe slot', files.page, 'visual={<SpainArrivalGlobe />}'],
  ['quick answer stable layout', files.answerFirst, 'styles.layout'],
  ['quick answer desktop columns', files.answerFirstStyles, 'grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr)'],
  ['quick answer mobile stacking', files.answerFirstStyles, 'display: grid'],
  ['quick answer fact titles', files.answerFirst, 'styles.factTitle'],
  ['quick answer fact card styling', files.answerFirstStyles, '.factCard'],
  ['quick answer vertical fact list', files.answerFirstStyles, 'flex-direction: column'],
  ['quick answer fact marker', files.answerFirst, 'styles.factMarker'],
  ['Spanish general visa guidance link', files.copy, "label: 'Ver requisitos para visados', href: '/visados/seguro-medico'"],
  ['Spanish general intake link', files.copy, "label: 'Obtener mi propuesta', href: '/start'"],
  ['English general visa guidance link', files.copy, "label: 'View visa insurance requirements', href: '/en/visa-health-insurance'"],
  ['English general intake link', files.copy, "label: 'Get my personalised quote', href: '/en/start'"],
  ['hero controlled grid', files.page, 'className={styles.heroGrid}'],
  ['hero controlled frame', files.page, 'className={styles.heroMedia}'],
  ['hero controlled image', files.page, 'className={styles.heroImage}'],
  ['hero natural image sizing', files.page, 'width={1400} height={788}'],
  ['hero desktop frame height', files.funnelStyles, 'height: 520px'],
  ['hero object position', files.funnelStyles, 'object-position: 68% center'],
  ['hero reassurance', files.page, 'styles.heroReassurance'],
  ['process CTA route', files.page, 'label="process_quote"'],
  ['process CTA styling', files.page, 'styles.processCta'],
  ['Spanish process CTA microcopy', files.page, 'Te llevará unos 2 minutos · Sin pago'],
  ['English process CTA microcopy', files.page, 'Takes around 2 minutes · No payment required'],
  ['situation CTA affordance', files.page, 'styles.situationAction'],
  ['quick answer primary CTA', files.page, 'emphasizeFirstLink'],
  ['quick answer CTA tracking', files.page, "label: 'quick_answer_quote'"],
  ['process CTA tracking', files.page, 'label="process_quote"'],
  ['final CTA tracking', files.page, 'label="final_quote"'],
  ['final WhatsApp CTA', files.page, 'label="final_whatsapp_secondary"'],
  ['final CTA card', files.page, 'className={styles.finalCard}'],
  ['Spanish final proposal copy', files.copy, "finalCta: 'Obtener mi propuesta'"],
  ['English final proposal copy', files.copy, "finalCta: 'Get my personalised quote'"],
  ['partner network component', files.partnerNetwork, 'data-foreigners-section="partners"'],
  ['partner network empty state', files.partnerNetwork, 'if (logos.length === 0) return null'],
  ['partner network Spanish copy', files.partnerNetwork, 'RED DE COLABORADORES'],
  ['partner network English copy', files.partnerNetwork, 'PARTNER NETWORK'],
  ['Kors Academy partner asset', files.partnerConfig, "name: 'Kors Academy'"],
  ['Blueprint Spain partner asset', files.partnerConfig, "name: 'Blueprint Spain'"],
  ['Student Pro Plus partner asset', files.partnerConfig, "name: 'Student Pro Plus'"],
  ['VIP Global Perú partner asset', files.partnerConfig, "name: 'VIP Global Perú'"],
  ['Plan B Immigration partner asset', files.partnerConfig, "name: 'Plan B Immigration'"],
  ['Wejha partner asset', files.partnerConfig, "name: 'Wejha'"],
  ['Esperon partner asset', files.partnerConfig, "name: 'Esperon'"],
  ['Nomadesco partner asset', files.partnerConfig, "name: 'Nomadesco'"],
['Aara Consultancy partner asset', files.partnerConfig, "name: 'Aara Consultancy'"],
  ['Relocation Centers partner asset', files.partnerConfig, "name: 'Relocation Centers'"],
  ['Experta Travel partner asset', files.partnerConfig, "name: 'Experta Travel'"],
  ['partner logo rendering', files.partnerNetwork, 'object-contain'],
];

const missing = [];
const reviewsIndex = files.page.indexOf('data-foreigners-section="opiniones"');
const professionalIndex = files.page.indexOf('data-foreigners-section="profesionales"');
const benefitsIndex = files.page.indexOf('data-foreigners-section="beneficios"');
const partnersIndex = files.page.indexOf('<ForeignersPartnerNetwork locale={locale} logos={foreignersPartnerLogos} />');
if (benefitsIndex === -1 || partnersIndex === -1 || reviewsIndex === -1 || professionalIndex === -1 || !(benefitsIndex < partnersIndex && partnersIndex < reviewsIndex && reviewsIndex < professionalIndex)) {
  missing.push('reviews before professional channel');
}

const forbiddenPageSnippets = [
  ['DGSFP hero link text', 'Consultar en el registro público de la DGSFP'],
];

const forbiddenPartnerSnippets = [
  ['partner placeholder copy', 'Logos will be added'],
  ['Soraida Frontado partner', 'Soraida Frontado'],
  ['EasyNest partner', 'EasyNest'],
  ['Albali partner', 'Albali'],
  ['GOEDU partner', 'GOEDU'],
  ['López de Pablo partner', 'López de Pablo'],
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

for (const [name, content, snippet] of requiredSnippets) {
  if (!content.includes(snippet)) missing.push(name);
}

for (const [name, snippet] of forbiddenPageSnippets) {
  if (files.page.includes(snippet)) missing.push(`forbidden ${name}`);
}

for (const [name, snippet] of forbiddenPartnerSnippets) {
  if (files.partnerNetwork.includes(snippet) || files.partnerConfig.includes(snippet)) missing.push(`forbidden ${name}`);
}

for (const action of requiredActions) {
  if (!files.analytics.includes(`'${action}'`)) missing.push(`analytics action ${action}`);
}

for (const event of requiredEvents) {
  if (!files.analytics.includes(event)) missing.push(`analytics event ${event}`);
}

const forbiddenIntakePatterns = [
  ['/edit URL', /forms\/d\/[^'"`\s]+\/edit/],
  ['legacy form ID', /1InoetaEJkLd6NZufRNVpYd9_l_A0rP8eGcEgLDc2PQs|1V5nA-MbVzkGiz3DGKx59bXFMNABDGIraK3R5ijGnprc/],
  ['permanent redirect', /permanentRedirect/],
];
for (const [name, pattern] of forbiddenIntakePatterns) {
  if (pattern.test(files.intake)) missing.push(`forbidden ${name}`);
}

const routeFiles = [
  'app/start/page.tsx',
  'app/start/[situation]/page.tsx',
  'app/[locale]/start/page.tsx',
  'app/[locale]/start/[situation]/page.tsx',
];
for (const routeFile of routeFiles) {
  try {
    readFileSync(routeFile, 'utf8');
  } catch {
    missing.push(`missing route ${routeFile}`);
  }
}

const commercialCtaExpectations = [
  ['hero route', files.page, 'href={intakeHref}'],
  ['situation route', files.page, 'getForeignersIntakePath(locale, situation.key)'],
  ['final route', files.page, 'label="final_quote"'],
  ['Spanish hero/quick/final copy', `${files.page}\n${files.copy}`, 'Obtener mi propuesta'],
  ['English hero/quick copy', `${files.englishPage}\n${files.copy}`, 'Get my personalised quote'],
];
for (const [name, source, snippet] of commercialCtaExpectations) {
  if (!source.includes(snippet)) missing.push(name);
}

if (missing.length) {
  console.error(`Missing foreigners page requirements: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Foreigners page related checks passed.');
