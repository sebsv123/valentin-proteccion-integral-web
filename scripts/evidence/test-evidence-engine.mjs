import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { IMPORT_COLUMNS, LEDGER_COLUMNS } from './config.mjs';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const importer = resolve(repoRoot, 'scripts/evidence/import-sanitised.mjs');
const builder = resolve(repoRoot, 'scripts/evidence/build-aggregate.mjs');
const validator = resolve(repoRoot, 'scripts/evidence/validate-ledger.mjs');
const temp = await mkdtemp(resolve(tmpdir(), 'vpi-evidence-synthetic-'));

function runNode(script, args) {
  return spawnSync(process.execPath, [script, ...args], {
    cwd: repoRoot,
    encoding: 'utf8',
  });
}

function sourceRow(index, overrides = {}) {
  const values = {
    source_record_key: `SRC-${index.toString(16).toUpperCase().padStart(24, '0')}`,
    case_date: '2025-03-05',
    workflow_stage: 'intake_received',
    application_type: 'student',
    application_country: 'IN',
    competent_consulate: 'in_new_delhi',
    applying_from_abroad: 'yes',
    already_in_spain: 'no',
    had_nie_when_arranging: 'unknown',
    insurance_product: 'student_health',
    requested_start_date: '',
    requested_end_date: '',
    certificate_requested: 'yes',
    documentation_issue: 'no',
    issue_category: '',
    outcome: 'approved',
    outcome_source: 'official_decision',
    outcome_verified_date: '2025-03-20',
    data_source: 'case_record',
    ...overrides,
  };
  return IMPORT_COLUMNS.map((column) => values[column] ?? '');
}

