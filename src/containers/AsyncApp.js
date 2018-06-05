import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectPost,
  fetchPostsIfNeeded,
  invalidatePost
} from '../actions';
import PostList from '../components/PostList';
import Loader from '../components/Loader';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';
 
class AsyncApp extends Component {
  componentDidMount() {
    const { dispatch, selectedPost } = this.props;
    dispatch(fetchPostsIfNeeded(selectedPost));
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPost !== prevProps.selectedPost) {
      const { dispatch, selectedPost } = this.props;
      dispatch(fetchPostsIfNeeded(selectedPost));
    }
  }

  handlePostClick = (nextPostUrl) => {
    this.props.dispatch(selectPost(nextPostUrl));
    this.props.dispatch(fetchPostsIfNeeded(nextPostUrl));
  }

  handleRefreshClick = (e) => {
    e.preventDefault();
 
    const { dispatch, selectedPost } = this.props;
    dispatch(invalidatePost(selectedPost));
    dispatch(fetchPostsIfNeeded(selectedPost));
  }

  render() {
    const {
      selectedPost,
      posts,
      isFetchingPosts,
      pages
    } = this.props;

    return (
      <section className='main-section grid grid--has-sidebar'>
        <Main
          currentUrl={this.props.location.pathname}
          selectedPost={selectedPost}
          posts={posts}
          pages={pages}
          isFetching={isFetchingPosts}
          onPostClick={this.handlePostClick}
        />
        <Sidebar widgets={[]} pages={pages} />
      </section>
    );
  }
}

AsyncApp.propTypes = {
  selectedPost: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  isFetchingPages: PropTypes.bool.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

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

export default connect(mapStateToProps)(AsyncApp);
