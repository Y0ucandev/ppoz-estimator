import type { Client } from '@domain/client/client.model';
import type { Company } from '@domain/company/company.model';
import type { Estimate } from '@domain/estimate/estimate.model';
import { notImplemented } from '@domain/common/not-implemented';

export function downloadEstimatePdf(estimate: Estimate, client: Client, company: Company): void {
  notImplemented('downloadEstimatePdf', 11);
}
