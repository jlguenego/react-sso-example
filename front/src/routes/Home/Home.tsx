import React, { Component } from 'react';
import './Home.scss';
import Connection from '../../widgets/Connection/Connection';

export default class Home extends Component<{}, { secret: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { secret: 'xxx' };
  }

  showSecret() {
    this.setState({
      secret: 'hello this is my secret'
    });
  }

  render() {
    return (
      <main className="Home">
        <h1>Welcome !</h1>
        <Connection />
        <button className="primary secret" onClick={this.showSecret.bind(this)}>
          Look at my secret...
        </button>
        <span>{this.state.secret}</span>
      </main>
    );
  }
}
