import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';
import { createConsentDecision, parseConsent, providerPermissions, CONSENT_MAX_AGE_MS, CONSENT_NOT_BEFORE, CONSENT_POLICY_VERSION, NO_OPTIONAL_CONSENT } from '../lib/cookie-consent.ts';

const time = Date.UTC(2026,10,9,12);
const decision = createConsentDecision(true,true,time);
for (const [name, now, allowed] of [['before',decision.expiresAt-1,true],['exact',decision.expiresAt,false],['after',decision.expiresAt+1,false]] as const) {
  test(`expiry ${name}`,()=>assert.equal(parseConsent(JSON.stringify(decision),now)!==null,allowed));
}
test('730 days is an exact maximum, including leap years, and reads never renew',()=>{
 for (const now of [time,Date.UTC(2028,1,29)]) {
  const d=createConsentDecision(true,false,now);assert.equal(d.expiresAt-d.decidedAt,730*86400000);
  const raw=JSON.stringify(d);for(const offset of [0,1000,86400000,CONSENT_MAX_AGE_MS-1])assert.equal(JSON.stringify(parseConsent(raw,now+offset)),raw);
 }
});
test('only an explicit new decision creates a new period',()=>{
 const next=createConsentDecision(false,true,time+86400000);assert.equal(next.decidedAt,time+86400000);assert.equal(next.expiresAt,decision.expiresAt+86400000);assert.equal(next.policyVersion,CONSENT_POLICY_VERSION);
 assert.deepEqual(Object.keys(next).sort(),['analytics','decidedAt','expiresAt','marketing','necessary','policyVersion','version']);
});
for (const changes of [{policyVersion:'unapproved'},{version:3},{decidedAt:time+1},{decidedAt:CONSENT_NOT_BEFORE-1},{expiresAt:time},{expiresAt:time+CONSENT_MAX_AGE_MS+1},{decidedAt:null},{expiresAt:'tomorrow'},{analytics:'true'}]) {
 test(`invalid temporal record denied ${JSON.stringify(changes)}`,()=>assert.equal(parseConsent(JSON.stringify({...decision,...changes}),time),null));
}
test('bad device times fail closed; a fully wrong forward clock cannot be independently authenticated locally',()=>{
 for(const now of [NaN,Infinity,-1,CONSENT_NOT_BEFORE-1]){assert.throws(()=>createConsentDecision(true,true,now));assert.equal(parseConsent(JSON.stringify(decision),now),null)}
 assert.equal(parseConsent(JSON.stringify(decision),time-1),null);assert.equal(parseConsent(JSON.stringify(decision),decision.expiresAt+1),null);
});
test('legacy acceptances cannot migrate to grants; denials retain no optional permissions without invented dates',()=>{
 for(const raw of ['accepted',JSON.stringify({version:1,necessary:true,analytics:true,marketing:false}),JSON.stringify({version:1,necessary:true,analytics:true,marketing:true})])assert.equal(parseConsent(raw,time),null);
 for(const raw of ['rejected',JSON.stringify(NO_OPTIONAL_CONSENT)]){assert.deepEqual(parseConsent(raw,time),NO_OPTIONAL_CONSENT);assert.equal('decidedAt' in parseConsent(raw,time)!,false)}
});
for(const a of[false,true])for(const m of[false,true])test(`dated purpose matrix ${+a}${+m}`,()=>{
 const parsed=parseConsent(JSON.stringify(createConsentDecision(a,m,time)),time);assert.deepEqual(providerPermissions(parsed),{analytics:a,marketing:m,vercel:a,clarity:a,meta:m,gtm:a&&m,maps:a&&m});
 assert.ok(Object.values(providerPermissions(parseConsent(JSON.stringify(createConsentDecision(a,m,time)),time+CONSENT_MAX_AGE_MS))).every(x=>x===false));
});

