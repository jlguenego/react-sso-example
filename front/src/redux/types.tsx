export const CONNECT_WITH_CREDENTIALS = 'connect-with-credentials';
export const CONNECT_WITH_SSO = 'connect-with-sso';
export const DISCONNECT = 'disconnect';
export const SHOW_SECRET = 'show-secret';

export interface User {
  domain: string;
  name: string;
  displayName: string;
  groups: string[];
  sid: string;
}

interface ConnectWithSSOAction {
  type: typeof CONNECT_WITH_SSO;
  user: User;
}

interface ConnectWithCredentialsAction {
  type: typeof CONNECT_WITH_CREDENTIALS;
  login: string;
  password: string;
}

interface ShowSecretAction {
  type: typeof SHOW_SECRET;
  secret: string;
}

interface DisconnectAction {
  type: typeof DISCONNECT;
}

export type AppAction =
  | ConnectWithSSOAction
  | ConnectWithCredentialsAction
  | ShowSecretAction
  | DisconnectAction;

export interface UserState {
  user?: User;
}

export interface SecretState {
  secret: string;
}

export interface AppState extends UserState, SecretState {}

export interface ConnectDispatch {
  disconnect: () => void;
}
