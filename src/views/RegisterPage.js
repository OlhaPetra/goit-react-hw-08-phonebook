import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';

import authOperations from '../redux/auth/auth-operation';
//import Button from '../components/Button';

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
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={nameHandleChange}
          required
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
        />
        <Button sx={{ bgcolor: pink[200] }} variant="contained" type="submit">
          Log in
        </Button>

        {/* <label>
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
        <Button type="submit" title="Send" /> */}
      </form>
    </div>
  );
}
