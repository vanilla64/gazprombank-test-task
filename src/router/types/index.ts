import { ReactNode } from 'react';

export enum AppRoutes {
  TASK_LIST = 'TASK_LIST',
  CALENDAR = 'CALENDAR',
}

export type RouterItem = {
  path: string;
  pageName: string;
  element: ReactNode;
}
