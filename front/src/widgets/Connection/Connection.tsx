import React from 'react';
import './Connection.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../redux/types';
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState) => ({
  user: state.user,
  secret: '',
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props: AppState) => {
  console.log('props: ', props);
  return (
    <section className="Connection">
      {props.user ? (
        <h1>
          Welcome <br />
          {props.user?.displayName} !
        </h1>
      ) : (
        <>
          <h1>Welcome !</h1>
          <Link to="/login">
            <button>Connect</button>
          </Link>
        </>
      )}
    </section>
  );
});
