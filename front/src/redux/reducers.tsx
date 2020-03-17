import {
  CONNECT_WITH_SSO,
  AppAction,
  AppState,
  SHOW_SECRET,
  DISCONNECT,
  CONNECT_WITH_BAD_CREDENTIALS,
} from './types';

export const initialState: AppState = {
  secret: '',
  error: false,
};

export function reducer(
  previousState = initialState,
  action: AppAction
): AppState {
  const state = { ...previousState };
  state.error = false;
  switch (action.type) {
    case CONNECT_WITH_SSO: {
      
      state.user = action.user;
      console.log('connect with sso ok');
      return state;
    }
    case CONNECT_WITH_BAD_CREDENTIALS: {
      state.error = true;
      console.log('connect with sso ok');
      return state;
    }
    case SHOW_SECRET: {
      state.secret = action.secret;
      console.log('set secret', state);

      return state;
    }
    case DISCONNECT: {
      state.secret = '';
      state.user = undefined;
      return state;
    }

    default:
      return previousState;
  }
}
