import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { AppRoutes, RouterItem } from './types';
import { TaskPage } from '../components/TaskPage/TaskPage';
import { CalendarPage } from '../components/CalendarPage/CalendarPage';
import { PageLayout } from '../components/PageLayout/PageLayout';

export const ROUTES: Record<AppRoutes, RouterItem> = {
  TASK_LIST: {
    path: '/',
    pageName: 'Список мероприятий',
    element: <TaskPage />,
  },
  CALENDAR: {
    path: '/calendar',
    pageName: 'Календарь',
    element: <CalendarPage />,
  }
}

export const Routing: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<PageLayout />}>
          {Object.entries(ROUTES).map(([key, routerItem]) => (
            <Route key={key} path={routerItem.path} element={routerItem.element} />
          ))}
        </Route>
      </Routes>
    </Router>
  )
}
