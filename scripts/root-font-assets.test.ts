import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { basename, join } from 'node:path';
import postcss from 'postcss';
import { ROOT_FONT_PRELOAD_URLS, ROOT_BODY_FONT_PRELOAD_URL, rootFontPreloadsForPath } from '../lib/root-fonts.ts';

const base = join(process.cwd(), 'public/static/fonts/vpi-global');
const manifest = JSON.parse(readFileSync(join(base, 'ASSET_MANIFEST.json'), 'utf8')) as {
  assets: { file: string; bytes: number; sha256: string; preload: boolean; url: string }[];
  variables: Record<string, string>;
  fontFaceCount: number;
  fontFaceSignature: string;
};
const sha = (value: Uint8Array | string) => createHash('sha256').update(value).digest('hex');

test('global fonts are byte-identical to the approved afbc861 reference assets', () => {
  for (const asset of manifest.assets) {
    assert.equal(asset.file, basename(asset.file));
    const bytes = readFileSync(join(base, asset.file));
    assert.equal(bytes.length, asset.bytes, asset.file);
    assert.equal(sha(bytes), asset.sha256, asset.file);
  }
});

test('all weights, Unicode ranges and fallback metrics match the reference CSS', () => {
  const css = postcss.parse(readFileSync(join(process.cwd(), 'app/root-fonts.css'), 'utf8'));
  const faces: string[][][] = [];
  css.walkAtRules('font-face', rule => {
    const declarations: string[][] = [];
    rule.walkDecls(decl => {
      const value = decl.value.replace(/url\(([^)]+)\)/g, (_, path: string) =>
        `url(${basename(path.replaceAll('"', '').replaceAll("'", ''))})`);
      declarations.push([decl.prop, value]);
    });
    faces.push(declarations);
  });
  assert.equal(faces.length, manifest.fontFaceCount);
  assert.equal(sha(JSON.stringify(faces)), manifest.fontFaceSignature);
  const variables: Record<string, string> = {};
  css.walkDecls(/^--font-/, decl => { variables[decl.prop] = decl.value; });
  assert.deepEqual(variables, manifest.variables);
});

test('resource hints point to the primary faces, with no extra or duplicate URLs', () => {
  const expected = manifest.assets.filter(asset => asset.preload).map(asset => asset.url);
  assert.deepEqual([...ROOT_FONT_PRELOAD_URLS], expected);
  assert.equal(new Set(ROOT_FONT_PRELOAD_URLS).size, ROOT_FONT_PRELOAD_URLS.length);
  for (const url of ROOT_FONT_PRELOAD_URLS) {
    assert(url.startsWith('/static/fonts/vpi-global/'));
    assert(manifest.assets.some(asset => asset.url === url));
  }
});


test('Salud keeps the global UI font early; other routes retain both original hints', () => {
  assert.deepEqual(rootFontPreloadsForPath('/empresas/salud'), [ROOT_BODY_FONT_PRELOAD_URL]);
  for (const pathname of ['/', '/empresas', '/extranjeros', '/en', null]) {
    assert.deepEqual(rootFontPreloadsForPath(pathname), ROOT_FONT_PRELOAD_URLS);
  }
});
