import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/Loader';
 
class Sidebar extends Component {
  render() {
    const {
      widgets
    } = this.props;

    return (
      <aside className='sidebar'>
        <h4>Sidebar stuff</h4>
        <ul>
          <li>Sidebar widget</li>
        </ul>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  widgets: PropTypes.array.isRequired,
};

export default Sidebar;
