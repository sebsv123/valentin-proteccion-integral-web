/** Contact syntax only: this does not establish ownership or deliverability. */
export function isReasonablePhone(value: string): boolean {
  const phone = value.trim();
  if (!phone || phone.length > 80 || !/^\+?[0-9 ()\-.]+$/.test(phone)) return false;
  // Parentheses may group digits; unmatched or nested groups are not numbers.
  let open = false;
  for (const character of phone) {
    if (character === '(') { if (open) return false; open = true; }
    if (character === ')') { if (!open) return false; open = false; }
  }
  if (open || /\(\s*\)/.test(phone)) return false;
  let digits = phone.replace(/\D/g, '');
  if (phone.startsWith('00')) digits = digits.slice(2);
  if (phone.startsWith('+') || phone.startsWith('00')) {
    if (digits.startsWith('0')) return false;
  }
  return digits.length >= 7 && digits.length <= 15 && !/^(\d)\1+$/.test(digits);
}
