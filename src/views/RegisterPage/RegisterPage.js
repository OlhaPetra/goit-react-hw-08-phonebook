import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import authOperations from '../../redux/auth/auth-operation';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

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

    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={s.title}>Get's started. Sign up.</h1>
      <p className={s.text}>
        Already have an account?{' '}
        <Link to="/login" className={s.link}>
          Log in.
        </Link>
      </p>
      <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={nameHandleChange}
          required
          className={s.field}
        />
        <TextField
          id="outlined-basic"
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
          id="outlined-basic"
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
          Sign in
        </Button>
      </form>
    </div>
  );
}
