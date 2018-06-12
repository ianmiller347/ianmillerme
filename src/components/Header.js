import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Ian <span className="color-my-world">J.</span> Miller</h1>
        <p className="App-intro">
          {`I've written code before`}
        </p>
      </header>
    );
  }
}

export default Header;
