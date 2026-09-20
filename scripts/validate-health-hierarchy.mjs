import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const nextConfig = readFileSync('next.config.ts', 'utf8');
const sitemap = readFileSync('app/sitemap.ts', 'utf8');
const healthProductSource = readFileSync('lib/products.ts', 'utf8');
const healthLocaleSource = readFileSync('lib/product-locales.ts', 'utf8');
const healthPageSource = readFileSync('app/seguros/[slug]/page.tsx', 'utf8');
const englishHealthPageSource = readFileSync('app/[locale]/insurance/health/page.tsx', 'utf8');
const healthContentSource = readFileSync('app/seguros/health-content.ts', 'utf8');
const healthGuidanceSource = readFileSync('components/health-final-guidance-section.tsx', 'utf8');
const healthHeroSource = readFileSync('components/editorial-product-hero.tsx', 'utf8');
const healthModalitiesSource = readFileSync('components/health-modalities-section.tsx', 'utf8');
const healthDecisionSupportSource = readFileSync('components/health-decision-support.tsx', 'utf8');
const healthInsightsSource = readFileSync('components/health-insurance-insights.tsx', 'utf8');
const healthSwitchingSource = readFileSync('components/health-switching-guidance.tsx', 'utf8');
const healthUseSource = readFileSync('components/health-use-guidance.tsx', 'utf8');
const healthSourcePresentation = `${healthDecisionSupportSource}\n${healthUseSource}`;

const legacyRoutes = ['/seguros/salud-individual', '/seguros/salud-dental'];
const destinations = ['/seguros/salud', '/seguros/dental'];

const redirectChecks = [
  [legacyRoutes[0], destinations[0]],
  [legacyRoutes[1], destinations[1]],
];

const missingRedirects = redirectChecks.filter(([source, destination]) => {
  const sourcePattern = new RegExp(`source:\\s*['"]${source.replaceAll('/', '\\/')}['"]`);
  const destinationPattern = new RegExp(`destination:\\s*['"]${destination.replaceAll('/', '\\/')}['"]`);
  const sourceIndex = nextConfig.search(sourcePattern);
  const destinationIndex = nextConfig.search(destinationPattern);
  return sourceIndex < 0 || destinationIndex < 0 || !nextConfig.slice(sourceIndex, destinationIndex + destination.length + 40).includes('permanent: true');
}).map(([source]) => source);

const sitemapLeaks = legacyRoutes.filter((route) => sitemap.includes(route));

const trackedFiles = execFileSync('git', ['ls-files', 'app', 'components', 'lib'], { encoding: 'utf8' })
  .split('\n')
  .filter(Boolean);
