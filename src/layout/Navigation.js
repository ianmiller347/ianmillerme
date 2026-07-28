import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const Navigation = ({ pages }) => {
  if (pages?.length > 0) {
    const pageLinks = pages
      .filter((page) => page.slug !== 'home')
      .map((page) => (
        <li key={page.id} className="nav-list__item">
          <NavLink
            to={`/${page.slug}`}
            title={page.title.rendered}
            className="nav-list__item__link"
          >
            {page.title.rendered}
          </NavLink>
        </li>
      ));

    return (
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink to="/" title="Home" exact className="nav-list__item__link">
              Home
            </NavLink>
          </li>
          {pageLinks}
        </ul>
      </nav>
    );
  }
  return null;
};

Navigation.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default Navigation;
