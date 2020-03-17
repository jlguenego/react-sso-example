import React from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom';

export default () => {
  let history = useHistory();

  async function connectWithSSO() {
    console.log('connectWithSSO');
    const response = await window.fetch('/ws/connect-with-sso');
    const json = await response.json();
    console.log('json: ', json);
    history.push('/');
  }

  return (
    <main className="Login">
      <section>
        <button className="primary" onClick={connectWithSSO}>
          Connect with SSO
        </button>
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
};
