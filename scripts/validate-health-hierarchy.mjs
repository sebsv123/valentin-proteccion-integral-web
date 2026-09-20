import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const nextConfig = readFileSync('next.config.ts', 'utf8');
const sitemap = readFileSync('app/sitemap.ts', 'utf8');

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

if (missingRedirects.length || sitemapLeaks.length || liveLinkReferences.length || !redirectDestinationsAreCanonical) {
  const errors = [
    ...missingRedirects.map((route) => `missing permanent redirect: ${route}`),
    ...sitemapLeaks.map((route) => `legacy sitemap URL remains: ${route}`),
    ...liveLinkReferences.map((file) => `live internal legacy link: ${file}`),
    ...(!redirectDestinationsAreCanonical ? ['redirect chain risk'] : []),
  ];
  console.error(`Health hierarchy validation failed: ${errors.join(', ')}`);
  process.exit(1);
}

console.log('Health hierarchy checks passed.');
