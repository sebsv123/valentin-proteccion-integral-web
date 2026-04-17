import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

// Logo
await sharp('./public/brand/logo-vpi.png')
  .resize(440, null, { withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile('./public/brand/logo-vpi.webp');
console.log('Logo optimizado: logo-vpi.webp');

// Hero family
await sharp('./public/images/premium/hero-family.webp')
  .resize(1400, null, { withoutEnlargement: true })
  .webp({ quality: 55 })
  .toFile('./public/images/premium/hero-family-opt.webp');
console.log('Hero optimizado: hero-family-opt.webp');

console.log('\nOptimización completada!');
