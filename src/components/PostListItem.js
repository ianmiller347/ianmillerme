import React from 'react';
import PropTypes from 'prop-types';

const PostListItem = ({ onClick, active, title, excerpt }) => (
  <li
    onClick={onClick}
    className={`post-list-item`}>
    <h3>{title.rendered}</h3>
    <div dangerouslySetInnerHTML={{__html: excerpt.rendered}} />
  </li>
);

PostListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
  title: PropTypes.shape({
    rendered: PropTypes.string.isRequired
  }),
  content: PropTypes.shape({
    rendered: PropTypes.string
  }).isRequired,
  excerpt: PropTypes.shape({
    rendered: PropTypes.string
  }).isRequired
};

PostListItem.defaultProps = {
  active: false
};
 
export default PostListItem;
