import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

export default () => (
  <footer>
    <Link to="/legal">
      <span>Legal</span>
    </Link>
  </footer>
);
