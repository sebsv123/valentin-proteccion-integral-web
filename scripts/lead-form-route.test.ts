import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { leadEmailSchema } from '../lib/server/lead-email-schemas.ts';
import * as bodyReader from '../lib/server/read-limited-json.ts';

// Execute the actual route with a fake response adapter and an in-memory mailer.
// Unknown imports fail closed. No HTTP or SMTP transport exists in this harness.
function routeHarness() {
  let deliveries = 0;
  const exports: { POST?: (request: Request) => Promise<Response> } = {};
  class Blocked extends Error {}
  class Config extends Error {}
  class Delivery extends Error {}
  const code = ts.transpileModule(readFileSync(new URL('../app/api/leads/route.ts', import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  runInNewContext(code, { exports, require: (name: string) => {
    if (name === 'next/server') return { NextResponse: { json: (body: unknown, init?: ResponseInit) => Response.json(body,init) } };
    if (name === '@/lib/server/lead-email-schemas') return { leadEmailSchema };
    if (name === '@/lib/server/read-limited-json') return bodyReader;
    if (name === '@/lib/server/send-lead-email') return {
      LeadEmailBlockedError: Blocked, LeadEmailConfigError: Config, LeadEmailDeliveryError: Delivery,
      sendLeadEmail: async () => { deliveries++; return {messageId:'simulated-only'}; },
    };
    throw new Error(`Unmocked dependency: ${name}`);
  } });
  return { POST: exports.POST!, deliveries: () => deliveries };
}
const payload = {name:'Prueba sin envío',phone:'603448765',interest:'salud',consent:true};
const request = (body: unknown) => new Request('http://localhost/api/leads', { method:'POST',headers:{'content-type':'application/json',host:'localhost'},body:JSON.stringify(body) });
for (const bad of [{phone:'abcabc'},{phone:'123'},{phone:'000000000'},{phone:'abcabc',email:'contact@example.test'},{consent:false},{website:'bot'}]) {
  test(`actual API rejects before simulated delivery: ${JSON.stringify(bad)}`,async()=>{
    const harness=routeHarness();const response=await harness.POST(request({...payload,...bad}));assert.equal(response.status,400);assert.equal(harness.deliveries(),0);
  });
}
for (const valid of [{phone:'+44 (20) 7946 0958'},{phone:'',email:'contact@example.test'}]) {
  test(`actual API preserves accepted contact contract (simulated transport): ${JSON.stringify(valid)}`,async()=>{
    const harness=routeHarness();const response=await harness.POST(request({...payload,...valid}));assert.equal(response.status,200);assert.equal(harness.deliveries(),1);assert.equal((await response.json()).messageId,'simulated-only');
  });
}
test('actual route retains body limit before simulated delivery',async()=>{
  const harness=routeHarness();const response=await harness.POST(request({...payload,message:'x'.repeat(70_000)}));assert.equal(response.status,413);assert.equal(harness.deliveries(),0);
});
