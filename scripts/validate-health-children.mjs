import fs from 'node:fs';

const products = fs.readFileSync('lib/products.ts', 'utf8');
const locales = fs.readFileSync('lib/product-locales.ts', 'utf8');
const sections = fs.readFileSync('components/product-sections.tsx', 'utf8');
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
  reembolso: [/80%/, /90%/, /1 millón/i, /15 días/i, /cualquier médico/i, /cualquier especialista/i, /100% de los centros/i, /nosotros reembolsamos/i],
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

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('Health child claim and technical hygiene checks passed.');
