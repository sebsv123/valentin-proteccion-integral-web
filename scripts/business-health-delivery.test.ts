import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import postcss, { type Rule } from 'postcss';
import ts from 'typescript';

const base = join(process.cwd(), 'components/business-health-rebuild');
const source = (file: string) => readFileSync(join(base, file), 'utf8');
const pairs = [
  ['styles.module.css', 'styles-delivery.module.css'],
  ['editorial.module.css', 'editorial-delivery.module.css'],
  ['premium.module.css', 'premium-delivery.module.css'],
  ['brand-art.module.css', 'tax-reading-delivery.module.css'],
  ['scenes.module.css', 'coverage-scene-delivery.module.css'],
];

// A delivery subset can remove unused selectors, but cannot change their visual declarations.
function signatures(css: string) {
  const signatures: string[] = [];
  postcss.parse(css).walkRules((rule: Rule) => {
    const context: string[] = [];
    let parent = rule.parent;
    while (parent && parent.type !== 'root') {
      if (parent.type === 'atrule') context.unshift(`@${parent.name} ${parent.params}`);
      parent = parent.parent;
    }
    const declarations = rule.nodes.filter(n => n.type === 'decl').map(n => n.toString().trim());
    for (const selector of postcss.list.comma(rule.selector)) {
      signatures.push(JSON.stringify([context, selector.trim(), declarations]));
    }
  });
  return signatures;
}
for (const [original, delivery] of pairs) {
  test(`${delivery} preserves the original declarations and media/keyframe context`, () => {
    const reference = new Set(signatures(source(original)));
    const actual = signatures(source(delivery));
    assert(actual.length > 0);
    for (const signature of actual) assert(reference.has(signature), `${delivery}: altered visual rule ${signature}`);
    assert(source(delivery).length < source(original).length);
  });
}

function functionText(file: string, name: string) {
  const tree = ts.createSourceFile(file, source(file), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const declaration = tree.statements.find(n => ts.isFunctionDeclaration(n) && n.name?.text === name);
  assert(declaration, `${file}: missing ${name}`);
  return declaration.getText(tree);
}
for (const [original, delivery, name] of [
  ['scenes.tsx', 'coverage-scene-delivery.tsx', 'CoverageScene'],
  ['brand-art.tsx', 'tax-reading-delivery.tsx', 'TaxReading'],
]) {
  test(`${name} keeps its complete accessible markup and behavior`, () => {
    assert.equal(functionText(delivery, name), functionText(original, name));
  });
}
