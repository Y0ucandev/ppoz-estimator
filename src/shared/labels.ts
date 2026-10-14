import type { CatalogCategory, Unit } from '@domain/catalog/catalog-item.model';
import type { EstimateStatus } from '@domain/estimate/estimate-status';
import type { VatRate } from '@domain/vat/vat-rate';

export const UNIT_LABELS: Readonly<Record<Unit, string>> = {
  pcs: 'szt.',
  m: 'm',
  set: 'kpl.',
  h: 'h'
};

export const CATEGORY_LABELS: Readonly<Record<CatalogCategory, string>> = {
  controlPanel: 'Centrale',
  detector: 'Czujki',
  manualCallPoint: 'Ręczne ostrzegacze',
  sounder: 'Sygnalizatory',
  module: 'Moduły',
  powerSupply: 'Zasilanie',
  cabling: 'Okablowanie',
  installation: 'Montaż',
  programming: 'Programowanie',
  commissioning: 'Uruchomienie',
  design: 'Projektowanie'
};

export const VAT_RATE_LABELS: Readonly<Record<VatRate, string>> = {
  '23': '23%',
  '8': '8%',
  '5': '5%',
  '0': '0%',
  zw: 'zw.'
};

export const STATUS_LABELS: Readonly<Record<EstimateStatus, string>> = {
  draft: 'Szkic',
  sent: 'Wysłany',
  approved: 'Zatwierdzony',
  rejected: 'Odrzucony',
  inProgress: 'W realizacji',
  completed: 'Zakończony',
  invoiced: 'Zafakturowany'
};
