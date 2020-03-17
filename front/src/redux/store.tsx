import { createStore } from 'redux';
import { AppState, AppAction, CONNECT_WITH_SSO } from './types';
import { reducer, initialState } from './reducers';
import { get } from '../utils/http';

export const store = createStore<AppState, AppAction, void, void>(
  reducer,
  initialState
);

async function init() {
  try {
    const response = await get('/ws/is-connected');
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


