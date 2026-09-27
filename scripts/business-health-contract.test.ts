import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import ts from 'typescript';
import { businessHealthSchema, buildBusinessHealthLeadPayload, isBusinessHealthLeadSuccess } from '../lib/business-health-lead.ts';
import { leadEmailSchema } from '../lib/server/lead-email-schemas.ts';
import { sendLeadEmail, LeadEmailBlockedError, LeadEmailConfigError, LeadEmailDeliveryError } from '../lib/server/send-lead-email.ts';

assert.equal(process.env.NODE_ENV, 'test', 'Run with NODE_ENV=test');
assert.equal(process.env.LEAD_DELIVERY_CONTEXT, 'test', 'Run with LEAD_DELIVERY_CONTEXT=test');
const require = createRequire(import.meta.url);
const base = { profile: 'autonomo' as const, fullName: 'Synthetic Person', company: '', email: 'audit@example.invalid', phone: '000000000', province: 'Madrid', teamSize: '2', coverage: 'Ambulatoria', startDate: 'Más adelante', financing: 'Todavía no está decidido', message: 'Synthetic review', consent: true, website: '' };
const page = { url: 'http://localhost:3100/empresas/salud', referrer: 'http://localhost:3100/' };

// Exercise the real API handler with its existing schema and a delivery stub.
// No SMTP/CRM code or network transport is invoked by this handler harness.
function route(deliver: (payload: unknown) => Promise<{ messageId: string }>) {
  const source = readFileSync(new URL('../app/api/leads/route.ts', import.meta.url), 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  const exports: { POST?: (request: Request) => Promise<Response> } = {};
  vm.runInNewContext(compiled, { exports, require: (id: string) => {
    if (id === 'next/server') return require(id);
    if (id === '@/lib/server/lead-email-schemas') return { leadEmailSchema };
    if (id === '@/lib/server/send-lead-email') return { sendLeadEmail: deliver, LeadEmailBlockedError, LeadEmailConfigError, LeadEmailDeliveryError };
    throw new Error(`Unexpected route dependency: ${id}`);
  } });
  assert.ok(exports.POST);
  return exports.POST;
}
const request = (payload: unknown) => new Request('http://localhost:3100/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });

for (const locale of ['es', 'en'] as const) {
  for (const profile of ['autonomo', 'empresa'] as const) {
    test(`${locale} ${profile}: actual API accepts client payload and success is recognised`, async () => {
      const values = businessHealthSchema.parse({ ...base, profile, company: profile === 'empresa' ? 'Synthetic Business' : '' });
      const payload = buildBusinessHealthLeadPayload(values, locale, page);
      let calls = 0;
      const post = route(async (accepted) => {
        calls++;
        assert.deepEqual(accepted, leadEmailSchema.parse(payload));
        return { messageId: 'SYNTHETIC-NO-DELIVERY' };
      });
      const response = await post(request(payload));
      const data = await response.json();
      assert.equal(response.status, 200);
      assert.equal(isBusinessHealthLeadSuccess(response.ok, data), true);
      assert.equal(calls, 1);
      assert.equal(payload.email, base.email);
      assert.equal(payload.pageUrl, page.url);
      assert.equal(payload.referrer, page.referrer);
      assert.match(payload.message, /Provincia: Madrid/);
      assert.match(payload.message, /Personas: 2/);
      assert.match(payload.message, /Cobertura: Ambulatoria/);
      assert.match(payload.message, /Implantación: Más adelante/);
      assert.match(payload.message, /Financiación: Todavía no está decidido/);
      assert.match(payload.message, /Synthetic review/);
      if (profile === 'empresa') assert.match(payload.message, /Empresa: Synthetic Business/);
    });
  }
}

test('company remains optional for autónomo and required for empresa', () => {
  assert.equal(businessHealthSchema.safeParse({ ...base, company: undefined }).success, true);
  for (const company of [undefined, '', ' ', 'A']) assert.equal(businessHealthSchema.safeParse({ ...base, profile: 'empresa', company }).success, false);
});

for (const [field, value] of Object.entries({ profile: '', fullName: '', email: 'bad-email', phone: '1', province: '', teamSize: '', coverage: '', consent: false, website: 'bot', message: 'a'.repeat(1001) })) {
  test(`client rejects malformed ${field}`, () => assert.equal(businessHealthSchema.safeParse({ ...base, [field]: value }).success, false));
}

test('API rejects malformed canonical payload before delivery; client recognises failure', async () => {
  let calls = 0;
  const post = route(async () => { calls++; return { messageId: 'MUST-NOT-HAPPEN' }; });
  const payload = buildBusinessHealthLeadPayload(businessHealthSchema.parse(base), 'es', page);
  for (const invalid of [{ ...payload, name: '' }, { ...payload, interest: '' }, { ...payload, consent: false }, { ...payload, email: 'invalid' }, { fullName: base.fullName, productInterest: 'salud', phone: base.phone, consent: true }]) {
    const response = await post(request(invalid));
    assert.equal(response.status, 400);
    assert.equal(isBusinessHealthLeadSuccess(response.ok, await response.json()), false);
  }
  const malformed = await post(new Request('http://localhost:3100/api/leads', { method: 'POST', body: '{invalid' }));
  assert.equal(malformed.status, 400);
  assert.equal(calls, 0);
});

test('API delivery failure is recognised by the client', async () => {
  const post = route(async () => { throw new LeadEmailDeliveryError(); });
  const payload = buildBusinessHealthLeadPayload(businessHealthSchema.parse(base), 'en', page);
  const response = await post(request(payload));
  assert.equal(response.status, 502);
  assert.equal(isBusinessHealthLeadSuccess(response.ok, await response.json()), false);
});

test('client requires HTTP success AND canonical boolean success', () => {
  assert.equal(isBusinessHealthLeadSuccess(true, { success: true }), true);
  for (const data of [{ ok: true }, { success: false }, { success: 'true' }, { error: 'failed' }, null, undefined]) assert.equal(isBusinessHealthLeadSuccess(true, data), false);
  assert.equal(isBusinessHealthLeadSuccess(false, { success: true }), false);
});

test('real delivery stays blocked in test context', async () => {
  const payload = leadEmailSchema.parse(buildBusinessHealthLeadPayload(businessHealthSchema.parse(base), 'es', page));
  await assert.rejects(() => sendLeadEmail(payload, { env: { NODE_ENV: 'test', LEAD_DELIVERY_CONTEXT: 'test' }, requestHost: 'localhost:3100' }), LeadEmailBlockedError);
});
