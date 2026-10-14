import type { Invoice } from '@domain/invoice/invoice.model';
import { notImplemented } from '@domain/common/not-implemented';

export function downloadInvoicePdf(invoice: Invoice): void {
  notImplemented('downloadInvoicePdf', 12);
}
