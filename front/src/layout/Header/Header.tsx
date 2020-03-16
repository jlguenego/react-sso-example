import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';


export default () => (
  <header>
    <Link to="/">
      <img src={logo} alt="SSO Logo" />
      <span>React SSO Example</span>
    </Link>
  </header>
);
