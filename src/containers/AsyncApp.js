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
      isFetching
    } = this.props;

    return (
      <section className='main-section grid grid--has-sidebar'>
        <Main
          selectedPost={selectedPost}
          posts={posts}
          isFetching={isFetching}
          onPostClick={this.handlePostClick}
        />
        <Sidebar widgets={[]} />
      </section>
    );
  }
}

AsyncApp.propTypes = {
  selectedPost: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { selectedPost, postsByUrl } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByUrl[selectedPost] || {
    isFetching: true,
    items: []
  };
 
  return {
    selectedPost,
    posts,
    isFetching,
    lastUpdated
  };
}

export default connect(mapStateToProps)(AsyncApp);
