import fs from 'node:fs';
import process from 'node:process';

const REPOSITORY = process.env.GITHUB_REPOSITORY || 'sebsv123/valentin-proteccion-integral-web';
const API_ROOT = 'https://api.github.com';
const PREVIEW_HOST = /^(?:valentin-proteccion-integral|valentinproteccionintegral)(?:-[a-z0-9-]+)?-sebsv123s-projects\.vercel\.app$/i;

const ROUTES = [
  { locale: 'ES', path: '/seguros/salud/familias' },
  { locale: 'ES', path: '/seguros/salud' },
  { locale: 'ES', path: '/seguros/salud/completa' },
  { locale: 'ES', path: '/seguros/salud/reembolso' },
  { locale: 'ES', path: '/seguros/salud/autonomos' },
  { locale: 'ES', path: '/seguros/salud/senior' },
  { locale: 'EN', path: '/en/insurance/health-insurance/families' },
  { locale: 'EN', path: '/en/insurance/health' },
  { locale: 'EN', path: '/en/insurance/health-insurance/comprehensive' },
  { locale: 'EN', path: '/en/insurance/health-insurance/reimbursement' },
  { locale: 'EN', path: '/en/insurance/health-insurance/self-employed' },
  { locale: 'EN', path: '/en/insurance/health-insurance/senior' },
];

const FAMILY_MARKERS = {
  ES: [
    'Quiero revisar qué opción encaja con mi familia',
    'descuentos o condiciones de precio específicas',
    'coste de la familia en conjunto',
    'ASISA — Cuadro Médico oficial',
    'SegurCaixa Adeslas — Cuadro Médico oficial',
  ],
  EN: [
    'I want to review which option fits my family',
    'discounts or specific pricing conditions',
    'household cost as a whole',
    'ASISA — Official medical directory',
    'SegurCaixa Adeslas — Official medical directory',
  ],
};

const COMPREHENSIVE_MARKERS = {
  ES: [
    'Quiero revisar si necesito hospitalización',
    '¿Qué cambia al añadir hospitalización?',
    '¿Necesitas hospitalización o principalmente especialistas y pruebas?',
    'Antes de elegir cobertura con hospitalización, comprueba esto',
    'Cuadro médico hospitalario',
    'Carencias',
    'Autorización previa',
    'Cuestionario y suscripción',
    'Exclusiones y límites',
    'Fecha de efecto',
  ],
  EN: [
    'I want to review whether I need hospital cover',
    'What changes when hospital cover is added?',
    'Do you need hospital cover or mainly specialists and tests?',
    'Before choosing hospital cover, check this',
    'Hospital network',
    'Waiting periods',
    'Prior authorisation',
    'Questionnaire and underwriting',
    'Exclusions and limits',
    'Effective date',
  ],
};

function eventPayload() {
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (!eventPath) throw new Error('GITHUB_EVENT_PATH is not available');
  return JSON.parse(fs.readFileSync(eventPath, 'utf8'));
}

function deploymentInfo() {
  const payload = eventPayload();
  const deployment = payload.deployment ?? {};
  const status = payload.deployment_status ?? {};
  const targetUrl = status.target_url || status.environment_url || deployment.environment_url || deployment.target_url || '';
  return {
    state: status.state,
    environment: deployment.environment,
    productionEnvironment: deployment.production_environment,
    creator: deployment.creator?.login,
    ref: deployment.meta?.githubCommitRef || deployment.ref || '',
    sha: typeof deployment.sha === 'string' ? deployment.sha.toLowerCase() : '',
    targetUrl,
  };
}

function output(name, value) {
  if (!process.env.GITHUB_OUTPUT) return;
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${String(value).replace(/[\r\n]/g, '')}\n`);
}

function summary(text) {
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${text.trim()}\n`);
}

function previewUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return null;
  }
  if (parsed.protocol !== 'https:' || !PREVIEW_HOST.test(parsed.hostname)) return null;
  return parsed;
}

