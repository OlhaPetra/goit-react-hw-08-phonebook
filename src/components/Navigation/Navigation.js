import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => 'link ' + (isActive ? 'active' : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => 'link ' + (isActive ? 'active' : '')}
      >
        Contacts
      </NavLink>
    </nav>
  );
};
export default Navigation;
