import { combineReducers } from 'redux';
import postsByUrl from './postsByUrl';
import selectedPost from './selectedPost';

const rootReducer = combineReducers({
  postsByUrl,
  selectedPost
});
 
export default rootReducer;
