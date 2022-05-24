import {
  AuthenticationContext,
  AuthenticationContextType,
} from 'api/auth/context';
import React, { Suspense, useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Loading } from '../components/Loading';
import Login from '../app/auth/Login';
import ClassDiagram from '../app/dashboard/ClassDiagram';

const Home = React.lazy(() => import('../pages/Home'));
const JobExperience = React.lazy(() => import('../pages/Job'));
const Graduation = React.lazy(() => import('../pages/Graduation'));
const Technology = React.lazy(() => import('../pages/Technology'));
const Contact = React.lazy(() => import('../pages/Contact'));

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useContext<AuthenticationContextType>(
    AuthenticationContext,
  );

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

        <Route
          path="/login"
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path="/register"
          element={
            <Suspense fallback={<Loading />}>
              <JobExperience />
            </Suspense>
          }
        />

        <Route
          path="/password-forget"
          element={
            <Suspense fallback={<Loading />}>
              <JobExperience />
            </Suspense>
          }
        />

        <Route
          path="/device"
          element={
            <Suspense fallback={<Loading />}>
              <JobExperience />
            </Suspense>
          }
        />

        {isAuthenticated && (
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loading />}>
                <ClassDiagram />
              </Suspense>
            }
          />
        )}

        {!isAuthenticated && (
          <Route path="*" element={<Navigate replace to="/" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
