import assert from 'node:assert/strict';
import test from 'node:test';
import { MAX_LEAD_REQUEST_BYTES, RequestBodyTooLargeError, readLimitedJson } from '../lib/server/read-limited-json.ts';

test('readLimitedJson accepts a normal request body', async () => {
  const request = new Request('https://example.test/api/leads', {
    method: 'POST',
    body: JSON.stringify({ name: 'Persona Test', message: 'Consulta' }),
    headers: { 'content-type': 'application/json' },
  });

  assert.deepEqual(await readLimitedJson(request), { name: 'Persona Test', message: 'Consulta' });
});

test('readLimitedJson rejects a declared oversized body before parsing', async () => {
  const request = new Request('https://example.test/api/leads', {
    method: 'POST',
    body: '{}',
    headers: { 'content-length': String(MAX_LEAD_REQUEST_BYTES + 1) },
  });

  await assert.rejects(() => readLimitedJson(request), RequestBodyTooLargeError);
});

test('readLimitedJson rejects an oversized chunked body', async () => {
  const request = new Request('https://example.test/api/leads', {
    method: 'POST',
    body: JSON.stringify({ message: 'x'.repeat(MAX_LEAD_REQUEST_BYTES) }),
    headers: { 'content-type': 'application/json' },
  });

  await assert.rejects(() => readLimitedJson(request), RequestBodyTooLargeError);
});
