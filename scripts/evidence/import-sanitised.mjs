import { randomBytes } from 'node:crypto';
import { mkdir, rename, rm, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { tmpdir } from 'node:os';
import {
  DEFAULT_LEDGER_PATH,
  IMPORT_COLUMNS,
  LEDGER_COLUMNS,
} from './config.mjs';
import { readCsvFile } from './csv.mjs';
import { loadAndValidateLedger, validateRecords } from './ledger.mjs';

function parseArgs(args) {
  const options = { input: '', ledger: DEFAULT_LEDGER_PATH, mode: null };
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === '--input' || arg === '--ledger') {
      const value = args[index + 1];
      if (!value || value.startsWith('--')) throw new Error(`${arg} requires a file path.`);
      options[arg === '--input' ? 'input' : 'ledger'] = value;
      index += 1;
    } else if (arg === '--write') {
      if (options.mode && options.mode !== 'write') throw new Error('Choose either --write or --dry-run, not both.');
      options.mode = 'write';
    } else if (arg === '--dry-run') {
      if (options.mode && options.mode !== 'dry-run') throw new Error('Choose either --write or --dry-run, not both.');
      options.mode = 'dry-run';
    } else {
      throw new Error('Unsupported importer option.');
    }
  }
  if (!options.input) throw new Error('Usage: import-sanitised.mjs --input SANITISED.csv [--ledger PRIVATE.csv] [--dry-run|--write]');
  options.mode ??= 'dry-run';
  if (resolve(options.input) === resolve(options.ledger)) throw new Error('Input and private ledger must be different files.');
  if (options.mode === 'write') {
    const target = resolve(options.ledger);
    const privateRoot = resolve('private/evidence');
    const tempRoot = resolve(tmpdir());
    const within = (root) => {
      const pathFromRoot = relative(root, target);
      return pathFromRoot === '' || (!pathFromRoot.startsWith(`..${sep}`) && pathFromRoot !== '..' && !isAbsolute(pathFromRoot));
    };
    if (!within(privateRoot) && !within(tempRoot)) {
      throw new Error('Write target must be inside ignored private/evidence or the system temp directory used for synthetic tests.');
    }
  }
  return options;
}

function candidateRow(source, sourceHeader) {
  const sourceValues = Object.fromEntries(sourceHeader.map((column, index) => [column, source[index] ?? '']));
  const row = Object.fromEntries(LEDGER_COLUMNS.map((column) => [column, '']));
  row.case_id = `CASE-${randomBytes(6).toString('hex').toUpperCase()}`;
  row.source_record_key = sourceValues.source_record_key ?? '';

  const dateFields = new Set(['case_date', 'requested_start_date', 'requested_end_date', 'outcome_verified_date']);
  for (const column of IMPORT_COLUMNS) {
    if (column === 'source_record_key') continue;
    const value = sourceValues[column] ?? '';
    row[column] = dateFields.has(column) ? value : value || 'unknown';
  }

  for (const column of [
    'competent_consulate_review_status',
    'documentation_issue_review_status',
    'issue_category_review_status',
    'outcome_review_status',
  ]) row[column] = 'unreviewed';

  if (row.outcome === 'unknown') {
    row.outcome_source = 'unknown';
    row.outcome_verified_date = '';
  }
  return row;
}

function rowFingerprint(row) {
  return JSON.stringify(LEDGER_COLUMNS
    .filter((column) => !['case_id', 'source_record_key'].includes(column))
    .map((column) => row[column]));
}

