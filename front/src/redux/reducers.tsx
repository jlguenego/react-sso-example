import { CONNECT_WITH_SSO, AppAction, AppState, SHOW_SECRET, DISCONNECT } from './types';

export const initialState: AppState = {
  secret: '',
};

export function reducer(
  previousState = initialState,
  action: AppAction
): AppState {
  switch (action.type) {
    case CONNECT_WITH_SSO: {
      const state = { ...previousState };
      state.user = action.user;
      console.log('connect with sso ok');
      return state;
    }
    case SHOW_SECRET: {
      const state = { ...previousState };
      state.secret = action.secret;
      console.log('set secret', state);

      return state;
    }
    case DISCONNECT: {
      const state = { ...previousState };
      state.secret = '';
      state.user = undefined;
      return state;
    }

    default:
      return previousState;
  }
}
