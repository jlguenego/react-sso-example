import React from 'react';
import './Connection.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserState, ConnectDispatch, DISCONNECT } from '../../redux/types';
import { Dispatch } from 'redux';
import { store } from '../../redux/store';
import { get } from '../../utils/http';

const mapStateToProps = (state: UserState) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch: Dispatch): ConnectDispatch => ({
  disconnect: async () => {
    console.log('disconnect');
    await get('/ws/disconnect');
    store.dispatch({
      type: DISCONNECT,
    });
  },
});

interface Props extends UserState, ConnectDispatch {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ user, disconnect }: Props) => {
  return (
    <section className="Connection">
      {user ? (
        <>
          <h1>
            Welcome <br />
            {user?.adUser ? (
              <span>{user?.adUser.givenName} (AD)</span>
            ) : (
              <span>{user?.displayName}</span>
            )}{' '}
            !
          </h1>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <>
          <h1>Welcome anonymous !</h1>
          <Link to="/login">
            <button>Connect</button>
          </Link>
        </>
      )}
    </section>
  );
});
