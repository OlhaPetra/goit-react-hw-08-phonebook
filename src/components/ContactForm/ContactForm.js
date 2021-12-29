import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addContact } from '../../redux/phonebook/phonebook-operation';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
//import Button from '../Button';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameHandleChange = e => {
    setName(e.target.value);
  };
  const numberHandleChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normilizedContactName = name.toLowerCase().trim();
    const sameContactName = contacts.find(
      cont => cont.name.toLowerCase().trim() === normilizedContactName,
    );

    if (sameContactName) {
      alert(`${name} is already in contact`);
      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <TextField
        id="outlined-basic"
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={nameHandleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        className={s.field}
      />
      <TextField
        id="outlined-basic"
        label="Number"
        type="tel"
        name="number"
        value={number}
        onChange={numberHandleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
        className={s.field}
      />
      <Button variant="contained" type="submit" size="large">
        Add contact
      </Button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default ContactForm;
