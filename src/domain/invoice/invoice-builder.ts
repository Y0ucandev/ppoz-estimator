import type { Client } from '../client/client.model';
import type { Company } from '../company/company.model';
import type { Estimate } from '../estimate/estimate.model';
import { notImplemented } from '../common/not-implemented';
import type { Invoice } from './invoice.model';

export interface BuildInvoiceOptions {
  id: string;
  number: string;
  issueDate: string;
  saleDate: string;
  paymentDays: number;
}

export function buildInvoice(
  estimate: Estimate,
  client: Client,
  company: Company,
  options: BuildInvoiceOptions
): Invoice {
  return notImplemented('buildInvoice', 12);
}