function monitor(initial: string|null=JSON.stringify(decision), blocked=false) {
 let now=time,mono=0,stored=initial,reloads=0,timerId=0;const events=new Map<string,((event:any)=>void)[]>(),timers=new Map<number,{fn:()=>void,delay:number}>();
 const add=(type:string,fn:(event:any)=>void)=>events.set(type,[...(events.get(type)||[]),fn]);
 const emit=(type:string,event:any={})=>{for(const fn of events.get(type)||[])fn(event)};
 class Clock extends Date{static now(){return now}}
 const exports:any={};runInNewContext(ts.transpileModule(readFileSync(new URL('../lib/cookie-consent.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText,{
 exports,Date:Clock,performance:{now:()=>mono},Event,document:{cookie:'',addEventListener:add},window:{
 localStorage:{getItem:()=>{if(blocked)throw Error('blocked');return stored},setItem:(_k:string,v:string)=>{if(blocked)throw Error('blocked');stored=v},removeItem:()=>{if(blocked)throw Error('blocked');stored=null}},sessionStorage:{setItem:()=>{}},
 addEventListener:add,dispatchEvent:(event:Event)=>emit(event.type),setTimeout:(fn:()=>void,delay:number)=>{timers.set(++timerId,{fn,delay});return timerId},clearTimeout:(id:number)=>timers.delete(id),location:{hostname:'localhost',pathname:'/',reload:()=>reloads++}
 }});
 exports.synchronizeConsentDocument(exports.readConsent());
 return {exports,events,timers,emit,setTime:(wall:number,elapsed=wall-time)=>{now=wall;mono=elapsed},setStored:(v:string|null)=>stored=v,stored:()=>stored,reloads:()=>reloads};
}
test('expiry stops already executed SDKs without mounted consumers and removes stale grants',()=>{
 const m=monitor();assert.equal(m.timers.size,1);assert.ok([...m.timers.values()][0].delay<=60000);m.setTime(decision.expiresAt);[...m.timers.values()][0].fn();assert.equal(m.reloads(),1);assert.equal(m.stored(),null);assert.equal(m.timers.size,0);m.emit('focus');assert.equal(m.reloads(),1);
});
for(const event of ['pageshow','focus','visibilitychange'])test(`suspended tab expiry rechecked on ${event}`,()=>{const m=monitor();m.setTime(decision.expiresAt+1);m.emit(event);assert.equal(m.reloads(),1);assert.equal(m.stored(),null)});
test('cross-tab withdrawal preserves document-lifetime protection',()=>{const m=monitor();m.setStored(JSON.stringify(NO_OPTIONAL_CONSENT));m.emit('storage',{key:'cookie-consent'});assert.equal(m.reloads(),1);assert.equal(m.timers.size,0)});
test('policy replacement and malformed data stop live grants',()=>{for(const raw of ['{',JSON.stringify({...decision,policyVersion:'different'})]){const m=monitor();m.setStored(raw);m.emit('storage',{key:'cookie-consent'});assert.equal(m.reloads(),1);assert.equal(m.stored(),null)}});
test('monotonic elapsed time prevents backwards wall-clock extension in a live document',()=>{const m=monitor();m.setTime(time-86400000,CONSENT_MAX_AGE_MS);m.emit('focus');assert.equal(m.reloads(),1)});
test('blocked storage never enables SDKs or saves a purported decision',()=>{const m=monitor(null,true);assert.equal(m.exports.readConsent(),null);assert.equal(m.exports.saveConsent(true,true),false);assert.equal(m.reloads(),0);assert.equal(m.timers.size,0)});
test('reload keeps original decision dates and repeated reads do not write',()=>{const m=monitor();for(let i=0;i<3;i++){m.setTime(time+i*1000);m.emit('pageshow');assert.equal(m.stored(),JSON.stringify(decision));assert.equal(m.reloads(),0)}assert.equal(monitor(m.stored()).exports.readConsent().decidedAt,time)});
test('expired rejection requests a new choice without optional grants or unnecessary reload',()=>{const m=monitor(JSON.stringify(createConsentDecision(false,false,time)));m.setTime(time+CONSENT_MAX_AGE_MS);m.emit('focus');assert.equal(m.exports.readConsent(),null);assert.equal(m.stored(),null);assert.equal(m.reloads(),0)});
