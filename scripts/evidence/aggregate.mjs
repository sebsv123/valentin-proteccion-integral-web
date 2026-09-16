import {
  AGGREGATE_VERSION,
  LEDGER_VERSION,
  METHODOLOGY_VERSION,
  PRIVACY_MIN_SAMPLE,
  PUBLICATION_MIN_SAMPLE,
  PUBLIC_DIMENSIONS,
  REVIEWED_VALUE_STATUS,
  WORKFLOW_STAGE_COHORTS,
} from './config.mjs';

const UNKNOWN_FIELDS = [
  'case_date',
  'application_type',
  'application_country',
  'competent_consulate',
  'applying_from_abroad',
  'already_in_spain',
  'had_nie_when_arranging',
  'insurance_product',
  'requested_start_date',
  'requested_end_date',
  'certificate_requested',
  'documentation_issue',
  'issue_category',
  'outcome',
  'outcome_source',
  'outcome_verified_date',
];

const hidden = (status) => ({ value: null, status });

function isUnknownForPublic(row, field) {
  const reviewStatus = REVIEWED_VALUE_STATUS[field];
  if (reviewStatus && row[reviewStatus] !== 'reviewed') return true;
  if (['outcome_source', 'outcome_verified_date'].includes(field)
    && row.outcome_review_status !== 'reviewed') return true;
  return row[field] === 'unknown' || row[field] === '';
}

function publicValue(row, dimension) {
  const reviewStatus = REVIEWED_VALUE_STATUS[dimension];
  if (reviewStatus && row[reviewStatus] !== 'reviewed') return 'unknown';
  return row[dimension] || 'unknown';
}

function buildCohort(rows, stage, label, generatedOn) {
  const usableRows = rows.filter((row) => row.workflow_stage === stage);
  const usableCount = usableRows.length;
  const meetsPrivacyMinimum = usableCount >= PRIVACY_MIN_SAMPLE;
  const meetsPublicationMinimum = usableCount >= PUBLICATION_MIN_SAMPLE;

  const unknownCounts = Object.fromEntries(UNKNOWN_FIELDS.map((field) => {
    if (!meetsPrivacyMinimum) return [field, hidden('suppressed_below_privacy_minimum')];
    const count = usableRows.filter((row) => isUnknownForPublic(row, field)).length;
    return [field, count >= PRIVACY_MIN_SAMPLE
      ? { value: count, status: 'available' }
      : hidden('suppressed_below_privacy_minimum')];
  }));

  const aggregates = [];
  if (meetsPrivacyMinimum) {
    for (const dimension of PUBLIC_DIMENSIONS) {
      const counts = new Map();
      for (const row of usableRows) {
        const value = publicValue(row, dimension);
        counts.set(value, (counts.get(value) ?? 0) + 1);
      }
      const hasSmallBucket = [...counts.values()].some((count) => count < PRIVACY_MIN_SAMPLE);
      if (hasSmallBucket) {
        aggregates.push({ dimension, status: 'suppressed_small_bucket', denominator: usableCount, values: null });
      } else {
        aggregates.push({
          dimension,
          status: 'available',
          denominator: usableCount,
          values: [...counts.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([value, count]) => ({
            value,
            count,
            publication_eligible_for_insight: meetsPublicationMinimum,
          })),
        });
      }
    }
  }

  const knownCaseDates = meetsPrivacyMinimum
    ? usableRows.map((row) => row.case_date).filter(Boolean).sort()
    : [];
  const hasSafeDateRange = knownCaseDates.length >= PRIVACY_MIN_SAMPLE;
  const publicationStatus = !meetsPrivacyMinimum
    ? 'suppressed_below_privacy_minimum'
    : !meetsPublicationMinimum
      ? 'counts_only_below_publication_minimum'
      : 'eligible_for_editorial_review';

  return {
    workflow_stage: stage,
    cohort_label: label,
    cohort_definition: `Only documented VPI cases whose internal operational/commercial workflow_stage is ${stage}. This is not an immigration outcome.`,
    publication_status: publicationStatus,
    publication_threshold_met: meetsPublicationMinimum,
    usable_cases: meetsPrivacyMinimum
      ? { value: usableCount, status: 'available' }
      : hidden('suppressed_below_privacy_minimum'),
    case_date_range: hasSafeDateRange
      ? {
        from_month: knownCaseDates[0].slice(0, 7),
        to_month: knownCaseDates.at(-1).slice(0, 7),
        status: 'available',
      }
      : { from_month: null, to_month: null, status: 'suppressed_below_privacy_minimum' },
    unknown_counts: unknownCounts,
    aggregates,
    insights: [],
    insights_status: meetsPublicationMinimum
      ? 'none_generated_in_v0'
      : 'blocked_below_publication_minimum',
    generated_on: generatedOn,
  };
}

