import { readFileSync } from 'node:fs';

const page = readFileSync('app/extranjeros/page.tsx', 'utf8');
const heroCss = readFileSync('app/extranjeros/extranjeros-hero.module.css', 'utf8');
const globe = readFileSync('components/extranjeros/spain-arrival-globe.tsx', 'utf8');
const iberia = readFileSync('components/extranjeros/iberia-journey-section.tsx', 'utf8');
const reviews = readFileSync('components/google-reviews-carousel.tsx', 'utf8');

const required = [
  ['production title', page, 'Seguro médico para extranjeros en España | Valentín Protección Integral'],
  ['production description', page, 'Seguro médico para estudios, visado, residencia o renovación en España.'],
  ['canonical', page, 'site.domain}/extranjeros'],
  ['webpage schema', page, "'@type': 'WebPage'"],
  ['breadcrumb schema', page, "'@type': 'BreadcrumbList'"],
  ['faq schema', page, "'@type': 'FAQPage'"],
  ['selector anchor', page, 'id="elige"'],
  ['reviews anchor', page, 'id="testimonios"'],
  ['collaborators anchor', page, 'id="colaboradores"'],
  ['legacy referral anchor', page, 'id="derivar"'],
  ['referral form anchor', page, 'id="derivar-consulta"'],
  ['hero background module', heroCss, '.heroBackdrop'],
  ['globe v3 asset', globe, 'globe-cutout-v3.webp'],
  ['iberia journey', iberia, 'Del primer requisito a tu póliza'],
  ['google reviews component', reviews, 'Ver todas en Google'],
];

const forbidden = [
  ['old instagram handle', page, 'segurosrosavalentin'],
  ['DGSFP hero link text', page, 'Consultar en el registro público de la DGSFP'],
];

const missing = [];

for (const [name, content, snippet] of required) {
  if (!content.includes(snippet)) missing.push(name);
}

for (const [name, content, snippet] of forbidden) {
  if (content.includes(snippet)) missing.push(`forbidden ${name}`);
}

if (missing.length) {
  console.error(`Missing foreigners landing requirements: ${missing.join(', ')}`);
  process.exit(1);
}

console.log('Foreigners landing related checks passed.');
