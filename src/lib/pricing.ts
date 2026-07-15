import type { Language } from '../translations';

export type TierKey = 'pro' | 'enterprise';

const RATES: Record<TierKey, { eur: number; krw: number }> = {
  pro: { eur: 2400, krw: 3_500_000 },
  enterprise: { eur: 3400, krw: 5_000_000 },
};

const fmtEUR = (n: number) =>
  '€' + n.toLocaleString('en-IE', { maximumFractionDigits: 0 });

const fmtKRW = (n: number) =>
  '₩' + n.toLocaleString('ko-KR', { maximumFractionDigits: 0 });

/**
 * Locale-aware pricing:
 *  - Korean locale → KRW primary, EUR secondary
 *  - Everyone else (EN, FR) → EUR primary, KRW secondary
 */
export function formatTierPrice(
  tier: TierKey,
  locale: Language
): { primary: string; secondary: string } {
  const { eur, krw } = RATES[tier];
  if (locale === 'ko') {
    return { primary: fmtKRW(krw), secondary: `(${fmtEUR(eur)})` };
  }
  return { primary: fmtEUR(eur), secondary: `(${fmtKRW(krw)})` };
}
