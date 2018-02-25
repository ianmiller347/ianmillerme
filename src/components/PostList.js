import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';

 
const PostList = ({ posts, onPostClick }) => (
  <ul>
    {posts.map((post, index) => (
      <PostListItem key={index} {...post} onClick={() => onPostClick(post.slug)} />
    ))}
  </ul>
);
 
PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.shape({
        rendered: PropTypes.string
      }).isRequired,
      content: PropTypes.shape({
        rendered: PropTypes.string
      }).isRequired,
      slug: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onPostClick: PropTypes.func.isRequired
};
 
export default PostList;
