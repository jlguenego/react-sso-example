import { CONNECT_WITH_SSO, AppAction, AppState } from './types';



export const initialState: AppState = {
  secret: '',
};

export function reducer(previousState = initialState, action: AppAction): AppState {
  switch (action.type) {
    case CONNECT_WITH_SSO:
      const state = { ...previousState };
      state.user = action.user;
      console.log('connect with sso ok');
      return state;

    default:
      return previousState;
  }
}


