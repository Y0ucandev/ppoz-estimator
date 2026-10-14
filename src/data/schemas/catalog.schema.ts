import { z } from 'zod';

import { CATALOG_CATEGORIES, UNITS } from '@domain/catalog/catalog-item.model';
import { VAT_RATES } from '@domain/vat/vat-rate';

export const vatRateSchema = z.enum(VAT_RATES);

export const unitSchema = z.enum(UNITS);

export const catalogItemDtoSchema = z.object({
  id: z.string().min(1),
  kind: z.enum(['material', 'service']),
  category: z.enum(CATALOG_CATEGORIES),
  name: z.string().min(1),
  unit: unitSchema,
  unitNetPriceGrosze: z.number().int().nonnegative(),
  defaultVatRate: vatRateSchema,
  installationMinutes: z.number().int().positive().optional()
});

export const bundleTemplateDtoSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  unit: unitSchema,
  defaultVatRate: vatRateSchema,
  components: z
    .array(
      z.object({
        catalogItemId: z.string().min(1),
        quantity: z.number().positive()
      })
    )
    .min(1)
});

// TODO(spotkanie 1, praca domowa): dodaj .superRefine(), który zgłasza błąd, gdy:
// - dwie pozycje albo dwa szablony mają to samo id,
// - składnik szablonu wskazuje catalogItemId, którego nie ma w items.
// Komunikat ma zawierać id, a `path` ma wskazywać błędne miejsce w JSON.
export const catalogDtoSchema = z.object({
  items: z.array(catalogItemDtoSchema),
  bundles: z.array(bundleTemplateDtoSchema)
});

export type CatalogItemDto = z.infer<typeof catalogItemDtoSchema>;
export type CatalogDto = z.infer<typeof catalogDtoSchema>;
