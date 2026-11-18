import assert from 'node:assert/strict';
import { test } from 'node:test';
import { blueprintQuoteForm, blueprintWhatsAppMessage, getBlueprintPartner, withBlueprintReferral } from '../lib/blueprint-referral.ts';
import { foreignersIntakeForms, getForeignersIntakePath, getForeignersIntakeUrl, getForeignersSituationFromSlug } from '../lib/foreigners-intake.ts';

test('only the exact public organisation code activates the referral', () => {
  assert.equal(getBlueprintPartner('blueprint'), 'blueprint');
  for (const input of [undefined, null, '', 'Blueprint', 'blueprint-spain', ['blueprint'], 'someone@example.test', '<script>']) {
    assert.equal(getBlueprintPartner(input), undefined);
  }
});
test('internal links keep context, other query parameters and fragments', () => {
  assert.equal(withBlueprintReferral('/en/start/residence?step=1#help', 'blueprint'), '/en/start/residence?step=1&partner=blueprint#help');
  assert.equal(withBlueprintReferral('/start?partner=other', 'blueprint'), '/start?partner=blueprint');
  for (const href of ['https://blueprint-spain.com/', '//example.test/path', '#selector', 'mailto:example@example.test', '/en/start']) {
    assert.equal(withBlueprintReferral(href, undefined), href);
    if (!href.startsWith('/') || href.startsWith('//')) assert.equal(withBlueprintReferral(href, 'blueprint'), href);
  }
});
test('all ES/EN situations resolve exclusively to the verified quote form for Blueprint', () => {
  for (const locale of ['es', 'en'] as const) {
    for (const situation of [undefined, 'studies', 'residence', 'renewal-family'] as const) {
      const path = getForeignersIntakePath(locale, situation);
      assert.match(withBlueprintReferral(path, 'blueprint'), /\?partner=blueprint$/);
      if (situation) assert.equal(getForeignersSituationFromSlug(locale, path.split('/').at(-1)), situation);
      assert.equal(getForeignersIntakeUrl(locale, situation, 'blueprint'), blueprintQuoteForm);
      assert.equal(getForeignersIntakeUrl(locale, situation), foreignersIntakeForms[locale]);
    }
  }
  assert.equal(new URL(blueprintQuoteForm).search, '', 'no personal data or fabricated entry fields');
});
test('WhatsApp offers a public referral message without client information', () => {
  for (const locale of ['es', 'en'] as const) {
    assert.match(blueprintWhatsAppMessage(locale), /Blueprint Spain/);
    assert.doesNotMatch(blueprintWhatsAppMessage(locale), /@|passport|NIE|health condition/i);
  }
});
