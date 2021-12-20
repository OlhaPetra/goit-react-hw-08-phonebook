import React from 'react';
//import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';

import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import ContactsPage from './views/ContactsPage'
//import Loading from './components/Loading/Loading';

export default function App() {
  return (
    <Container>
      <AppBar />      
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>          
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
    </Container>
  );
}