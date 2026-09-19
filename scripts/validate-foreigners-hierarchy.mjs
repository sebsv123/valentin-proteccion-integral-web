import { existsSync, readFileSync } from 'node:fs';

const files = {
  hubContent: readFileSync('app/seguros/health-foreigners-content.ts', 'utf8'),
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

if (missing.length || crossLinkErrors.length || missingRoutes.length) {
  console.error(`Foreigners hierarchy validation failed: ${[...missing, ...crossLinkErrors, ...missingRoutes].join(', ')}`);
  process.exit(1);
}

console.log('Foreigners hierarchy checks passed.');
