import React, { useRef, FormEvent } from 'react';
import './Login.scss';
import { useHistory } from 'react-router-dom';
import {
  CONNECT_WITH_SSO,
  CONNECT_WITH_BAD_CREDENTIALS,
  ErrorState,
} from '../../redux/types';
import { store } from '../../redux/store';
import { post } from '../../utils/http';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: ErrorState) => ({
  error: state.error,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ error }) => {
  const history = useHistory();
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function connectWithSSO() {
    console.log('connectWithSSO');
    const response = await window.fetch('/ws/connect-with-sso');
    const json = await response.json();
    console.log('json: ', json);
    store.dispatch({
      type: CONNECT_WITH_SSO,
      user: json.sso.user,
    });
    history.push('/');
  }

  async function connectWithCredentials(e: FormEvent) {
    e.preventDefault();
    console.log('loginRef', loginRef);
    try {
      const json = await post('/ws/connect', {
        login: loginRef.current?.value,
        password: passwordRef.current?.value,
      });
      store.dispatch({
        type: CONNECT_WITH_SSO,
        user: json.sso.user,
      });
      history.push('/');
    } catch (e) {
      console.error('error', e);
      store.dispatch({
        type: CONNECT_WITH_BAD_CREDENTIALS,
      });
    }
  }

  return (
    <main className="Login">
      <section>
        <button className="primary" onClick={connectWithSSO}>
          Connect with SSO
        </button>
        <div className="or"></div>
        <form onSubmit={connectWithCredentials}>
          <label>
            <div>Login</div>
            <input type="text" ref={loginRef} />
          </label>
          <label>
            <div>Password</div>
            <input type="password" ref={passwordRef} />
          </label>
          <button type="submit">Connect</button>
          {error ? <span>Bad login/password</span> : null}
        </form>
      </section>
    </main>
  );
});
