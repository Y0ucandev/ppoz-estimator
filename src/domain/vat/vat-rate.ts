export const VAT_RATES = ['23', '8', '5', '0', 'zw'] as const;

export type VatRate = (typeof VAT_RATES)[number];

export const VAT_RATE_VALUES: Readonly<Record<VatRate, number>> = {
  '23': 0.23,
  '8': 0.08,
  '5': 0.05,
  '0': 0,
  zw: 0
};

export function isVatRate(value: string): value is VatRate {
  return (VAT_RATES as readonly string[]).includes(value);
}
