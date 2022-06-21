import { RouteRender } from '../types';
import React from 'react';

const Home = React.lazy(() => import('../../pages/Home'));
const JobExperience = React.lazy(() => import('../../pages/Job'));
const Graduation = React.lazy(() => import('../../pages/Graduation'));
const Technology = React.lazy(() => import('../../pages/Technology'));
const Contact = React.lazy(() => import('../../pages/Contact'));
export const DefaultRoutes = (): RouteRender[] => {
  return [
    {
      path: '/',
      element: <Home />,
      needAuth: false,
    },
    {
      path: '/technology',
      element: <Technology />,
      needAuth: false,
    },
    {
      path: '/graduation',
      element: <Graduation />,
      needAuth: false,
    },
    {
      path: '/contact',
      element: <Contact />,
      needAuth: false,
    },
    {
      path: '/job-experience',
      element: <JobExperience />,
      needAuth: false,
    },
  ];
};
