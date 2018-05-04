import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
class Navigation extends Component {
  render() {
    return (
      <nav className='nav-container'>
        <ul className='nav-list'>
          <li>
            <a
              href='about'
              title='About'>
              About
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
