import type { VatMethod } from '../vat/vat-summary';
import type { EstimateLine } from './estimate-line.model';
import type { EstimateStatus } from './estimate-status';

export interface Estimate {
  id: string;
  number: string;
  clientId: string;
  title: string;
  status: EstimateStatus;
  lines: EstimateLine[];
  vatMethod: VatMethod;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEstimateParams {
  id: string;
  number: string;
  clientId: string;
  title: string;
  createdAt: string;
}

export function createEstimate(params: CreateEstimateParams): Estimate {
  return {
    ...params,
    status: 'draft',
    lines: [],
    vatMethod: 'fromNetTotal',
    updatedAt: params.createdAt
  };
}

export function formatEstimateNumber(sequence: number, year: number): string {
  return `KOS/${year}/${String(sequence).padStart(3, '0')}`;
}
