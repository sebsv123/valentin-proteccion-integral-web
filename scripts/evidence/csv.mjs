import { readFile } from 'node:fs/promises';

export function parseCsv(source) {
  const input = source.replace(/^\uFEFF/, '');
  const records = [];
  let record = [];
  let field = '';
  let quoted = false;
  let afterQuote = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (quoted) {
      if (char === '"') {
        if (input[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = false;
          afterQuote = true;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (afterQuote && char !== ',' && char !== '\r' && char !== '\n') {
      throw new Error('Malformed CSV: unexpected character after a quoted field.');
    }

    if (char === '"') {
      if (field.length !== 0 || afterQuote) throw new Error('Malformed CSV: unexpected quote.');
      quoted = true;
    } else if (char === ',') {
      record.push(field);
      field = '';
      afterQuote = false;
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && input[index + 1] === '\n') index += 1;
      record.push(field);
      records.push(record);
      record = [];
      field = '';
      afterQuote = false;
    } else {
      field += char;
    }
  }

  if (quoted) throw new Error('Malformed CSV: unterminated quoted field.');
  if (field.length > 0 || record.length > 0 || afterQuote) {
    record.push(field);
    records.push(record);
  }

  return records.filter((row) => row.some((value) => value !== ''));
}

export async function readCsvFile(path) {
  return parseCsv(await readFile(path, 'utf8'));
}
