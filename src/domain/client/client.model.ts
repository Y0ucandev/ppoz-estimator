export interface Address {
  street: string;
  postalCode: string;
  city: string;
}

export interface Client {
  id: string;
  name: string;
  taxId?: string;
  address: Address;
  email?: string;
  phone?: string;
}
