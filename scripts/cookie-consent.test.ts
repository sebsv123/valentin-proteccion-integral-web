import test from 'node:test';
import assert from 'node:assert/strict';
import { isOptionalStorageKey, NO_OPTIONAL_CONSENT, parseConsent, permissionReduced, providerPermissions } from '../lib/cookie-consent.ts';

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
