import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/phonebook/phonebook-operation';
//import { getLoading } from '../redux/phonebook/phonebook-selectors';

import Container from '../components/Container/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();
  //const isLoadingTodos = useSelector(getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Container>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <div>
          <Filter />
          <ContactList />
        </div>
      </div>
    </Container>
  );
}
