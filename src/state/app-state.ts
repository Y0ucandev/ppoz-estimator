import { Store } from '@core/store/store';
import type { Catalog } from '@domain/catalog/catalog-item.model';
import type { Client } from '@domain/client/client.model';
import type { Company } from '@domain/company/company.model';
import type { Estimate } from '@domain/estimate/estimate.model';

export interface AppState {
  catalog: Catalog;
  company: Company | null;
  clients: Client[];
  estimates: Estimate[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  catalog: { items: [], bundles: [] },
  company: null,
  clients: [],
  estimates: [],
  isLoading: true,
  error: null
};

export const appStore = new Store<AppState>(initialState);
