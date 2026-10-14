import type { Catalog, CatalogItem } from '@domain/catalog/catalog-item.model';
import { Money } from '@domain/money/money';

import type { CatalogDto, CatalogItemDto } from '../schemas/catalog.schema';

export function toCatalog(dto: CatalogDto): Catalog {
  return {
    items: dto.items.map(toCatalogItem),
    bundles: dto.bundles
  };
}

function toCatalogItem(dto: CatalogItemDto): CatalogItem {
  const { unitNetPriceGrosze, ...rest } = dto;

  return {
    ...rest,
    unitNetPrice: Money.fromGrosze(unitNetPriceGrosze)
  };
}
