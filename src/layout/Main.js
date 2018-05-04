import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';
import Loader from '../components/Loader';
 
class Main extends Component {
  render() {
    const {
      selectedPost,
      posts,
      isFetching
    } = this.props;

    return (
      <main className='main-section'>
        {this._renderPosts(isFetching, posts)}
      </main>
    )
  }

  _renderPosts(isFetching, posts) {
    if (isFetching) {
      return <Loader />;
    }
    else if (posts && posts.length > 0) {
      return <PostList posts={posts} onPostClick={this.handlePostClick} />;
    }
    return <p>There are no posts right now.</p>;
  }
}

Main.propTypes = {
  selectedPost: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Main;
