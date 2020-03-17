import { createStore } from 'redux';
import { AppState, AppAction, CONNECT_WITH_SSO } from './types';
import { reducer, initialState } from './reducers';

export const store = createStore<AppState, AppAction, void, void>(
  reducer,
  initialState
);

async function init() {
  try {
    const response = await fetch('/ws/is-connected');
    const json = await response.json();
    store.dispatch({
      type: CONNECT_WITH_SSO,
      user: json.sso.user
    });
  } catch (e) {
    ;
  }

}
init();


