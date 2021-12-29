import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={({ isActive }) => 'link ' + (isActive ? 'active' : '')}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => 'link ' + (isActive ? 'active' : '')}
      >
        Log in
      </NavLink>
    </div>
  );
}
