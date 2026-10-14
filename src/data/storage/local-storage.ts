import type { ZodType } from 'zod';

export const STORAGE_KEYS = {
  clients: 'ppoz-estimator.clients',
  estimates: 'ppoz-estimator.estimates'
} as const;

export function readJson<T>(key: string, schema: ZodType<T>): T | null {
  try {
    const raw = localStorage.getItem(key);

    if (raw === null) {
      return null;
    }

    const result = schema.safeParse(JSON.parse(raw));

    if (!result.success) {
      console.warn(`Invalid data in localStorage under "${key}"`, result.error.issues);

      return null;
    }

    return result.data;
  } catch (error) {
    console.error(`Failed to read "${key}" from localStorage`, error);

    return null;
  }
}

export function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to write "${key}" to localStorage`, error);
  }
}
