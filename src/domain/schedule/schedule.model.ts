export interface ScheduleTask {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  workingDays: number;
}

export interface Schedule {
  estimateId: string;
  startDate: string;
  tasks: ScheduleTask[];
}
