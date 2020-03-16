import React from 'react';
import './App.scss';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Main from './layout/Main/Main';
import Connection from './layout/Connection/Connection';

export default () => (
  <div className="App">
    <Header />
    <Connection />
    <Main />
    <Footer />
  </div>
);
