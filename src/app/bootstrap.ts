import { Router } from '@core/router/router';
import { JsonCatalogRepository } from '@data/repositories/catalog.repository';
import { LocalStorageClientRepository } from '@data/repositories/client.repository';
import { loadCompany } from '@data/repositories/company.repository';
import { LocalStorageEstimateRepository } from '@data/repositories/estimate.repository';
import { NotFoundPage } from '@features/not-found/not-found-page';
import { appStore } from '@state/app-state';
import { loadCatalog } from '@state/catalog.actions';

import { AppShell } from './app-shell';
import { routes } from './routes';

export async function bootstrap(root: HTMLElement): Promise<void> {
  const estimateRepository = new LocalStorageEstimateRepository();
  const clientRepository = new LocalStorageClientRepository();

  appStore.setState({
    company: loadCompany(),
    clients: clientRepository.findAll(),
    estimates: estimateRepository.findAll()
  });

  appStore.select(
    state => state.estimates,
    estimates => estimateRepository.saveAll(estimates)
  );
  appStore.select(
    state => state.clients,
    clients => clientRepository.saveAll(clients)
  );

  const shell = new AppShell();
  shell.mount(root);

  const router = new Router({
    routes,
    outlet: shell.outlet,
    notFound: () => new NotFoundPage(),
    onNavigate: path => shell.setActivePath(path)
  });

  router.start();
  await loadCatalog(new JsonCatalogRepository());
}
