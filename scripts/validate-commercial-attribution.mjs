import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';

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

const attribution = '?utm_source=partner&utm_medium=referral&utm_campaign=vpi-360-sprint-02&partner=student-pro-plus';
const expectedForms = {
  es: 'https://docs.google.com/forms/d/e/1FAIpQLSfgJ8nTRnvW8onuF0Mq_1fBKyUb2z-of5a5yIXnxpc39ROv9g/viewform',
  en: 'https://docs.google.com/forms/d/e/1FAIpQLSe83dajswVIh-96JvpQpsGayvjZFQdL9KU8S65Hq-4ihEvfhQ/viewform',
};
const base = `http://127.0.0.1:${port}`;
const get = path => fetch(base + path, { redirect: 'manual', signal: AbortSignal.timeout(30000) });
const hrefs = html => [...html.matchAll(/href="([^"<>]+)"/g)].map(match => match[1].replaceAll('&amp;', '&'));
function hasAttribution(href) {
  const query = new URL(href, base).searchParams;
  return [...new URLSearchParams(attribution)].every(([key, value]) => query.get(key) === value);
}
try {
  for (let attempt = 0; ; attempt++) {
    try { await get('/extranjeros'); break; }
    catch (error) { if (attempt >= 40) throw error; await delay(250); }
  }
  for (const [locale, landing, start, slugs, evidence] of [
    ['es', '/extranjeros', '/start', ['estudios', 'residencia', 'renovacion-familia'], '/visados/seguro-medico/estudios'],
    ['en', '/en/foreigners', '/en/start', ['studies', 'residence', 'renewal-family'], '/en/visa-health-insurance/student-visa'],
  ]) {
    const response = await get(landing + attribution);
    assert.equal(response.status, 200);
    const links = hrefs(await response.text());
    for (const path of [start, ...slugs.map(slug => `${start}/${slug}`)]) {
      const link = links.find(href => href.split('?')[0] === path && hasAttribution(href));
      assert(link, `${landing}: missing attributed CTA ${path}`);
      const redirect = await get(link);
      assert.equal(redirect.status, 307);
      assert.equal(redirect.headers.get('location'), expectedForms[locale]);
    }
    const evidenceLink = links.find(href => href.split('?')[0] === evidence && hasAttribution(href));
    assert(evidenceLink, `${landing}: evidence link must preserve origin`);
    const evidenceResponse = await get(evidenceLink);
    assert.equal(evidenceResponse.status, 200);
    const evidenceLinks = hrefs(await evidenceResponse.text());
    assert(evidenceLinks.some(href => href.split('?')[0] === `${start}/${slugs[0]}` && hasAttribution(href)), `${evidence}: proposal CTA must preserve origin`);
    assert.equal((await get(`${start}/unknown${attribution}`)).status, 404);
    const plain = await get(start);
    assert.equal(plain.headers.get('location'), expectedForms[locale]);
    const hostile = await get(landing + '?partner=private-name&utm_campaign=someone%40example.com&utm_content=private');
    const hostileLinks = hrefs(await hostile.text()).filter(href => href.startsWith(start));
    assert(hostileLinks.length > 0);
    assert(hostileLinks.every(href => !href.includes('?')), 'unreviewed values must not propagate into CTA URLs');
  }
  for (const path of ['/visados/seguro-medico', '/visados/seguro-medico/residencia-no-lucrativa', '/visados/seguro-medico/teletrabajo-internacional', '/visados/seguro-medico/requisitos-consulares', '/en/visa-health-insurance', '/en/visa-health-insurance/non-lucrative-residence', '/en/visa-health-insurance/digital-nomad', '/en/visa-health-insurance/consulate-requirements']) {
    const response = await get(path + attribution);
    assert.equal(response.status, 200, path);
    assert(hrefs(await response.text()).some(href => /^\/(en\/)?start/.test(href) && hasAttribution(href)), `${path}: attributed CTA`);
  }
  console.log('Commercial attribution: ES/EN landing → evidence → selected /start → unchanged Google Forms; invalid route 404; unknown values excluded. GET only; external redirects never followed.');
} catch (error) {
  console.error(serverLog);
  throw error;
} finally {
  if (child.exitCode === null && !child.signalCode) {
    const closed = once(child, 'close');
    child.kill('SIGTERM');
    let timer;
    try { await Promise.race([closed, new Promise(resolve => { timer = setTimeout(() => { child.kill('SIGKILL'); resolve(); }, 5000); })]); }
    finally { clearTimeout(timer); }
  }
}
