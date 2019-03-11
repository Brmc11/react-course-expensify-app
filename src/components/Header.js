import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink className="link" to="/" activeClassName="is-active" exact={true}> Home </NavLink>
    <NavLink className="link" to="/create" activeClassName="is-active"> Create </NavLink>
    <NavLink className="link" to="/help" activeClassName="is-active"> Help </NavLink>
  </header>
);

export default Header;