function safeHost(rawUrl) {
  try {
    return new URL(rawUrl).hostname;
  } catch {
    return 'invalid-host';
  }
}

function githubHeaders() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is not available');
  return {
    accept: 'application/vnd.github+json',
    authorization: `Bearer ${token}`,
    'x-github-api-version': '2022-11-28',
  };
}

function repositoryPath() {
  const [owner, name] = REPOSITORY.split('/');
  if (!owner || !name) throw new Error('GITHUB_REPOSITORY must have owner/name form');
  return `${encodeURIComponent(owner)}/${encodeURIComponent(name)}`;
}

async function githubJson(path) {
  const response = await fetch(`${API_ROOT}${path}`, { headers: githubHeaders() });
  if (!response.ok) throw new Error(`GitHub API request failed (${response.status})`);
  return response.json();
}

async function developmentHead() {
  const repo = repositoryPath();
  const commit = await githubJson(`/repos/${repo}/commits/development`);
  if (!commit?.sha || !/^[0-9a-f]{40}$/i.test(commit.sha)) throw new Error('GitHub returned no valid development HEAD');
  return commit.sha.toLowerCase();
}

async function compareWithDevelopment(deploymentSha, developmentSha) {
  const repo = repositoryPath();
  return githubJson(`/repos/${repo}/compare/${deploymentSha}...${developmentSha}`);
}

function writeGuardSummary(status, info, head, detail = '') {
  const host = safeHost(info.targetUrl);
  summary(`## Vercel Preview QA\n\n**${status}**${detail ? ` — ${detail}` : ''}\n\n- Deployment SHA: \`${info.sha || 'missing'}\`\n- Development HEAD: \`${head || 'unavailable'}\`\n- Preview hostname: \`${host}\``);
}

async function guard() {
  const info = deploymentInfo();
  output('run', 'false');

  if (info.state !== 'success') {
    writeGuardSummary('SKIPPED_NON_SUCCESS', info, '', `deployment state is ${info.state || 'missing'}`);
    return;
  }

  const target = previewUrl(info.targetUrl);
  const refIsDevelopment = !info.ref
    || info.ref === 'development'
    || info.ref === 'refs/heads/development'
    || info.ref === info.sha;
  const eligible = info.environment === 'Preview'
    && info.productionEnvironment === false
    && info.creator === 'vercel[bot]'
    && refIsDevelopment
    && /^[0-9a-f]{40}$/i.test(info.sha)
    && target;
  if (!eligible) {
    writeGuardSummary('SKIPPED_NOT_ELIGIBLE', info, '', 'deployment metadata is outside the development-preview QA scope');
    return;
  }

  let head;
  try {
    head = await developmentHead();
  } catch (error) {
    writeGuardSummary('REJECTED_DEPLOYMENT', info, '', error instanceof Error ? error.message : 'could not fetch development HEAD');
    process.exitCode = 1;
    return;
  }

  if (info.sha === head) {
    output('run', 'true');
    output('preview_url', target.href);
    output('deployment_sha', info.sha);
    output('development_head', head);
    return;
  }

  let comparison;
  try {
    comparison = await compareWithDevelopment(info.sha, head);
  } catch (error) {
    writeGuardSummary('REJECTED_DEPLOYMENT', info, head, error instanceof Error ? error.message : 'could not compare deployment SHA');
    process.exitCode = 1;
    return;
  }

  if (comparison.status === 'ahead') {
    writeGuardSummary('SKIPPED_STALE_PREVIEW', info, head, 'deployment SHA is older than development HEAD');
    return;
  }

  writeGuardSummary('REJECTED_DEPLOYMENT', info, head, `deployment history is ${comparison.status || 'unknown'}`);
  process.exitCode = 1;
}

