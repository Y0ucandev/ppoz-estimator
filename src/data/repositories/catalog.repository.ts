import type { Catalog } from '@domain/catalog/catalog-item.model';

import { toCatalog } from '../mappers/catalog.mapper';
import { catalogDtoSchema } from '../schemas/catalog.schema';
import catalogJson from '../seed/catalog.json';

export interface CatalogRepository {
  load(): Promise<Catalog>;
}

export class JsonCatalogRepository implements CatalogRepository {
  async load(): Promise<Catalog> {
    const result = catalogDtoSchema.safeParse(catalogJson);

    if (!result.success) {
      throw new Error(`Invalid catalog.json: ${result.error.message}`);
    }

    return toCatalog(result.data);
  }
}
