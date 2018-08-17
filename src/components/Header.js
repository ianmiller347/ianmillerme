import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    const { blogInfo } = this.props;
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Ian J. Miller</h2>
        <p className="App-intro">
          {blogInfo.description}
        </p>
      </header>
    );
  }
}

export default Header;
