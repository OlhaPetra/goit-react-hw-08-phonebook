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

/* import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter/Filter'; */

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

/*     <main>
      <h1 className="Title">Phonebook</h1>
      <ContactForm />
      <h2 className="Title">Contacts</h2>
      <div className="Contacts">
      <Filter />
        <ContactList />
      </div>
    </main> */
  );
}