/** OFFLINE ACCEPTANCE CONTRACT, NOT AN ADAPTER OR PRODUCTION STORE.
 * Accepts fixture identifiers only. Never imported by app/, never calls a network.
 * A received response fixture is not evidence of a real Forms submission.
 */
import { createHash } from 'node:crypto';
import { z } from 'zod';

const fixtureId = z.string().regex(/^fixture-[a-z0-9-]{1,80}$/);
const timestamp = z.string().datetime();
const cents = z.number().int().safe();
const origin = z.object({
  partner_code: z.literal('student-pro-plus').optional(),
  channel_source: z.enum(['partner', 'vpi', 'google']).optional(),
  channel_medium: z.enum(['referral', 'organic', 'cpc']).optional(),
  campaign_code: z.literal('vpi-360-sprint-02').optional(),
}).strict();
export const receiptSchema = z.object({
  synthetic: z.literal(true),
  form_id: fixtureId,
  response_id: fixtureId,
  submitted_at: timestamp,
  received_at: timestamp,
  product_code: z.literal('health-foreigners'),
  language: z.enum(['es', 'en']),
  procedure_code: z.enum(['studies', 'residence', 'renewal-family']).nullable(),
  declared_origin: origin.optional(),
}).strict().refine(value => Date.parse(value.received_at) >= Date.parse(value.submitted_at));
export type ReceiptFixture = z.input<typeof receiptSchema>;
type Status = 'recibido' | 'contactado' | 'propuesta' | 'emitido' | 'perdido';
type Opportunity = {
  lead_id: string; source_system: string; source_record_id: string;
  received_at: string; requested_at: string; product_code: string;
  language: 'es' | 'en'; procedure_code: ReceiptFixture['procedure_code'];
  channel_source: string | null; channel_medium: string | null;
  campaign_code: string | null; partner_code: string | null;
  origin_quality: 'unknown' | 'declared'; status: Status;
};
const policySchema = z.object({
  synthetic: z.literal(true), lead_id: z.string(), insurer_code: fixtureId,
  external_policy_ref: fixtureId, issued_at: timestamp,
  issued_premium_cents: cents.positive(), currency: z.literal('EUR'),
  premium_period: z.enum(['annual', 'monthly']), issuance_evidence_ref: fixtureId,
}).strict();
const commissionSchema = z.object({
  synthetic: z.literal(true), policy_id: z.string(), source_system: fixtureId,
  external_transaction_id: fixtureId, recognized_at: timestamp,
  net_commission_cents: cents.refine(value => value !== 0), currency: z.literal('EUR'),
  movement_type: z.enum(['commission', 'reversal', 'adjustment']),
}).strict().refine(value => value.movement_type === 'adjustment' ||
  (value.movement_type === 'commission' ? value.net_commission_cents > 0 : value.net_commission_cents < 0));

function id(kind: string, parts: string[]) {
  return `${kind}_${createHash('sha256').update(JSON.stringify(['offline-contract-v1', ...parts])).digest('hex')}`;
}
function fingerprint(value: unknown) {
  return JSON.stringify(value);
}

export class OfflineReceptionContract {
  private leads = new Map<string, { receipt: string; opportunity: Opportunity }>();
  private policies = new Map<string, z.infer<typeof policySchema> & { policy_id: string }>();
  private commissions = new Map<string, z.infer<typeof commissionSchema> & { commission_id: string }>();

  importReceipt(input: unknown): Opportunity {
    const value = receiptSchema.parse(input);
    const source_system = `synthetic_google_forms:${value.form_id}`;
    const lead_id = id('lead', [source_system, value.response_id]);
    // Ingestion time can change on retry; source submission and business content cannot.
    const { received_at, ...source } = value;
    const receipt = fingerprint(source);
    const existing = this.leads.get(lead_id);
    if (existing) {
      if (existing.receipt !== receipt) throw new Error('Conflicting revision: manual reconciliation required');
      return structuredClone(existing.opportunity);
    }
    const declared = value.declared_origin;
    const opportunity: Opportunity = {
      lead_id, source_system, source_record_id: value.response_id,
      received_at, requested_at: value.submitted_at, product_code: value.product_code,
      language: value.language, procedure_code: value.procedure_code,
      channel_source: declared?.channel_source ?? null, channel_medium: declared?.channel_medium ?? null,
      campaign_code: declared?.campaign_code ?? null, partner_code: declared?.partner_code ?? null,
      origin_quality: declared && Object.keys(declared).length ? 'declared' : 'unknown', status: 'recibido',
    };
    this.leads.set(lead_id, { receipt, opportunity });
    return structuredClone(opportunity);
  }

  advance(leadId: string, next: 'contactado' | 'propuesta' | 'perdido') {
    const lead = this.leads.get(leadId)?.opportunity;
    if (!lead) throw new Error('Unknown lead');
    const allowed = { recibido: ['contactado', 'perdido'], contactado: ['propuesta', 'perdido'], propuesta: ['perdido'], emitido: [], perdido: [] };
    if (!(allowed[lead.status] as string[]).includes(next)) throw new Error('Invalid status transition');
    lead.status = next;
  }

  attachPolicy(input: unknown) {
    const value = policySchema.parse(input);
    const policy_id = id('policy', [value.insurer_code, value.external_policy_ref]);
    const record = { ...value, policy_id };
    const existing = this.policies.get(policy_id);
    if (existing) {
      if (fingerprint(existing) !== fingerprint(record)) throw new Error('Conflicting policy');
      return structuredClone(existing);
    }
    const lead = this.leads.get(value.lead_id)?.opportunity;
    if (!lead || !['propuesta', 'emitido'].includes(lead.status)) throw new Error('Policy needs a proposal and explicit issuance evidence');
    this.policies.set(policy_id, record);
    lead.status = 'emitido';
    return structuredClone(record);
  }

  recordCommission(input: unknown) {
    const value = commissionSchema.parse(input);
    if (!this.policies.has(value.policy_id)) throw new Error('Unknown policy');
    const commission_id = id('commission', [value.source_system, value.external_transaction_id]);
    const record = { ...value, commission_id };
    const existing = this.commissions.get(commission_id);
    if (existing && fingerprint(existing) !== fingerprint(record)) throw new Error('Conflicting transaction');
    // Check before committing; overflow cannot corrupt the existing ledger.
    const total = this.netCommissionCents(value.policy_id) + (existing ? 0 : value.net_commission_cents);
    if (!Number.isSafeInteger(total)) throw new Error('Commission total overflow');
    this.commissions.set(commission_id, record);
    return structuredClone(record);
  }

  netCommissionCents(policyId: string) {
    return [...this.commissions.values()].filter(value => value.policy_id === policyId)
      .reduce((total, value) => total + value.net_commission_cents, 0);
  }

  counts() { return { opportunities: this.leads.size, policies: this.policies.size, commissions: this.commissions.size }; }
}
