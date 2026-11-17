import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { readForeignersMetadata } from './helpers/foreigners-metadata-contract.mjs';
import { healthForeignersContent, englishForeignersDetails } from '../app/seguros/health-foreigners-content.ts';

const buildId = readFileSync('.next/BUILD_ID', 'utf8').trim(); // Fail if no production build exists.
const portReservation = createServer();
portReservation.listen(0, '127.0.0.1');
await once(portReservation, 'listening');
const port = portReservation.address().port;
await new Promise((resolve, reject) => portReservation.close(error => error ? reject(error) : resolve()));
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], { stdio: ['ignore', 'pipe', 'pipe'] });
let serverLog = '', spawnError;
const append = data => { serverLog = (serverLog + data.toString()).slice(-20000); };
child.stdout.on('data', append);
child.stderr.on('data', append);
child.on('error', error => { spawnError = error; });

const base = `http://127.0.0.1:${port}`;
const enPath = '/en/insurance/health/foreigners';
const esPath = '/seguros/salud-extranjeros';
function textOnly(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ');
}
try {
  for (let attempt = 0; ; attempt++) {
    try { await fetch(base + enPath); break; }
    catch (error) { if (attempt >= 40) throw error; await delay(250); }
  }
  const response = await fetch(base + enPath, { redirect: 'manual' });
  assert.equal(response.status, 200);
  const html = await response.text(), metadata = readForeignersMetadata(html);
  assert.deepEqual(metadata.titles, ['Health insurance for visas and residence in Spain | VPI']);
  assert.deepEqual(metadata.descriptions, ['Health insurance for study visas, residence and long-stay procedures in Spain where cover is required. We review the applicable requirements; final decisions rest with the competent authority or consulate.']);
  assert.deepEqual(metadata.canonicals, ['https://valentinproteccionintegral.com' + enPath]);
  assert.equal(metadata.language, 'en');
  for (const href of [enPath, esPath]) assert(html.includes('https://valentinproteccionintegral.com' + href));
  for (const lang of ['es', 'en', 'x-default']) assert(html.includes(`hrefLang="${lang}"`) || html.includes(`hreflang="${lang}"`));
  assert(metadata.schemaObjects.some(value => value['@type'] === 'Service' && value.inLanguage === 'en'));
  assert(!metadata.schemaObjects.some(value => value['@type'] === 'MedicalBusiness'));
  const faq = metadata.schemaObjects.find(value => value['@type'] === 'FAQPage' && value.inLanguage === 'en');
  assert.deepEqual(faq.mainEntity.map(value => ({ q: value.name, a: value.acceptedAnswer.text })), healthForeignersContent.en.faqs);
  const main = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0]; assert(main);
  const visible = textOnly(main);
  for (const phrase of [healthForeignersContent.en.heroTitle, ...healthForeignersContent.en.bullets, englishForeignersDetails.seniorsTitle]) assert(visible.includes(phrase), phrase);
  const owned = JSON.stringify([healthForeignersContent.en, englishForeignersDetails, faq]);
  assert.doesNotMatch(owned, /ASISA|Adeslas|all NIE\/TIE applications|valid for all (?:Spanish )?consulates|no lock-in|over 100 people|30 countries|best policy on the entire market/i);
  assert.doesNotMatch(visible, /ASISA|Adeslas|all NIE\/TIE applications|valid for all (?:Spanish )?consulates|no lock-in|over 100 people|30 countries|best policy on the entire market/i);
  assert(!main.includes('/images/premium/certificado-oficial.png'), 'no simulated consular document on EN page');
  assert(owned.includes('official visa or residence-authorisation refusal letter'));
  assert(owned.includes('only before cover has started'));
  assert.doesNotMatch(owned, /we stand behind our recommendation with a full premium refund/i, 'unapproved VPI guarantee must stay outside website and schema');
  for (const path of ['/en/visa-health-insurance', '/en/visa-health-insurance/student-visa', '/en/visa-health-insurance/non-lucrative-residence', '/contacto']) {
    const target = path === '/contacto' ? '/en/contact' : path;
    assert(main.includes(`href="${target}"`));
  }
  assert(main.includes('https://wa.me/34603448765?text='), 'WhatsApp CTA destination preserved');
  const old = await fetch(base + '/seguros/health-insurance-foreigners-spain', { redirect: 'manual' });
  assert.equal(old.status, 308); assert.equal(new URL(old.headers.get('location'), base).pathname, enPath);
  const esResponse = await fetch(base + esPath); assert.equal(esResponse.status, 200);
  const esHtml = await esResponse.text(), esMeta = readForeignersMetadata(esHtml);
  assert.equal(esMeta.language, 'es');
  assert.deepEqual(esMeta.canonicals, ['https://valentinproteccionintegral.com' + esPath]);
  const esFaq = esMeta.schemaObjects.find(value => value['@type'] === 'FAQPage' && value.inLanguage === 'es');
  assert.deepEqual(esFaq.mainEntity.map(value => ({ q: value.name, a: value.acceptedAnswer.text })), healthForeignersContent.es.faqs);
  assert(esHtml.includes('/images/premium/certificado-oficial.png'), 'ES visual unchanged');
  // Spanish source prefixes approved in main 5c59514; no git-history dependency in shallow CI.
  const spanishHashes = {
    'app/seguros/health-foreigners-content.ts': '156b0ee9be5eb40e66c5988fc89bcf495523da90e7b199f1935d3fa7ef2ff57c',
    'components/foreigners-product-comparison.tsx': '90966eb983da15ee2b54f96aceadf5d57948bf4d0eb570fa3cdb470fe4cebed7',
  };
  for (const [file, expectedHash] of Object.entries(spanishHashes)) {
    const current = readFileSync(file, 'utf8');
    assert.equal(createHash('sha256').update(current.slice(0, current.indexOf('  en:'))).digest('hex'), expectedHash, `${file}: Spanish copy unchanged`);
  }
  console.log(`PASS ${buildId}: EN commercial messages, constrained payment/70+ eligibility/refunds, FAQ parity, Service schema, preserved metadata/hreflang, ES copy and historic 308. GET only; no forms or messages sent.`);
} catch (error) {
  console.error(serverLog); throw error;
} finally {
  if (child.exitCode === null && !child.signalCode) {
    const closed = once(child, 'close'); child.kill('SIGTERM'); let timer;
    try { await Promise.race([closed, new Promise(resolve => { timer = setTimeout(() => { child.kill('SIGKILL'); resolve(); }, 5000); })]); }
    finally { clearTimeout(timer); }
  }
}
