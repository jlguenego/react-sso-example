import { createStore } from 'redux';
import { User, CONNECT_WITH_SSO, AppAction } from './types';

export interface AppState {
    user: User | undefined;
    secret: string;
  }

const initialState: AppState = {
  user: undefined,
  secret: '',
};

function reducer(previousState = initialState, action: AppAction): AppState {
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

export const store = createStore<AppState, AppAction, void, void>(
  reducer,
  initialState
);
