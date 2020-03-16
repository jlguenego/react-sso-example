import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg';

export default () => (
  <header>
    <a href="#">
      <img src={logo} alt="SSO Logo" />
      <span>React SSO Example</span>
    </a>
  </header>
);
