import React from 'react';
import PropTypes from 'prop-types';

const PostListItem = ({ onClick, active, text }) => (
  <li
    onClick={onClick}
    className={`post-list-item`}>
    {text}
  </li>
);

PostListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};
 
export default PostListItem;
