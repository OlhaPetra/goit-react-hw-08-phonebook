import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import './Navigation.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => 'link ' + (isActive ? 'active' : '')}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => 'link ' + (isActive ? 'active' : '')}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
