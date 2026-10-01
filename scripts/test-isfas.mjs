import { readFileSync, existsSync } from 'node:fs';

const pagePath = 'app/mutualistas/isfas/page.tsx';
const guidePath = 'lib/mutualistas/isfas.ts';
const interactionsPath = 'components/mutualistas/isfas-interactions.tsx';
const partnersPath = 'lib/mutualistas/partners.ts';
const proxyPath = 'proxy.ts';

const page = readFileSync(pagePath, 'utf8');
const guide = readFileSync(guidePath, 'utf8');
const interactions = readFileSync(interactionsPath, 'utf8');
const partners = readFileSync(partnersPath, 'utf8');
const proxy = readFileSync(proxyPath, 'utf8');

const failures = [];
function check(name, condition, detail = '') {
  if (!condition) failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
}
function count(text, pattern) {
  return (text.match(pattern) || []).length;
}
function hasAll(text, snippets) {
  return snippets.every((snippet) => text.includes(snippet));
}

// 1. Route and critical content: local structural check; no external scraping.
check('1 ruta ISFAS y contenido crítico', existsSync(pagePath) && hasAll(page, [
  'data-isfas-page', 'Tu asistencia', 'ASISA', 'Adeslas', '112', 'isfasFaq',
]));

// 2–3. FAQ cardinality and single source for visible/schema output.
const faqQuestions = count(guide, /^\s+\{ question:/gm);
check('2 exactamente 23 FAQ', faqQuestions === 23, `detectadas ${faqQuestions}`);
check('3 visible y FAQPage comparten fuente', page.includes('isfasFaq.map') && page.includes('group.items.slice(0, 4)') && page.includes('FaqQuestion'));

// 4. One H1 and a ref-independent canonical.
check('4 único H1 y canonical limpio', count(page, /<h1\b/g) === 1 && page.includes("const canonical = `${siteOrigin}${isfasGuide.path}`") && proxy.includes("cleanUrl.search = ''"));

// 5. ISFAS modalities are explicitly mapped.
check('5 asociaciones A1/A2/A5', hasAll(page, ['<strong>A1</strong> Red pública', '<strong>A2</strong> Adeslas', '<strong>A5</strong> ASISA']) && guide.includes("code: 'A2'") && guide.includes("code: 'A5'"));

// 6. Emergency numbers and tel destinations.
check('6 teléfonos y href tel', page.includes('href="tel:112"') && hasAll(guide, ['emergencyPhone: \'900 900 118\'', 'emergencyPhone: \'900 322 237\'', "emergencyHref: 'tel:900900118'", "emergencyHref: 'tel:900322237'"]));

// 7. Official destinations are structural only; availability is not scraped here.
check('7 destinos oficiales críticos', hasAll(guide, [
  'https://www.defensa.gob.es/isfas/',
  'https://sede.isfas.gob.es/sede-web/catalogo',
  'https://www.asisa.es/cuadro-medico',
  'https://www.segurcaixaadeslas.es/mutualidades/isfas',
  'https://www.segurcaixaadeslas.es/servicios-para-clientes',
]));

// 8–9. Selector, contextual WhatsApp and insurer-specific outbound tracking.
check('8 flujo ASISA y WhatsApp contextual', page.includes('data-isfas-entity="asisa"') && page.includes('context="asisa"') && interactions.includes("'entidad_asisa'") && interactions.includes('selectedEntity'));
check('9 flujo Adeslas y WhatsApp contextual', page.includes('data-isfas-entity="adeslas"') && page.includes('context="adeslas"') && interactions.includes("'entidad_adeslas'") && interactions.includes('selectedEntity'));

// 10. Referral semantics: allowlist only, arbitrary values never become partner,
// and a valid existing session attribution survives a later invalid ref.
check('10 referral allowlist y conservación explícita', partners.includes("'academia-combate'") && proxy.includes('Object.hasOwn(isfasPartners') && interactions.includes('if (stored && Object.hasOwn(partners, stored)) ref = stored') && !interactions.includes('sessionStorage.removeItem(storageKey)'));

// 11. Hash selector plus server HTML fallback (details are present without JS).
check('11 FAQ por hash y sin JS', hasAll(interactions, ['hashchange', 'faq-isfas', 'faq-asisa', 'faq-adeslas']) && hasAll(page, ['data-isfas-faq-groups', '<details', 'open={index === 0}']));

// 12. Local tracking contract: allowlisted payload, no WhatsApp message, and
// internal navigation separated from official authorization exits.
check('12 tracking local allowlist y separación de navegación/salida', hasAll(interactions, [
  "new Set(['page_path', 'partner_ref', 'entity', 'purpose'])",
  'Object.fromEntries(Object.entries(payload).filter',
  'isfas_phone_click',
]) && !page.includes('href="#autorizaciones" data-isfas-track="authorization_click"') && count(page, 'track="authorization_click"') === 1 && !interactions.includes("trackEvent('isfas_whatsapp_click', eventParams({ message"));

if (failures.length) {
  console.error(`ISFAS hardening checks failed (${failures.length}):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log('ISFAS hardening checks passed (12 controls).');
