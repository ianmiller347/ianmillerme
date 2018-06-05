import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
class Navigation extends Component {
  render() {
    const { pages } = this.props;

    const pageLinks = pages.map(page => (
      <li>
        <Link
          key={page.id}
          to={`/${page.slug}`}
          title={page.title}>
          {page.title.rendered}
        </Link>
      </li>
    ));

    return (
      <nav className='nav-container'>
        <ul className='nav-list'>
          <li>
            <Link
              to='/'
              title='Home'>
              Home
            </Link>
          </li>
          {pageLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
