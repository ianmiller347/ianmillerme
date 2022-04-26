import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { SITE_TITLE } from '../../constants';
import './PageContent.scss';

// tests if current URL matches a slug
// params: url (string), slug (string)
// returns bool
const urlMatchesSlug = (slug, url) => {
  // strings can be equal
  // or equal without the slashes. Let's remove those
  const slugNoSlashes = slug.replace(/\//g, '');
  const urlNoSlashes = url.replace(/\//g, '');
  // special home boy
  if (slugNoSlashes === 'home' && url === '/') {
    return true;
  }
  return slugNoSlashes === urlNoSlashes;
};

const PageContent = () => {
  const pages = useSelector((state) => state.pages?.items);
  const posts = useSelector((state) => state.posts?.items ?? []);

  let page = null;
  const history = useHistory();
  const currentUrl = history.location.pathname;
  const matchingPage = pages?.find((page) =>
    urlMatchesSlug(page.slug, currentUrl)
  );
  if (matchingPage) {
    page = matchingPage;
  } else {
    page = posts.find((post) => urlMatchesSlug(post.slug, currentUrl));
  }

  useEffect(() => {
    // change to react helmet
    const pageTitle = page
      ? `${page.title.rendered} | ${SITE_TITLE}`
      : SITE_TITLE;
    if (document.title !== pageTitle) {
      document.title = pageTitle;
    }
  }, [page]);

  if (!page) {
    return null;
  }

  return (
    <div className="page-content">
      <h1>{page.title.rendered}</h1>
      <div
        className="page-content__body"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </div>
  );
};

export default PageContent;
