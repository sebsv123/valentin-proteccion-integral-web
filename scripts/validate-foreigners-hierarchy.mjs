import { existsSync, readFileSync } from 'node:fs';

const files = {
  hubContent: readFileSync('app/seguros/health-foreigners-content.ts', 'utf8'),
  hubPage: readFileSync('app/seguros/salud-extranjeros/page.tsx', 'utf8'),
  comparison: readFileSync('components/foreigners-product-comparison.tsx', 'utf8'),
  audienceContent: readFileSync('app/extranjeros/foreigners-content.ts', 'utf8'),
  audiencePage: readFileSync('app/extranjeros/page.tsx', 'utf8'),
  visaPage: readFileSync('components/visa-health-knowledge-page.tsx', 'utf8'),
};

const routeFiles = [
  'app/seguros/salud-extranjeros/asisa-health-students/page.tsx',
  'app/seguros/salud-extranjeros/asisa-health-residents/page.tsx',
  'app/[locale]/insurance/health/foreigners/asisa-health-students/page.tsx',
  'app/[locale]/insurance/health/foreigners/asisa-health-residents/page.tsx',
];

const required = [
  ['commercial hub → Students (ES)', files.hubContent, '/seguros/salud-extranjeros/asisa-health-students'],
  ['commercial hub → Residents (ES)', files.hubContent, '/seguros/salud-extranjeros/asisa-health-residents'],
  ['commercial hub → Students (EN)', files.hubContent, '/en/insurance/health/foreigners/asisa-health-students'],
  ['commercial hub → Residents (EN)', files.hubContent, '/en/insurance/health/foreigners/asisa-health-residents'],
  ['audience → Students (ES)', files.audienceContent, "primaryHref: '/seguros/salud-extranjeros/asisa-health-students'"],
  ['audience → Residents (ES)', files.audienceContent, "primaryHref: '/seguros/salud-extranjeros/asisa-health-residents'"],
  ['audience → Students (EN)', files.audienceContent, "primaryHref: '/en/insurance/health/foreigners/asisa-health-students'"],
  ['audience → Residents (EN)', files.audienceContent, "primaryHref: '/en/insurance/health/foreigners/asisa-health-residents'"],
  ['student evidence → Students', files.visaPage, 'ASISA Health Students: ver la opción de seguro'],
  ['student evidence → Students (EN)', files.visaPage, 'ASISA Health Students: view the insurance option'],
  ['residence evidence → Residents', files.visaPage, 'ASISA Health Residents: revisar esta opción de seguro para el trámite'],
  ['residence evidence → Residents (EN)', files.visaPage, 'ASISA Health Residents: review this insurance option for the process'],
  ['digital nomad conditional wording (ES)', files.visaPage, 'Si tu vía requiere seguro privado, revisar ASISA Health Residents'],
  ['digital nomad conditional wording (EN)', files.visaPage, 'If your route requires private insurance, review ASISA Health Residents'],
  ['audience route rendering', files.audiencePage, 'foreignersContent[locale].situationRoutes[item.route]'],
];

const missing = required.filter(([, source, snippet]) => !source.includes(snippet)).map(([name]) => name);
const studentRoutes = files.audienceContent.match(/students: \{([\s\S]*?)\n\s+\},\n\s+residence:/)?.[1] ?? '';
const residenceRoutes = files.audienceContent.match(/residence: \{([\s\S]*?)\n\s+\},\n\s+uncertain:/)?.[1] ?? '';
const crossLinkErrors = [
  studentRoutes.includes('asisa-health-residents') ? 'student route points to Residents as primary' : null,
  residenceRoutes.includes('asisa-health-students') ? 'residence route points to Students as primary' : null,
].filter(Boolean);
const missingRoutes = routeFiles.filter((file) => !existsSync(file));
const currentProducts = ['ASISA Health Students', 'ASISA Health Residents'];
const missingCurrentProducts = currentProducts.filter((product) => !files.comparison.includes(product) || !files.hubPage.includes(product));
const legacyCommercialTerms = /Health Premium|Residents Premium|Newcomers|modalidades Premium|Premium options/i.test(`${files.comparison}\n${files.hubPage}\n${files.hubContent}\n${files.audienceContent}\n${files.audiencePage}`);

if (missing.length || crossLinkErrors.length || missingRoutes.length || missingCurrentProducts.length || legacyCommercialTerms) {
  const errors = [...missing, ...crossLinkErrors, ...missingRoutes];
  if (missingCurrentProducts.length) errors.push(`missing current product: ${missingCurrentProducts.join(', ')}`);
  if (legacyCommercialTerms) errors.push('legacy Premium/Newcomers term exposed by current commercial files');
  console.error(`Foreigners hierarchy validation failed: ${errors.join(', ')}`);
  process.exit(1);
}

console.log('Foreigners hierarchy checks passed.');
