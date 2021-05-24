import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppRoutes from './containers/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import {
  fetchPagesIfNeeded,
  fetchPostsIfNeeded,
  fetchBlogInfo,
} from './actions';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogInfo());
    dispatch(fetchPagesIfNeeded());
    dispatch(fetchPostsIfNeeded());
  }, [dispatch]);

  const blogInfo = useSelector((state) => state.blogInfo?.data ?? {});
  const isFetchingBlogInfo = useSelector((state) => state.blogInfo?.isFetching);

  if (isFetchingBlogInfo) {
    return (
      <div className="flex-column display-flex fill-height fill-width fully-centered">
        <Loader type="large" message="Preparing Ian Miller (me)..." />
      </div>
    );
  }

  return (
    <div className="App">
      <Header blogInfo={blogInfo} />
      <AppRoutes />
      <Footer blogInfo={blogInfo} />
    </div>
  );
};

export default App;