export function buildPublicAggregate(rows, generatedOn) {
  // Unknown workflow stages remain a distinct cohort. Nothing is pooled across
  // stages, including sample counts, denominators, dates, or dimensions.
  const usableRows = rows.filter((row) => row.data_source !== 'unknown');
  const cohorts = WORKFLOW_STAGE_COHORTS.map(({ value, label }) => (
    buildCohort(usableRows, value, label, generatedOn)
  ));

  return {
    schema_version: AGGREGATE_VERSION,
    source_schema_version: LEDGER_VERSION,
    publication_status: 'stage_scoped_cohorts_only',
    editorial_review_status: 'not_reviewed',
    reviewed_on: null,
    privacy_min_sample: PRIVACY_MIN_SAMPLE,
    publication_min_sample: PUBLICATION_MIN_SAMPLE,
    publication_language: 'Observed among documented VPI cases',
    cohort_policy: 'Every denominator and aggregate is scoped to exactly one workflow_stage. No cross-stage aggregate is generated.',
    cross_source_deduplication_rule: 'Do not report an all-source/all-stage unique-case total until cross-source deduplication has been completed. Stage-specific source cohorts may be counted separately.',
    methodology: {
      version: METHODOLOGY_VERSION,
      scope: 'Observed among documented VPI cases only; these records do not represent all Spanish visa applicants.',
      workflow_stage_rule: 'workflow_stage is VPI’s internal operational/commercial stage only. sale_closed does not imply policy_issued; policy_issued does not imply visa/residence approval. Neither stage populates outcome. A missing stage remains unknown.',
      cohort_rule: 'Each cohort includes exactly one workflow_stage and has its own denominator. Stages are never silently combined.',
      cross_source_deduplication_rule: 'Do not report an all-source/all-stage unique-case total until cross-source deduplication has been completed. Stage-specific source cohorts may be counted separately.',
      usable_case_rule: 'Schema-valid rows with a known data_source and unique private import identity.',
      case_date_rule: 'case_date is the date the case entered VPI workflow/intake. It is never substituted with policy start, policy issue, payment, or visa-decision dates. Missing intake dates remain unknown.',
      privacy_rule: 'Public counts require at least the privacy minimum within the exact workflow-stage cohort and per populated bucket. A whole dimension is withheld if any bucket is below that minimum.',
      publication_rule: 'Percentages, rates, trends, and headline insights require the publication minimum within the exact declared cohort and relevant slice. Version 0 emits no percentages, rates, trends, or headline insights.',
      review_rule: 'Outcome, documentation issue, issue category, and consulate values are treated as unknown in public aggregates until their corresponding human review status is reviewed.',
      outcome_rule: 'Outcome counts use the full workflow-stage cohort denominator, including pending, unknown, and unreviewed outcomes. No approval rate is calculated.',
      date_precision: 'Case date ranges are reported by calendar month within each workflow-stage cohort only when at least the privacy minimum have known intake dates.',
    },
    generated_on: generatedOn,
    cohorts,
    insights: [],
    insights_status: 'no_insights_generated_in_v0',
  };
}
