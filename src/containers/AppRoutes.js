import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Page from '../components/Page';

const AppRoutes = () => {
  const pages = useSelector((state) => state.pages?.items);
  const isFetchingPages = useSelector((state) => state.pages?.isFetching);
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

  // Single Page mount — tab changes update content in place instead of remounting the sheet
  return (
    <Router>
      <Page />
    </Router>
  );
};

export default AppRoutes;
