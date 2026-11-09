import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import sharp from 'sharp';

const require = createRequire(import.meta.url);
const minimum = (actual: string, expected: number[]) => {
  if (actual.includes('-')) return false;
  const parts = actual.split('.').map(Number);
  for (let index = 0; index < expected.length; index++) {
    if (parts[index] !== expected[index]) return parts[index] > expected[index];
  }
  return true;
};

test('installed framework and native decoders include the security fixes', () => {
  const nextVersion = require('next/package.json').version as string;
  assert.ok(minimum(nextVersion, [16, 4, 5]), `Next.js ${nextVersion} is below the reviewed security floor`);
  assert.ok(minimum(sharp.versions.sharp, [0, 35, 5]));
  assert.ok(sharp.versions.rsvg && minimum(sharp.versions.rsvg, [2, 63, 2]), `Unreviewed librsvg ${sharp.versions.rsvg}`);
  assert.ok(sharp.versions.heif && minimum(sharp.versions.heif, [1, 23, 2]), `Unreviewed libheif ${sharp.versions.heif}`);
  assert.equal(require('@next/bundle-analyzer/package.json').version, nextVersion);
});

test('benign SVG rasterization and WebP/AVIF encoding and decoding remain functional', async () => {
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"><rect width="12" height="8" fill="#123b68"/></svg>');
  const png = await sharp(svg).png().toBuffer();
  for (const format of ['webp', 'avif'] as const) {
    const encoded = await sharp(png).toFormat(format).toBuffer();
    const { info, data } = await sharp(encoded).raw().toBuffer({ resolveWithObject: true });
    assert.equal(info.width, 12);
    assert.equal(info.height, 8);
    assert.ok(data.length > 0);
  }
});
