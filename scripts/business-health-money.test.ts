import assert from 'node:assert/strict';
import test from 'node:test';
import { parseMonthlyPremium, splitContributionCents } from '../lib/business-health-money.ts';

test('decimal comma, decimal point, integers and pasted surrounding whitespace', () => {
  for (const [input, cents] of [
    ['65,50', 6550], ['65.50', 6550], ['65', 6500], [' 65,50\u00a0', 6550],
    ['65,5', 6550], ['0,01', 1], ['100000', 10_000_000], ['100000,00', 10_000_000],
  ] as const) assert.deepEqual(parseMonthlyPremium(input), { ok: true, cents }, input);
});

test('never reinterpret ambiguous grouping, signs, exponents or currency text', () => {
  for (const input of ['1.000', '1,000', '1.234,56', '1,234.56', '65 50', '65,,50',
    '65.5.0', '65,500', '0.001', '-65,50', '+65', '1e2', 'NaN', 'Infinity', 'abc',
    '65,50 €', '65\n50', ',50', '65,', '9'.repeat(200)]) {
    assert.equal(parseMonthlyPremium(input).ok, false, input);
  }
});

test('empty, zero, negative and excessive amounts do not produce a premium', () => {
  for (const input of ['', ' ', '0', '0,00', '-1', '100000,01', '100001']) {
    assert.equal(parseMonthlyPremium(input).ok, false, input);
  }
});

test('65,50 at 70 percent is 45,85 plus 19,65, never a hundred times more', () => {
  const parsed = parseMonthlyPremium('65,50');
  assert(parsed.ok);
  assert.deepEqual(splitContributionCents(parsed.cents, 70), { employer: 4585, employee: 1965 });
});

test('cent boundaries, all whole percentages, exact totals and existing rounding', () => {
  assert.deepEqual(splitContributionCents(1, 50), { employer: 1, employee: 0 });
  assert.deepEqual(splitContributionCents(6501, 50), { employer: 3251, employee: 3250 });
  for (const cents of [1, 2, 3, 99, 100, 6550, 6501, 9_999_999, 10_000_000]) {
    for (let share = 0; share <= 100; share++) {
      const { employer, employee } = splitContributionCents(cents, share);
      assert(Number.isInteger(employer) && Number.isInteger(employee));
      assert(employer >= 0 && employee >= 0);
      assert.equal(employer + employee, cents);
      if (share === 0) assert.equal(employee, cents);
      if (share === 100) assert.equal(employer, cents);
    }
  }
});

test('invalid programmatic splits are rejected before doing arithmetic', () => {
  for (const [cents, share] of [[0, 70], [NaN, 70], [Infinity, 70], [1.5, 70],
    [10_000_001, 70], [100, -1], [100, 101], [100, 70.5]]) {
    assert.throws(() => splitContributionCents(cents, share), RangeError);
  }
});
