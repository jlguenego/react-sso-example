import React, { Component } from 'react';
import './Home.scss';
import Connection from '../../widgets/Connection/Connection';

export default class Home extends Component<{}, { secret: string }> {
  constructor(props: {}) {
    super(props);
    console.log('props: ', props);
    this.state = { secret: '' };
  }

  showSecret() {
    this.setState({
      secret: 'hello this is my secret'
    });
  }

  render() {
    return (
      <main className="Home">
        <Connection />
        <button className="primary secret-btn" onClick={this.showSecret.bind(this)}>
          Look at my secret...
        </button>
        {/* /\u00A0 means non breaking space in Unicode */}
        <span className="secret">{this.state.secret ? this.state.secret : '\u00A0'}</span>
      </main>
    );
  }
}
