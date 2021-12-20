import React from 'react';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import './AppBar.css';

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header className="bottomShadow">
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
