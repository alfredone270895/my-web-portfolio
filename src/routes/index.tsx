import {
  AuthenticationContext,
  AuthenticationContextType,
} from 'api/auth/context';
import React, { Suspense, useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Loading } from '../components/Loading';
import { DefaultRoutes } from './fragments/default';
import { AuthRoutes } from './fragments/auth';
import { DashboardRoutes } from './fragments/app/dashboard';
import { flat } from '../utils/array';
import { RouteRender } from './types';

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useContext<AuthenticationContextType>(
    AuthenticationContext,
  );

  const routes = flat<RouteRender>([
    DefaultRoutes(),
    AuthRoutes(),
    DashboardRoutes(),
  ]);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (!route.needAuth)
            return (
              <Route
                key={`route-${route.path}`}
                path={route.path}
                element={
                  <Suspense fallback={<Loading />}>{route.element}</Suspense>
                }
              />
            );

          if (route.needAuth && isAuthenticated)
            return (
              <Route
                key={`route-${route.path}`}
                path={route.path}
                element={
                  <Suspense fallback={<Loading />}>{route.element}</Suspense>
                }
              />
            );
        })}

        {!isAuthenticated && (
          <Route path="*" element={<Navigate replace to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
