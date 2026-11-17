const { chromium } = await import(process.env.VPI_PLAYWRIGHT_MODULE || 'playwright');
import { getForeignersIntakePath, getForeignersIntakeUrl } from '../lib/foreigners-intake.ts';
import assert from 'node:assert/strict';
import { writeFileSync } from 'node:fs';
const base = new URL(process.env.VPI_QA_BASE_URL || 'http://127.0.0.1:3324');
const browser=await chromium.launch({headless:true,...(process.env.VPI_CHROMIUM_PATH ? { executablePath:process.env.VPI_CHROMIUM_PATH } : {}),args:['--no-sandbox']});
const pages=['/seguros/mascotas','/extranjeros','/en/foreigners','/visados/seguro-medico/estudios','/en/visa-health-insurance/student-visa','/visados/seguro-medico/residencia-no-lucrativa','/en/visa-health-insurance/non-lucrative-residence'];
const report=[];
try {
for(const consent of [null,'rejected','accepted']) {
 const context=await browser.newContext();let trackingScripts=0,posts=0;
 await context.addInitScript(value=>{try { if(value)localStorage.setItem('cookie-consent',value); } catch {} window.__gtagCalls=[];window.gtag=(...a)=>window.__gtagCalls.push(a);},consent);
 await context.route('**/*',route=>{
  const r=route.request(),url=new URL(r.url());
  if(r.method()!=='GET'){posts++;return route.abort();}
  if(url.origin===base.origin)return route.continue();
  if(url.hostname==='www.googletagmanager.com'&&url.pathname==='/gtm.js'){trackingScripts++;return route.fulfill({contentType:'text/javascript',body:''});}
  return route.abort();
 });
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const path of pages) {
  await page.goto(new URL(path, base).href);await page.waitForLoadState('networkidle');
  await page.evaluate(()=>{document.addEventListener('click',e=>e.preventDefault(),true);window.__gtagCalls=[];});
  const targets=[['whatsapp','main a[href*="wa.me"]'],...(!path.includes('mascotas')?[['google_forms','main a[href^="/start"], main a[href^="/en/start"]']]:[])];
  for(const [type,selector] of targets) {
   const before=await page.evaluate(()=>(window.dataLayer??[]).filter(e=>e.event==='vpi_cta_click').length);
   await page.locator(selector).first().click({force:true});
   const result=await page.evaluate(()=>({events:(window.dataLayer??[]).filter(e=>e.event==='vpi_cta_click'),gtag:window.__gtagCalls}));
   assert.equal(result.events.length-before,consent==='accepted'?1:0,`${consent} ${path} ${type}`);
   assert.equal(result.gtag.length,0,`no direct gtag call: ${path}`);
   if(consent==='accepted'){
    const event=result.events.at(-1);assert.equal(event.cta_type,type);assert.equal(event.page_path,path);
    assert.deepEqual(Object.keys(event).sort(),['cta_type','event','page_path','product_slug']);
    assert(!JSON.stringify(event).match(/@|wa\.me|entry\.|generate_lead|purchase/));
   }
   report.push({consent,path,type,eventsAdded:result.events.length-before});
  }
 }
 assert.equal(posts,0);assert.equal(errors.length,0,JSON.stringify(errors));
 assert(consent==='accepted'?trackingScripts>0:trackingScripts===0);
 console.log(JSON.stringify({consent,casesCompleted:report.length}));
 await context.close();
}
for (const locale of ['es', 'en']) {
 for (const situation of [undefined, 'studies', 'residence', 'renewal-family']) {
  const response = await fetch(new URL(getForeignersIntakePath(locale, situation), base), {redirect:'manual'});
  assert.equal(response.status, 307);
  assert.equal(response.headers.get('location'), getForeignersIntakeUrl(locale, situation));
 }
}
console.log(JSON.stringify({redirectsVerified:8,result:'PASS',cases:report.length,consentStates:3,gtagCalls:0,posts:0,pageErrors:0,eventsPerAcceptedClick:1}));
if(process.env.VPI_QA_REPORT)writeFileSync(process.env.VPI_QA_REPORT,JSON.stringify(report,null,2));
}finally{await browser.close();}
