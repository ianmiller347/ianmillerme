import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
import Navigation from './Navigation';
 
class Sidebar extends Component {
  render() {
    const {
      widgets
    } = this.props;

    return (
      <aside className='sidebar'>
        <Navigation />
      </aside>
    );
  }
}

Sidebar.propTypes = {
  widgets: PropTypes.array.isRequired,
};

export default Sidebar;