async function writeImport(path, rows, columns = IMPORT_COLUMNS) {
  const csv = [columns, ...rows].map((row) => row.map((value) => {
    const cell = String(value ?? '');
    return /[",\r\n]/.test(cell) ? `"${cell.replaceAll('"', '""')}"` : cell;
  }).join(',')).join('\n') + '\n';
  await writeFile(path, csv);
}

async function importRows(input, ledger, { write = false, allowRejected = false } = {}) {
  const args = ['--input', input, '--ledger', ledger, write ? '--write' : '--dry-run'];
  const result = runNode(importer, args);
  assert.equal(result.status, allowRejected ? 1 : 0, result.stderr || result.stdout);
  return JSON.parse(result.stdout);
}

async function build(ledger, output) {
  const result = runNode(builder, [ledger, output]);
  assert.equal(result.status, 0, result.stderr || result.stdout);
  return JSON.parse(await readFile(output, 'utf8'));
}

try {
  const smallInput = resolve(temp, 'small.csv');
  const smallLedger = resolve(temp, 'small-ledger.csv');
  const smallOutput = resolve(temp, 'small-public.json');
  await writeImport(smallInput, Array.from({ length: 9 }, (_, index) => sourceRow(index + 1)));

  const dryRun = await importRows(smallInput, smallLedger);
  assert.equal(dryRun.rows_accepted, 9);
  assert.equal(dryRun.rows_rejected, 0);
  assert.equal(dryRun.records_requiring_human_review, 9);
  assert.equal(dryRun.write_performed, false);
  await assert.rejects(readFile(smallLedger), { code: 'ENOENT' });
  const unsafeWrite = runNode(importer, ['--input', smallInput, '--ledger', 'public/data/should-not-be-created.csv', '--write']);
  assert.equal(unsafeWrite.status, 2);
  assert.doesNotMatch(unsafeWrite.stderr, /should-not-be-created/);

  const belowPrivacy = await importRows(smallInput, smallLedger, { write: true });
  assert.equal(belowPrivacy.rows_accepted, 9);
  const suppressed = await build(smallLedger, smallOutput);
  const smallIntakeCohort = suppressed.cohorts.find((cohort) => cohort.workflow_stage === 'intake_received');
  assert.equal(smallIntakeCohort.publication_status, 'suppressed_below_privacy_minimum');
  assert.equal(smallIntakeCohort.usable_cases.value, null);
  assert.deepEqual(smallIntakeCohort.aggregates, []);
  assert.equal(suppressed.cohorts.length, 7);
  assert.equal(suppressed.cohorts.every((cohort) => cohort.usable_cases.value === null), true);
  assert.equal(suppressed.cohorts.some((cohort) => cohort.workflow_stage === 'all'), false);
  assert.equal(suppressed.publication_language, 'Observed among documented VPI cases');
  assert.equal(suppressed.insights.length, 0);

  const tenInput = resolve(temp, 'ten.csv');
  const tenLedger = resolve(temp, 'ten-ledger.csv');
  const tenOutput = resolve(temp, 'ten-public.json');
  const tenColumns = IMPORT_COLUMNS.filter((column) => !['documentation_issue', 'issue_category'].includes(column));
  const tenRows = Array.from({ length: 10 }, (_, index) => sourceRow(index + 101, index === 0 ? { case_date: '' } : {})
    .filter((_, columnIndex) => tenColumns.includes(IMPORT_COLUMNS[columnIndex])));
  await writeImport(tenInput, tenRows, tenColumns);
  await importRows(tenInput, tenLedger, { write: true });
  const countOnly = await build(tenLedger, tenOutput);
  const tenCohort = countOnly.cohorts.find((cohort) => cohort.workflow_stage === 'intake_received');
  assert.equal(tenCohort.publication_status, 'counts_only_below_publication_minimum');
  assert.equal(tenCohort.usable_cases.value, 10);
  assert.equal(tenCohort.publication_threshold_met, false);
  assert.equal(tenCohort.insights_status, 'blocked_below_publication_minimum');
  assert.equal(tenCohort.case_date_range.status, 'suppressed_below_privacy_minimum');
  assert.equal(tenCohort.unknown_counts.documentation_issue.value, 10);
  assert.equal(tenCohort.aggregates.find((item) => item.dimension === 'outcome').values[0].value, 'unknown');
  assert.equal(tenCohort.aggregates.find((item) => item.dimension === 'outcome').values[0].count, 10);
  assert.equal(tenCohort.aggregates.find((item) => item.dimension === 'outcome').denominator, 10);
  assert.equal(tenCohort.aggregates.find((item) => item.dimension === 'outcome').values[0].publication_eligible_for_insight, false);
  assert.equal(JSON.stringify(countOnly).includes('source_record_key'), false);
  assert.equal(JSON.stringify(countOnly).includes('SRC-'), false);
  assert.equal(JSON.stringify(countOnly).includes('approved'), false);

  const nineteenInput = resolve(temp, 'nineteen.csv');
  const nineteenLedger = resolve(temp, 'nineteen-ledger.csv');
  const nineteenOutput = resolve(temp, 'nineteen-public.json');
  await writeImport(nineteenInput, Array.from({ length: 19 }, (_, index) => sourceRow(index + 151)));
  await importRows(nineteenInput, nineteenLedger, { write: true });
  const nineteen = await build(nineteenLedger, nineteenOutput);
  const nineteenCohort = nineteen.cohorts.find((cohort) => cohort.workflow_stage === 'intake_received');
  assert.equal(nineteenCohort.publication_status, 'counts_only_below_publication_minimum');
  assert.equal(nineteenCohort.publication_threshold_met, false);
  assert.equal(nineteenCohort.insights_status, 'blocked_below_publication_minimum');
  assert.deepEqual(nineteenCohort.insights, []);

  const twentyInput = resolve(temp, 'twenty.csv');
  const twentyLedger = resolve(temp, 'twenty-ledger.csv');
  const twentyOutput = resolve(temp, 'twenty-public.json');
  await writeImport(twentyInput, Array.from({ length: 20 }, (_, index) => sourceRow(
    index + 201,
    index === 19 ? { application_type: 'family' } : {},
  )));
  await importRows(twentyInput, twentyLedger, { write: true });
  const thresholdMet = await build(twentyLedger, twentyOutput);
  const twentyCohort = thresholdMet.cohorts.find((cohort) => cohort.workflow_stage === 'intake_received');
  assert.equal(twentyCohort.publication_status, 'eligible_for_editorial_review');
  assert.equal(twentyCohort.publication_threshold_met, true);
  assert.equal(thresholdMet.editorial_review_status, 'not_reviewed');
  assert.equal(thresholdMet.reviewed_on, null);
  assert.equal(twentyCohort.insights_status, 'none_generated_in_v0');
  assert.equal(thresholdMet.insights.length, 0);
  assert.equal(twentyCohort.cohort_label, 'Observed among documented VPI intake cases');
  assert.equal(twentyCohort.aggregates.find((item) => item.dimension === 'application_type').status, 'suppressed_small_bucket');
  assert.equal(twentyCohort.aggregates.find((item) => item.dimension === 'application_type').values, null);
  assert.equal(twentyCohort.aggregates.find((item) => item.dimension === 'outcome').values[0].publication_eligible_for_insight, true);

  const repeat = await importRows(twentyInput, twentyLedger, { write: true });
  assert.equal(repeat.rows_accepted, 0);
  assert.equal(repeat.duplicates, 20);
  const ledgerValidation = runNode(validator, [twentyLedger]);
  assert.equal(ledgerValidation.status, 0, ledgerValidation.stderr);

  const reviewedRows = (await readFile(twentyLedger, 'utf8')).trimEnd().split(/\r?\n/).map((line) => line.split(','));
  const reviewedHeader = reviewedRows[0];
  for (const row of reviewedRows.slice(1)) {
    row[reviewedHeader.indexOf('competent_consulate_review_status')] = 'reviewed';
    row[reviewedHeader.indexOf('documentation_issue_review_status')] = 'reviewed';
    row[reviewedHeader.indexOf('issue_category')] = 'none';
    row[reviewedHeader.indexOf('issue_category_review_status')] = 'reviewed';
    row[reviewedHeader.indexOf('outcome_review_status')] = 'reviewed';
  }
  await writeFile(twentyLedger, `${reviewedRows.map((row) => row.join(',')).join('\n')}\n`);
  const reviewedValidation = runNode(validator, [twentyLedger]);
  assert.equal(reviewedValidation.status, 0, reviewedValidation.stderr);
  const repeatedAfterReview = await importRows(twentyInput, twentyLedger, { write: true });
  assert.equal(repeatedAfterReview.rows_accepted, 0);
  assert.equal(repeatedAfterReview.duplicates, 20);
  const reviewedOutput = await build(twentyLedger, resolve(temp, 'reviewed-public.json'));
  const reviewedCohort = reviewedOutput.cohorts.find((cohort) => cohort.workflow_stage === 'intake_received');
  assert.deepEqual(reviewedCohort.aggregates.find((item) => item.dimension === 'outcome').values, [{ value: 'approved', count: 20, publication_eligible_for_insight: true }]);
  assert.deepEqual(reviewedCohort.aggregates.find((item) => item.dimension === 'competent_consulate').values, [{ value: 'in_new_delhi', count: 20, publication_eligible_for_insight: true }]);

  const stageInput = resolve(temp, 'stage-separation.csv');
  const stageLedger = resolve(temp, 'stage-separation-ledger.csv');
  const stageOutput = resolve(temp, 'stage-separation-public.json');
  const noOutcomeColumns = IMPORT_COLUMNS.filter((column) => !['outcome', 'outcome_source', 'outcome_verified_date'].includes(column));
  const stageRows = [
    ...Array.from({ length: 20 }, (_, index) => sourceRow(index + 300, { workflow_stage: 'sale_closed' })
      .filter((_, columnIndex) => noOutcomeColumns.includes(IMPORT_COLUMNS[columnIndex]))),
    ...Array.from({ length: 20 }, (_, index) => sourceRow(index + 320, { workflow_stage: 'policy_issued' })
      .filter((_, columnIndex) => noOutcomeColumns.includes(IMPORT_COLUMNS[columnIndex]))),
  ];
  await writeImport(stageInput, stageRows, noOutcomeColumns);
  await importRows(stageInput, stageLedger, { write: true });
  const stageOutputJson = await build(stageLedger, stageOutput);
  const saleClosedCohort = stageOutputJson.cohorts.find((cohort) => cohort.workflow_stage === 'sale_closed');
  const policyIssuedCohort = stageOutputJson.cohorts.find((cohort) => cohort.workflow_stage === 'policy_issued');
  assert.equal(saleClosedCohort.cohort_label, 'Observed among documented VPI cases at the sale closed stage');
  assert.equal(saleClosedCohort.usable_cases.value, 20);
  assert.equal(policyIssuedCohort.cohort_label, 'Observed among documented VPI cases with policy issued');
  assert.equal(policyIssuedCohort.usable_cases.value, 20);
  for (const cohort of [saleClosedCohort, policyIssuedCohort]) {
    assert.deepEqual(cohort.aggregates.find((item) => item.dimension === 'outcome').values, [
      { value: 'unknown', count: 20, publication_eligible_for_insight: true },
    ]);
    assert.equal(cohort.aggregates.some((item) => item.dimension === 'workflow_stage'), false);
  }
  assert.equal('usable_cases' in stageOutputJson, false);
  assert.equal(stageOutputJson.cohort_policy.includes('No cross-stage aggregate'), true);

  const missingStageInput = resolve(temp, 'missing-stage.csv');
  const missingStageColumns = IMPORT_COLUMNS.filter((column) => column !== 'workflow_stage'
    && !['outcome', 'outcome_source', 'outcome_verified_date'].includes(column));
  const missingStageRow = sourceRow(700).filter((_, columnIndex) => missingStageColumns.includes(IMPORT_COLUMNS[columnIndex]));
  await writeImport(missingStageInput, [missingStageRow], missingStageColumns);
  const missingStageLedger = resolve(temp, 'missing-stage-ledger.csv');
  const missingStageReport = await importRows(missingStageInput, missingStageLedger, { write: true });
  assert.equal(missingStageReport.rows_accepted, 1);
  const missingStageRecords = (await readFile(missingStageLedger, 'utf8')).trimEnd().split(/\r?\n/).map((line) => line.split(','));
  const missingStageHeader = missingStageRecords[0];
  const missingStageStoredRow = missingStageRecords[1];
  assert.equal(missingStageStoredRow[missingStageHeader.indexOf('workflow_stage')], 'unknown');
  assert.equal(missingStageStoredRow[missingStageHeader.indexOf('outcome')], 'unknown');

  const invalidStageInput = resolve(temp, 'invalid-stage.csv');
  await writeImport(invalidStageInput, [sourceRow(701, { workflow_stage: 'approved' })]);
  const invalidStageReport = await importRows(invalidStageInput, resolve(temp, 'invalid-stage-ledger.csv'), { allowRejected: true });
  assert.equal(invalidStageReport.rows_accepted, 0);
  assert.equal(invalidStageReport.rows_rejected, 1);

  const conflictInput = resolve(temp, 'conflict.csv');
  const conflictRowA = sourceRow(900);
  const conflictRowB = sourceRow(900, { application_type: 'family' });
  await writeImport(conflictInput, [conflictRowA, conflictRowB]);
  const conflictReport = await importRows(conflictInput, resolve(temp, 'conflict-ledger.csv'), { allowRejected: true });
  assert.equal(conflictReport.rows_accepted, 0);
  assert.equal(conflictReport.rows_rejected, 2);
  assert.equal(conflictReport.conflicting_duplicates, 2);

  const identicalInput = resolve(temp, 'identical-duplicates.csv');
  await writeImport(identicalInput, [sourceRow(902), sourceRow(902)]);
  const identicalReport = await importRows(identicalInput, resolve(temp, 'identical-ledger.csv'));
  assert.equal(identicalReport.rows_accepted, 1);
  assert.equal(identicalReport.duplicates, 1);

  const unsafeInput = resolve(temp, 'unknown-column.csv');
  await writeImport(unsafeInput, [sourceRow(901)], [...IMPORT_COLUMNS, 'contact_email']);
  const unsafeText = (await readFile(unsafeInput, 'utf8')).trimEnd();
  await writeFile(unsafeInput, `${unsafeText},fake@example.invalid\n`);
  const unsafeResult = runNode(importer, ['--input', unsafeInput, '--ledger', resolve(temp, 'must-not-exist.csv'), '--dry-run']);
  assert.equal(unsafeResult.status, 1);
  assert.equal(JSON.parse(unsafeResult.stdout).rows_rejected, 1);
  assert.deepEqual(JSON.parse(unsafeResult.stdout).unknown_fields, [`column_${IMPORT_COLUMNS.length + 1}`]);
  assert.doesNotMatch(`${unsafeResult.stdout}${unsafeResult.stderr}`, /fake@example\.invalid|contact_email/);

  const sourceKeyColumn = LEDGER_COLUMNS.indexOf('source_record_key');
  const storedLedger = (await readFile(twentyLedger, 'utf8')).split(/\r?\n/);
  assert.notEqual(storedLedger[1].split(',')[sourceKeyColumn], '');
  console.log('Evidence engine synthetic tests passed: import allow-list, dry-run, idempotency, deterministic duplicates, human review, unknown stage/outcome separation, explicit stage cohorts, date unknowns, and 9/10/19/20 thresholds.');
} finally {
  await rm(temp, { recursive: true, force: true });
}
