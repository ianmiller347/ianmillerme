import fetch from 'cross-fetch';
 
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_POST = 'SELECT_POST';
export const INVALIDATE_POST = 'INVALIDATE_POST';
export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';

const pagesEndPoint = `//ianmiller.me/wp-json/wp/v2/pages`;
const postsEndPoint = `//ianmiller.me/wp-json/wp/v2/posts`;
 
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
  return {
    type: RECEIVE_POSTS,
    posturl,
    posts: json.map(child => child),
    receivedAt: Date.now()
  };
}
 
function fetchPosts(posturl) {
  return dispatch => {
    dispatch(requestPosts(posturl))
    return fetch(postsEndPoint)
      .then(response => response.json())
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
  return posts.didInvalidate;
}
 
export function fetchPostsIfNeeded(posturl) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), posturl)) {
      return dispatch(fetchPosts(posturl));
    }
  };
}

// pages
function requestPages(pageurl) {
  return {
    type: REQUEST_PAGES,
    pageurl
  };
}
 
function receivePages(pageurl, json) {
  return {
    type: RECEIVE_PAGES,
    pageurl,
    pages: json.map(child => child),
    receivedAt: Date.now()
  };
}
 
function fetchPages(pageurl) {
  return dispatch => {
    dispatch(requestPages(pageurl))
    return fetch(pagesEndPoint)
      .then(response => response.json())
      .then(json => dispatch(receivePages(pageurl, json)))
      .catch(error => console.log('error', error))
  };
}
 
function shouldFetchPages(state, pageurl) {
  const pages = state.pages[pageurl];
  if (!pages) {
    return true;
  }
  else if (pages.isFetching) {
    return false;
  }
  return true;
}
 
export function fetchPagesIfNeeded(pageurl) {
  return (dispatch, getState) => {
    if (shouldFetchPages(getState(), pageurl)) {
      return dispatch(fetchPages(pageurl));
    }
  };
}