function stripMarkup(html) {
  const main = html.match(/<main\b[\s\S]*?<\/main>/i)?.[0] || html;
  return main
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&mdash;|&#8212;/gi, '—')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function forbiddenFamilyMarkers(text) {
  const checks = [
    ['old Families CTA', /Quiero revisar cómo usamos el seguro en casa|I want to review how we use insurance at home/i],
    ['generic ProductDecisionGrid', /Una lectura breve para entender mejor|A short guide to understand|Qué suele incluir|What it usually includes/i],
    ['generic Dental/Funeral ending', /Otras formas de protegerte|We can also help with other protection needs|Ver seguro de Dental|Dental insurance|Seguro de Decesos|Funeral insurance/i],
    ['old shared price guarantee', /El mismo seguro\. Mejor precio\. Garantizado\.|The same insurance\. A better price\. Guaranteed\./i],
    ['unsupported trust metrics', /1\.200\+|1,200\+|Familias atendidas por Rosa|Families supported by Rosa|\+10 años|100%\s+(?:Orientación sin compromiso|No-obligation guidance)/i],
    ['universal family discount threshold', /(?:a partir de|desde|from|starting at|minimum(?: of)?)\s+\d+\s+(?:personas|asegurados|people|members|insured)|\b\d{1,2}%\b/i],
    ['commercial insurer selector language', /(?:elige|choose|compara|compare|mejor|best)\s+(?:entre\s+)?(?:ASISA|Adeslas|SegurCaixa)/i],
  ];
  return checks.filter(([, pattern]) => pattern.test(text)).map(([label]) => label);
}

function forbiddenComprehensiveMarkers(text, locale) {
  const checks = [
    ['obsolete unrestricted coverage', locale === 'ES'
      ? /cobertura médica integral sin restricciones|sin limitaciones de la modalidad básica|todos los especialistas del cuadro médico|\bcobertura total\b|\bmáxima cobertura\b|\bopción más fuerte\b/i
      : /without the limits of a basic plan|\bunrestricted\b|\bunlimited access\b|\ball specialists\b|\bfull access to (?:the )?(?:full )?medical network\b|\btotal coverage\b|\bmaximum coverage\b|\bstrongest option\b/i],
    ['universal numeric waiting period', locale === 'ES'
      ? /entre\s+3\s+y\s+6\s+meses|3\s*(?:-|–|—|a)\s*6\s+meses/i
      : /(?:between\s+)?3\s*(?:-|–|—|to)\s*6\s+months|three\s+to\s+six\s+months/i],
    ['generic ProductDecisionGrid', /Una lectura breve para entender mejor|A short guide to understand|Qué suele incluir|What it usually includes/i],
    ['generic Dental/Funeral ending', /Otras formas de protegerte|We can also help with other protection needs|Ver seguro de Dental|Dental insurance|Seguro de Decesos|Funeral insurance/i],
    ['shared price guarantee', /El mismo seguro\. Mejor precio\. Garantizado\.|The same insurance\. A better price\. Guaranteed\./i],
    ['unsupported trust metrics', /1\.200\+|1,200\+|Familias atendidas por Rosa|Families supported by Rosa|\+10 años|100%\s+(?:Orientación sin compromiso|No-obligation guidance)/i],
  ];
  return checks.filter(([, pattern]) => pattern.test(text)).map(([label]) => label);
}

async function fetchRoute(baseUrl, route, token) {
  const url = new URL(route.path, baseUrl);
  try {
    const response = await fetch(url, {
      headers: { 'x-vercel-trusted-oidc-idp-token': token },
      redirect: 'follow',
    });
    const finalUrl = new URL(response.url);
    const body = await response.text();
    const failures = [];
    if (response.status !== 200) failures.push(`HTTP ${response.status}`);
    if (!PREVIEW_HOST.test(finalUrl.hostname)) failures.push(`final host ${finalUrl.hostname}`);
    if (/sso-api|vercel\.com\/login|vercel\.com\/sso|DEPLOYMENT_NOT_FOUND/i.test(body)) failures.push('Vercel protection/deployment marker');
    return { ...route, status: response.status, finalUrl: response.url, host: finalUrl.hostname, failures, body };
  } catch (error) {
    return { ...route, status: 'ERR', finalUrl: '', host: 'unavailable', failures: [error instanceof Error ? error.message : 'request failed'], body: '' };
  }
}

