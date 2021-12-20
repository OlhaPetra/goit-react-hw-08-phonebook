import React, { useState } from 'react';
//import { useSelector, useDispatch } from 'react-redux';

//import {addContact} from '../../redux/phonebook/phonebook-operation';
//import { getContacts } from '../../redux/phonebook/phonebook-selectors';
import Button from '../components/Button';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameHandleChange = e => {
    setName(e.target.value);
  };
  const emailHandleChange = e => {
    setEmail(e.target.value);
  };

  const passwordHandleChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameHandleChange}
            required
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailHandleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={passwordHandleChange}
            required
          />
        </label>
        <Button type="submit" title="Send" />
      </form>
    </div>
  );
}
