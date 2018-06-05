import {
  REQUEST_PAGES,
  RECEIVE_PAGES
} from '../actions';

const pagesReducer = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_PAGES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PAGES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.pages,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
 
const pages = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PAGES:
    case REQUEST_PAGES:
      return Object.assign({}, state, {
        pages: pagesReducer(state[action.pageurl], action)
      });
    default:
      return state;
  }
};

export default pages;
