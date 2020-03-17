import React from 'react';
import { SecretState, SHOW_SECRET } from '../../redux/types';
import Connection from '../../widgets/Connection/Connection';
import './Home.scss';
import { Dispatch } from 'redux';
import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { get } from '../../utils/http';

const mapStateToProps = (state: SecretState) => ({
  secret: state.secret,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  showSecret: async () => {
    try {
      const state = store.getState();
      if (!state.user) {
        throw new Error('not connected');
      }
      const json = await get('/ws/protected/secret');
      console.log('json: ', json);
      store.dispatch({
        type: SHOW_SECRET,
        secret: JSON.stringify(json),
      });
    } catch (e) {
      alert('You need to be connected to know the secret.');
    }
  },
});

interface HomeProps extends SecretState {
  showSecret: () => void;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ secret, showSecret }: HomeProps) => (
  <main className="Home">
    <Connection />
    <button className="primary secret-btn" onClick={showSecret}>
      Look at my secret...
    </button>
    {/* /\u00A0 means non breaking space in Unicode */}
    <span className="secret">{secret ? secret : '\u00A0'}</span>
  </main>
));
