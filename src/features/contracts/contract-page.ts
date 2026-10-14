import { PlaceholderPage } from '@shared/ui/placeholder-page';

export class ContractPage extends PlaceholderPage {
  constructor(estimateId: string) {
    super({
      title: 'Umowa',
      description: `Umowa na realizację kosztorysu ${estimateId}`,
      session: 12
    });
  }
}
