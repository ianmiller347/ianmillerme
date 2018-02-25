import React from 'react';
import PropTypes from 'prop-types';
 
const Loader = (props) => (
  <div className={`loader loader--${props.type} ${props.className}`}>
    Loading...
  </div>
);
 
Loader.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string
};

Loader.defaultProps = {
  type: 'normal',
  className: ''
};
 
export default Loader;
