import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PostList from '../components/PostList';
import Loader from '../components/Loader';
import { SITE_TITLE } from '../constants';
 
class Main extends Component {
  render() {
    const {
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

  // tests if current URL matches a slug
  // params: url (string), slug (string)
  // returns bool
  urlMatchesSlug(slug, url) {
    // strings can be equal
    // or equal without the slashes. Let's remove those
    const slugNoSlashes = slug.replace(/\//g, '');
    const urlNoSlashes = url.replace(/\//g, '');
    return (slugNoSlashes === urlNoSlashes);
  }

  _renderPageContent(page) {
    const pageTitle = `${page.title.rendered} | ${SITE_TITLE}`;
    if (document.title !== pageTitle) {
      document.title = pageTitle;
    }
    return (
      <div className="page-content">
        <h1>{page.title.rendered}</h1>
        <div
          className="page-content__body"
          dangerouslySetInnerHTML={{__html: page.content.rendered}} />
      </div>
    );
  }

  _renderPage(url, posts, pages) {
    if (pages && pages.length > 0) {
      const pageMatchArray = pages.filter(page => this.urlMatchesSlug(page.slug, url));
      if (pageMatchArray.length > 0) {
        return this._renderPageContent(pageMatchArray[0]);
      }
      const postMatchArray = posts.filter(post => this.urlMatchesSlug(post.slug, url));
      if (posts
        && posts.length > 0
        && postMatchArray.length > 0) {
          return this._renderPageContent(postMatchArray[0]);
      }
      return null;
    }
    return null;
  }

  _renderPosts(isFetching, posts) {
    if (isFetching) {
      return <Loader type="small" message="Fetching posts" />;
    }
    else if (posts && posts.length > 0) {
      return <PostList posts={posts} />;
    }
    return <p>There are no posts right now.</p>;
  }
}

Main.propTypes = {
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Main;
