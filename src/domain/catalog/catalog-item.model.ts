import type { Money } from '../money/money';
import type { VatRate } from '../vat/vat-rate';

export const UNITS = ['pcs', 'm', 'set', 'h'] as const;

export type Unit = (typeof UNITS)[number];

export const CATALOG_CATEGORIES = [
  'controlPanel',
  'detector',
  'manualCallPoint',
  'sounder',
  'module',
  'powerSupply',
  'cabling',
  'installation',
  'programming',
  'commissioning',
  'design'
] as const;

export type CatalogCategory = (typeof CATALOG_CATEGORIES)[number];

export type CatalogItemKind = 'material' | 'service';

export interface CatalogItem {
  id: string;
  kind: CatalogItemKind;
  category: CatalogCategory;
  name: string;
  unit: Unit;
  unitNetPrice: Money;
  defaultVatRate: VatRate;
  installationMinutes?: number;
}

export interface BundleComponent {
  catalogItemId: string;
  quantity: number;
}

export interface BundleTemplate {
  id: string;
  name: string;
  unit: Unit;
  components: BundleComponent[];
  defaultVatRate: VatRate;
}

export interface Catalog {
  items: CatalogItem[];
  bundles: BundleTemplate[];
}
