import type { EstimateLine } from '@domain/estimate/estimate-line.model';
import type { Estimate } from '@domain/estimate/estimate.model';
import { Money } from '@domain/money/money';

import type { EstimateDto, EstimateLineDto } from '../schemas/estimate.schema';

export function toEstimateDto(estimate: Estimate): EstimateDto {
  return { ...estimate, lines: estimate.lines.map(toLineDto) };
}

export function fromEstimateDto(dto: EstimateDto): Estimate {
  return { ...dto, lines: dto.lines.map(fromLineDto) };
}

function toLineDto(line: EstimateLine): EstimateLineDto {
  if (line.kind === 'single') {
    const { unitNetPrice, ...rest } = line;

    return { ...rest, unitNetPriceGrosze: unitNetPrice.grosze };
  }

  return {
    ...line,
    components: line.components.map(({ unitNetPrice, ...rest }) => ({
      ...rest,
      unitNetPriceGrosze: unitNetPrice.grosze
    }))
  };
}

function fromLineDto(dto: EstimateLineDto): EstimateLine {
  if (dto.kind === 'single') {
    const { unitNetPriceGrosze, ...rest } = dto;

    return { ...rest, unitNetPrice: Money.fromGrosze(unitNetPriceGrosze) };
  }

  return {
    ...dto,
    components: dto.components.map(({ unitNetPriceGrosze, ...rest }) => ({
      ...rest,
      unitNetPrice: Money.fromGrosze(unitNetPriceGrosze)
    }))
  };
}
