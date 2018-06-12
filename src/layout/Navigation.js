import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
 
class Navigation extends Component {
  render() {
    const { pages } = this.props;
    if (pages && pages.length > 0) {
      const pageLinks = pages.map(page => (
        <li key={page.id}>
          <NavLink
            to={`/${page.slug}`}
            title={page.title.rendered}>
            {page.title.rendered}
          </NavLink>
        </li>
      ));

      return (
        <nav className='nav-container'>
          <ul className='nav-list'>
            <li>
              <NavLink
                to='/'
                title='Home'
                exact>
                Home
              </NavLink>
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
