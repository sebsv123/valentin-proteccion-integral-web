import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { assertForeignersMetadata } from './helpers/foreigners-metadata-contract.mjs';

const expected = JSON.parse(readFileSync(new URL('./fixtures/foreigners-seo-contract.json', import.meta.url), 'utf8'));
const schema = [
  { '@type': 'WebPage', url: expected.canonical, name: expected.title, description: expected.description },
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1 }] },
  { '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: '¿Cómo empezar?' }] },
];
const html = `<html lang='es'><head><meta content='index, follow' name='robots'>
  <meta content='${expected.description}' name='description'>
  <link href='${expected.canonical}' rel='canonical'>
  <meta content='${expected.title}' property='og:title'>
  <meta content='${expected.description}' property='og:description'></head><body>
  <h1>Una página con contenido importado</h1><title>${expected.title}</title>
  <script type='application/ld+json'>${JSON.stringify(schema)}</script></body></html>`;

test('valid served metadata can be streamed, single-quoted and attribute-reordered', () => {
  assert.doesNotThrow(() => assertForeignersMetadata(html, expected));
});
test('an application copy or serialized script is no substitute for actual title/description tags', () => {
  const missing = html.replace(/<title>.*?<\/title>/, '').replace(/<meta content='[^']*' name='description'>/, '');
  const decoy = `${missing}<p>${expected.title} ${expected.description}</p><script>${JSON.stringify({ title: `<title>${expected.title}</title>`, description: `<meta name="description" content="${expected.description}">` })}</script>`;
  assert.throws(() => assertForeignersMetadata(decoy, expected), /rendered title/);
  assert.throws(() => assertForeignersMetadata(html.replace(/<meta content='[^']*' name='description'>/, ''), expected), /rendered description/);
});
test('wrong description and conflicting duplicate metadata fail even with approved copy elsewhere', () => {
  assert.throws(() => assertForeignersMetadata(html.replace(`content='${expected.description}' name='description'`, "content='Old SEO description' name='description'"), expected), /rendered description/);
  assert.throws(() => assertForeignersMetadata(`${html}<meta name="description" content="wrong">`, expected), /rendered description/);
  assert.throws(() => assertForeignersMetadata(html.replace(`<title>${expected.title}`, '<title>Wrong title'), expected), /rendered title/);
});
test('canonical, Open Graph, language and indexability are independent requirements', () => {
  for (const [before, after] of [
    [`href='${expected.canonical}'`, "href='https://example.invalid/extranjeros'"],
    [`content='${expected.title}' property='og:title'`, "content='wrong' property='og:title'"],
    ["lang='es'", "lang='en'"],
    ["content='index, follow'", "content='noindex, follow'"],
  ]) assert.throws(() => assertForeignersMetadata(html.replace(before, after), expected));
});
test('missing, broken and empty structured data fail', () => {
  assert.throws(() => assertForeignersMetadata(html.replace(/<script[\s\S]*?<\/script>/, ''), expected), /WebPage/);
  assert.throws(() => assertForeignersMetadata(html.replace(JSON.stringify(schema), '{broken'), expected));
  assert.throws(() => assertForeignersMetadata(html.replace('"mainEntity":[{"@type":"Question","name":"¿Cómo empezar?"}]', '"mainEntity":[]'), expected), /FAQ schema/);
});
test('HTML entities are decoded without interpreting quoted angle brackets as new tags', () => {
  // Character references apply to HTML markup, not to raw JSON script text.
  const [markup, script] = html.split('<script');
  const encoded = markup.replaceAll('Protección', 'Protecci&#243;n').replaceAll('España', 'Espa&#xf1;a') + '<script' + script;
  assert.doesNotThrow(() => assertForeignersMetadata(encoded.replace('<head>', '<head><meta name="unrelated" content="one > two">'), expected));
});