function encodeCsv(rows) {
  return rows.map((row) => row.map((value) => {
    const field = String(value ?? '');
    return /[",\r\n]/.test(field) ? `"${field.replaceAll('"', '""')}"` : field;
  }).join(',')).join('\n') + '\n';
}

async function readExistingLedger(path) {
  try {
    const result = await loadAndValidateLedger(path);
    if (result.errors.length) throw new Error(`Existing private ledger is invalid (${result.errors.length} issue(s)).`);
    return result.rows;
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function atomicWrite(path, rows) {
  await mkdir(dirname(path), { recursive: true, mode: 0o700 });
  const temporaryPath = `${path}.tmp-${randomBytes(6).toString('hex')}`;
  try {
    await writeFile(temporaryPath, encodeCsv([LEDGER_COLUMNS, ...rows.map((row) => LEDGER_COLUMNS.map((column) => row[column]))]), { mode: 0o600 });
    await rename(temporaryPath, path);
  } catch (error) {
    await rm(temporaryPath, { force: true });
    throw error;
  }
}

let options;
try {
  options = parseArgs(process.argv.slice(2));
} catch (error) {
  console.error(error.message);
  process.exit(2);
}

let importRecords;
try {
  importRecords = await readCsvFile(options.input);
} catch (error) {
  console.error(error.code ? `Could not read sanitized import (${error.code}).` : `Could not parse sanitized import: ${error.message}`);
  process.exit(1);
}

const [header = [], ...rawRows] = importRecords;
const unknownHeaderFields = header.filter((column) => !IMPORT_COLUMNS.includes(column));
const safeUnknownFields = header.flatMap((column, index) => IMPORT_COLUMNS.includes(column) ? [] : [`column_${index + 1}`]);
const missingRequiredFields = IMPORT_COLUMNS.filter((column) => column === 'source_record_key' && !header.includes(column));
const duplicateHeaders = header.some((column, index) => header.indexOf(column) !== index);
const headerRejected = unknownHeaderFields.length > 0 || missingRequiredFields.length > 0 || duplicateHeaders || header.length === 0;

let existingRows;
try {
  existingRows = await readExistingLedger(options.ledger);
} catch (error) {
  console.error(error.code
    ? `Could not read private ledger (${error.code}); import was not written.`
    : `${error.message} Import was not written.`);
  process.exit(1);
}

const existingByKey = new Map(existingRows.map((row) => [row.source_record_key, row]));
const acceptedRows = [];
let rejectedRows = 0;
let duplicates = 0;
let conflictingDuplicates = 0;

if (headerRejected) {
  rejectedRows = rawRows.length;
} else {
  const candidatesByKey = new Map();
  for (const source of rawRows) {
    if (source.length !== header.length) {
      rejectedRows += 1;
      continue;
    }
    const sourceRow = candidateRow(source, header);
    const checked = validateRecords([LEDGER_COLUMNS, LEDGER_COLUMNS.map((column) => sourceRow[column])]);
    if (checked.errors.length) {
      rejectedRows += 1;
      continue;
    }
    const key = sourceRow.source_record_key;
    const group = candidatesByKey.get(key) ?? [];
    group.push(sourceRow);
    candidatesByKey.set(key, group);
  }

  for (const [key, group] of candidatesByKey) {
    const fingerprints = new Set(group.map(rowFingerprint));
    if (fingerprints.size > 1) {
      // Reject the entire conflicting key group; file order cannot select a winner.
      rejectedRows += group.length;
      conflictingDuplicates += group.length;
      continue;
    }
    if (existingByKey.has(key)) {
      // The existing private row is canonical and is never overwritten by an import.
      duplicates += group.length;
      continue;
    }
    acceptedRows.push(group[0]);
    duplicates += group.length - 1;
  }
}

if (options.mode === 'write' && acceptedRows.length > 0 && !headerRejected) {
  try {
    await atomicWrite(options.ledger, [...existingRows, ...acceptedRows]);
  } catch (error) {
    console.error(error.code ? `Could not write private ledger (${error.code}).` : 'Could not write private ledger.');
    process.exit(1);
  }
}

const report = {
  mode: options.mode,
  rows_received: rawRows.length,
  rows_accepted: acceptedRows.length,
  rows_rejected: rejectedRows,
  duplicates,
  conflicting_duplicates: conflictingDuplicates,
  unknown_fields: safeUnknownFields,
  unknown_field_names_withheld: safeUnknownFields.length > 0,
  missing_required_fields: missingRequiredFields,
  duplicate_headers: duplicateHeaders,
  records_requiring_human_review: acceptedRows.length,
  write_performed: options.mode === 'write' && acceptedRows.length > 0 && !headerRejected,
};
console.log(JSON.stringify(report, null, 2));
if (headerRejected || rejectedRows > 0) process.exitCode = 1;
