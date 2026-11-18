import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {writeFile} from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(process.env.VPI_QA_MODULES ? `${process.env.VPI_QA_MODULES}/package.json` : import.meta.url);
const {default:lighthouse}=await import(require.resolve('lighthouse'));
const chromeLauncher=await import(require.resolve('chrome-launcher'));
// Local-only lab measurement. Install lighthouse outside the repo and set VPI_QA_MODULES.

const base='http://127.0.0.1:3146';
const server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3146'],{env:{...process.env,VPI_EDITORIAL_PREVIEW:'1',VERCEL:'',VERCEL_ENV:'',LEAD_DELIVERY_CONTEXT:'test'},stdio:'ignore'});
let chrome;const results=[];
try{
 for(let i=0;;i++){try{await fetch(base+'/robots.txt');break;}catch{if(i>100)throw new Error('No local server');await new Promise(r=>setTimeout(r,100));}}
 chrome=await chromeLauncher.launch({...(process.env.VPI_QA_CHROME ? {chromePath:process.env.VPI_QA_CHROME} : {}),chromeFlags:['--headless','--no-sandbox','--disable-dev-shm-usage']});
 for(const path of ['/en/blog/fbi-background-check-spain','/en/blog/moving-usa-spain-documents-insurance','/en/foreigners?partner=blueprint','/en/foreigners']){
  const result=await lighthouse(base+path,{port:chrome.port,output:'json',onlyCategories:['performance'],logLevel:'error',blockedUrlPatterns:['https://*'],formFactor:'mobile',screenEmulation:{mobile:true,width:390,height:844,deviceScaleFactor:1,disabled:false}});
  const r=result.lhr;results.push({path,score:Math.round(r.categories.performance.score*100),metrics:Object.fromEntries(['first-contentful-paint','largest-contentful-paint','total-blocking-time','cumulative-layout-shift','speed-index'].map(id=>[id,{value:r.audits[id].numericValue,display:r.audits[id].displayValue}])),warnings:r.runWarnings});
  console.log(path,results.at(-1).score);
 }
 await writeFile('docs/blueprint/performance-QA.json',JSON.stringify({tool:'Lighthouse',version:require('lighthouse/package.json').version,environment:'Local production build; simulated mobile; external network blocked; single run per URL; not field/Core Web Vitals evidence',results},null,2)+'\n');
}finally{if(chrome)await chrome.kill();if(server.exitCode===null){const done=once(server,'close');server.kill('SIGTERM');await done;}}
