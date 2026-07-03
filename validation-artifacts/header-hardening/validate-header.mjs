import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3028";
const widths = [390, 1024, 1280, 1366, 1440, 1536, 1600, 1920];
const screenshotWidths = new Set([1280, 1366, 1440, 1536, 1920]);
const paths = ["/", "/extranjeros", "/extranjeros/alquileres", "/seguros", "/sobre-nosotros", "/contacto"];
const outputDir = new URL("./screenshots/", import.meta.url);
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const failures = [];

for (const width of widths) {
  const page = await browser.newPage({ viewport: { width, height: 900 }, reducedMotion: "no-preference" });

  for (const path of paths) {
    await page.goto(`${baseUrl}${path}`, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => document.fonts.ready);
    const result = await page.evaluate(() => {
      const header = document.querySelector("header.sticky");
      const brand = header?.querySelector('a[aria-label="Valentín Protección Integral"]');
      const logo = brand?.querySelector("img");
      const menu = header?.querySelector('button[aria-label="Abrir menú"]');
      const inlineNav = header?.querySelector('nav[aria-label="Primary"]')?.parentElement;
      const inlineWhatsApp = header?.querySelector('a[href*="wa.me"]');
      const panel = document.querySelector("#staggered-menu-panel");
      const panelRect = panel?.getBoundingClientRect();
      return {
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        headerRight: header?.getBoundingClientRect().right ?? 0,
        logoVisible: Boolean(logo && logo.getBoundingClientRect().width > 0),
        menuVisible: Boolean(menu && menu.getBoundingClientRect().width > 0),
        navVisible: Boolean(inlineNav && inlineNav.getBoundingClientRect().width > 0),
        whatsappVisible: Boolean(inlineWhatsApp && inlineWhatsApp.getBoundingClientRect().width > 0),
        panelHidden: panel?.getAttribute("aria-hidden") === "true",
        panelOffscreen: Boolean(panelRect && panelRect.left >= innerWidth - 1),
        panelVisibility: panel ? getComputedStyle(panel).visibility : "missing",
        panelDisplay: panel ? getComputedStyle(panel).display : "missing",
        activeElement: document.activeElement?.tagName,
        offenders: [...document.querySelectorAll("body *")]
          .map((element) => ({ element, rect: element.getBoundingClientRect() }))
          .filter(({ rect }) => rect.right > innerWidth + 1 || rect.left < -1)
          .slice(0, 8)
          .map(({ element, rect }) => ({
            tag: element.tagName,
            id: element.id,
            className: typeof element.className === "string" ? element.className.slice(0, 100) : "",
            left: Math.round(rect.left),
            right: Math.round(rect.right),
          })),
      };
    });

    const expectedCompact = width < 1536;
    const checks = {
      noHorizontalOverflow: result.overflow <= 1,
      headerInsideViewport: result.headerRight <= width + 1,
      logoComplete: result.logoVisible,
      correctCompactMode: expectedCompact ? result.menuVisible && !result.navVisible : !result.menuVisible && result.navVisible,
      whatsappAvailableInline: expectedCompact || result.whatsappVisible,
      closedPanelHidden: result.panelHidden &&
        (result.panelDisplay === "none" || (result.panelOffscreen && result.panelVisibility === "hidden")),
    };

    for (const [name, passed] of Object.entries(checks)) {
      if (!passed) failures.push({ width, path, name, result });
    }

    if (path === "/" && screenshotWidths.has(width)) {
      await page.screenshot({
        path: new URL(`header-${width}.png`, outputDir).pathname,
        clip: { x: 0, y: 0, width, height: 180 },
      });
    }
  }

  if (width < 1536) {
    await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
    const trigger = page.locator('button[aria-label="Abrir menú"]');
    await trigger.focus();
    await page.keyboard.press("Enter");
    await page.locator("#staggered-menu-panel").waitFor({ state: "visible" });
    await page.keyboard.press("Escape");
    await page.waitForTimeout(400);
    const closed = await page.locator("#staggered-menu-panel").getAttribute("aria-hidden");
    const focused = await trigger.evaluate((element) => document.activeElement === element);
    if (closed !== "true") failures.push({ width, path: "/", name: "escapeClosesMenu" });
    if (!focused) failures.push({ width, path: "/", name: "focusReturnsToTrigger" });
  }

  await page.close();
}

await browser.close();

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}

console.log(`PASS: ${widths.length * paths.length} combinaciones; capturas ${[...screenshotWidths].join(", ")} px.`);
