import assert from 'node:assert/strict';
import { readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { assertForeignersMetadata } from './helpers/foreigners-metadata-contract.mjs';

const expected = JSON.parse(readFileSync(new URL('./fixtures/foreigners-seo-contract.json', import.meta.url), 'utf8'));
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
  const url = `http://127.0.0.1:${port}/extranjeros`;
  let response;
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (spawnError) throw spawnError;
    if (child.exitCode !== null || child.signalCode) throw new Error(`Production server stopped before verification: ${child.exitCode ?? child.signalCode}`);
    try {
      response = await fetch(url, { redirect: 'manual', headers: { 'user-agent': 'VPI-CI-Metadata-Contract/1.0' }, signal: AbortSignal.timeout(10000) });
      break;
    } catch (error) {
      if (Date.now() >= deadline) throw error;
      await delay(200);
    }
  }
  assert(response, 'production server must become ready');
  assert.equal(response.status, 200, 'route must respond directly with HTTP200');
  assert.match(response.headers.get('content-type') ?? '', /text\/html/i);
  const html = await response.text();
  const metadata = assertForeignersMetadata(html, expected);
  const report = { buildId, status: response.status, url, contractReference: expected.referenceCommit, metadata };
  const reportIndex = process.argv.indexOf('--report');
  if (reportIndex !== -1) {
    assert(process.argv[reportIndex + 1], '--report requires a local output path');
    writeFileSync(process.argv[reportIndex + 1], JSON.stringify(report, null, 2));
  }
  console.log(`Rendered foreigners metadata contract passed on production build ${buildId}: title, description, canonical, Open Graph, language, robots and structured data. GET only; no lead requests.`);
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
