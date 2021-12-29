import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/phonebook/phonebook-operation';
//import { getLoading } from '../redux/phonebook/phonebook-selectors';

import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

import s from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  //const isLoadingTodos = useSelector(getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Container>
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={s.title}>Contacts</h2>
        <div className={s.container}>
          <Filter />
          <ContactList />
        </div>
      </div>
    </Container>
  );
}
