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
  selectPost
} from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { dispatch, selectedPost } = this.props;
    dispatch(fetchPagesIfNeeded());
    dispatch(fetchPostsIfNeeded(selectedPost));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPost !== prevProps.selectedPost) {
      const { dispatch, selectedPost } = this.props;
      dispatch(fetchPostsIfNeeded(selectedPost));
    }
  }

  render() {
    const {
      pages,
      posts,
      isFetchingPages,
      isFetchingPosts,
      selectedPost
    } = this.props;

    return (
      <div className="App">
        <Header pages={pages} />
        <AsyncApp
          pages={pages}
          posts={posts}
          isFetchingPages={isFetchingPages}
          isFetchingPosts={isFetchingPosts}
          selectedPost={selectedPost}
        />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const stateFromProps = {
    pages: [],
    posts: [],
    isFetchingPosts: false,
    isFetchingPages: false,
    selectedPost: state.selectedPost
  };

  if (state.pages && state.pages.isFetching != null) {
    stateFromProps.isFetching = state.pages.isFetching;
  }

  if (state.pages && state.pages.items && state.pages.items.length > 0) {
    stateFromProps.pages = state.pages.items;
  }

  if (state.postsByUrl && state.postsByUrl.isFetching != null) {
    stateFromProps.isFetching = state.postsByUrl.isFetching;
  }

  if (state.postsByUrl && state.postsByUrl.items && state.postsByUrl.items.length > 0) {
    stateFromProps.posts = state.postsByUrl.items;
  }

  return stateFromProps;
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  selectedPost: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  isFetchingPages: PropTypes.bool.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
