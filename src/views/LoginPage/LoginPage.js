import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandleChange = e => {
    setEmail(e.target.value);
  };

  const passwordHandleChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>Log In to Your Account</h1>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="E-mail"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={emailHandleChange}
          required
          className={s.field}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={passwordHandleChange}
          required
          className={s.field}
        />
        <Button variant="contained" type="submit" size="large">
          Log in
        </Button>
      </form>
    </div>
  );
}
