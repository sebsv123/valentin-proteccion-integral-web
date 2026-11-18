import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { blueprintQuoteForm } from '../lib/blueprint-referral.ts';
import { foreignersIntakeForms } from '../lib/foreigners-intake.ts';

const reservation = createServer();
reservation.listen(0, '127.0.0.1'); await once(reservation, 'listening');
const port = reservation.address().port;
await new Promise(resolve => reservation.close(resolve));
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], {stdio: ['ignore', 'pipe', 'pipe']});
let log = ''; for (const stream of [server.stdout, server.stderr]) stream.on('data', data => { log = (log + data).slice(-12000); });
const base = `http://127.0.0.1:${port}`;
async function html(path) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  return (await response.text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
}
try {
  let ready = false;
  for (let attempt = 0; attempt < 120; attempt++) {
    try { await fetch(base + '/robots.txt'); ready = true; break; } catch { await delay(250); }
  }
  assert(ready, log);
  for (const [landing, lang] of [['/en/foreigners', 'en'], ['/extranjeros', 'es']]) {
    const ordinary = await html(landing);
    const referred = await html(landing + '?partner=blueprint');
    assert(!ordinary.includes('data-blueprint-welcome'));
    assert(referred.includes('data-blueprint-welcome'));
    assert.match(referred, new RegExp(`<link rel="canonical" href="https://valentinproteccionintegral.com${landing}"`));
    assert(!referred.includes('href="https://blueprint-spain.com/"'));
    assert(referred.includes('alt="Blueprint Spain"'), 'official welcome logo');
    assert(referred.includes('/partners/blueprint-spain.png') || referred.includes('%2Fpartners%2Fblueprint-spain.png'));
    assert(!ordinary.includes('data-blueprint-welcome'), 'normal welcome remains absent; existing partner network stays intact');
    for (const slug of ['', ...(lang === 'en' ? ['/studies', '/residence', '/renewal-family'] : ['/estudios', '/residencia', '/renovacion-familia'])]) {
      const start = `${lang === 'en' ? '/en' : ''}/start${slug}`;
      assert(referred.includes(`href="${start}?partner=blueprint"`), start);
      for (const [query, expected] of [['?partner=blueprint', blueprintQuoteForm], ['', foreignersIntakeForms[lang]], ['?partner=unknown', foreignersIntakeForms[lang]], ['?partner=blueprint&partner=unknown', foreignersIntakeForms[lang]]]) {
        const response = await fetch(base + start + query, { redirect: 'manual' });
        assert.equal(response.status, 307); assert.equal(response.headers.get('location'), expected);
      }
    }
    const other = lang === 'en' ? '/extranjeros' : '/en/foreigners';
    assert(referred.includes(`href="${other}?partner=blueprint"`), 'ES/EN referral switch');
    assert(referred.includes(encodeURIComponent('Blueprint Spain')), 'WhatsApp source');
    const whatsappLinks = [...referred.matchAll(/href="(https:\/\/wa\.me\/[^"]+)"/g)].map(match => decodeURIComponent(match[1]));
    assert(whatsappLinks.length >= 5);
    for (const href of whatsappLinks) {
      if (!href.includes('referral partnership') && !href.includes('posible colaboración')) assert(href.includes('Blueprint Spain'), href);
    }
  }
  const guides = ['/en/visa-health-insurance', '/en/visa-health-insurance/student-visa', '/en/visa-health-insurance/non-lucrative-residence', '/en/visa-health-insurance/digital-nomad', '/en/visa-health-insurance/consulate-requirements', '/visados/seguro-medico', '/visados/seguro-medico/estudios', '/visados/seguro-medico/residencia-no-lucrativa', '/visados/seguro-medico/teletrabajo-internacional', '/visados/seguro-medico/requisitos-consulares'];
  for (const path of guides) {
    const content = await html(path + '?partner=blueprint');
    assert(content.includes('/start') && content.includes('?partner=blueprint'));
    assert(!content.includes('href="https://blueprint-spain.com/"'));
    assert(!content.includes('href="https://blueprint-spain.com/madrid-fbi-background-fingerprints"'));
    assert(content.includes(`rel="canonical" href="https://valentinproteccionintegral.com${path}"`));
  }
  for (const path of ['/en/visa-health-insurance/non-lucrative-residence', '/visados/seguro-medico/residencia-no-lucrativa']) {
    const content = await html(path);
    assert(content.includes('href="https://blueprint-spain.com/"'));
    assert(content.includes('href="https://blueprint-spain.com/madrid-fbi-background-fingerprints"'));
  }
  for (const path of ['/en/foreigners?partner=Blueprint', '/en/foreigners?partner=blueprint&partner=other', '/en/foreigners?partner=someone%40example.test']) {
    assert(!(await html(path)).includes('data-blueprint-welcome'));
  }
  console.log('PASS Blueprint: ES/EN SSR, canonical, ten guides, editorial separation, all start redirects and unchanged generic destinations. Local GET only; no external form visited or submitted.');
} catch (error) { console.error(log); throw error; }
finally { if (server.exitCode === null) { const closed = once(server, 'close'); server.kill('SIGTERM'); await closed; } }
