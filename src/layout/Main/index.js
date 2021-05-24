import React from 'react';
import PageContent from './PageContent';
import PostsList from './PostsList';

const Main = () => {
  return (
    <main className='main-container'>
      <PageContent />
      <PostsList />
    </main>
  );
};

export default Main;
