export function todo(feature: string, session: number): never {
  throw new Error(`${feature} is not implemented yet (live coding session ${session})`);
}
