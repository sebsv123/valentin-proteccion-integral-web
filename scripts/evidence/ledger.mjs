import {
  CASE_ID_PATTERN,
  CONTROLLED_CODES,
  ENUMS,
  LEDGER_COLUMNS,
  PII_LIKE_COLUMN,
  SOURCE_RECORD_KEY_PATTERN,
} from './config.mjs';
import { readCsvFile } from './csv.mjs';

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const ISO_COUNTRY_PATTERN = /^[A-Z]{2}$/;

function isIsoDate(value) {
  if (!DATE_PATTERN.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

export function validateRecords(records) {
  const errors = [];
  if (records.length === 0) {
    return { errors: ['CSV is empty; expected the exact ledger header.'], rows: [], header: [] };
  }

  const [header, ...rawRows] = records;
  const duplicates = header.filter((name, index) => header.indexOf(name) !== index);
  if (duplicates.length) errors.push('Header contains duplicate column names.');

  const forbidden = header.filter((name) => PII_LIKE_COLUMN.test(name) && !LEDGER_COLUMNS.includes(name));
  if (forbidden.length) errors.push(`Header contains ${forbidden.length} PII-like column name(s); remove them. Header names are not echoed.`);

  if (header.length !== LEDGER_COLUMNS.length || header.some((name, index) => name !== LEDGER_COLUMNS[index])) {
    errors.push(`Header must exactly match: ${LEDGER_COLUMNS.join(',')}.`);
  }
  if (errors.length) return { errors, rows: [], header };

  const rows = [];
  const ids = new Set();
  const sourceKeys = new Set();
  rawRows.forEach((cells, rowIndex) => {
    const line = rowIndex + 2;
    if (cells.length !== LEDGER_COLUMNS.length) {
      errors.push(`Row ${line}: expected ${LEDGER_COLUMNS.length} columns, found ${cells.length}.`);
      return;
    }
    const row = Object.fromEntries(LEDGER_COLUMNS.map((column, index) => [column, cells[index]]));
    const fail = (field, issue) => errors.push(`Row ${line}, ${field}: ${issue}.`);

    if (!CASE_ID_PATTERN.test(row.case_id)) fail('case_id', 'must be a random token like CASE-012345ABCDEF; never use a source-system ID');
    if (ids.has(row.case_id)) fail('case_id', 'must be unique within the ledger');
    ids.add(row.case_id);

    if (!SOURCE_RECORD_KEY_PATTERN.test(row.source_record_key)) {
      fail('source_record_key', 'must be a stable, random non-PII token like SRC-0123456789ABCDEF01234567');
    }
    if (sourceKeys.has(row.source_record_key)) fail('source_record_key', 'must be unique within the ledger');
    sourceKeys.add(row.source_record_key);

    for (const field of ['case_date', 'requested_start_date', 'requested_end_date', 'outcome_verified_date']) {
      const value = row[field];
      if (value !== '' && !isIsoDate(value)) fail(field, 'must be a valid YYYY-MM-DD date or blank when not known');
    }

    if (row.requested_start_date && row.requested_end_date && row.requested_end_date < row.requested_start_date) {
      fail('requested_end_date', 'must not be earlier than requested_start_date');
    }

    for (const [field, allowed] of Object.entries(ENUMS)) {
      if (!allowed.includes(row[field])) fail(field, `must be one of ${allowed.join(', ')}`);
    }

    if (row.application_country !== 'unknown' && !ISO_COUNTRY_PATTERN.test(row.application_country)) {
      fail('application_country', 'must be an ISO 3166-1 alpha-2 code or unknown');
    }

    for (const [field, allowed] of Object.entries(CONTROLLED_CODES)) {
      if (!allowed.includes(row[field])) fail(field, `must be an approved non-personal code (${allowed.join(', ')})`);
    }

    if (row.documentation_issue_review_status === 'reviewed'
      && row.issue_category_review_status === 'reviewed') {
      if (row.documentation_issue === 'no' && row.issue_category !== 'none') {
        fail('issue_category', 'must be none when a reviewed documentation_issue is no');
      }
      if (row.documentation_issue === 'yes' && row.issue_category === 'none') {
        fail('issue_category', 'cannot be none when a reviewed documentation_issue is yes');
      }
    }
    if (row.issue_category_review_status === 'reviewed'
      && row.issue_category === 'none'
      && (row.documentation_issue_review_status !== 'reviewed' || row.documentation_issue !== 'no')) {
      fail('issue_category', 'none requires a reviewed documentation_issue of no');
    }

    if (row.outcome === 'unknown') {
      if (row.outcome_source !== 'unknown') fail('outcome_source', 'must be unknown when outcome is unknown');
      if (row.outcome_verified_date !== '') fail('outcome_verified_date', 'must be blank when outcome is unknown');
    } else if (row.outcome_review_status === 'reviewed') {
      if (row.outcome_source === 'unknown') fail('outcome_source', 'must identify the checked source for a reviewed outcome');
      if (row.outcome_verified_date === '') fail('outcome_verified_date', 'is required for a reviewed outcome');
    }

    // Free-text cells are never permitted, including embedded line breaks.
    for (const field of [
      'case_id', 'source_record_key', 'application_type', 'application_country',
      'competent_consulate', 'competent_consulate_review_status',
      'applying_from_abroad', 'already_in_spain', 'had_nie_when_arranging',
      'insurance_product', 'certificate_requested', 'documentation_issue',
      'documentation_issue_review_status', 'issue_category',
      'issue_category_review_status', 'outcome', 'outcome_review_status',
      'outcome_source', 'data_source',
    ]) {
      if (/[\r\n\t]/.test(row[field])) fail(field, 'must be a single-line controlled value');
    }

    rows.push(row);
  });

  return { errors, rows, header };
}

export async function loadAndValidateLedger(path) {
  const records = await readCsvFile(path);
  return validateRecords(records);
}
