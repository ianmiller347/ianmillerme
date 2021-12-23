import React, { Component } from 'react';
import Logo from './Logo';

class Header extends Component {
  render() {
    const { blogInfo } = this.props;
    return (
      <header className="App-header">
        <div>
          <Logo />
        </div>
        <h2 className="App-title">Ian J. Miller</h2>
        <p className="App-intro">
          {blogInfo.description}
        </p>
      </header>
    );
  }
}

export default Header;
