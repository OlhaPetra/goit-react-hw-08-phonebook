import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addContact } from '../../redux/phonebook/phonebook-operation';
import { getContacts } from '../../redux/phonebook/phonebook-selectors';
//import Button from '../Button';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './ContactForm.module.css';
import NumberFormat from 'react-number-format';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //validation
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState('Enter your name, please');
  const [numberDirty, setNumberDirty] = useState(false);
  const [numberError, setNumberError] = useState('Enter your number, please');
  const [validForm, setValidForm] = useState(false);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nameError || numberError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [nameError, numberError]);

  const nameHandleChange = e => {
    setName(e.target.value);
    const re = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
    if (!re.test(String(e.target.value).toLocaleLowerCase())) {
      setNameError('Enter correct name');
    } else {
      setNameError('');
    }
  };

  const numberHandleChange = e => {
    setNumber(e.target.value);
    setNumberError('');
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

  const blurHandler = e => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'number':
        setNumberDirty(true);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      {nameDirty && nameError && (
        <div style={{ color: 'red' }}>{nameError}</div>
      )}
      <TextField
        variant="outlined"
        label="Name"
        type="text"
        name="name"
        value={name}
        onChange={e => nameHandleChange(e)}
        onBlur={blurHandler}
        required
        className={s.field}
      />
      {numberDirty && numberError && (
        <div style={{ color: 'red' }}>{numberError}</div>
      )}

      <NumberFormat
        variant="outlined"
        label="Number"
        type="tel"
        name="number"
        value={number}
        onChange={e => numberHandleChange(e)}
        onBlur={blurHandler}
        required
        className={s.field}
        customInput={TextField}
        /*        allowEmptyFormatting
 format="+38 (###) ###-##-##"
        mask="_" */
      />

      <Button
        disabled={!validForm}
        variant="contained"
        type="submit"
        size="large"
      >
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
