import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import PostList from '../components/PostList';
import Loader from '../components/Loader';
import Main from '../layout/Main';
import Sidebar from '../layout/Sidebar';
import Page from '../components/Page';
 
class AsyncApp extends Component {
  buildRoutes(pages) {
    const {
      selectedPost,
      posts,
      isFetchingPages,
      isFetchingPosts
    } = this.props;

    return pages.map(page => (
      <Route
        key={page.slug}
        path={`/${page.slug}`}
        exact
        render={props =>
          <Page
            pages={pages}
            posts={posts}
            isFetchingPosts={isFetchingPosts}
            isFetchingPages={isFetchingPages}
            selectedPost={selectedPost}
            {...props}
          />
        }
      />
    ));
  }

  render() {
    const {
      selectedPost,
      posts,
      isFetchingPages,
      isFetchingPosts,
      pages
    } = this.props;

    if (isFetchingPages) {
      return <Loader />;
    }

    if (pages && pages.length > 0) {
      return (
        <Router>
          <Switch>
            {this.buildRoutes(pages)}
            <Route path="/" render={props =>
              <Page
                pages={pages}
                posts={posts}
                isFetchingPosts={isFetchingPosts}
                isFetchingPages={isFetchingPages}
                selectedPost={selectedPost}
                {...props}
              />
            } />
          </Switch>
        </Router>
      );
    }
    return null;
  }
}

AsyncApp.propTypes = {
  selectedPost: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  isFetchingPages: PropTypes.bool.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired
};

export default AsyncApp;
