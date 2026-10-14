import type { Address } from '../client/client.model';
import type { Unit } from '../catalog/catalog-item.model';
import type { Money } from '../money/money';
import type { VatRate } from '../vat/vat-rate';
import type { VatSummaryRow } from '../vat/vat-summary';

export interface InvoiceParty {
  name: string;
  taxId?: string;
  address: Address;
}

export interface InvoiceLine {
  position: number;
  name: string;
  unit: Unit;
  quantity: number;
  unitNetPrice: Money;
  netTotal: Money;
  vatRate: VatRate;
}

export interface Invoice {
  id: string;
  number: string;
  estimateId: string;
  issueDate: string;
  saleDate: string;
  dueDate: string;
  seller: InvoiceParty;
  buyer: InvoiceParty;
  lines: InvoiceLine[];
  vatSummary: VatSummaryRow[];
  totalNet: Money;
  totalVat: Money;
  totalGross: Money;
}
