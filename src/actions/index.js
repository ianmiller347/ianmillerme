import fetch from 'cross-fetch';
 
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REQUEST_PAGES = 'REQUEST_PAGES';
export const RECEIVE_PAGES = 'RECEIVE_PAGES';
export const REQUEST_BLOGINFO = 'REQUEST_BLOGINFO';
export const RECEIVE_BLOGINFO = 'RECEIVE_BLOGINFO';

const pagesEndPoint = `//ianmiller.me/wp-json/wp/v2/pages`;
const postsEndPoint = `//ianmiller.me/wp-json/wp/v2/posts`;
const getAllEndpoint = '//ianmiller.me/wp-json';
 
function requestPosts() {
  return {
    type: REQUEST_POSTS
  };
}
 
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    posts: json.map(child => child),
    receivedAt: Date.now()
  };
}
 
function fetchPosts() {
  return dispatch => {
    dispatch(requestPosts())
    return fetch(postsEndPoint)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
      .catch(error => console.log('error', error))
  };
}
 
function shouldFetchPosts(state) {
  const { posts } = state;
  if (!posts) {
    return true;
  }
  else if (posts.isFetching) {
    return false;
  }
  return true;
}
 
export function fetchPostsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      return dispatch(fetchPosts());
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

// blog info
const requestBlogInfo = () => ({
  type: REQUEST_BLOGINFO
});
 
function receiveBlogInfo(json) {
  return {
    type: RECEIVE_BLOGINFO,
    data: json,
    receivedAt: Date.now()
  };
}

function getBlogInfo() {
  return dispatch => {
    dispatch(requestBlogInfo())
    return fetch(getAllEndpoint)
      .then(response => response.json())
      .then(json => dispatch(receiveBlogInfo(json)))
      .catch(error => console.log('error', error))
  };
}

export function fetchBlogInfo() {
  return dispatch => dispatch(getBlogInfo());
}
