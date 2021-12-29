import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

import phonebookImg from '../../images/phonebook.png';
import s from './HomePage.module.css';

export default function HomePage() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Hello in Phonebook_App!</h1>
      <p className={s.text}>
        Use a modern way to manage contacts in your business for free -
        Phonebook_App!
      </p>
      {!isLoggedIn && (
        <p className={s.text}>
          To get started -{' '}
          <Link className={s.link} to="/register">
            register now.
          </Link>
        </p>
      )}
      <img className={s.img} src={phonebookImg} alt="phonebook" width="500" />
    </div>
  );
}
