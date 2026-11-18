import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { setTimeout as delay } from 'node:timers/promises';
import { blueprintEditorialDrafts } from '../lib/blueprint-editorial-content.ts';

async function checkServer(mode, check) {
  const reservation = createServer();
  reservation.listen(0, '127.0.0.1'); await once(reservation, 'listening');
  const port = reservation.address().port; await new Promise(resolve => reservation.close(resolve));
  const env = { ...process.env, VPI_EDITORIAL_PREVIEW: '', VERCEL: '', VERCEL_ENV: '', ...mode };
  const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], { env, stdio: ['ignore', 'pipe', 'pipe'] });
  let log = ''; for (const stream of [server.stdout, server.stderr]) stream.on('data', value => { log = (log + value).slice(-12000); });
  const base = `http://127.0.0.1:${port}`;
  try {
    for (let i = 0; ; i++) { try { await fetch(base + '/robots.txt'); break; } catch { if (i > 100) throw new Error(log); await delay(150); } }
    await check(base);
  } finally { if (server.exitCode === null) { const closed = once(server, 'close'); server.kill('SIGTERM'); await closed; } }
}

for (const mode of [{}, { VPI_EDITORIAL_PREVIEW: '1', VERCEL: '1' }, { VPI_EDITORIAL_PREVIEW: '1', VERCEL_ENV: 'production' }]) {
  await checkServer(mode, async base => {
    for (const post of blueprintEditorialDrafts) {
      for (const suffix of ['', '?preview=1', '?partner=blueprint']) assert.equal((await fetch(`${base}/en/blog/${post.slug}${suffix}`)).status, 404, `unapproved route must remain unavailable: ${JSON.stringify(mode)}`);
    }
  });
}
await checkServer({ VPI_EDITORIAL_PREVIEW: '1' }, async base => {
  for (const post of blueprintEditorialDrafts) {
    const path = `/en/blog/${post.slug}`;
    const response = await fetch(base + path); assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /name="robots" content="noindex, nofollow, noarchive"/);
    assert.equal([...html.matchAll(/<link rel="canonical"/g)].length, 1);
    assert(html.includes(`href="https://valentinproteccionintegral.com${path}"`));
    assert(html.includes(post.socialImage));
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const articles = schemas.filter(schema => schema['@type'] === 'Article');
    assert.equal(articles.length, 1); assert.equal(articles[0].creativeWorkStatus, 'Draft'); assert(!articles[0].datePublished);
    const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert(visible.includes('href="https://blueprint-spain.com/'));
    assert.equal([...visible.matchAll(/<h1\b/g)].length, 1);
    for (const section of post.sections) assert(visible.includes(`id="${section.id}"`));
    for (const image of [post.image, post.socialImage]) assert.equal((await fetch(base + image)).status, 200);
    const referred = (await (await fetch(base + path + '?partner=blueprint')).text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert(!referred.includes('href="https://blueprint-spain.com/'), 'no outgoing collaborator promotion in its referred journey');
    assert(referred.includes('href="/en/foreigners?partner=blueprint"'));
    assert.equal((await fetch(base + '/es/blog/' + post.slug)).status, 404);
    for (const listing of ['/sitemap.xml', '/en/blog', '/blog']) assert(!(await (await fetch(base + listing)).text()).includes(post.slug), `${post.slug} absent from ${listing}`);
  }
});
console.log('PASS editorial: default 404; query cannot unlock; Vercel override denied; local preview 200/noindex; unique canonical + draft Article; images; referral separation; no catalogue/sitemap publication.');
