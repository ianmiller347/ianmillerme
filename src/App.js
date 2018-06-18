import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AsyncApp from './containers/AsyncApp';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import {
  fetchPagesIfNeeded,
  fetchPostsIfNeeded,
  fetchBlogInfo,
} from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBlogInfo());
    dispatch(fetchPagesIfNeeded());
    dispatch(fetchPostsIfNeeded());
  }

  render() {
    const {
      pages,
      posts,
      blogInfo,
      isFetchingPages,
      isFetchingPosts,
      isFetchingBlogInfo,
    } = this.props;

    if (isFetchingBlogInfo) {
      return (
        <div className="flex-column display-flex fill-height fill-width fully-centered">
          <Loader />
          <h2>Preparing Ian Miller (me)...</h2>
        </div>
      );
    }

    return (
      <div className="App">
        <Header blogInfo={blogInfo} />
        <AsyncApp
          pages={pages}
          posts={posts}
          isFetchingPages={isFetchingPages}
          isFetchingPosts={isFetchingPosts}
        />
        <Footer blogInfo={blogInfo} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const stateFromProps = {
    pages: [],
    posts: [],
    blogInfo: {},
    isFetchingPosts: false,
    isFetchingPages: false,
    isFetchingBlogInfo: false,
  };

  if (state.pages && state.pages.isFetching != null) {
    stateFromProps.isFetchingPages = state.pages.isFetching;
  }

  if (state.pages
    && state.pages.items
    && state.pages.items.length > 0) {
    stateFromProps.pages = state.pages.items;
  }

  if (state.posts && state.posts.isFetching != null) {
    stateFromProps.isFetchingPosts = state.posts.isFetching;
  }

  if (state.posts
    && state.posts.items
    && state.posts.items.length > 0) {
    stateFromProps.posts = state.posts.items;
  }

  if (state.blogInfo && state.blogInfo.isFetching != null) {
    stateFromProps.isFetchingBlogInfo = state.blogInfo.isFetching;
  }

  if (state.blogInfo && state.blogInfo.data) {
    stateFromProps.blogInfo = state.blogInfo.data;
  }

  return stateFromProps;
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  isFetchingPages: PropTypes.bool.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
