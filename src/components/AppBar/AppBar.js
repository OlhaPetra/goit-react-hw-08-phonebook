import React from 'react';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import s from './AppBar.module.css';

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className={s.bottomShadow}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
