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

try {
  const base = `http://127.0.0.1:${port}`;
  for (let attempt = 0; ; attempt++) {
    try { await fetch(base + '/extranjeros'); break; }
    catch (error) { if (attempt >= 40) throw error; await delay(250); }
  }
  const query = '?utm_source=partner&utm_medium=referral&utm_campaign=vpi-360-sprint-02&partner=student-pro-plus';
  for (const [locale, landing, start, slugs, form] of [
    ['es', '/extranjeros', '/start', ['estudios', 'residencia', 'renovacion-familia'], '1FAIpQLSfgJ8nTRnvW8onuF0Mq_1fBKyUb2z-of5a5yIXnxpc39ROv9g'],
    ['en', '/en/foreigners', '/en/start', ['studies', 'residence', 'renewal-family'], '1FAIpQLSe83dajswVIh-96JvpQpsGayvjZFQdL9KU8S65Hq-4ihEvfhQ'],
  ]) {
    const response = await fetch(base + landing + query);
    assert.equal(response.status, 200);
    const html = await response.text();
    for (const path of [start, ...slugs.map(slug => `${start}/${slug}`)]) {
      const links = [...html.matchAll(/href="([^"<>]+)"/g)].map(match => match[1].replaceAll('&amp;', '&'));
      assert(links.some(href => href.startsWith('/') && new URL(href, base).pathname === path), `${locale}: compatible CTA ${path}`);
      const redirect = await fetch(base + path + query, { redirect: 'manual' });
      assert.equal(redirect.status, 307);
      const destination = new URL(redirect.headers.get('location'));
      assert.equal(destination.href, `https://docs.google.com/forms/d/e/${form}/viewform`);
      assert.equal(destination.search, '', 'no invented prefill, lead IDs or analytics parameters');
    }
    assert.equal((await fetch(base + start + '/invalid', {redirect:'manual'})).status, 404);
    assert(!/<(?:script|a)[^>]+(?:lead_id|response_id)=/i.test(html));
  }
  console.log(`PASS ${buildId}: ES/EN routes and eight Forms redirects unchanged. No shared response ID claimed. GET only, external redirects not followed.`);
} catch (error) {
  console.error(serverLog);
  throw error;
} finally {
  if (child.exitCode === null && !child.signalCode) {
    const closed = once(child, 'close'); child.kill('SIGTERM'); let timer;
    try { await Promise.race([closed, new Promise(resolve => { timer = setTimeout(() => { child.kill('SIGKILL'); resolve(); }, 5000); })]); }
    finally { clearTimeout(timer); }
  }
}