const ignoredDormantOrLegacy = new Set([
  'app/seguros/salud-individual/page.tsx',
  'app/seguros/salud-dental/page.tsx',
  'components/extranjeros-landing.tsx',
  'components/accidentes-decesos-landing.tsx',
  'components/salud-landing.tsx',
]);
const linkPattern = /(?:href|link)\s*[:=]\s*["'`]\/seguros\/(?:salud-individual|salud-dental)["'`]/;
const liveLinkReferences = trackedFiles
  .filter((file) => !ignoredDormantOrLegacy.has(file))
  .filter((file) => linkPattern.test(readFileSync(file, 'utf8')));

const redirectDestinationsAreCanonical = redirectChecks.every(([, destination]) => !legacyRoutes.includes(destination));

const healthMetadataHasPrice = [
  healthProductSource.match(/slug: 'salud',[\s\S]*?slug: 'mascotas'/)?.[0] ?? '',
  healthLocaleSource.match(/product\.slug === 'salud'[\s\S]*?const copy = mainEnglishCopy/)?.[0] ?? '',
  englishHealthPageSource,
].some((source) => /(?:Desde|from|€\/mes|per month)\s*\d|\d\s*€\s*\/\s*mes/i.test(source));
const healthClaimErrors = [
  ...(healthMetadataHasPrice ? ['volatile price in health-hub metadata'] : []),
  ...(['1.200+', '1,200+', '+1.200', 'familias atendidas', 'familias protegidas', 'families supported', 'families protected'].some((claim) => healthGuidanceSource.includes(claim) || healthHeroSource.includes(claim)) ? ['unsupported family-volume claim'] : []),
  ...(['+10 años', '+10 years'].some((claim) => healthGuidanceSource.includes(claim) || healthHeroSource.includes(claim)) ? ['unsupported experience-count claim'] : []),
  ...(['sin listas de espera', 'without waiting lists', 'sin esperas', 'immediate access', 'acceso inmediato'].some((claim) => healthPageSource.includes(claim) || healthContentSource.includes(claim)) ? ['universal wait-time claim on health hub'] : []),
  ...(['sin carencias', 'no waiting periods'].some((claim) => healthPageSource.includes(claim) || healthContentSource.includes(claim)) ? ['universal waiting-period claim on health hub'] : []),
  ...(['te lo mejoramos', 'we will improve it', 'más de dos años', 'more than two years'].some((claim) => healthPageSource.includes(claim) || healthProductSource.match(/slug: 'salud',[\s\S]*?slug: 'mascotas'/)?.[0]?.includes(claim)) ? ['unsupported quote or continuity claim'] : []),
];
const healthDecisionErrors = [
  ...(['health-coverage-axis-title', 'health-profile-axis-title', '/seguros/salud/completa', '/seguros/salud/reembolso', '/seguros/salud/familias', '/seguros/salud/autonomos', '/seguros/salud/senior', '/seguros/salud-extranjeros'].some((item) => !healthModalitiesSource.includes(item)) ? ['coverage/profile axis or destination missing'] : []),
  ...(['health-copayment-title', 'health-network-title', 'asisa.es/cuadro-medico', 'segurcaixaadeslas.es/cuadromedico', '/en/insurance/health-insurance/reimbursement'].some((item) => !healthDecisionSupportSource.includes(item)) || !healthInsightsSource.includes('health-five-checks-title') ? ['decision-support block or destination missing'] : []),
  ...(['InsuranceAgency', 'MedicalBusiness'].some((type) => healthPageSource.includes(type) || healthDecisionSupportSource.includes(type)) ? ['health schema role regression'] : []),
  ...(healthPageSource.includes('HealthCoverageHighlightsSection') ? ['redundant legacy coverage highlights still rendered'] : []),
];
const healthSwitchingErrors = [
  ...(['health-switching-title', 'health questionnaire', 'pre-existing', 'conforme a lo que pregunte la aseguradora', 'according to what the insurer asks', 'por escrito', 'BOE-A-1980-22501'].some((item) => !healthSwitchingSource.toLowerCase().includes(item.toLowerCase())) ? ['switching/underwriting guidance missing'] : []),
  ...(['guarantee continuity', 'sin perder ninguna cobertura', 'te lo mejoramos', 'we will improve your current policy'].some((claim) => healthSwitchingSource.toLowerCase().includes(claim.toLowerCase())) ? ['universal switching or improvement claim'] : []),
];
const healthUseErrors = [
  ...(['health-use-title', 'health-use', 'authorisation', 'Appointment the same as authorisation', 'segurcaixaadeslas.es/particulares/seguros-medicos/preguntas-frecuentes', 'asisa.es/preguntas-frecuentes/area-privada/pedir-cita', '/en/insurance/health-insurance/reimbursement'].some((item) => !healthUseSource.toLowerCase().includes(item.toLowerCase())) ? ['practical-use guidance missing'] : []),
  ...(['VPI authorises medical services', 'VPI autoriza servicios médicos'].some((claim) => healthUseSource.includes(claim)) ? ['VPI issuer/authoriser role regression'] : []),
];
const healthSourcePresentationErrors = [
  ...(['ASISA', 'SegurCaixa Adeslas', 'Fuentes oficiales', 'Official sources', 'cuadro-medico', 'cuadromedico'].some((item) => !healthSourcePresentation.includes(item)) ? ['generic health hub insurer source presentation missing'] : []),
  ...(['compare ASISA and Adeslas', 'comparamos ASISA y Adeslas', 'choose ASISA', 'elige ASISA', 'choose Adeslas', 'elige Adeslas', 'we offer ASISA and Adeslas'].some((claim) => healthSourcePresentation.toLowerCase().includes(claim.toLowerCase())) ? ['generic health hub commercial insurer-selection wording'] : []),
];

if (missingRedirects.length || sitemapLeaks.length || liveLinkReferences.length || !redirectDestinationsAreCanonical || healthClaimErrors.length || healthDecisionErrors.length || healthSwitchingErrors.length || healthUseErrors.length || healthSourcePresentationErrors.length) {
  const errors = [
    ...missingRedirects.map((route) => `missing permanent redirect: ${route}`),
    ...sitemapLeaks.map((route) => `legacy sitemap URL remains: ${route}`),
    ...liveLinkReferences.map((file) => `live internal legacy link: ${file}`),
    ...(!redirectDestinationsAreCanonical ? ['redirect chain risk'] : []),
    ...healthClaimErrors,
    ...healthDecisionErrors,
    ...healthSwitchingErrors,
    ...healthUseErrors,
    ...healthSourcePresentationErrors,
  ];
  console.error(`Health hierarchy validation failed: ${errors.join(', ')}`);
  process.exit(1);
}

console.log('Health hierarchy checks passed.');
