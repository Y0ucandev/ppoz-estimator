import type { Estimate } from '@domain/estimate/estimate.model';

import { fromEstimateDto, toEstimateDto } from '../mappers/estimate.mapper';
import { estimateListDtoSchema } from '../schemas/estimate.schema';
import { readJson, STORAGE_KEYS, writeJson } from '../storage/local-storage';

export interface EstimateRepository {
  findAll(): Estimate[];
  saveAll(estimates: readonly Estimate[]): void;
}

export class LocalStorageEstimateRepository implements EstimateRepository {
  findAll(): Estimate[] {
    const dtos = readJson(STORAGE_KEYS.estimates, estimateListDtoSchema) ?? [];

    return dtos.map(fromEstimateDto);
  }

  saveAll(estimates: readonly Estimate[]): void {
    writeJson(STORAGE_KEYS.estimates, estimates.map(toEstimateDto));
  }
}
