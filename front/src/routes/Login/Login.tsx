import React from 'react';
import './Login.scss';

export default () => (
  <main className="Login">
    <section>
      <button className="primary">Connect with SSO</button>
      <div className="or"></div>
      <form>
        <label>
          <div>Login</div>
          <input type="text" />
        </label>
        <label>
          <div>Password</div>
          <input type="password" />
        </label>
        <button>Connect</button>
      </form>
    </section>
  </main>
);
