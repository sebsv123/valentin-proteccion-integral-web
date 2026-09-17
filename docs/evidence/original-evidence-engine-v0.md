# VPI Original Evidence Engine v0.3

This independent evidence pipeline separates VPI’s private operational source,
sanitised analytical ledger, and thresholded public aggregate output. Google
Forms, Sheets, CRM, and case files remain outside this repository. No page
consumes the aggregate JSON in v0.

## Private ledger and import identity

The private ledger is `private/evidence/vpi-original-evidence-v0.csv` and is
ignored by Git. Never put source exports, source-system identifiers, lookup
tables, documents, or free-text notes in the repository.

`case_id` is a random private-ledger token (`CASE-` plus 12 uppercase
hexadecimal characters). `source_record_key` is a separate private-only import
identity (`SRC-` plus 24 uppercase hexadecimal characters). Generate it
randomly once, store it alongside the operational record, and reuse it on every
export. Never derive either key from a name, email, phone, passport/NIE, CRM
customer ID, timestamp, or hash of customer data. The importer uses this key
for idempotency and never copies it into public JSON.

Repeated imports for a key already in the ledger leave the existing row
unchanged and count as duplicates. Identical repeated keys in one import are
accepted once and counted as duplicates; conflicting rows with the same key in
one import are rejected as a group. Human-reviewed ledger values are never
overwritten by a later import.

### Cross-source reconciliation (private, human-confirmed)

When an operator later confirms that records from two operational sources are
the same real case, record the link only in the ignored private file
`private/evidence/cross-source-links.csv`. The file has this exact header:

```text
canonical_case_id,source_record_key,match_status,confirmed_on
```

`canonical_case_id` is one random private `CASE-` token, and each linked
`source_record_key` is the random `SRC-` token already stored in the ledger.
`match_status` is `confirmed` or `unreviewed`; `confirmed_on` is an ISO date
required only for `confirmed`. The file contains no names, contact details,
documents, notes, or matching rationale.

An operator reviews the source records outside this repository and writes one
`confirmed` line per source key only after human confirmation. The same
canonical case may therefore have an intake key and a Blueprint key (or keys
from other sources). The engine must reject duplicate source keys, ignore
`unreviewed` links for deduplication, and collapse every confirmed group to one
canonical case before calculating any future all-source unique-case metric.
There is no automatic matching by dates, product, stage, nationality, or any
other field. Until this map is confirmed and applied, source cohorts remain
separate and no all-source/all-stage unique-case total is reported.

`docs/evidence/sanitised-ledger.sample.csv` contains fictional rows only. The
aggregate builder never reads that sample.

## Ledger schema

The exact header and order are enforced by the validator:

