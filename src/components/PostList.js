import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
 
const PostList = ({ posts, onPostClick }) => (
  <ul>
    {posts.map((post, index) => (
      <Post key={index} {...post} onClick={() => onPostClick(index)} />
    ))}
  </ul>
);
 
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      active: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onPostClick: PropTypes.func.isRequired
};
 
export default PostList;
