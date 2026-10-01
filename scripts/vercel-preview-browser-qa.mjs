import fs from 'node:fs';
import process from 'node:process';
import { chromium } from '@playwright/test';

const outputDir = process.env.PREVIEW_BROWSER_QA_OUTPUT || 'artifacts/preview-browser-qa';
const previewRaw = process.env.PREVIEW_URL || '';
const tokenFile = process.env.VERCEL_OIDC_TOKEN_FILE || '';
const approvedHostPattern = /^(?:valentin-proteccion-integral|valentinproteccionintegral)(?:-[a-z0-9-]+)?-sebsv123s-projects\.vercel\.app$/i;
const sizes = [
  { name: '320x568', width: 320, height: 568, mobile: true, touch: true },
  { name: '390x844', width: 390, height: 844, mobile: true, touch: true },
  { name: '430x932', width: 430, height: 932, mobile: true, touch: true },
  { name: '768x1024', width: 768, height: 1024, mobile: true, touch: true },
  { name: '844x390', width: 844, height: 390, mobile: true, touch: true },
  { name: '1440x900', width: 1440, height: 900, mobile: false, touch: false },
  { name: '1920x1080', width: 1920, height: 1080, mobile: false, touch: false },
];

const routePairs = [
  { key: 'home', es: '/', en: '/en', kind: 'home' },
  { key: 'health', es: '/seguros/salud', en: '/en/insurance/health', kind: 'health' },
  { key: 'families', es: '/seguros/salud/familias', en: '/en/insurance/health-insurance/families', kind: 'families' },
  { key: 'comprehensive', es: '/seguros/salud/completa', en: '/en/insurance/health-insurance/comprehensive', kind: 'comprehensive' },
  { key: 'reimbursement', es: '/seguros/salud/reembolso', en: '/en/insurance/health-insurance/reimbursement', kind: 'reimbursement' },
  { key: 'business-health', es: '/empresas/salud', en: '/en/business/health-insurance', kind: 'business' },
  { key: 'foreigners', es: '/extranjeros', en: '/en/foreigners', kind: 'foreigners' },
  { key: 'self-employed', es: '/autonomos', en: '/en/for/self-employed', kind: 'smoke' },
];

const allRoutes = routePairs.flatMap((pair) => [
  { ...pair, locale: 'ES', path: pair.es },
  { ...pair, locale: 'EN', path: pair.en },
]);

function parsePreviewUrl() {
  let url;
  try {
    url = new URL(previewRaw);
  } catch {
    throw new Error('PREVIEW_URL is not a valid URL');
  }
  if (url.protocol !== 'https:' || !approvedHostPattern.test(url.hostname)) {
    throw new Error('PREVIEW_URL is not an approved Vercel Preview hostname');
  }
  return url;
}

function readTrustedToken() {
  if (!tokenFile) throw new Error('VERCEL_OIDC_TOKEN_FILE is unavailable');
  const token = fs.readFileSync(tokenFile, 'utf8').trim();
  if (!token) throw new Error('Vercel OIDC token file is empty');
  return token;
}

