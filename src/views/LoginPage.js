import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operation';

import Button from '../components/Button';

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
        <Button type="submit" title="Enter" />
      </form>
    </div>
  );
}