| Field | Type / allowed values | Notes |
| --- | --- | --- |
| `case_id` | `CASE-` plus 12 uppercase hexadecimal characters | Random private-ledger token. |
| `source_record_key` | `SRC-` plus 24 uppercase hexadecimal characters | Private-only stable import identity; never public. |
| `case_date` | `YYYY-MM-DD` or blank | Date the case entered VPI workflow / intake. Blank means unknown. Never substitute policy start, policy issue, payment, or visa/residence decision date. |
| `workflow_stage` | `intake_received`, `qualified`, `quote_sent`, `sale_closed`, `policy_issued`, `cancelled`, `unknown` | VPI internal operational/commercial stage only; never an immigration outcome. Missing remains `unknown`. |
| `application_type` | `student`, `non_lucrative`, `digital_nomad`, `family`, `other_residence`, `unknown` | No custom labels. |
| `application_country` | ISO 3166-1 alpha-2 code or `unknown` | Country of application; never used to infer a consulate. |
| `competent_consulate` | Approved code or `unknown` | Resolve ambiguous cases through human review, not nationality. |
| `competent_consulate_review_status` | `reviewed`, `unreviewed` | Imported consulates always start unreviewed. |
| `applying_from_abroad` | `yes`, `no`, `unknown` | Never infer from another field. |
| `already_in_spain` | `yes`, `no`, `unknown` | Never infer from another field. |
| `had_nie_when_arranging` | `yes`, `no`, `unknown` | Never store the NIE itself. |
| `insurance_product` | Approved generic product code or `unknown` | No policy/certificate number. |
| `requested_start_date` | `YYYY-MM-DD` or blank | Blank remains unknown. |
| `requested_end_date` | `YYYY-MM-DD` or blank | Blank remains unknown; cannot precede requested start. |
| `certificate_requested` | `yes`, `no`, `unknown` | No certificate content or upload. |
| `documentation_issue` | `yes`, `no`, `unknown` | Missing notes never mean `no`. |
| `documentation_issue_review_status` | `reviewed`, `unreviewed` | Imported values always start unreviewed. |
| `issue_category` | `none`, `incomplete_certificate`, `coverage_scope`, `start_date`, `payment`, `translation_or_format`, `other_documentation`, `other`, `unknown` | No free-text explanation. |
| `issue_category_review_status` | `reviewed`, `unreviewed` | Imported values always start unreviewed. |
| `outcome` | `approved`, `rejected_insurance_reason`, `rejected_other_reason`, `pending`, `unknown` | Immigration outcome must be checked and human-reviewed. Never inferred from commercial stage or policy issuance. |
| `outcome_review_status` | `reviewed`, `unreviewed` | Imported values always start unreviewed. |
| `outcome_source` | `official_decision`, `applicant_confirmation`, `insurer_confirmation`, `vpi_follow_up`, `unknown` | Category only; no URL, quote, or file name. |
| `outcome_verified_date` | `YYYY-MM-DD` or blank | Required for a reviewed known/pending outcome; blank for unknown. |
| `data_source` | `google_forms`, `google_sheets`, `crm`, `case_record`, `blueprint_2026`, `general_intake`, `other`, `unknown` | Category only. `blueprint_2026` identifies the sanitised Blueprint_2026 cohort and `general_intake` identifies the sanitised general intake cohort. `unknown` excludes the row from public usable-case counts. |

`workflow_stage` describes only VPI’s operational/commercial process. In
particular, `sale_closed` does not imply `policy_issued`, and `policy_issued`
does not imply visa or residence approval. Neither stage fills or changes
`outcome`. If the import omits `workflow_stage`, it becomes `unknown`; no stage
is inferred from another field.

No schema or import field accepts names, email addresses, phone numbers,
passport/NIE numbers, residential addresses, medical history, diagnoses,
uploaded documents, policy identifiers, or free-text notes.

## Safe backfill import

`scripts/evidence/import-sanitised.mjs` accepts a CSV with `source_record_key`
and only allow-listed analytical columns. It does not accept `case_id`, review
state columns, PII, or arbitrary notes. Unknown columns reject the import; the
report identifies them by position and never echoes column names or cell
values. The importer never expects or requires a name, email, phone,
passport/NIE, address, medical history, or uploaded document.

Missing categorical values become `unknown`; missing dates remain blank. The
mapper only reads a field literally named `case_date`; it never maps policy
start, policy issue, payment, or immigration decision dates into it.

Every imported row is marked unreviewed for outcome, documentation issue,
issue category, and consulate. Candidate values may remain in the private
ledger, but public aggregation treats unreviewed values as unknown until a
human reviews them. A reviewed known/pending outcome also requires a source
category and verification date. Never infer approval from policy issuance,
consulate from nationality, or absence of a documentation problem from missing
notes.

Dry-run is the default. To inspect a prepared, deliberately sanitised export:

```bash
npm run evidence:import -- --input /path/to/sanitised-export.csv --dry-run
```

The report includes accepted, rejected, duplicate, unknown-field, and
human-review counts, but no cell values. Only an explicit `--write` updates the
ignored private ledger:

```bash
npm run evidence:import -- --input /path/to/sanitised-export.csv --write
```

Do not run either command on real customer data for this initial setup. Use
fictional fixtures for testing.

## Validation, aggregation, and publication rules

Run `npm run evidence:validate` to validate the private ledger. Run
`npm run evidence:build` to create
`public/data/vpi-original-evidence-v0.json`. A missing private ledger generates
only a suppressed cohort shell. Invalid input stops the build without
replacing the output. The site has no page or component wired to the JSON.

The thresholds are configured in `scripts/evidence/config.mjs`:

- `PRIVACY_MIN_SAMPLE = 10`: public counts, unknown counts, date ranges, and
  each populated bucket require at least ten cases within one exact
  `workflow_stage` cohort. A whole dimension is withheld when any populated
  bucket is smaller, preventing recovery by subtraction.
