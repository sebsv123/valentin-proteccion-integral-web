import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeAnalyticsEvent } from '../lib/analytics-event.ts';

test('analytics is denied before consent and after withdrawal', () => {
  const event = {type:'pageview' as const,url:'https://example.com/contacto?email=a%40b.test#secret'};
  assert.equal(sanitizeAnalyticsEvent(event,false),null);
  assert.deepEqual(sanitizeAnalyticsEvent(event,true),{type:'pageview',url:'https://example.com/contacto'});
  assert.equal(sanitizeAnalyticsEvent(event,false),null);
});
test('custom events and identifiable paths fail closed', () => {
  for(const url of ['https://example.com/person/a%40b.test','https://example.com/lead/123456','not-a-url'])
    assert.equal(sanitizeAnalyticsEvent({type:'pageview',url},true),null);
  assert.equal(sanitizeAnalyticsEvent({type:'event',url:'https://example.com/'},true),null);
});
