import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';

class Page extends Component {

  render() {
    const {
      posts,
      isFetchingPages,
      isFetchingPosts,
      pages
    } = this.props;

    return (
      <section className='main-section grid grid--has-sidebar'>
        <Sidebar pages={pages} />
        <Main
          currentUrl={this.props.location.pathname}
          posts={posts}
          pages={pages}
          isFetching={isFetchingPosts || isFetchingPages}
        />
      </section>
    );
  }
}

Page.propTypes = {
  pages: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired,
  isFetchingPages: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  // this just makes this.props.dispatch available.
  return {};
}

export default connect(mapStateToProps)(Page);
