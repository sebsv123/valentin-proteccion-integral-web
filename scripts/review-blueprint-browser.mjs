/** Visual QA on loopback or the explicitly approved production domain. Install playwright + @axe-core/playwright outside the repo and set VPI_QA_MODULES. */
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
const require = createRequire(process.env.VPI_QA_MODULES ? `${process.env.VPI_QA_MODULES}/package.json` : import.meta.url);
const { chromium } = require('playwright');
const AxeBuilder = require('@axe-core/playwright').default;
const base = process.env.VPI_QA_BASE || 'http://127.0.0.1:3145';
assert(/^http:\/\/127\.0\.0\.1:\d+$/.test(base) || base === 'https://valentinproteccionintegral.com', 'QA only targets loopback or the approved production domain');
const output = process.env.VPI_QA_OUTPUT || 'docs/blueprint/screenshots'; await mkdir(output, {recursive: true});
let server;
if (process.env.VPI_QA_START === '1') {
 server = spawn(process.execPath, ['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',new URL(base).port], {env:{...process.env,VERCEL:'',VERCEL_ENV:'',LEAD_DELIVERY_CONTEXT:'test'},stdio:'ignore'});
 for(let i=0;;i++){try {await fetch(base+'/robots.txt');break;}catch{if(i>100)throw new Error('Local QA server failed to start');await new Promise(resolve=>setTimeout(resolve,100));}}
}
const browser = await chromium.launch({headless: true, ...(process.env.VPI_QA_CHROME ? {executablePath: process.env.VPI_QA_CHROME} : {})});
const report = {base, browser: browser.version(), noExternalSubmissions: true, pages: [], links: []};
const targets = [['blueprint-landing','/en/foreigners?partner=blueprint'],['ordinary-landing','/en/foreigners'],['fbi-article','/en/blog/fbi-background-check-spain'],['moving-article','/en/blog/moving-usa-spain-documents-insurance']];
try {
 for (const [device, viewport] of [['desktop',{width:1440,height:1000}],['mobile',{width:390,height:844}]]) {
  const context = await browser.newContext({viewport, deviceScaleFactor:1, reducedMotion:'reduce'});
  await context.route('**/*', route => {
   const request = route.request();
   if (!request.url().startsWith(base) || !['GET','HEAD'].includes(request.method())) return route.abort();
   return route.continue();
  });
  for (const [name,path] of targets) {
   const page = await context.newPage(); const errors = [], failures = [];
   page.on('pageerror', error => errors.push(error.message));
   page.on('response', response => { if(response.url().startsWith(base) && response.status() >= 400) failures.push({url:response.url(),status:response.status()}); });
   const response = await page.goto(base+path,{waitUntil:'networkidle'}); assert.equal(response.status(),200);
   await page.evaluate(()=>document.fonts.ready);
   // Dismiss the site's own consent UI through its visible reject option if present.
   const reject = page.getByRole('button',{name:/reject|rechazar|only necessary|solo necesarias/i}).first();
   if(await reject.isVisible()) await reject.click();
   for(let y=0; y<await page.evaluate(()=>document.body.scrollHeight); y+=650) {
    await page.evaluate(y=>window.scrollTo(0,y),y); await page.waitForTimeout(80);
    await page.waitForFunction(()=>[...document.querySelectorAll('main img')].filter(img=>{const r=img.getBoundingClientRect();return r.width>8&&r.height>8&&r.top<innerHeight&&r.bottom>0&&r.left<innerWidth&&r.right>0;}).every(img=>img.complete&&img.naturalWidth>0),{},{timeout:10000});
   }
   await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(250);
   const dimensions = await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,height:document.body.scrollHeight}));
   assert(dimensions.scroll <= dimensions.width,`${device} ${name} overflow: ${JSON.stringify(dimensions)}`);
   const images = await page.locator('main img').evaluateAll(items=>items.filter(img=>{const r=img.getBoundingClientRect();return r.width>8&&r.height>8&&r.top<innerHeight&&r.bottom>0&&r.left<innerWidth&&r.right>0;}).map(img=>({alt:img.getAttribute('alt'),loaded:img.complete&&img.naturalWidth>0,src:img.currentSrc})));
   assert(images.every(img=>img.loaded),`${name}: unloaded image ${JSON.stringify(images.filter(img=>!img.loaded))}; failures: ${JSON.stringify(failures)}`);
   assert(images.every(img=>img.alt !== null),`${name}: missing image alt attribute`);
   const audit = await new AxeBuilder({page}).include('main').withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
   const violations = audit.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));
   if(name.endsWith('article')) {
    const toc=page.getByRole('navigation',{name:'On this page'}); assert(await toc.isVisible());
    await toc.getByRole('link',{name:'Planning checklist',exact:true}).click();
    assert.equal(new URL(page.url()).hash,'#checklist');
    const question=page.locator('#questions button').nth(1); await question.click(); assert.equal(await question.getAttribute('aria-expanded'),'true'); await question.press('Enter'); assert.equal(await question.getAttribute('aria-expanded'),'false');
    await page.locator('#questions button').first().click(); // restore first answer for capture
    const links=await page.locator('article a[href^="/"]').evaluateAll(items=>[...new Set(items.map(a=>a.getAttribute('href')))]);
    for(const link of links) { const res=await page.request.get(base+link,{maxRedirects:0}); report.links.push({from:path,link,status:res.status()}); assert(res.status()<400,link); }
   }
   await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(200);
   await page.screenshot({path:`${output}/${device}-${name}-full.png`,fullPage:true,animations:'disabled'});
   await page.screenshot({path:`${output}/${device}-${name}-top.png`,animations:'disabled'});
   report.pages.push({device,name,path,status:response.status(),dimensions,images:images.length,errors,failures,violations});
   await page.close();
  }
  await context.close();
 }
 // The referred article retains the public code and removes outgoing partner recommendations.
 const page=await browser.newPage();
 await page.route('**/*',route=>route.request().url().startsWith(base)&&['GET','HEAD'].includes(route.request().method())?route.continue():route.abort());
 await page.goto(base+'/en/blog/fbi-background-check-spain?partner=blueprint');
 assert.equal(await page.locator('article a[href^="https://blueprint-spain.com"]').count(),0);
 assert(await page.locator('article a[href="/en/foreigners?partner=blueprint"]').count());
 // The CTA is followed as far as the local redirect response; the external form is never opened.
 const redirected=await page.request.get(base+'/en/start/residence?partner=blueprint',{maxRedirects:0}); assert.equal(redirected.status(),307);
 assert.equal(redirected.headers().location, 'https://docs.google.com/forms/d/e/1FAIpQLSeRH-NPSLCwX5eQKqiW0BKIgByM0BIF-4BtZOp3nNFYCOBffA/viewform');
 report.referral={articleRecommendationsHidden:true,insuranceLinkRetainsCode:true,startStatus:redirected.status(),exclusiveFormDestinationMatches:true,formOpened:false}; await page.close();
} finally {await browser.close(); if(server && server.exitCode===null){const closed=once(server,'close');server.kill('SIGTERM');await closed;} await writeFile(process.env.VPI_QA_REPORT || 'docs/blueprint/visual-QA-results.json',JSON.stringify(report,null,2)+'\n');}
const problems=report.pages.filter(page=>page.errors.length||page.failures.length||page.violations.length);
console.log(JSON.stringify({pages:report.pages.map(({device,name,dimensions,errors,failures,violations})=>({device,name,dimensions,errors,failures,violations})),problems:problems.length},null,2));
assert.equal(problems.length,0,'See visual-QA-results.json');
