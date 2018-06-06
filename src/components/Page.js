import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import {
  selectPost,
  fetchPostsIfNeeded
} from '../actions';
import PostList from './PostList';
import Loader from './Loader';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';

class Page extends Component {
  handlePostClick = (nextPostUrl) => {
    this.props.dispatch(selectPost(nextPostUrl));
    this.props.dispatch(fetchPostsIfNeeded(nextPostUrl));
  }

  render() {
    const {
      selectedPost,
      posts,
      isFetchingPages,
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

Page.propTypes = {
  url: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  // this just makes this.props.dispatch available. 
  return {};
}

export default connect(mapStateToProps)(Page);
