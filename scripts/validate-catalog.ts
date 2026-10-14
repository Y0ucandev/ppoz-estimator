import { readFileSync } from 'node:fs';

import { z } from 'zod';

import { catalogDtoSchema } from '../src/data/schemas/catalog.schema';

const catalogPath = new URL('../src/data/seed/catalog.json', import.meta.url);
const result = catalogDtoSchema.safeParse(JSON.parse(readFileSync(catalogPath, 'utf8')));

if (!result.success) {
  console.error('catalog.json jest niepoprawny:\n');
  console.error(z.prettifyError(result.error));
  process.exit(1);
}

const { items, bundles } = result.data;
console.log(`catalog.json OK: ${items.length} pozycji, ${bundles.length} szablonów łączonych`);
