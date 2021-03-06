import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loader from '../components/Loader';
import Page from '../components/Page';
 
class AsyncApp extends Component {
  buildRoutes(pages) {
    const {
      posts,
      isFetchingPages,
      isFetchingPosts
    } = this.props;

    const pagesAndPosts = pages.concat(posts);

    return pagesAndPosts.map(page => (
      <Route
        key={page.slug}
        path={`/${page.slug}/`}
        render={props =>
          <Page
            pages={pages}
            posts={posts}
            isFetchingPosts={isFetchingPosts}
            isFetchingPages={isFetchingPages}
            {...props}
          />
        }
      />
    ));
  }

  render() {
    const {
      posts,
      isFetchingPages,
      isFetchingPosts,
      pages
    } = this.props;

    if (isFetchingPages) {
      return (
        <Loader 
          type="small"
          message="Fetching pages..." 
        />
      );
    }

    if (pages && pages.length > 0) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render={props =>
              <Page
                pages={pages}
                posts={posts}
                isFetchingPosts={isFetchingPosts}
                isFetchingPages={isFetchingPages}
                {...props}
              />
            } />
            {this.buildRoutes(pages)}
          </Switch>
        </Router>
      );
    }
    return null;
  }
}

AsyncApp.propTypes = {
  posts: PropTypes.array.isRequired,
  pages: PropTypes.array.isRequired,
  isFetchingPages: PropTypes.bool.isRequired,
  isFetchingPosts: PropTypes.bool.isRequired
};

export default AsyncApp;
