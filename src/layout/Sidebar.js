import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigation from './Navigation';
 
class Sidebar extends Component {
  render() {
    const { pages } = this.props;

    return (
      <aside className='sidebar padding'>
        <Navigation pages={pages} />
      </aside>
    );
  }
}

Sidebar.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default Sidebar;
