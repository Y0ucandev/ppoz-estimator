import type { Catalog } from '../catalog/catalog-item.model';
import type { Estimate } from '../estimate/estimate.model';
import { notImplemented } from '../common/not-implemented';
import type { Schedule } from './schedule.model';

export interface ScheduleOptions {
  startDate: string;
  workingMinutesPerDay: number;
  crewSize: number;
}

export function generateSchedule(
  estimate: Estimate,
  catalog: Catalog,
  options: ScheduleOptions
): Schedule {
  return notImplemented('generateSchedule', 10);
}
