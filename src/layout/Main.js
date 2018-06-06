import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';
import Loader from '../components/Loader';
 
class Main extends Component {
  render() {
    const {
      selectedPost,
      posts,
      pages,
      isFetching,
      currentUrl
    } = this.props;

    return (
      <main className='main-section'>
        {this._renderPage(currentUrl, posts, pages)}
        {this._renderPosts(isFetching, posts)}
      </main>
    );
  }

  _renderPage(url, posts, pages) {
    if (pages && pages.length > 0) {
      const pageMatchArray = pages.filter(page => page.slug === url.substr(1));
      if (pageMatchArray.length > 0) {
        return (
          <div className="page-content">
            <h1>{pageMatchArray[0].title.rendered}</h1>
            <div
              className="page-content__body"
              dangerouslySetInnerHTML={{__html: pageMatchArray[0].content.rendered}} />
          </div>
        );
      }
      const postMatchArray = posts.filter(post => post.slug === url.substr(1));
      if (posts
        && posts.length > 0
        && postMatchArray.length > 0) {
          return (
            <div>
              {postMatchArray[0].content.rendered}
            </div>
          );
      }
      return null;
    }
    return null;
  }

  _renderPosts(isFetching, posts) {
    if (isFetching) {
      return <Loader />;
    }
    else if (posts && posts.length > 0) {
      return <PostList posts={posts} onPostClick={this.props.onPostClick} />;
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
