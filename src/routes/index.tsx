import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Loading } from '../components/Loading';

const Home = React.lazy(() => import('../pages/Home'));
const JobExperience = React.lazy(() => import('../pages/Job'));
const Graduation = React.lazy(() => import('../pages/Graduation'));
const Technology = React.lazy(() => import('../pages/Technology'));
const Contact = React.lazy(() => import('../pages/Contact'));

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/technology"
          element={
            <Suspense fallback={<Loading />}>
              <Technology />
            </Suspense>
          }
        />
        <Route
          path="/graduation"
          element={
            <Suspense fallback={<Loading />}>
              <Graduation />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loading />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/job-experience"
          element={
            <Suspense fallback={<Loading />}>
              <JobExperience />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