function markerResult(text, locale, markerSet, forbiddenMarkers) {
  const missing = markerSet[locale].filter((marker) => !text.includes(marker));
  const forbidden = forbiddenMarkers(text, locale);
  return { missing, forbidden };
}

async function qa() {
  const tokenFile = process.env.VERCEL_OIDC_TOKEN_FILE;
  const token = tokenFile ? fs.readFileSync(tokenFile, 'utf8').trim() : '';
  const baseUrl = previewUrl(process.env.PREVIEW_URL || '');
  if (!token || !baseUrl) throw new Error('QA token or approved preview URL is unavailable');

  const results = await Promise.all(ROUTES.map((route) => fetchRoute(baseUrl, route, token)));
  const families = results.filter((route) => route.path.endsWith('/familias') || route.path.endsWith('/families'));
  const comprehensive = results.filter((route) => route.path.endsWith('/completa') || route.path.endsWith('/comprehensive'));
  const familyMarkerResults = families.map((route) => ({
    locale: route.locale,
    missing: markerResult(stripMarkup(route.body), route.locale, FAMILY_MARKERS, (text) => forbiddenFamilyMarkers(text)).missing,
    forbidden: markerResult(stripMarkup(route.body), route.locale, FAMILY_MARKERS, (text) => forbiddenFamilyMarkers(text)).forbidden,
  }));
  const comprehensiveMarkerResults = comprehensive.map((route) => ({
    locale: route.locale,
    missing: markerResult(stripMarkup(route.body), route.locale, COMPREHENSIVE_MARKERS, forbiddenComprehensiveMarkers).missing,
    forbidden: markerResult(stripMarkup(route.body), route.locale, COMPREHENSIVE_MARKERS, forbiddenComprehensiveMarkers).forbidden,
  }));
  const routeFailures = results.filter((route) => route.failures.length > 0);
  const markerFailures = [...familyMarkerResults, ...comprehensiveMarkerResults].filter((result) => result.missing.length > 0 || result.forbidden.length > 0);

  summary([
    '## Vercel Preview QA',
    '',
    `- Deployment SHA: \`${process.env.DEPLOYMENT_SHA || 'from event'}\``,
    `- Development HEAD: \`${process.env.DEVELOPMENT_HEAD || 'from guard'}\``,
    `- Preview hostname: \`${baseUrl.hostname}\``,
    '',
    '| Locale | Route | HTTP | Final host | Result |',
    '| --- | --- | ---: | --- | --- |',
    ...results.map((route) => `| ${route.locale} | \`${route.path}\` | ${route.status} | \`${route.host}\` | ${route.failures.length ? `FAIL: ${route.failures.join('; ')}` : 'PASS'} |`),
    '',
    '**Families markers**',
    ...familyMarkerResults.map((result) => `- ${result.locale}: ${result.missing.length || result.forbidden.length ? `FAIL${result.missing.length ? `; missing: ${result.missing.join(', ')}` : ''}${result.forbidden.length ? `; forbidden: ${result.forbidden.join(', ')}` : ''}` : 'PASS'}`),
    '',
    '**Comprehensive markers**',
    ...comprehensiveMarkerResults.map((result) => `- ${result.locale}: ${result.missing.length || result.forbidden.length ? `FAIL${result.missing.length ? `; missing: ${result.missing.join(', ')}` : ''}${result.forbidden.length ? `; forbidden: ${result.forbidden.join(', ')}` : ''}` : 'PASS'}`),
  ].join('\n'));

  if (routeFailures.length || markerFailures.length) {
    process.exitCode = 1;
  }
}

const mode = process.argv[2] || 'guard';
if (mode === 'guard') await guard();
else if (mode === 'qa') await qa();
else throw new Error(`Unknown mode: ${mode}`);
