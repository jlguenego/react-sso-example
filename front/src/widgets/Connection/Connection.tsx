import React from 'react';
import './Connection.scss';
import { Link } from 'react-router-dom';

export default () => (
  <section className="Connection">
    <Link to="/login">
      <button>Connect</button>
    </Link>
  </section>
);
