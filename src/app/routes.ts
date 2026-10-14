import type { Route } from '@core/router/router';
import { CatalogPage } from '@features/catalog/catalog-page';
import { ClientDetailsPage } from '@features/clients/client-details-page';
import { ClientListPage } from '@features/clients/client-list-page';
import { ContractPage } from '@features/contracts/contract-page';
import { DashboardPage } from '@features/dashboard/dashboard-page';
import { EstimateCreatePage } from '@features/estimates/estimate-create-page';
import { EstimateEditorPage } from '@features/estimates/estimate-editor-page';
import { InvoicePage } from '@features/invoices/invoice-page';
import { SchedulePage } from '@features/schedule/schedule-page';

export const routes: Route[] = [
  { path: '/', page: () => new DashboardPage() },
  { path: '/catalog', page: () => new CatalogPage() },
  { path: '/clients', page: () => new ClientListPage() },
  { path: '/clients/:id', page: params => new ClientDetailsPage(params.id ?? '') },
  { path: '/estimates/new', page: () => new EstimateCreatePage() },
  { path: '/estimates/:id', page: params => new EstimateEditorPage(params.id ?? '') },
  { path: '/estimates/:id/schedule', page: params => new SchedulePage(params.id ?? '') },
  { path: '/estimates/:id/contract', page: params => new ContractPage(params.id ?? '') },
  { path: '/estimates/:id/invoice', page: params => new InvoicePage(params.id ?? '') }
];

export interface NavigationLink {
  path: string;
  label: string;
}

export const NAVIGATION_LINKS: readonly NavigationLink[] = [
  { path: '/', label: 'Kosztorysy' },
  { path: '/catalog', label: 'Katalog' },
  { path: '/clients', label: 'Klienci' }
];
