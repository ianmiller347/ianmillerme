import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';
import './style.scss';
 
const PostList = ({ posts }) => (
  <div className='post-list-container'>
    <h3>Some Blog Posts</h3>
    <ul className='post-list'>
      {posts.map((post, index) => (
        <PostListItem key={index} fields={post.acf} {...post} />
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
      acf: PropTypes.shape({
        intro: PropTypes.string
      }),
      slug: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};
 
export default PostList;
