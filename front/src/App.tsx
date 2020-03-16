import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Main from './layout/Main/Main';

export default () => (
  <Router>
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  </Router>
);
