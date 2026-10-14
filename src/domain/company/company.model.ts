import type { Address } from '../client/client.model';

export interface Company {
  name: string;
  taxId: string;
  address: Address;
  email: string;
  phone: string;
  bankAccount: string;
}
