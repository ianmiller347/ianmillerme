import {
  INVALIDATE_POST,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions';

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case INVALIDATE_POST:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
 
const postsByUrl = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_POST:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, posts(state[action.posturl], action));
    default:
      return state;
  }
};

export default postsByUrl;
