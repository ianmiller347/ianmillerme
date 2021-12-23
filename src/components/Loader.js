import React from 'react';
import PropTypes from 'prop-types';
const Loader = (props) => (
  <div className={`loader-container ${props.className}`}>
    <figure className={`loader loader--${props.type}`}>
      <figcaption className="loader__caption">{props.message}</figcaption>
      <svg className="loader__vector" viewBox="0 0 185 100">
        <polygon className="triangle" points="5,0 105,50 5,100" />
        <polygon className="triangle" points="45,0 145,50 45,100" />
        <polygon className="triangle" points="85,0 185,50 85,100" />
      </svg>
    </figure>
  </div>
);
Loader.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  message: PropTypes.string,
};

Loader.defaultProps = {
  type: 'normal',
  className: '',
  message: 'Loading...',
};
export default Loader;
