import { PlaceholderPage } from '@shared/ui/placeholder-page';

export class ClientDetailsPage extends PlaceholderPage {
  constructor(clientId: string) {
    super({ title: 'Karta klienta', description: `Klient ${clientId}`, session: 5 });
  }
}
