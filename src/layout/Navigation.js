import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
 
class Navigation extends Component {
  render() {
    const { pages } = this.props;
    if (pages && pages.length > 0) {
      const pageLinks = pages.map(page => (
        <li key={page.id}>
          <Link
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
    return null;
  }
}

Navigation.propTypes = {
  pages: PropTypes.array.isRequired
};

export default Navigation;
