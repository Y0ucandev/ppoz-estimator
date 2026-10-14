import { z } from 'zod';

import { ESTIMATE_STATUSES } from '@domain/estimate/estimate-status';

import { unitSchema, vatRateSchema } from './catalog.schema';

const singleLineDtoSchema = z.object({
  kind: z.literal('single'),
  id: z.string(),
  catalogItemId: z.string(),
  name: z.string(),
  unit: unitSchema,
  quantity: z.number().positive(),
  unitNetPriceGrosze: z.number().int(),
  vatRate: vatRateSchema
});

const bundleLineDtoSchema = z.object({
  kind: z.literal('bundle'),
  id: z.string(),
  name: z.string(),
  unit: unitSchema,
  quantity: z.number().positive(),
  vatRate: vatRateSchema,
  components: z.array(
    z.object({
      catalogItemId: z.string(),
      name: z.string(),
      quantity: z.number().positive(),
      unitNetPriceGrosze: z.number().int()
    })
  )
});

export const estimateDtoSchema = z.object({
  id: z.string(),
  number: z.string(),
  clientId: z.string(),
  title: z.string(),
  status: z.enum(ESTIMATE_STATUSES),
  vatMethod: z.enum(['fromNetTotal', 'perLine']),
  lines: z.array(z.discriminatedUnion('kind', [singleLineDtoSchema, bundleLineDtoSchema])),
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime()
});

export const estimateListDtoSchema = z.array(estimateDtoSchema);

export type EstimateDto = z.infer<typeof estimateDtoSchema>;
export type EstimateLineDto = EstimateDto['lines'][number];
