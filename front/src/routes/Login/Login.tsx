import React from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import { CONNECT_WITH_SSO } from '../../redux/types';
import { store } from '../../redux/store';

export default () => {
  let history = useHistory();

  async function connectWithSSO() {
    console.log('connectWithSSO');
    const response = await window.fetch('/ws/connect-with-sso');
    const json = await response.json();
    console.log('json: ', json);
    store.dispatch({
      type: CONNECT_WITH_SSO,
      user: json.sso.user
    });
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
