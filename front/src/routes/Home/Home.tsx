import React from 'react';
import './Home.scss';
import Connection from '../../widgets/Connection/Connection';

export default (props: any) => (
  <main className="Home">
    <h1>Welcome !</h1>
    <button className="primary">Look at my secret...</button>
    <Connection />
  </main>
);
