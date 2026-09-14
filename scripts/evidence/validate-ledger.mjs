import { DEFAULT_LEDGER_PATH } from './config.mjs';
import { loadAndValidateLedger } from './ledger.mjs';

const inputPath = process.argv[2] ?? DEFAULT_LEDGER_PATH;
let result;
try {
  result = await loadAndValidateLedger(inputPath);
} catch (error) {
  console.error(error.code
    ? `Could not read ledger file (${error.code}).`
    : `Could not parse ledger file: ${error.message}`);
  process.exit(1);
}

if (result.errors.length) {
  console.error(`Ledger validation failed (${result.errors.length} issue(s)):`);
  for (const error of result.errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Ledger valid: ${result.rows.length} row(s). Input values and headers were not printed.`);
