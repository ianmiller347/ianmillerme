import fetch from 'cross-fetch';
 
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_POST = 'SELECT_POST';
export const INVALIDATE_POST = 'INVALIDATE_POST';
 
export function selectPosturl(posturl) {
  return {
    type: SELECT_POST,
    posturl
  };
}
 
export function invalidatePosturl(posturl) {
  return {
    type: INVALIDATE_POST,
    posturl
  };
}
 
function requestPosts(posturl) {
  return {
    type: REQUEST_POSTS,
    posturl
  };
}
 
function receivePosts(posturl, json) {
  return {
    type: RECEIVE_POSTS,
    posturl,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}
 
function fetchPosts(posturl) {
  return dispatch => {
    dispatch(requestPosts(posturl))
    return fetch(`https://ianmiller.me/wp-json/${posturl}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(posturl, json)))
  };
}
 
function shouldFetchPosts(state, posturl) {
  const posts = state.postsByPosturl[posturl];
  if (!posts) {
    return true;
  }
  else if (posts.isFetching) {
    return false;
  }
  else {
    return posts.didInvalidate;
  }
}
 
export function fetchPostsIfNeeded(posturl) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), posturl)) {
      return dispatch(fetchPosts(posturl));
    }
  };
}
