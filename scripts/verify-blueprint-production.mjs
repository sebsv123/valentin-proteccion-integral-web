/** Approved production GET checks. External forms and WhatsApp are never opened. */
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { blueprintEditorialArticles } from '../lib/blueprint-editorial-content.ts';
import { blueprintQuoteForm } from '../lib/blueprint-referral.ts';
const base = 'https://valentinproteccionintegral.com';
const report = { checkedAt: new Date().toISOString(), base, pages: [], redirects: [], formsOpened: false, submissions: false };
const output = process.env.VPI_PRODUCTION_REPORT || '/tmp/vpi-blueprint-production/http-results.json';
await mkdir(new URL('.', `file://${output}`).pathname, {recursive: true});
async function get(path) {
  const response = await fetch(base + path, {redirect: 'manual'});
  assert.equal(response.status, 200, `${path}: ${response.status}`);
  assert(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), `${path}: indexing blocked by response header`);
  return { html: await response.text(), status: response.status };
}
function canonical(html, path) {
  const values = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(values, [base + path]);
}
function visible(html) {return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');}
const normal = await get('/en/foreigners');
const referred = await get('/en/foreigners?partner=blueprint');
canonical(normal.html, '/en/foreigners'); canonical(referred.html, '/en/foreigners');
assert(!visible(normal.html).includes('data-blueprint-welcome'));
assert(visible(referred.html).includes('data-blueprint-welcome'));
assert(visible(referred.html).includes('alt="Blueprint Spain"'));
assert(visible(referred.html).includes('Recommended by Blueprint Spain'));
assert(visible(referred.html).includes('href="/en/start?partner=blueprint"'));
const whatsapp = [...visible(referred.html).matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)].map(m => decodeURIComponent(m[1]));
assert(whatsapp.length >= 5);
for (const href of whatsapp) if (!href.includes('referral partnership')) assert(href.includes('Blueprint Spain'));
report.pages.push({path:'/en/foreigners',status:200,canonical:true,ordinaryVariant:true}, {path:'/en/foreigners?partner=blueprint',status:200,canonical:true,logo:true,referralLinks:true,whatsappSource:true});
for (const path of ['/en/start','/en/start/studies','/en/start/residence','/en/start/renewal-family']) {
  const response = await fetch(base + path + '?partner=blueprint', {redirect:'manual'});
  assert.equal(response.status,307); assert.equal(response.headers.get('location'),blueprintQuoteForm);
  report.redirects.push({path:path+'?partner=blueprint',status:307,exclusiveFormDestinationMatches:true});
}
const sitemap = (await get('/sitemap.xml')).html;
const listing = (await get('/en/blog')).html;
for (const post of blueprintEditorialArticles) {
  const path = '/en/blog/' + post.slug;
  const {html} = await get(path); canonical(html,path);
  assert.match(html,/name="robots" content="index, follow"/);
  assert(!/<link[^>]+hrefLang="es"/i.test(html));
  assert(html.includes(post.socialImage));
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
  const articles = schemas.filter(s=>s['@type']==='Article');
  assert.equal(articles.length,1); assert.equal(articles[0].creativeWorkStatus,'Published'); assert.equal(articles[0].datePublished,post.published);
  assert.equal((sitemap.match(new RegExp(`<loc>${base}${path}</loc>`,'g'))||[]).length,1);
  assert(!sitemap.includes(`<loc>${base}/blog/${post.slug}</loc>`));
  assert(visible(listing).includes(`href="${path}"`));
  assert(!visible(html).includes('Editorial preview'));
  assert(visible(html).includes('href="https://blueprint-spain.com/'));
  assert(visible(html).includes('id="checklist"') && visible(html).includes('id="questions"'));
  for (const image of [post.image,post.socialImage]) {
    const imageResponse=await fetch(base+image,{redirect:'manual'}); assert.equal(imageResponse.status,200); assert(imageResponse.headers.get('content-type')?.startsWith('image/'));
  }
  report.pages.push({path,status:200,indexable:true,canonical:true,publishedArticle:true,datePublished:post.published,sitemapUnique:true,blogListed:true,images:true,blueprintLinks:true});
}
await writeFile(output,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
