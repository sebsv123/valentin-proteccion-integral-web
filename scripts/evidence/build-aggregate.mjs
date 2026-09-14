import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { DEFAULT_LEDGER_PATH, DEFAULT_OUTPUT_PATH } from './config.mjs';
import { buildPublicAggregate } from './aggregate.mjs';
import { loadAndValidateLedger } from './ledger.mjs';

const inputPath = process.argv[2] ?? DEFAULT_LEDGER_PATH;
const outputPath = process.argv[3] ?? DEFAULT_OUTPUT_PATH;

let rows = [];
try {
  const result = await loadAndValidateLedger(inputPath);
  if (result.errors.length) {
    console.error(`Ledger validation failed (${result.errors.length} issue(s)); aggregate was not written:`);
    for (const error of result.errors) console.error(`- ${error}`);
    process.exit(1);
  }
  rows = result.rows;
} catch (error) {
  if (error.code !== 'ENOENT') {
    console.error(error.code
      ? `Could not read ledger file (${error.code}); aggregate was not written.`
      : `Could not parse ledger file: ${error.message}`);
    process.exit(1);
  }
  // No private input is an ordinary first-run state: produce only a suppressed shell.
}

const generatedOn = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'Europe/Madrid',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
}).format(new Date());
const output = buildPublicAggregate(rows, generatedOn);

try {
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, 'utf8');
} catch (error) {
  console.error(error.code ? `Could not write aggregate (${error.code}).` : 'Could not write aggregate.');
  process.exit(1);
}
console.log(`Wrote ${output.publication_status} aggregate with ${output.cohorts.length} explicit workflow-stage cohorts.`);
