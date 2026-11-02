/** A known monthly premium, not a quote. Grouping separators are deliberately rejected. */
export type MonthlyPremium =
  | { ok: true; cents: number }
  | { ok: false; reason: 'empty' | 'format' | 'range' };

export function parseMonthlyPremium(raw: string): MonthlyPremium {
  const text = raw.trim();
  if (!text) return { ok: false, reason: 'empty' };
  // One optional decimal separator, at most two decimal digits. Never strip punctuation.
  if (text.length > 20 || !/^\d+(?:[,.]\d{1,2})?$/.test(text)) {
    return { ok: false, reason: 'format' };
  }
  const [whole, fraction = ''] = text.split(/[,.]/);
  const cents = Number(whole) * 100 + Number(fraction.padEnd(2, '0'));
  if (!Number.isSafeInteger(cents) || cents <= 0 || cents > 10_000_000) {
    return { ok: false, reason: 'range' };
  }
  return { ok: true, cents };
}

/** Preserve the existing half-up cent rounding; the employee receives the remainder. */
export function splitContributionCents(cents: number, employerShare: number) {
  if (!Number.isSafeInteger(cents) || cents <= 0 || cents > 10_000_000 ||
      !Number.isInteger(employerShare) || employerShare < 0 || employerShare > 100) {
    throw new RangeError('Invalid contribution inputs');
  }
  const employer = Math.round(cents * employerShare / 100);
  return { employer, employee: cents - employer };
}
