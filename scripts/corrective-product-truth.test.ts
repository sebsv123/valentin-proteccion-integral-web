import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { blogPosts } from '../lib/blog.ts';

const base = '051f11a298c9b1d26889396c0475492f2e645b97';
const pet = 'pasaporte-europeo-mascotas-obligatorio-2026-vacunas-precio-madrid';
const mortgage = 'cuanto-te-indemniza-realmente-tu-seguro-hipoteca-nomina-en-invalidez-solo-50';
const family = 'por-que-necesitas-mas-de-9-000e-en-proteccion-familiar-madrid-2026-must-have';
const findings = [
  { id: 'C1 immediate healthcare', slug: 'mejor-seguro-salud-madrid-2026', file: 'lib/blog.ts', forbidden: /el mismo día o al día siguiente|acceso inmediato:/i },
  { id: 'C2 universal pet coverage', slug: pet, file: `app/blog/${pet}/page.tsx`, forbidden: /cubrirlo todo|te cubre todo|cubre TODO|Reembolso gastos expedición|Accidentes\/enfermedades: cubierto/i },
  { id: 'C3 unlimited EU vet', slug: pet, file: `app/blog/${pet}/page.tsx`, forbidden: /veterinario ilimitado/i },
  { id: 'C4 unqualified pet bundle', slug: pet, file: `app/blog/${pet}/page.tsx`, forbidden: /10% dto|10\s*%[^\n]{0,100}mascota/i },
  { id: 'C5 mortgage suicide guarantee', slug: mortgage, file: `app/blog/${mortgage}/page.tsx`, forbidden: /suicidio|cobertura desde el primer día/i },
  { id: 'C6 family suicide guarantee', slug: family, file: `app/blog/${family}/page.tsx`, forbidden: /suicidio|artículo 27|desde el día uno/i },
  { id: 'C7 rapid notary payout', slug: family, file: `app/blog/${family}/page.tsx`, forbidden: /notario|10[-–]15 días|garantiza que la familia reciba/i },
];
const localBase = process.env.VPI_AUDIT_BASE_URL;
if (localBase) assert.ok(/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(localBase), 'Rendered audit is local only');

for (const finding of findings) {
  test(`${finding.id}: absent from source, structured data and optional local rendering`, async () => {
    const before = execFileSync('git', ['show', `${base}:${finding.file}`], { encoding: 'utf8' });
    assert.match(before, finding.forbidden, 'Regression pattern must catch the production finding');
    const source = readFileSync(finding.file, 'utf8');
    const current = finding.file === 'lib/blog.ts' ? JSON.stringify(blogPosts.find(post => post.slug === finding.slug)) : source;
    assert.doesNotMatch(current, finding.forbidden);
    if (localBase) {
      const response = await fetch(`${localBase}/blog/${finding.slug}`);
      assert.equal(response.status, 200);
      const html = await response.text();
      assert.doesNotMatch(html, finding.forbidden);
      assert.ok(html.includes(`https://valentinproteccionintegral.com/blog/${finding.slug}`), 'Canonical preserved');
    }
  });
}
