import type { Client } from '@domain/client/client.model';
import type { Estimate } from '@domain/estimate/estimate.model';

import type { AppState } from './app-state';

export function selectEstimateById(state: AppState, id: string): Estimate | undefined {
  return state.estimates.find(estimate => estimate.id === id);
}

export function selectClientById(state: AppState, id: string): Client | undefined {
  return state.clients.find(client => client.id === id);
}
