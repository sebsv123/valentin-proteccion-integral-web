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

if (missingRedirects.length || sitemapLeaks.length || liveLinkReferences.length || !redirectDestinationsAreCanonical || healthClaimErrors.length) {
  const errors = [
    ...missingRedirects.map((route) => `missing permanent redirect: ${route}`),
    ...sitemapLeaks.map((route) => `legacy sitemap URL remains: ${route}`),
    ...liveLinkReferences.map((file) => `live internal legacy link: ${file}`),
    ...(!redirectDestinationsAreCanonical ? ['redirect chain risk'] : []),
    ...healthClaimErrors,
  ];
  console.error(`Health hierarchy validation failed: ${errors.join(', ')}`);
  process.exit(1);
}

console.log('Health hierarchy checks passed.');
