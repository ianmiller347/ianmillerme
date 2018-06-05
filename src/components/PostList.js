import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';
import '../styles/Post.css';
 
const PostList = ({ posts, onPostClick }) => (
  <div className='post-list-container'>
    <h3>Some Blog Posts</h3>
    <ul className='post-list'>
      {posts.map((post, index) => (
        <PostListItem key={index} {...post} onClick={() => onPostClick(post.slug)} />
      ))}
    </ul>
  </div>
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
      excerpt: PropTypes.shape({
        rendered: PropTypes.string
      }).isRequired,
      slug: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onPostClick: PropTypes.func.isRequired
};
 
export default PostList;
