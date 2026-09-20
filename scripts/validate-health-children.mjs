import fs from 'node:fs';

const products = fs.readFileSync('lib/products.ts', 'utf8');
const locales = fs.readFileSync('lib/product-locales.ts', 'utf8');
const sections = fs.readFileSync('components/product-sections.tsx', 'utf8');
const subpageRoute = fs.readFileSync('app/seguros/[slug]/[subslug]/page.tsx', 'utf8');
const comprehensiveGuidance = fs.readFileSync('components/health-comprehensive-guidance.tsx', 'utf8');
const reimbursementGuidance = fs.readFileSync('components/health-reimbursement-guidance.tsx', 'utf8');
const failures = [];

const esEntries = ['completa', 'reembolso', 'familias', 'autonomos', 'senior'];
const enEntries = ['salud-completa', 'salud-reembolso', 'salud-familias', 'salud-autonomos', 'salud-senior'];

for (const slug of esEntries) {
  const entry = products.match(new RegExp(`  \\{ parent: 'salud', slug: '${slug}'[^\\n]*`))?.[0] ?? '';
  if (!entry) failures.push(`missing ES child entry: ${slug}`);
}
for (const slug of enEntries) {
  const entry = locales.match(new RegExp(`  '${slug}': \\{[^\\n]*`))?.[0] ?? '';
  if (!entry) failures.push(`missing EN child entry: ${slug}`);
}

const es = Object.fromEntries(esEntries.map((slug) => [slug, products.match(new RegExp(`  \\{ parent: 'salud', slug: '${slug}'[^\\n]*`))?.[0] ?? '']));
const en = Object.fromEntries(enEntries.map((slug) => [slug, locales.match(new RegExp(`  '${slug}': \\{[^\\n]*`))?.[0] ?? '']));

const forbidden = {
  completa: [/Cobertura Total/i, /máxima cobertura/i, /más fuerte/i, /sin restricciones/i, /todos los especialistas/i, /sin derivaciones innecesarias/i],
  reembolso: [/80%/, /90%/, /1 millón/i, /15 días/i, /cualquier especialista/i, /100% de los centros/i, /nosotros reembolsamos/i],
  familias: [/Pediatría Incluida/i, /mejor equilibrio/i],
  autonomos: [/deducción fiscal incluida/i, /asesoramiento fiscal incluido/i, /sin listas de espera/i, /€500/i],
  senior: [/Sin Esperas/i, /12\.000/i, /sin sorpresas en el precio/i, /entre 55 y 84/i],
};
for (const [slug, patterns] of Object.entries(forbidden)) {
  for (const pattern of patterns) {
    if (pattern.test(es[slug])) failures.push(`forbidden ES ${slug}: ${pattern}`);
  }
}
const forbiddenEn = {
  'salud-completa': [/most robust/i, /without the limits/i],
  'salud-reembolso': [/80%/, /90%/, /€1 million/i, /anywhere in the world/i],
  'salud-familias': [/Paediatric Cover/i, /right balance/i],
  'salud-autonomos': [/deduction included/i, /waiting lists/i, /€500/i],
  'salud-senior': [/55 and 84/i, /without waiting/i, /no waiting/i],
};
for (const [slug, patterns] of Object.entries(forbiddenEn)) {
  for (const pattern of patterns) {
    if (pattern.test(en[slug])) failures.push(`forbidden EN ${slug}: ${pattern}`);
  }
}
if (products.includes('/images/products/reembolso-hero.webp')) failures.push('missing reimbursement hero asset still referenced');
if (!fs.existsSync('public/images/products/health-medical-care.webp')) failures.push('replacement reimbursement hero asset missing');
if (!sections.includes('Key questions for comparing ${product.label} without getting lost in the fine print')) failures.push('English child related-products heading missing');
if (!subpageRoute.includes('isComprehensive') || !subpageRoute.includes('HealthComprehensiveGuidance') || !subpageRoute.includes('<ProductDecisionGrid product={product} locale={locale} />')) failures.push('Comprehensive child does not own its decision guidance');
if (!comprehensiveGuidance.includes('comprehensive-change-title') || !comprehensiveGuidance.includes('comprehensive-scenarios-title') || !comprehensiveGuidance.includes('comprehensive-checks-title') || !comprehensiveGuidance.toLowerCase().includes('waiting periods') || !comprehensiveGuidance.toLowerCase().includes('prior authorisation')) failures.push('Comprehensive decision guidance or checks missing');
if (!subpageRoute.includes('suppressPriceGuarantee={isComprehensive || isReimbursement}') || !subpageRoute.includes('suppressTrustMetrics={isComprehensive || isReimbursement}')) failures.push('Comprehensive/Reimbursement unsupported shared claims not suppressed');
if (es.completa.includes('1.200+') || en['salud-completa'].includes('1,200+') || es.completa.includes('Mejor precio') || en['salud-completa'].includes('better price')) failures.push('Unsupported Comprehensive trust or price claim remains');
if (!subpageRoute.includes('isReimbursement') || !subpageRoute.includes('HealthReimbursementGuidance') || !subpageRoute.includes('suppressPriceGuarantee={isComprehensive || isReimbursement}') || !subpageRoute.includes('suppressTrustMetrics={isComprehensive || isReimbursement}')) failures.push('Reimbursement child isolation or shared-claim suppression missing');
if (!reimbursementGuidance.includes('pagar primero') || !reimbursementGuidance.includes('percentage') || !reimbursementGuidance.includes('límite') || !reimbursementGuidance.includes('Official sources consulted')) failures.push('Reimbursement decision guidance is incomplete');
if (es.reembolso.includes('80%') || es.reembolso.includes('90%') || es.reembolso.includes('€100') || es.reembolso.includes('€1m') || en['salud-reembolso'].includes('80%') || en['salud-reembolso'].includes('90%') || en['salud-reembolso'].includes('€100') || en['salud-reembolso'].includes('€1m')) failures.push('Generic reimbursement percentages or caps remain');
if (es.reembolso.includes('Mejor precio') || en['salud-reembolso'].includes('better price') || es.reembolso.includes('15 días') || en['salud-reembolso'].includes('15 days')) failures.push('Reimbursement guarantee or fixed SLA remains');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('Health child claim and technical hygiene checks passed.');
