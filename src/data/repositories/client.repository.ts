import type { Client } from '@domain/client/client.model';

import { clientListSchema } from '../schemas/client.schema';
import { readJson, STORAGE_KEYS, writeJson } from '../storage/local-storage';

export interface ClientRepository {
  findAll(): Client[];
  saveAll(clients: readonly Client[]): void;
}

export class LocalStorageClientRepository implements ClientRepository {
  findAll(): Client[] {
    return readJson(STORAGE_KEYS.clients, clientListSchema) ?? [];
  }

  saveAll(clients: readonly Client[]): void {
    writeJson(STORAGE_KEYS.clients, clients);
  }
}
