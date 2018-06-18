import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostListItem = ({ active, title, fields, slug }) => (
  <li className={`post-list-item`}>
    <h3>{title.rendered}</h3>
    <p>{fields.intro}</p>
    <Link
      to={`/${slug}`}
      className='read-more-link'
      title={`Continue Reading ${title.rendered}`}>
      Continue Reading
      <span className="screen-reader-text">: {title.rendered}</span>
    </Link>
  </li>
);

PostListItem.propTypes = {
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
