import type { CatalogRepository } from '@data/repositories/catalog.repository';

import { appStore } from './app-state';

export async function loadCatalog(repository: CatalogRepository): Promise<void> {
  appStore.setState({ isLoading: true, error: null });

  try {
    const catalog = await repository.load();
    appStore.setState({ catalog, isLoading: false });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown catalog error';
    appStore.setState({ isLoading: false, error: message });
  }
}
