import {
  REQUEST_BLOGINFO,
  RECEIVE_BLOGINFO
} from '../actions';

const pagesReducer = (
  state = {
    isFetching: false,
    data: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_BLOGINFO:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_BLOGINFO:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
};
 
const pages = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BLOGINFO:
    case REQUEST_BLOGINFO:
      return Object.assign({}, state, pagesReducer(state[action.pageurl], action));
    default:
      return state;
  }
};

export default pages;
