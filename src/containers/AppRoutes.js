import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Page from '../components/Page';
 
const AppRoutes = () => {
  const pages = useSelector((state) => state.pages?.items);
  const isFetchingPages = useSelector((state) => state.pages?.isFetching);
  const posts = useSelector((state) => state.posts?.items ?? []);
  const isFetchingPosts = useSelector((state) => state.posts?.isFetching);

  if (isFetchingPages) {
    return <Loader type="small" message="Fetching pages..." />;
  }

  if (isFetchingPosts) {
    return <Loader type="small" message="Fetching posts..." />;
  }

  if (!pages) {
    return null;
  }

  const pagesAndPosts = pages?.length ? pages.concat(posts) : [];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Page />
        </Route>
        {pagesAndPosts.map((page) => (
          <Route
            key={page.slug}
            path={`/${page.slug}/`}
          >
            <Page />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
