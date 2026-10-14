import { PlaceholderPage } from '@shared/ui/placeholder-page';

export class EstimateEditorPage extends PlaceholderPage {
  constructor(estimateId: string) {
    super({
      title: 'Edytor kosztorysu',
      description: `Pozycje, sumy i zestawienie VAT kosztorysu ${estimateId}`,
      session: 8
    });
  }
}
