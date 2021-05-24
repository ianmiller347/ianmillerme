import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import PostList from '../../components/PostList';

const PostsList = () => {
  const posts = useSelector((state) => state.posts?.items ?? []);
  const isFetching = useSelector((state) => state.posts?.isFetching);

  if (isFetching) {
    return <Loader type="small" message="Fetching posts" />;
  }
  
  if (posts?.length > 0) {
    return <PostList posts={posts} />;
  }

  return <p>There are no posts right now.</p>;
};

export default PostsList;
