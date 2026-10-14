import { PlaceholderPage } from '@shared/ui/placeholder-page';

export class SchedulePage extends PlaceholderPage {
  constructor(estimateId: string) {
    super({
      title: 'Harmonogram',
      description: `Harmonogram prac dla kosztorysu ${estimateId}`,
      session: 11
    });
  }
}
