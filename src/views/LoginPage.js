import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operation';
//import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';

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
      <h1>Страница логина</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
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
      </form>
    </div>
  );
}