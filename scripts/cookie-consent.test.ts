import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { createConsentLifetime, isOptionalStorageKey, NO_OPTIONAL_CONSENT, parseConsent, permissionReduced, providerPermissions } from '../lib/cookie-consent.ts';

test('document monitor stops executed SDKs even without mounted React consumers', () => {
  let stored = JSON.stringify({ ...NO_OPTIONAL_CONSENT, analytics: true, marketing: true });
  let reloads = 0;
  const listeners = new Map<string, ((event: { key: string }) => void)[]>();
  const exports: { synchronizeConsentDocument?: (consent: unknown) => void } = {};
  const code = ts.transpileModule(readFileSync(new URL('../lib/cookie-consent.ts', import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  runInNewContext(code, { exports, document: { cookie: '' }, window: {
    localStorage: { getItem: () => stored }, sessionStorage: { setItem: () => {} },
    location: { hostname: 'localhost', pathname: '/', reload: () => reloads++ },
    addEventListener: (type: string, handler: (event: { key: string }) => void) => {
      listeners.set(type, [...(listeners.get(type) || []), handler]);
    },
  } });
  exports.synchronizeConsentDocument!(JSON.parse(stored));
  exports.synchronizeConsentDocument!(JSON.parse(stored));
  assert.equal(listeners.get('storage')?.length, 1);
  assert.equal(reloads, 0);
  // Only the document listener remains; no mounted banner/hook is involved.
  stored = JSON.stringify(NO_OPTIONAL_CONSENT);
  listeners.get('storage')![0]({ key: 'unrelated' });
  assert.equal(reloads, 0);
  listeners.get('storage')![0]({ key: 'cookie-consent' });
  listeners.get('storage')![0]({ key: 'cookie-consent' });
  assert.equal(reloads, 1);
});

test('a remounted consumer cannot forget grants used by the current document', () => {
  const document = createConsentLifetime();
  assert.equal(document.observe({ ...NO_OPTIONAL_CONSENT, analytics: true }), false);
  // A new React consumer sees only the newly persisted rejection. The document
  // still needs a reload, including if another consumer already saw rejection.
  assert.equal(document.observe(NO_OPTIONAL_CONSENT), true);
  assert.equal(document.observe(NO_OPTIONAL_CONSENT), true);
  assert.equal(document.observe(null), true);
  assert.equal(createConsentLifetime().observe(NO_OPTIONAL_CONSENT), false);
});

test('document grants support upgrades and detect each partial withdrawal', () => {
  for (const analytics of [false, true]) for (const marketing of [false, true]) {
    const document = createConsentLifetime();
    assert.equal(document.observe(null), false);
    assert.equal(document.observe({ ...NO_OPTIONAL_CONSENT, analytics: true, marketing: true }), false);
    assert.equal(document.observe({ ...NO_OPTIONAL_CONSENT, analytics, marketing }), !analytics || !marketing);
  }
});

for (const raw of [null, 'accepted', '', '{}', '{', 'true', 'null', '{"version":2,"necessary":true,"analytics":true,"marketing":true}', '{"version":1,"necessary":true,"analytics":"true","marketing":false}']) {
  test(`no inferred permission: ${raw}`, () => {
    assert.equal(parseConsent(raw), null);
    assert.ok(Object.values(providerPermissions(parseConsent(raw))).every(value => value === false));
  });
}
test('legacy rejection remains a rejection', () => assert.deepEqual(parseConsent('rejected'), NO_OPTIONAL_CONSENT));
for (const analytics of [false, true]) for (const marketing of [false, true]) {
  test(`purpose matrix ${Number(analytics)}${Number(marketing)} and round trip`, () => {
    const consent = { ...NO_OPTIONAL_CONSENT, analytics, marketing };
    assert.deepEqual(parseConsent(JSON.stringify(consent)), consent);
    assert.deepEqual(providerPermissions(consent), { analytics, marketing, vercel: analytics, clarity: analytics, meta: marketing, gtm: analytics && marketing, maps: analytics && marketing });
  });
}
test('every reduction requires a new document, upgrades do not', () => {
  const states = [null, ...[false,true].flatMap(analytics => [false,true].map(marketing => ({...NO_OPTIONAL_CONSENT, analytics, marketing})))];
  for (const previous of states) for (const next of states) assert.equal(permissionReduced(previous,next), !!((previous?.analytics && !next?.analytics)||(previous?.marketing&&!next?.marketing)));
});
test('cleanup allowlist excludes consent, leads, attribution and unrelated data', () => {
  for (const name of ['_ga','_ga_TEST','_gid','_gat_x','_clck','_clsk','CLID']) assert.equal(isOptionalStorageKey(name,'analytics'),true);
  for (const name of ['_fbp','_fbc','_gcl_au']) assert.equal(isOptionalStorageKey(name,'marketing'),true);
  for (const name of ['cookie-consent','valentin_utm','valentin_conversion_fired','vpi_isfas_partner','customer','_garden','_fbpOther']) {
    assert.equal(isOptionalStorageKey(name,'analytics'),false); assert.equal(isOptionalStorageKey(name,'marketing'),false);
  }
});
