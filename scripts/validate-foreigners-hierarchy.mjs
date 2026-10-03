import { existsSync, readFileSync } from 'node:fs';

const files = {
  funnelContent: readFileSync('lib/foreigners-funnel-content.ts', 'utf8'),
  audiencePage: readFileSync('app/extranjeros/page.tsx', 'utf8'),
  // The public /en/foreigners path is backed by the existing next-intl
  // internal route app/[locale]/extranjeros/page.tsx in production.
  englishPage: readFileSync('app/[locale]/extranjeros/page.tsx', 'utf8'),
  intake: readFileSync('lib/foreigners-intake.ts', 'utf8'),
  visaPage: readFileSync('components/visa-health-knowledge-page.tsx', 'utf8'),
};

const routeFiles = [
  'app/seguros/salud-extranjeros/asisa-health-students/page.tsx',
  'app/seguros/salud-extranjeros/asisa-health-residents/page.tsx',
  'app/[locale]/insurance/health/foreigners/asisa-health-students/page.tsx',
  'app/[locale]/insurance/health/foreigners/asisa-health-residents/page.tsx',
];

const required = [
  ['commercial landing → Studies (ES)', files.funnelContent, "evidenceHref: '/visados/seguro-medico/estudios'"],
  ['commercial landing → Residence (ES)', files.funnelContent, "evidenceHref: '/visados/seguro-medico/residencia-no-lucrativa'"],
  ['commercial landing → Studies (EN)', files.funnelContent, "evidenceHref: '/en/visa-health-insurance/student-visa'"],
  ['commercial landing → Residence (EN)', files.funnelContent, "evidenceHref: '/en/visa-health-insurance/non-lucrative-residence'"],
  ['landing → ES intake', files.audiencePage, "getForeignersIntakePath(locale, situation.key)"],
  ['landing → EN intake', files.englishPage, 'locale="en"'],
  ['intake → central form URLs', files.intake, 'foreignersIntakeForms'],
  ['student evidence → Students', files.visaPage, 'ASISA Health Students: ver la opción de seguro'],
  ['student evidence → Students (EN)', files.visaPage, 'ASISA Health Students: view the insurance option'],
  ['residence evidence → Residents', files.visaPage, 'ASISA Health Residents: revisar esta opción de seguro para el trámite'],
  ['residence evidence → Residents (EN)', files.visaPage, 'ASISA Health Residents: review this insurance option for the process'],
  ['digital nomad conditional wording (ES)', files.visaPage, 'Si tu vía requiere seguro privado, revisar ASISA Health Residents'],
  ['digital nomad conditional wording (EN)', files.visaPage, 'If your route requires private insurance, review ASISA Health Residents'],
];

const missing = required.filter(([, source, snippet]) => !source.includes(snippet)).map(([name]) => name);
const missingRoutes = routeFiles.filter((file) => !existsSync(file));
const legacyLandingFiles = [
  'app/seguros/salud-extranjeros/page.tsx',
  'app/[locale]/insurance/health/foreigners/page.tsx',
  'app/seguros/health-insurance-foreigners-spain/page.tsx',
  'app/seguros/health-foreigners-content.ts',
  'app/extranjeros/foreigners-content.ts',
  'components/foreigners-product-comparison.tsx',
].filter(existsSync);
const oldCommercialParentLinks = /href:\s*['\"](?:\/seguros\/salud-extranjeros|\/en\/insurance\/health\/foreigners)['\"]/.test(`${files.audiencePage}\n${files.englishPage}`);

if (missing.length || missingRoutes.length || legacyLandingFiles.length || oldCommercialParentLinks) {
  const errors = [...missing, ...missingRoutes];
  if (legacyLandingFiles.length) errors.push(`legacy commercial landing files remain: ${legacyLandingFiles.join(', ')}`);
  if (oldCommercialParentLinks) errors.push('new commercial landing still links to a legacy parent URL');
  console.error(`Foreigners hierarchy validation failed: ${errors.join(', ')}`);
  process.exit(1);
}

console.log('Foreigners hierarchy checks passed.');
