import React from 'react';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import './AppBar.css';

function AppBar() {
  return (
    <header className="bottomShadow">
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}

export default AppBar;
