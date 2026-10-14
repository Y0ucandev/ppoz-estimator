import { PlaceholderPage } from '@shared/ui/placeholder-page';

export class InvoicePage extends PlaceholderPage {
  constructor(estimateId: string) {
    super({
      title: 'Faktura',
      description: `Faktura proforma do kosztorysu ${estimateId}`,
      session: 12
    });
  }
}
