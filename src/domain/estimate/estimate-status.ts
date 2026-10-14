import { notImplemented } from '../common/not-implemented';
import type { Estimate } from './estimate.model';

export const ESTIMATE_STATUSES = [
  'draft',
  'sent',
  'approved',
  'rejected',
  'inProgress',
  'completed',
  'invoiced'
] as const;

export type EstimateStatus = (typeof ESTIMATE_STATUSES)[number];

export const ESTIMATE_TRANSITIONS: Readonly<Record<EstimateStatus, readonly EstimateStatus[]>> = {
  draft: ['sent'],
  sent: ['approved', 'rejected', 'draft'],
  rejected: ['draft'],
  approved: ['inProgress'],
  inProgress: ['completed'],
  completed: ['invoiced'],
  invoiced: []
};

export function canTransition(from: EstimateStatus, to: EstimateStatus): boolean {
  return notImplemented('canTransition', 10);
}

export function changeStatus(estimate: Estimate, to: EstimateStatus): Estimate {
  return notImplemented('changeStatus', 10);
}

export function isEditable(estimate: Estimate): boolean {
  return notImplemented('isEditable', 10);
}
