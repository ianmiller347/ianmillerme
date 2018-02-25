import fetch from 'cross-fetch';
 
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_POST = 'SELECT_POST';
export const INVALIDATE_POST = 'INVALIDATE_POST';
 
export function selectPost(posturl) {
  return {
    type: SELECT_POST,
    posturl
  };
}
 
export function invalidatePost(posturl) {
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
  console.log('receivePosts', json)
  return {
    type: RECEIVE_POSTS,
    posturl,
    posts: json.map(child => child),
    receivedAt: Date.now()
  };
}
 
function fetchPosts(posturl) {
  // fetch(`https://ianmiller.me/wp-json/${posturl}.json`)
  // //ianmiller.me/wp-json/wp/v2/posts
  return dispatch => {
    dispatch(requestPosts(posturl))
    return fetch(`//ianmiller.me/wp-json/wp/v2/posts`)
      .then(response => {
        console.log('response', response);
        return response.json();
      })
      .then(json => dispatch(receivePosts(posturl, json)))
      .catch(error => console.log('error', error))
  };
}
 
function shouldFetchPosts(state, posturl) {
  const posts = state.postsByUrl[posturl];
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
