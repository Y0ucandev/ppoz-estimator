import { nanoid } from 'nanoid';

import { addLine, createSingleLine } from '@domain/estimate/estimate-calculator';
import { changeStatus } from '@domain/estimate/estimate-status';
import type { EstimateStatus } from '@domain/estimate/estimate-status';
import { createEstimate, formatEstimateNumber } from '@domain/estimate/estimate.model';
import type { Estimate } from '@domain/estimate/estimate.model';

import { appStore } from './app-state';

export function createDraftEstimate(clientId: string, title: string): Estimate {
  const { estimates } = appStore.getState();
  const now = new Date();
  const estimate = createEstimate({
    id: nanoid(10),
    number: formatEstimateNumber(estimates.length + 1, now.getFullYear()),
    clientId,
    title,
    createdAt: now.toISOString()
  });

  appStore.setState({ estimates: [...estimates, estimate] });

  return estimate;
}

export function addCatalogItemToEstimate(estimateId: string, catalogItemId: string): void {
  const { catalog } = appStore.getState();
  const item = catalog.items.find(candidate => candidate.id === catalogItemId);

  if (!item) {
    return;
  }

  updateEstimate(estimateId, estimate => addLine(estimate, createSingleLine(nanoid(8), item, 1)));
}

export function changeEstimateStatus(estimateId: string, status: EstimateStatus): void {
  updateEstimate(estimateId, estimate => changeStatus(estimate, status));
}

function updateEstimate(estimateId: string, update: (estimate: Estimate) => Estimate): void {
  const { estimates } = appStore.getState();

  appStore.setState({
    estimates: estimates.map(estimate =>
      estimate.id === estimateId
        ? { ...update(estimate), updatedAt: new Date().toISOString() }
        : estimate
    )
  });
}
