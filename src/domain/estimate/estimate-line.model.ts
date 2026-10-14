import type { Unit } from '../catalog/catalog-item.model';
import type { Money } from '../money/money';
import type { VatRate } from '../vat/vat-rate';

export interface SingleLine {
  kind: 'single';
  id: string;
  catalogItemId: string;
  name: string;
  unit: Unit;
  quantity: number;
  unitNetPrice: Money;
  vatRate: VatRate;
}

export interface BundleLineComponent {
  catalogItemId: string;
  name: string;
  quantity: number;
  unitNetPrice: Money;
}

export interface BundleLine {
  kind: 'bundle';
  id: string;
  name: string;
  unit: Unit;
  quantity: number;
  components: BundleLineComponent[];
  vatRate: VatRate;
}

export type EstimateLine = SingleLine | BundleLine;
