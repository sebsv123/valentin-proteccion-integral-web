export const LEDGER_VERSION = 'vpi-original-evidence-ledger-v0.3';
export const AGGREGATE_VERSION = 'vpi-original-evidence-public-v0.3';
export const METHODOLOGY_VERSION = '0.3.0';

// Privacy and editorial publication thresholds are separate configuration points.
export const PRIVACY_MIN_SAMPLE = 10;
export const PUBLICATION_MIN_SAMPLE = 20;

export const DEFAULT_LEDGER_PATH = 'private/evidence/vpi-original-evidence-v0.csv';
export const DEFAULT_OUTPUT_PATH = 'public/data/vpi-original-evidence-v0.json';

export const LEDGER_COLUMNS = [
  'case_id',
  'source_record_key',
  'case_date',
  'workflow_stage',
  'application_type',
  'application_country',
  'competent_consulate',
  'competent_consulate_review_status',
  'applying_from_abroad',
  'already_in_spain',
  'had_nie_when_arranging',
  'insurance_product',
  'requested_start_date',
  'requested_end_date',
  'certificate_requested',
  'documentation_issue',
  'documentation_issue_review_status',
  'issue_category',
  'issue_category_review_status',
  'outcome',
  'outcome_review_status',
  'outcome_source',
  'outcome_verified_date',
  'data_source',
];

export const ENUMS = {
  workflow_stage: ['intake_received', 'qualified', 'quote_sent', 'sale_closed', 'policy_issued', 'cancelled', 'unknown'],
  application_type: ['student', 'non_lucrative', 'digital_nomad', 'family', 'other_residence', 'unknown'],
  applying_from_abroad: ['yes', 'no', 'unknown'],
  already_in_spain: ['yes', 'no', 'unknown'],
  had_nie_when_arranging: ['yes', 'no', 'unknown'],
  certificate_requested: ['yes', 'no', 'unknown'],
  documentation_issue: ['yes', 'no', 'unknown'],
  issue_category: ['none', 'incomplete_certificate', 'coverage_scope', 'start_date', 'payment', 'translation_or_format', 'other_documentation', 'other', 'unknown'],
  outcome: ['approved', 'rejected_insurance_reason', 'rejected_other_reason', 'pending', 'unknown'],
  outcome_source: ['official_decision', 'applicant_confirmation', 'insurer_confirmation', 'vpi_follow_up', 'unknown'],
  data_source: ['google_forms', 'google_sheets', 'crm', 'case_record', 'other', 'unknown'],
  competent_consulate_review_status: ['reviewed', 'unreviewed'],
  documentation_issue_review_status: ['reviewed', 'unreviewed'],
  issue_category_review_status: ['reviewed', 'unreviewed'],
  outcome_review_status: ['reviewed', 'unreviewed'],
};

export const REVIEWED_VALUE_STATUS = {
  competent_consulate: 'competent_consulate_review_status',
  documentation_issue: 'documentation_issue_review_status',
  issue_category: 'issue_category_review_status',
  outcome: 'outcome_review_status',
};

// Backfill imports may contain only these sanitized fields. source_record_key
// is private import identity, not a public analytical field.
export const IMPORT_COLUMNS = [
  'source_record_key',
  ...LEDGER_COLUMNS.filter((column) => ![
    'case_id',
    'source_record_key',
    'competent_consulate_review_status',
    'documentation_issue_review_status',
    'issue_category_review_status',
    'outcome_review_status',
  ].includes(column)),
];

export const PUBLIC_DIMENSIONS = [
  'application_type',
  'application_country',
  'competent_consulate',
  'insurance_product',
  'issue_category',
  'outcome',
];

// Every public aggregate is nested under exactly one operational-stage cohort.
// Labels make the denominator explicit and never describe immigration outcome.
export const WORKFLOW_STAGE_COHORTS = [
  { value: 'intake_received', label: 'Observed among documented VPI intake cases' },
  { value: 'qualified', label: 'Observed among documented VPI cases at the qualified stage' },
  { value: 'quote_sent', label: 'Observed among documented VPI cases at the quote sent stage' },
  { value: 'sale_closed', label: 'Observed among documented VPI cases at the sale closed stage' },
  { value: 'policy_issued', label: 'Observed among documented VPI cases with policy issued' },
  { value: 'cancelled', label: 'Observed among documented VPI cases at the cancelled stage' },
  { value: 'unknown', label: 'Observed among documented VPI cases with unknown workflow stage' },
];

// Extend only with reviewed, non-personal identifiers. These codes describe
// office locations and product classes; they must never encode a customer.
export const CONTROLLED_CODES = {
  competent_consulate: ['in_new_delhi', 'us_new_york', 'unknown'],
  insurance_product: ['student_health', 'non_lucrative_health', 'unknown'],
};

// Deliberately reject common direct identifiers and free-text columns. The
// exact-column check is a second, stricter guard in validate-ledger.mjs.
export const PII_LIKE_COLUMN = /name|email|e-mail|phone|mobile|passport|nie|nif|dni|address|street|postcode|postal|birth|medical|health|diagnos|condition|document|note|comment|message|free.?text|customer|client|lead|ip|policy.?number|certificate.?number/i;

export const CASE_ID_PATTERN = /^CASE-[A-F0-9]{12}$/;
export const SOURCE_RECORD_KEY_PATTERN = /^SRC-[A-F0-9]{24}$/;
