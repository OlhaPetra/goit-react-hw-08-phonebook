import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import authOperations from './redux/auth/auth-operation';
import { getFetchingCurrentUser } from './redux/auth/auth-selectors';

import AppBar from './components/AppBar';
import Container from './components/Container';
import Loading from './components/Loading';
import PrivateRoute from './views/PrivateRoute';
import PublicRoute from './views/PublicRoute';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "HomePage"*/),
);
const RegisterPage = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "RegisterPage"*/),
);
const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "LoginPage"*/),
);
const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "ContactsPage"*/),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <Loading />
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <RegisterPage />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <LoginPage />
                  </PublicRoute>
                }
              ></Route>
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              ></Route>
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
}
