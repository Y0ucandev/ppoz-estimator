import type { BundleTemplate, CatalogItem } from '../catalog/catalog-item.model';
import type { Money } from '../money/money';
import { notImplemented } from '../common/not-implemented';
import type { VatRate } from '../vat/vat-rate';
import type { VatSummaryRow } from '../vat/vat-summary';
import type { BundleLine, EstimateLine, SingleLine } from './estimate-line.model';
import type { Estimate } from './estimate.model';

export interface EstimateTotals {
  net: Money;
  vat: Money;
  gross: Money;
  vatSummary: VatSummaryRow[];
}

export function createSingleLine(lineId: string, item: CatalogItem, quantity: number): SingleLine {
  return notImplemented('createSingleLine', 6);
}

export function createBundleLine(
  lineId: string,
  template: BundleTemplate,
  items: readonly CatalogItem[],
  quantity: number
): BundleLine {
  return notImplemented('createBundleLine', 6);
}

export function addLine(estimate: Estimate, line: EstimateLine): Estimate {
  return notImplemented('addLine', 6);
}

export function updateLineQuantity(estimate: Estimate, lineId: string, quantity: number): Estimate {
  return notImplemented('updateLineQuantity', 6);
}

export function removeLine(estimate: Estimate, lineId: string): Estimate {
  return notImplemented('removeLine', 6);
}

export function splitBundle(line: BundleLine, vatRates: Record<string, VatRate>): SingleLine[] {
  return notImplemented('splitBundle', 6);
}

export function mergeToBundle(
  lineId: string,
  lines: readonly SingleLine[],
  name: string,
  vatRate: VatRate
): BundleLine {
  return notImplemented('mergeToBundle', 6);
}

export function lineUnitNetPrice(line: EstimateLine): Money {
  return notImplemented('lineUnitNetPrice', 7);
}

export function lineNetTotal(line: EstimateLine): Money {
  return notImplemented('lineNetTotal', 7);
}

export function calculateTotals(estimate: Estimate): EstimateTotals {
  return notImplemented('calculateTotals', 7);
}
