import { RouteRender } from '../../types';
import React from 'react';

const ClassDiagram = React.lazy(
  () => import('../../../app/dashboard/ClassDiagram'),
);
export const DashboardRoutes = (): RouteRender[] => {
  return [
    {
      path: '/dashboard',
      element: <ClassDiagram />,
      needAuth: true,
    },
  ];
};