- `PUBLICATION_MIN_SAMPLE = 20`: percentages, rates, trends, and headline
  insights require at least twenty cases within the exact declared cohort and
  relevant slice, even where privacy suppression permits a count. Version 0
  emits no percentages, rates, trends, or headline insights at any sample
  size.

The public JSON has one fixed cohort for each allowed stage, including
`unknown`. Below ten cases a cohort’s count, dates, unknown counts, and
aggregates are suppressed. At 10–19 it is count-only. At 20 or more it is
eligible for future editorial review, but v0 still emits no claims. Each
cohort carries a clear label, its own denominator and intake-date range. No
stage counts or metrics are pooled; there is no cross-stage total. A
publication-eligible cohort does not make any other cohort eligible.

V0 does not report an all-source/all-stage unique-case total until
cross-source deduplication has been completed. Stage-specific source cohorts
may be counted separately, with the source and workflow stage named in the
cohort label and denominator.

Missing `case_date` remains unknown. A month-level date range is emitted only
when at least ten cases in that same stage cohort have a known intake date.
Unknown and pending outcomes stay in the exact stage cohort denominator. No
approval rate is calculated. `generated_on` is only the build date, never a
review date.

All public cohort labels begin with **“Observed among documented VPI cases”**
and identify the stage cohort, for example **“Observed among documented VPI
intake cases”** or **“Observed among documented VPI cases with policy issued”**.
The methodology also says these records do not represent all Spanish visa
applicants. Passing a threshold does not approve a claim: generated output
always has `editorial_review_status: "not_reviewed"` and `reviewed_on: null`.

## Current public JSON shape

With no private ledger, every fixed stage cohort is suppressed. Here is the
shape of one such cohort; the built JSON contains one per allowed stage:

```json
{
  "schema_version": "vpi-original-evidence-public-v0.3",
  "privacy_min_sample": 10,
  "publication_min_sample": 20,
  "publication_language": "Observed among documented VPI cases",
  "cohort_policy": "Every denominator and aggregate is scoped to exactly one workflow_stage. No cross-stage aggregate is generated.",
  "cross_source_deduplication_rule": "Do not report an all-source/all-stage unique-case total until cross-source deduplication has been completed. Stage-specific source cohorts may be counted separately.",
  "cohorts": [
    {
      "workflow_stage": "policy_issued",
      "cohort_label": "Observed among documented VPI cases with policy issued",
      "publication_status": "suppressed_below_privacy_minimum",
      "usable_cases": { "value": null, "status": "suppressed_below_privacy_minimum" },
      "case_date_range": {
        "from_month": null,
        "to_month": null,
        "status": "suppressed_below_privacy_minimum"
      },
      "aggregates": [],
      "insights": []
    }
  ],
  "insights": []
}
```

## Future webpage consumption

A future block must select one explicit `cohorts[]` entry and require that
cohort’s `publication_status === "eligible_for_editorial_review"`, an
explicit reviewed artifact/status, and non-null `reviewed_on`. Every metric
must retain that cohort’s label and denominator. It should display the
month-level intake-date range, methodology, human review date, and
non-representativeness statement. Do not combine stages in a metric or use
`generated_on` as “Last reviewed.” No block is active in v0.

## Prospective evidence capture gap

Begin collecting only these optional, non-PII questions when the applicant may
know the answer. Use controlled choices plus `unknown` rather than free text:

1. **From which country will you submit your immigration application?**
2. **Which Spanish consulate or embassy will handle it, if known?**
3. **Are you already in Spain?**
4. **Do you already have a NIE?**
5. **Which exact immigration procedure are you applying for?**

The form should allow “I don't know yet” for each question where that is a
genuine possibility. Do not request names, document numbers, addresses,
medical information, uploaded documents, or identifying free-text explanations
for this evidence layer.

## Intake wording audit

The current generic wording **“When would you like your coverage to end? (1
year minimum)”** should be flagged for product review because VPI’s foreigner
products do not all have a universal one-year duration. Do not silently change
the connected Google Form from this repository. A concise replacement proposal
is:

> **What date should your coverage end? Please enter the end date required for your visa or residence application.**
