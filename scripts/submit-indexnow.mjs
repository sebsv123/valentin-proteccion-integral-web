import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const host = 'valentinproteccionintegral.com';
const origin = `https://${host}`;
const endpoint = 'https://api.indexnow.org/indexnow';
const key = '1b1763f6cf5cabcbfbeaf2b49f07a528';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const keyPath = path.join(root, 'public', `${key}.txt`);

const defaultUrls = [
  '/extranjeros',
  '/en/foreigners',
  '/seguros/salud-extranjeros',
  '/en/insurance/health/foreigners',
  '/visados/seguro-medico',
  '/en/visa-health-insurance',
  '/visados/seguro-medico/estudios',
  '/en/visa-health-insurance/student-visa',
  '/visados/seguro-medico/residencia-no-lucrativa',
  '/en/visa-health-insurance/non-lucrative-residence',
  '/visados/seguro-medico/teletrabajo-internacional',
  '/en/visa-health-insurance/digital-nomad',
  '/visados/seguro-medico/requisitos-consulares',
  '/en/visa-health-insurance/consulate-requirements',
];

function printUsage() {
  console.log(`Usage:
  npm run submit:indexnow                         Submit the 14 frozen Fast Citation URLs
  npm run submit:indexnow -- --dry-run            Preview the default submission
  npm run submit:indexnow -- /path-a /path-b      Submit changed canonical URLs
  npm run submit:indexnow -- --file urls.txt      Read one URL per line (# comments allowed)

URLs must be HTTPS URLs or root-relative paths on ${host}.`);
}

function parseArguments(args) {
  const urls = [];
  const files = [];
  let dryRun = false;

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--help' || arg === '-h') {
      printUsage();
      process.exit(0);
    } else if (arg === '--file') {
      const file = args[i + 1];
      if (!file) throw new Error('--file requires a path.');
      files.push(file);
      i += 1;
    } else if (arg.startsWith('--')) {
      throw new Error(`Unknown option: ${arg}`);
    } else {
      urls.push(arg);
    }
  }

  return { urls, files, dryRun };
}

function canonicalSameHostUrl(input) {
  if (!input.startsWith('/') && !input.startsWith('https://')) {
    throw new Error(`Use an HTTPS URL or root-relative path: ${input}`);
  }

  const url = new URL(input, origin);
  if (
    url.protocol !== 'https:' ||
    url.hostname !== host ||
    url.port ||
    url.username ||
    url.password
  ) {
    throw new Error(`URL must belong to https://${host}: ${input}`);
  }
  if (url.search || url.hash) {
    throw new Error(`Submit canonical URLs without query strings or fragments: ${input}`);
  }
  return url.href;
}

async function readSubmittedUrls(urls, files) {
  const fromFiles = await Promise.all(files.map(async (file) => {
    const contents = await readFile(path.resolve(root, file), 'utf8');
    return contents
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith('#'));
  }));

  const inputs = [...urls, ...fromFiles.flat()];
  const hasExplicitSelection = urls.length > 0 || files.length > 0;
  if (hasExplicitSelection && inputs.length === 0) {
    throw new Error('No URLs were provided in the explicit submission input.');
  }
  const selected = hasExplicitSelection ? inputs : defaultUrls;
  const normalized = [...new Set(selected.map(canonicalSameHostUrl))];
  if (normalized.length > 10_000) {
    throw new Error('IndexNow accepts at most 10,000 URLs in one request.');
  }
  return normalized;
}

async function main() {
  const { urls, files, dryRun } = parseArguments(process.argv.slice(2));
  const urlList = await readSubmittedUrls(urls, files);
  const keyFileContents = (await readFile(keyPath, 'utf8')).trim();
  if (keyFileContents !== key || !/^[a-zA-Z0-9-]{8,128}$/.test(key)) {
    throw new Error(`IndexNow key file is missing or invalid: ${keyPath}`);
  }

  const payload = {
    host,
    key,
    keyLocation: `${origin}/${key}.txt`,
    urlList,
  };

  if (dryRun) {
    console.log(JSON.stringify({ endpoint, keyLocation: payload.keyLocation, urlCount: urlList.length, urlList }, null, 2));
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(30_000),
  });
  const responseText = await response.text();

  if (response.status === 200) {
    console.log(`IndexNow accepted ${urlList.length} URL(s) (HTTP 200). This is not confirmation of crawling or indexing.`);
    return;
  }
  if (response.status === 202) {
    console.log(`IndexNow received ${urlList.length} URL(s) (HTTP 202); key validation is pending. This is not confirmation of crawling or indexing.`);
    return;
  }

  throw new Error(`IndexNow returned HTTP ${response.status}${responseText ? `: ${responseText}` : ''}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
