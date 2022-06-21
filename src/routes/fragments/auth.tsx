import { RouteRender } from '../types';
import React from 'react';

const Login = React.lazy(() => import('../../app/auth/Login'));
export const AuthRoutes = (): RouteRender[] => {
  return [
    {
      path: '/login',
      element: <Login />,
      needAuth: false,
    },
  ];
};
