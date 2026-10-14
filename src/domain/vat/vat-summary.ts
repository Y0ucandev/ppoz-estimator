import type { EstimateLine } from '../estimate/estimate-line.model';
import type { Money } from '../money/money';
import { notImplemented } from '../common/not-implemented';
import type { VatRate } from './vat-rate';

export type VatMethod = 'fromNetTotal' | 'perLine';

export interface VatSummaryRow {
  rate: VatRate;
  net: Money;
  vat: Money;
  gross: Money;
}

export function buildVatSummary(
  lines: readonly EstimateLine[],
  method: VatMethod
): VatSummaryRow[] {
  return notImplemented('buildVatSummary', 7);
}