function mkdirs() {
  fs.mkdirSync(`${outputDir}/screenshots`, { recursive: true });
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function firstMatchingText(text, values) {
  const lower = text.toLowerCase();
  return values.find((value) => lower.includes(value.toLowerCase())) || null;
}

async function installTokenScopedRouting(page, approvedHost, token) {
  await page.route('**/*', async (route) => {
    const requestUrl = new URL(route.request().url());
    const headers = { ...route.request().headers() };
    delete headers['x-vercel-trusted-oidc-idp-token'];
    if (requestUrl.hostname === approvedHost) {
      headers['x-vercel-trusted-oidc-idp-token'] = token;
    }
    await route.continue({ headers });
  });
}

function attachRuntimeCapture(page, approvedHost, runtime) {
  page.on('pageerror', (error) => runtime.uncaught.push(error.message));
  page.on('console', (message) => {
    if (message.type() !== 'error') return;
    const location = message.location().url || '';
    const isApplication = !location || new URL(location, `https://${approvedHost}`).hostname === approvedHost;
    (isApplication ? runtime.applicationConsoleErrors : runtime.externalConsoleErrors).push(message.text());
    if (/hydration|hydrated|server rendered HTML/i.test(message.text())) runtime.hydration.push(message.text());
  });
  page.on('requestfailed', (request) => {
    const requestUrl = new URL(request.url());
    const failure = { url: request.url(), resourceType: request.resourceType(), error: request.failure()?.errorText || 'request failed' };
    if (failure.error === 'net::ERR_ABORTED') return;
    if (requestUrl.hostname === approvedHost) runtime.applicationRequestFailures.push(failure);
    else runtime.externalRequestFailures.push(failure);
  });
}

async function openPage(browser, baseUrl, approvedHost, token, size, path, locale) {
  const context = await browser.newContext({
    viewport: { width: size.width, height: size.height },
    screen: { width: size.width, height: size.height },
    isMobile: size.mobile,
    hasTouch: size.touch,
    locale: locale === 'EN' ? 'en-US' : 'es-ES',
  });
  const page = await context.newPage();
  const runtime = {
    applicationConsoleErrors: [],
    externalConsoleErrors: [],
    applicationRequestFailures: [],
    externalRequestFailures: [],
    uncaught: [],
    hydration: [],
  };
  await installTokenScopedRouting(page, approvedHost, token);
  attachRuntimeCapture(page, approvedHost, runtime);
  const response = await page.goto(new URL(path, baseUrl).href, { waitUntil: 'domcontentloaded', timeout: 30000 });
  await wait(500);
  return { context, page, response, runtime };
}

async function acceptCookies(page) {
  const button = page.locator('button:visible').filter({ hasText: /Aceptar todas|Accept all/i }).last();
  if (await button.count()) {
    await button.click({ force: true });
    await wait(250);
  }
}

async function scrollScreenshotTarget(page, name) {
  const targets = {
    'health-390-decision': /Primero: ¿qué tipo de cobertura necesitas\?|First: what type of cover do you need/i,
    'families-390-fit': /¿Encaja contigo\?|Could this fit your family/i,
    'comprehensive-390-fit': /¿Cuándo tiene sentido añadir hospitalización\?|When does hospital cover make sense/i,
    'reimbursement-390-fit': /¿Te encaja el reembolso\?|Could reimbursement fit you/i,
    'foreigners-390-chooser': /¿Qué situación se parece más a la tuya\?|Which situation is closest to yours/i,
  };
  const pattern = targets[name];
  if (!pattern) return;
  const target = page.getByText(pattern).first();
  if (await target.count()) await target.scrollIntoViewIfNeeded();
  await wait(250);
}

async function applicationEvidence(page) {
  return page.evaluate(() => ({
    title: document.title,
    hasMain: Boolean(document.querySelector('main')),
    hasHeader: Boolean(document.querySelector('header')),
    brandText: document.body.innerText.includes('Valentín') || document.body.innerText.includes('Valentin'),
    loginPage: /Login – Vercel|Provider's accounts list is empty|Sign in to Vercel/i.test(document.title + document.body.innerText),
  }));
}

async function geometry(page) {
  return page.evaluate(() => {
    const before = window.scrollX;
    window.scrollTo({ left: 1000, top: window.scrollY, behavior: 'instant' });
    const horizontalScrollReachable = window.scrollX > 0;
    window.scrollTo({ left: before, top: window.scrollY, behavior: 'instant' });
    const primary = [...document.querySelectorAll('a[data-mobile-primary-cta], a, button')]
      .find((element) => {
        const text = (element.textContent || '').trim();
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0 && /Revisar|Review|Solicitar orientación|Ask for guidance|Solicitar estudio|Request a review/i.test(text);
      });
    const rect = primary?.getBoundingClientRect();
    const visibleAudienceGroups = [...document.querySelectorAll('[role="group"]')]
      .filter((element) => element.getBoundingClientRect().width > 0 && /autónomo|self-employed|business|empresa/i.test(element.textContent || '')).length;
    return {
      height: document.documentElement.scrollHeight,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyScrollWidth: document.body.scrollWidth,
      horizontalScrollReachable,
      firstCta: primary && rect ? { text: (primary.textContent || '').trim(), y: Math.round(rect.top + window.scrollY) } : null,
      audienceSelectors: visibleAudienceGroups,
    };
  });
}

async function assertApp(page, path) {
  const evidence = await applicationEvidence(page);
  if (!evidence.hasMain || !evidence.hasHeader || !evidence.brandText || evidence.loginPage) {
    throw new Error(`Trusted browser access did not load VPI application for ${path}`);
  }
  return evidence;
}

async function pageText(page) {
  return page.locator('body').innerText();
}

async function assertWaveMarkers(page, route) {
  const text = await pageText(page);
  const required = {
    families: ['¿Encaja contigo?', 'Revisar mi caso familiar'],
    comprehensive: ['¿Cuándo tiene sentido añadir hospitalización?', 'Revisar si necesito hospitalización'],
    reimbursement: ['¿Te encaja el reembolso?', 'VPI no aprueba el reembolso', 'Revisar si el reembolso encaja conmigo'],
    health: ['Elige tu seguro de salud', 'Solicitar orientación'],
    business: ['¿Cuál es tu caso?', 'Soy autónomo', 'Represento una empresa'],
    foreigners: ['Revisar mi caso'],
  }[route.kind] || [];
  const englishRequired = {
    families: ['Could this fit your family', 'Review my family situation'],
    comprehensive: ['When does hospital cover make sense', 'Review whether I need hospital cover'],
    reimbursement: ['Could reimbursement fit you', 'VPI does not approve reimbursement', 'Review whether reimbursement fits me'],
    health: ['Choose your health insurance', 'Ask for guidance'],
    business: ['Which best describes you?', 'I am self-employed', 'I represent a business'],
    foreigners: ['Review my case'],
  }[route.kind] || [];
  const missing = (route.locale === 'EN' ? englishRequired : required).filter((marker) => !text.includes(marker));
  if (missing.length) throw new Error(`Missing Wave 1 markers on ${route.path}: ${missing.join(' | ')}`);
}

async function clickAndReturnContext(page, route) {
  const expectedPath = route.locale === 'EN' ? '/en/contact' : '/contacto';
  const cta = page.locator(`a[data-mobile-primary-cta][href="${expectedPath}"]:visible`).first();
  if (!await cta.count()) return { status: 'not-applicable' };
  const before = page.url();
  await cta.evaluate((element) => element.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' }));
  const navigation = page.waitForURL((url) => url.pathname === expectedPath, { timeout: 5000 }).catch(() => null);
  await cta.click();
  await navigation;
  await page.waitForLoadState('domcontentloaded').catch(() => {});
  await wait(250);
  const destination = new URL(page.url());
  if (destination.pathname !== expectedPath) throw new Error(`CTA on ${route.path} did not navigate to ${expectedPath}`);
  const text = await pageText(page);
  const contextVisible = /Contacto|Contact us|insurance|seguro/i.test(text);
  const backNavigation = page.waitForURL((url) => url.pathname === route.path, { timeout: 5000 }).catch(() => null);
  await page.goBack({ waitUntil: 'domcontentloaded' }).catch(() => {});
  await backNavigation;
  await wait(200);
  return {
    from: before,
    destination: destination.pathname,
    expected: expectedPath,
    contextVisible,
    rating: contextVisible ? 'PASS' : 'LOW',
    backReturned: new URL(page.url()).pathname === route.path,
  };
}

async function stickyWhatsappCheck(browser, baseUrl, approvedHost, token, path, size) {
  const opened = await openPage(browser, baseUrl, approvedHost, token, size, path, path.startsWith('/en') ? 'EN' : 'ES');
  const { page, context, runtime } = opened;
  await assertApp(page, path);
  await acceptCookies(page);
  const inline = page.locator('main a[href*="wa.me"]').first();
  if (!await inline.count()) {
    await context.close();
    return { path, status: 'not-applicable', runtime };
  }
  const sticky = page.locator('[data-sticky-whatsapp="true"]');
  await inline.scrollIntoViewIfNeeded();
  await wait(350);
  const compact = await sticky.locator('a').evaluate((element) => element.className.includes('w-12'));
  const beforeWidth = await page.locator('main').evaluate((element) => element.getBoundingClientRect().width);
  await page.evaluate(() => {
    const nodes = [...document.querySelectorAll('main a[href*="wa.me"]')];
    const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    let candidate = max;
    for (let y = 0; y <= max; y += 100) {
      const clear = nodes.every((node) => {
        const top = node.getBoundingClientRect().top + window.scrollY;
        const bottom = top + node.getBoundingClientRect().height;
        return bottom < y || top > y + window.innerHeight;
      });
      if (clear) { candidate = y; break; }
    }
    window.scrollTo({ top: candidate, behavior: 'instant' });
  });
  await wait(350);
  const alwaysFloating = await sticky.locator('a').evaluate((element) => element.className.includes('w-12'));
  const restored = alwaysFloating ? await sticky.locator('a').isVisible() : await sticky.locator('a').evaluate((element) => !element.className.includes('w-12'));
  const afterWidth = await page.locator('main').evaluate((element) => element.getBoundingClientRect().width);
  await context.close();
  return { path, compact, restored, layoutShift: Math.abs(beforeWidth - afterWidth) > 1, runtime };
}

async function menuCheck(browser, baseUrl, approvedHost, token, size) {
  const opened = await openPage(browser, baseUrl, approvedHost, token, size, '/', 'ES');
  const { page, context, runtime } = opened;
  await assertApp(page, '/');
  await acceptCookies(page);
  const open = page.locator('button[data-mobile-menu-trigger="true"]:visible').first();
  await open.click({ force: true });
  await wait(300);
  const close = page.locator('button[data-mobile-menu-trigger="true"]:visible').first();
  const nested = page.getByRole('button', { name: /Empresas y Autónomos|Businesses & Self-employed/i }).first();
  if (await nested.count()) {
    await nested.click({ force: true });
    await wait(200);
  }
  const result = {
    open: await close.count() > 0,
    nested: await page.locator('nav a:visible').count() > 2,
    scrollLock: await page.evaluate(() => getComputedStyle(document.body).overflow === 'hidden'),
    visibleLinks: await page.locator('nav a:visible').count(),
    backgroundInterception: false,
  };
  await close.click({ force: true });
  await page.waitForFunction(() => {
    const button = document.querySelector('button[data-mobile-menu-trigger="true"]');
    return !button || button.getAttribute('aria-expanded') === 'false';
  }, null, { timeout: 3000 }).catch(() => {});
  await wait(350);
  const stillOpen = await page.locator('button[data-mobile-menu-trigger="true"]').first().getAttribute('aria-expanded') === 'true';
  if (stillOpen) {
    await page.keyboard.press('Escape');
    await page.waitForFunction(() => {
      const button = document.querySelector('button[data-mobile-menu-trigger="true"]');
      return !button || button.getAttribute('aria-expanded') === 'false';
    }, null, { timeout: 3000 }).catch(() => {});
  }
  result.close = await page.locator('button[data-mobile-menu-trigger="true"]').count() === 0
    || await page.locator('button[data-mobile-menu-trigger="true"]').first().getAttribute('aria-expanded') === 'false';
  result.scrollRestored = await page.evaluate(() => getComputedStyle(document.body).overflow !== 'hidden');
  await context.close();
  return { viewport: `${size.width}x${size.height}`, ...result, runtime };
}

async function languageCheck(browser, baseUrl, approvedHost, token) {
  const opened = await openPage(browser, baseUrl, approvedHost, token, sizes[1], '/seguros/salud', 'ES');
  const { page, context, runtime } = opened;
  await assertApp(page, '/seguros/salud');
  await acceptCookies(page);
  const enLink = page.locator('a[href="/en/insurance/health"]:visible').first();
  if (!await enLink.count()) throw new Error('English language link missing on Health');
  await enLink.click({ force: true });
  await page.waitForLoadState('domcontentloaded');
  const onEnglish = page.url().endsWith('/en/insurance/health');
  const esLink = page.locator('a[href="/seguros/salud"]:visible').first();
  if (!await esLink.count()) throw new Error('Spanish language link missing on English Health');
  await esLink.click({ force: true });
  await page.waitForLoadState('domcontentloaded');
  const backSpanish = page.url().endsWith('/seguros/salud');
  await context.close();
  return { onEnglish, backSpanish, runtime };
}

async function run() {
  mkdirs();
  const baseUrl = parsePreviewUrl();
  const approvedHost = baseUrl.hostname;
  const token = readTrustedToken();
  const browser = await chromium.launch({ headless: true });
  const result = {
    previewHost: approvedHost,
    deploymentSha: process.env.DEPLOYMENT_SHA || null,
    developmentHead: process.env.DEVELOPMENT_HEAD || null,
    playwright: process.env.npm_package_devDependencies_playwright || 'installed @playwright/test',
    access: { actualApp: false, loginPage: false, tokenSentToThirdParty: false, tokenExposed: false },
    routeMetrics: [],
    screenshots: [],
    stickyWhatsapp: [],
    menus: [],
    language: null,
    runtime: { hydration: [], uncaught: [], applicationRequestFailures: [], applicationConsoleErrors: [], externalRequestFailures: [], externalConsoleErrors: [] },
    failures: [],
  };

  try {
    const proof = await openPage(browser, baseUrl, approvedHost, token, sizes[1], '/', 'ES');
    const evidence = await applicationEvidence(proof.page);
    result.access.actualApp = evidence.hasMain && evidence.hasHeader && evidence.brandText && !evidence.loginPage;
    result.access.loginPage = evidence.loginPage;
    if (!result.access.actualApp) throw new Error('TRUSTED_OIDC_BROWSER_ACCESS_FAILED');
    await proof.context.close();

    for (const route of allRoutes) {
      for (const size of sizes.filter((candidate) => ['320x568', '390x844', '430x932', '768x1024'].includes(candidate.name))) {
        const opened = await openPage(browser, baseUrl, approvedHost, token, size, route.path, route.locale);
        const { page, context, response, runtime } = opened;
        try {
          await assertApp(page, route.path);
          if (response?.status() !== 200) throw new Error(`HTTP ${response?.status() || 'unknown'} for ${route.path}`);
          if (size.name === '390x844') await assertWaveMarkers(page, route);
          const metrics = await geometry(page);
          result.routeMetrics.push({ route: route.path, locale: route.locale, viewport: size.name, ...metrics });
          if (metrics.horizontalScrollReachable) throw new Error(`Horizontal body scroll reachable on ${route.path} at ${size.name}`);
          if (size.name === '390x844' && ['families', 'comprehensive', 'reimbursement'].includes(route.kind)) {
            const contextResult = await clickAndReturnContext(page, route);
            result.routeMetrics.at(-1).ctaContext = contextResult;
          }
          const runtimeKeys = ['hydration', 'uncaught', 'applicationRequestFailures', 'applicationConsoleErrors'];
          for (const key of runtimeKeys) result.runtime[key].push(...runtime[key].map((entry) => ({ route: route.path, viewport: size.name, entry })));
        } catch (error) {
          result.failures.push(error instanceof Error ? error.message : String(error));
        } finally {
          await context.close();
        }
      }
    }

    const screenshotPlan = [
      ['home-390-top', '/', '390x844'],
      ['health-390-decision', '/seguros/salud', '390x844'],
      ['families-390-fit', '/seguros/salud/familias', '390x844'],
      ['comprehensive-390-fit', '/seguros/salud/completa', '390x844'],
      ['reimbursement-390-fit', '/seguros/salud/reembolso', '390x844'],
      ['business-390-selector', '/empresas/salud', '390x844'],
      ['foreigners-390-chooser', '/extranjeros', '390x844'],
      ['families-320', '/seguros/salud/familias', '320x568'],
      ['reimbursement-320', '/seguros/salud/reembolso', '320x568'],
      ['health-768', '/seguros/salud', '768x1024'],
      ['business-768', '/empresas/salud', '768x1024'],
      ['home-844x390-menu', '/', '844x390'],
    ];
    for (const [name, path, sizeName] of screenshotPlan) {
      const size = sizes.find((candidate) => candidate.name === sizeName);
      const opened = await openPage(browser, baseUrl, approvedHost, token, size, path, path.startsWith('/en') ? 'EN' : 'ES');
      try {
        await assertApp(opened.page, path);
        await acceptCookies(opened.page);
        await scrollScreenshotTarget(opened.page, name);
        if (name === 'home-844x390-menu') {
          const menuTrigger = opened.page.locator('button[data-mobile-menu-trigger="true"]:visible').first();
          await menuTrigger.click({ force: true });
          await wait(2200);
        }
        await opened.page.screenshot({ path: `${outputDir}/screenshots/${name}.png`, fullPage: false });
        result.screenshots.push(`${name}.png`);
      } finally {
        await opened.context.close();
      }
    }

    result.menus.push(await menuCheck(browser, baseUrl, approvedHost, token, sizes[0]));
    result.menus.push(await menuCheck(browser, baseUrl, approvedHost, token, sizes[1]));
    result.menus.push(await menuCheck(browser, baseUrl, approvedHost, token, sizes[4]));
    result.language = await languageCheck(browser, baseUrl, approvedHost, token);
    for (const path of ['/', '/seguros/salud', '/extranjeros']) {
      result.stickyWhatsapp.push(await stickyWhatsappCheck(browser, baseUrl, approvedHost, token, path, sizes[1]));
      result.stickyWhatsapp.push(await stickyWhatsappCheck(browser, baseUrl, approvedHost, token, path, sizes[0]));
    }

    for (const route of routePairs.filter((pair) => pair.kind !== 'smoke')) {
      for (const size of sizes.filter((candidate) => ['1440x900', '1920x1080'].includes(candidate.name))) {
        const opened = await openPage(browser, baseUrl, approvedHost, token, size, route.es, 'ES');
        try {
          await assertApp(opened.page, route.es);
          const metrics = await geometry(opened.page);
          result.routeMetrics.push({ route: route.es, viewport: size.name, ...metrics });
        } finally {
          await opened.context.close();
        }
      }
    }
  } finally {
    await browser.close();
    fs.writeFileSync(`${outputDir}/summary.json`, `${JSON.stringify(result, null, 2)}\n`);
  }

  const appRuntimeFailures = result.runtime.hydration.length + result.runtime.uncaught.length + result.runtime.applicationRequestFailures.length;
  if (result.failures.length || appRuntimeFailures) {
    console.error(JSON.stringify({ failures: result.failures, runtime: result.runtime }, null, 2));
    process.exitCode = 1;
  }
  console.log(JSON.stringify({
    previewHost: result.previewHost,
    deploymentSha: result.deploymentSha,
    actualApp: result.access.actualApp,
    screenshotCount: result.screenshots.length,
    routeMetricCount: result.routeMetrics.length,
    failures: result.failures.length,
    hydrationErrors: result.runtime.hydration.length,
    uncaught: result.runtime.uncaught.length,
    applicationRequestFailures: result.runtime.applicationRequestFailures.length,
    artifact: `${outputDir}/summary.json`,
  }, null, 2));
}

await run();
