import assert from 'node:assert/strict';

function decode(value) {
  const named = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: '\u00a0' };
  return value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (match, entity) => {
    if (entity[0] !== '#') return named[entity.toLowerCase()] ?? match;
    const point = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1));
    return point > 0 && point <= 0x10ffff ? String.fromCodePoint(point) : match;
  });
}

function attributes(tag) {
  const attrs = {};
  const body = tag.replace(/^<\/?[\w-]+/, '');
  for (const match of body.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
    attrs[match[1].toLowerCase()] = decode(match[2] ?? match[3] ?? match[4]);
  }
  return attrs;
}

/** Inspect served metadata, including metadata streamed outside <head> by Next. */
export function readForeignersMetadata(html) {
  const schemas = [];
  for (const match of html.matchAll(/<script\b((?:"[^"]*"|'[^']*'|[^'">])*)>([\s\S]*?)<\/script\s*>/gi)) {
    if (attributes(`<script${match[1]}>`).type === 'application/ld+json') schemas.push(JSON.parse(match[2]));
  }
  // Script payloads and comments can contain serialized tags; those are not DOM metadata.
  const markup = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<script\b(?:"[^"]*"|'[^']*'|[^'">])*?>[\s\S]*?<\/script\s*>/gi, '');
  const tags = [...markup.matchAll(/<(?:meta|link)\b(?:"[^"]*"|'[^']*'|[^'">])*?>/gi)].map(x => attributes(x[0]));
  const schemaObjects = [];
  function visit(value) {
    if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === 'object') {
      if (value['@type']) schemaObjects.push(value);
      Object.values(value).forEach(visit);
    }
  }
  schemas.forEach(visit);
  return {
    titles: [...markup.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title\s*>/gi)].map(x => decode(x[1]).trim()),
    descriptions: tags.filter(x => x.name?.toLowerCase() === 'description').map(x => x.content),
    canonicals: tags.filter(x => x.rel?.toLowerCase().split(/\s+/).includes('canonical')).map(x => x.href),
    robots: tags.filter(x => x.name?.toLowerCase() === 'robots').map(x => x.content),
    ogTitles: tags.filter(x => x.property === 'og:title').map(x => x.content),
    ogDescriptions: tags.filter(x => x.property === 'og:description').map(x => x.content),
    language: attributes(markup.match(/<html\b(?:"[^"]*"|'[^']*'|[^'">])*?>/i)?.[0] ?? '').lang,
    schemaObjects,
  };
}

export function assertForeignersMetadata(html, expected) {
  const actual = readForeignersMetadata(html);
  assert.deepEqual(actual.titles, [expected.title], 'one rendered title matching the approved contract');
  assert.deepEqual(actual.descriptions, [expected.description], 'one rendered description matching the approved contract');
  assert.deepEqual(actual.canonicals, [expected.canonical], 'canonical must target the public Spanish route');
  assert.deepEqual(actual.ogTitles, [expected.title], 'Open Graph title must match');
  assert.deepEqual(actual.ogDescriptions, [expected.description], 'Open Graph description must match');
  assert.equal(actual.language, expected.language, 'document language');
  assert(actual.robots.length > 0 && actual.robots.every(x => /(?:^|[,\s])index(?:$|[,\s])/i.test(x) && !/noindex|nofollow/i.test(x)), 'route must remain indexable');
  for (const type of expected.schemaTypes) {
    const objects = actual.schemaObjects.filter(x => [x['@type']].flat().includes(type));
    assert(objects.length > 0, `missing rendered ${type} schema`);
    if (type === 'WebPage') assert(objects.some(x => x.url === expected.canonical && x.name === expected.title && x.description === expected.description), 'WebPage metadata must match');
    if (type === 'FAQPage') assert(objects.some(x => x.mainEntity?.length > 0), 'FAQ schema must contain questions');
  }
  return actual;
}
