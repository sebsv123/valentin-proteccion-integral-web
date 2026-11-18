import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { setTimeout as delay } from 'node:timers/promises';
import { blueprintEditorialArticles } from '../lib/blueprint-editorial-content.ts';

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

for (const mode of [{}, { VERCEL: '1', VERCEL_ENV: 'production' }]) {
await checkServer(mode, async base => {
  for (const post of blueprintEditorialArticles) {
    const path = `/en/blog/${post.slug}`;
    const response = await fetch(base + path); assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /name="robots" content="index, follow"/);
    assert(!html.includes('content="noindex'));
    assert(!html.includes('hrefLang="es"'));
    assert.equal([...html.matchAll(/<link rel="canonical"/g)].length, 1);
    assert(html.includes(`href="https://valentinproteccionintegral.com${path}"`));
    assert(html.includes(post.socialImage));
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
    const articles = schemas.filter(schema => schema['@type'] === 'Article');
    assert.equal(articles.length, 1); assert.equal(articles[0].creativeWorkStatus, 'Published'); assert.equal(articles[0].datePublished, post.published);
    const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert(visible.includes('href="https://blueprint-spain.com/'));
    assert.equal([...visible.matchAll(/<h1\b/g)].length, 1);
    assert(!visible.includes('Editorial preview'));
    assert(!visible.includes('Not published'));
    for (const section of post.sections) assert(visible.includes(`id="${section.id}"`));
    for (const image of [post.image, post.socialImage]) assert.equal((await fetch(base + image)).status, 200);
    const referred = (await (await fetch(base + path + '?partner=blueprint')).text()).replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert(!referred.includes('href="https://blueprint-spain.com/'), 'no outgoing collaborator promotion in its referred journey');
    assert(referred.includes('href="/en/foreigners?partner=blueprint"'));
    assert.equal((await fetch(base + '/es/blog/' + post.slug)).status, 404);
    assert.equal((await fetch(base + '/blog/' + post.slug)).status, 404);
    for (const listing of ['/sitemap.xml', '/en/blog']) {
      const listingHtml = await (await fetch(base + listing)).text();
      assert(listingHtml.includes(`/en/blog/${post.slug}`), `${post.slug} present in ${listing}`);
      assert(!listingHtml.includes(`<loc>https://valentinproteccionintegral.com/blog/${post.slug}</loc>`), 'no invented Spanish sitemap URL');
    }
    assert(!(await (await fetch(base + '/blog')).text()).includes(post.slug), 'English-only entry excluded from Spanish listing');
  }
});
}
console.log('PASS editorial: published locally and in Vercel mode; index/follow; unique canonical and Published Article/date; images; English catalogue + sitemap; no invented Spanish route; referral preserved.');
