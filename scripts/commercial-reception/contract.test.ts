import assert from 'node:assert/strict';
import { test } from 'node:test';
import { OfflineReceptionContract, type ReceiptFixture } from './contract.ts';

const receipt: ReceiptFixture = {
  synthetic: true, form_id: 'fixture-form-es', response_id: 'fixture-response-a',
  submitted_at: '2026-11-16T10:00:00Z', received_at: '2026-11-16T10:01:00Z',
  language: 'es', procedure_code: 'studies', product_code: 'health-foreigners',
};
function proposal(store: OfflineReceptionContract) {
  const lead = store.importReceipt(receipt);
  store.advance(lead.lead_id, 'contactado'); store.advance(lead.lead_id, 'propuesta');
  return lead;
}
function policy(lead_id: string) {
  return { synthetic: true, lead_id, insurer_code: 'fixture-insurer', external_policy_ref: 'fixture-policy-a',
    issued_at: '2026-11-17T10:00:00Z', issued_premium_cents: 60000, currency: 'EUR',
    premium_period: 'annual', issuance_evidence_ref: 'fixture-issuance-document' };
}
function commission(policy_id: string) {
  return { synthetic: true, policy_id, source_system: 'fixture-ledger', external_transaction_id: 'fixture-transaction-a',
    recognized_at: '2026-11-18T10:00:00Z', net_commission_cents: 6000, currency: 'EUR', movement_type: 'commission' };
}

test('receipt identity is scoped to form, stable across retries and separate importer instances', () => {
  const store = new OfflineReceptionContract(); const first = store.importReceipt(receipt);
  assert.equal(first.lead_id, store.importReceipt({ ...receipt, received_at: '2026-11-16T10:05:00Z' }).lead_id);
  assert.equal(first.lead_id, new OfflineReceptionContract().importReceipt(receipt).lead_id);
  assert.notEqual(first.lead_id, store.importReceipt({ ...receipt, form_id: 'fixture-form-en', language: 'en' }).lead_id);
  assert.equal(store.counts().opportunities, 2);
  first.status = 'emitido';
  assert.equal(store.importReceipt(receipt).status, 'recibido', 'returned values cannot mutate the store');
});

test('missing origin remains unknown; explicit fixture codes are only declared; URL input cannot create receipt', () => {
  const store = new OfflineReceptionContract(); const lead = store.importReceipt(receipt);
  assert.equal(lead.origin_quality, 'unknown'); assert.equal(lead.partner_code, null);
  const declared = store.importReceipt({ ...receipt, response_id: 'fixture-response-b', declared_origin: { partner_code: 'student-pro-plus' } });
  assert.equal(declared.origin_quality, 'declared');
  for (const invalid of [
    { partner: 'student-pro-plus' }, { ...receipt, response_id: undefined },
    { ...receipt, origin_quality: 'verified' }, { ...receipt, email: 'synthetic@example.test' },
    { ...receipt, form_id: 'real-form-id' }, { ...receipt, declared_origin: { partner_code: 'unknown' } },
  ]) assert.throws(() => store.importReceipt(invalid));
});

test('revisions conflict instead of silently overwriting or duplicating the opportunity', () => {
  const store = new OfflineReceptionContract(); store.importReceipt(receipt);
  assert.throws(() => store.importReceipt({ ...receipt, procedure_code: 'residence' }), /Conflicting revision/);
  assert.equal(store.counts().opportunities, 1);
});

test('receipt → opportunity → evidenced synthetic policy → recognized signed commission; reimport creates no duplicates or status reset', () => {
  const store = new OfflineReceptionContract(); const lead = proposal(store);
  const issued = store.attachPolicy(policy(lead.lead_id));
  assert.deepEqual(store.attachPolicy(policy(lead.lead_id)), issued);
  const movement = commission(issued.policy_id);
  assert.deepEqual(store.recordCommission(movement), store.recordCommission(movement));
  store.recordCommission({ ...movement, external_transaction_id: 'fixture-reversal', movement_type: 'reversal', net_commission_cents: -1000 });
  store.recordCommission({ ...movement, external_transaction_id: 'fixture-adjustment', movement_type: 'adjustment', net_commission_cents: 200 });
  assert.equal(store.netCommissionCents(issued.policy_id), 5200);
  assert.deepEqual(store.counts(), { opportunities: 1, policies: 1, commissions: 3 });
  assert.equal(store.importReceipt(receipt).status, 'emitido');
  assert.throws(() => store.recordCommission({ ...movement, net_commission_cents: 9999 }), /Conflicting/);
  assert.throws(() => store.attachPolicy({ ...policy(lead.lead_id), issued_premium_cents: 1 }), /Conflicting/);
});

test('no automatic issuance, missing evidence, unsupported money, orphan transactions or contradictory signs', () => {
  const store = new OfflineReceptionContract(); const lead = store.importReceipt(receipt);
  assert.throws(() => store.advance(lead.lead_id, 'propuesta'));
  assert.throws(() => store.attachPolicy(policy(lead.lead_id)));
  store.advance(lead.lead_id, 'contactado'); store.advance(lead.lead_id, 'propuesta');
  assert.throws(() => store.attachPolicy({ ...policy(lead.lead_id), issuance_evidence_ref: '' }));
  for (const amount of [1.1, -1, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => store.attachPolicy({ ...policy(lead.lead_id), issued_premium_cents: amount }));
  }
  assert.throws(() => store.recordCommission(commission('orphan')));
  const issued = store.attachPolicy(policy(lead.lead_id));
  assert.throws(() => store.recordCommission({ ...commission(issued.policy_id), movement_type: 'reversal' }));
  assert.throws(() => store.recordCommission({ ...commission(issued.policy_id), estimated: true }));
});

test('lost lead cannot be emitted; overflow rejects a movement without altering the ledger', () => {
  const lost = new OfflineReceptionContract(); const lead = lost.importReceipt(receipt);
  lost.advance(lead.lead_id, 'perdido'); assert.throws(() => lost.attachPolicy(policy(lead.lead_id)));
  const store = new OfflineReceptionContract(); const ready = proposal(store); const issued = store.attachPolicy(policy(ready.lead_id));
  store.recordCommission({ ...commission(issued.policy_id), net_commission_cents: Number.MAX_SAFE_INTEGER });
  assert.throws(() => store.recordCommission({ ...commission(issued.policy_id), external_transaction_id: 'fixture-overflow', net_commission_cents: 1 }), /overflow/);
  assert.equal(store.counts().commissions, 1);
});
