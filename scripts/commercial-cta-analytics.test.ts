import assert from 'node:assert/strict';
import { test } from 'node:test';
import { commercialCtaContext, isGoogleFormsIntakePath, trackCommercialCta } from '../lib/commercial-cta-analytics.ts';
import { trackWhatsAppClick } from '../lib/analytics.ts';
import { trackForeignersPartner as currentForeigners } from '../lib/extranjeros/foreigners-partner-analytics.ts';
import { trackForeignersPartner as legacyForeigners } from '../lib/foreigners-partner-analytics.ts';

function browser(consent: string | null, pathname = '/extranjeros', gtag = true) {
  const calls: unknown[][] = [];
  const fake = {
    localStorage: { getItem: () => consent },
    location: { pathname, search: '?email=synthetic@example.test', href: 'https://example.test/?private=synthetic' },
    ...(gtag ? { gtag: (...args: unknown[]) => calls.push(args) } : {}),
  } as unknown as Window;
  Object.defineProperty(globalThis, 'window', { configurable: true, value: fake });
  return { fake, calls };
}
function cleanup() { Reflect.deleteProperty(globalThis, 'window'); }

test('SSR, rejected, undecided, unknown consent and storage failures never emit or create a queue', () => {
  cleanup(); assert.equal(trackCommercialCta('whatsapp'), false);
  for (const consent of [null, 'rejected', '', 'true', '{"analytics":true}']) {
    const { fake, calls } = browser(consent);
    assert.equal(trackCommercialCta('whatsapp'), false);
    assert.equal(trackCommercialCta('google_forms'), false);
    assert.equal(fake.dataLayer, undefined); assert.equal(calls.length, 0);
  }
  const { fake } = browser('accepted');
  fake.localStorage.getItem = () => { throw new Error('storage unavailable'); };
  assert.equal(trackCommercialCta('whatsapp'), false); assert.equal(fake.dataLayer, undefined);
  cleanup();
});

test('accepted consent sends exactly one object, including with gtag present; works without gtag', () => {
  for (const ctaType of ['whatsapp', 'google_forms'] as const) for (const hasGtag of [true, false]) {
    const { fake, calls } = browser('accepted', '/en/foreigners', hasGtag);
    assert.equal(trackCommercialCta(ctaType), true);
    assert.deepEqual(fake.dataLayer, [{ event: 'vpi_cta_click', cta_type: ctaType, page_path: '/en/foreigners', product_slug: 'salud-extranjeros' }]);
    assert.equal(calls.length, 0);
  }
  cleanup();
});

test('all existing WhatsApp helper variants use the same single path, without arbitrary labels', () => {
  for (const emit of [() => trackWhatsAppClick('synthetic-private-label'), () => currentForeigners({ action: 'whatsapp_click', label: 'synthetic-private-label' }), () => legacyForeigners({ action: 'whatsapp_click', label: 'synthetic-private-label' })]) {
    const { fake, calls } = browser('accepted'); emit();
    assert.equal(fake.dataLayer?.length, 1); assert.equal(calls.length, 0);
    assert(!JSON.stringify(fake.dataLayer).includes('private'));
  }
  cleanup();
});

test('a later rejection suppresses events even when GTM/dataLayer are still present; no replay', () => {
  const { fake } = browser('accepted'); trackCommercialCta('whatsapp');
  fake.localStorage.getItem = () => 'rejected';
  assert.equal(trackCommercialCta('google_forms'), false); assert.equal(fake.dataLayer?.length, 1);
  fake.localStorage.getItem = () => 'accepted';
  assert.equal(fake.dataLayer?.length, 1); // no replay of suppressed interactions
  cleanup();
});

test('forms intent is distinct from a lead and routes/hrefs cannot introduce PII into payloads', () => {
  for (const path of ['/extranjeros', '/en/foreigners', '/visados/seguro-medico/estudios', '/en/visa-health-insurance/non-lucrative-residence']) {
    const { fake } = browser('accepted', path); trackCommercialCta('google_forms');
    assert.deepEqual(fake.dataLayer, [{ event: 'vpi_cta_click', cta_type: 'google_forms', page_path: path, product_slug: 'salud-extranjeros' }]);
    assert(!/generate_lead|purchase|form_submit|email|private|https:/.test(JSON.stringify(fake.dataLayer)));
  }
  assert.deepEqual(commercialCtaContext('/unknown/synthetic-private-identifier'), { page_path: '/other' });
  assert.deepEqual(commercialCtaContext('/extranjeros?email=synthetic@example.test'), { page_path: '/other' });
  assert.deepEqual(commercialCtaContext('/contacto'), { page_path: '/contacto' });
  const { fake } = browser('accepted', '/contacto');
  trackCommercialCta('whatsapp');
  assert.deepEqual(fake.dataLayer, [{ event: 'vpi_cta_click', cta_type: 'whatsapp', product_slug: null, page_path: '/contacto' }]);
  cleanup();
});

test('only current ES/EN intake routes qualify, preserving query-compatible navigation', () => {
  for (const path of ['/start', '/start/estudios', '/start/residencia', '/start/renovacion-familia', '/en/start', '/en/start/studies', '/en/start/residence', '/en/start/renewal-family']) {
    assert(isGoogleFormsIntakePath(path)); assert(isGoogleFormsIntakePath(path + '?partner=student-pro-plus'));
  }
  for (const path of ['https://docs.google.com/forms/test', '//outside.test/start', '/start-elsewhere', '/start/unknown', '/en/start/studies/extra', '#start']) assert(!isGoogleFormsIntakePath(path));
});
