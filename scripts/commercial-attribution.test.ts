import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readCommercialAttribution, withCommercialAttribution } from '../lib/commercial-attribution.ts';
import { getForeignersIntakePath, getForeignersIntakeUrl, getForeignersSituationFromSlug, foreignersIntakeForms } from '../lib/foreigners-intake.ts';

const origin = { utm_source: 'partner', utm_medium: 'referral', utm_campaign: 'vpi-360-sprint-02', partner: 'student-pro-plus' };

test('accepts only reviewed public codes; discards arbitrary strings, PII, repeated parameters and unneeded UTMs', () => {
  assert.deepEqual(readCommercialAttribution(origin), origin);
  assert.deepEqual(readCommercialAttribution({ utm_source: 'someone@example.com', utm_medium: ['email', 'cpc'], utm_campaign: 'private-name', partner: 'someone-600123456', utm_content: 'private', utm_term: 'diagnosis' }), {});
});

test('retains source across ES/EN internal evidence navigation and every selected procedure', () => {
  for (const locale of ['es', 'en'] as const) {
    for (const situation of ['studies', 'residence', 'renewal-family'] as const) {
      const path = getForeignersIntakePath(locale, situation);
      const href = withCommercialAttribution(path, origin);
      const url = new URL(href, 'https://vpi.invalid');
      assert.equal(url.pathname, path);
      assert.equal(getForeignersSituationFromSlug(locale, path.split('/').at(-1)), situation);
      assert.deepEqual(Object.fromEntries(url.searchParams), origin);
      assert.equal(withCommercialAttribution(href, origin), href);
    }
  }
});

test('keeps destination query and fragment, permits reviewed destination overrides, rejects duplicate source', () => {
  const url = new URL(withCommercialAttribution('/start?utm_source=google&safe=1#section', origin), 'https://vpi.invalid');
  assert.equal(url.searchParams.get('utm_source'), 'google');
  assert.equal(url.searchParams.get('safe'), '1');
  assert.equal(url.hash, '#section');
  assert.equal(withCommercialAttribution('/start', { partner: ['student-pro-plus', 'wejha'] }), '/start');
});

test('never adds attribution to external URLs, protocol-relative URLs, backslash URLs, mail, WhatsApp or anchors', () => {
  for (const href of ['https://docs.google.com/forms/test', '//example.com', '/\\example.com', 'mailto:test@example.com', 'https://wa.me/1', '#selector']) {
    assert.equal(withCommercialAttribution(href, origin), href);
  }
});

test('public Google Forms remain unchanged: no invented entry IDs or pretend submission/tracking parameters', () => {
  for (const locale of ['es', 'en'] as const) {
    for (const situation of [undefined, 'studies', 'residence', 'renewal-family'] as const) {
      assert.equal(getForeignersIntakeUrl(locale, situation), foreignersIntakeForms[locale]);
      assert.equal(new URL(getForeignersIntakeUrl(locale, situation)!).search, '');
    }
  }
});
