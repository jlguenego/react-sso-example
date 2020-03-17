import { createStore } from 'redux';
import { AppState, AppAction } from './types';
import { reducer, initialState } from './reducers';

export const store = createStore<AppState, AppAction, void, void>(
  reducer,
  initialState
);
