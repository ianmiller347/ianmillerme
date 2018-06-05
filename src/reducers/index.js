import { combineReducers } from 'redux';
import postsByUrl from './postsByUrl';
import pages from './pages';
import selectedPost from './selectedPost';

const rootReducer = combineReducers({
  postsByUrl,
  pages,
  selectedPost
});
 
export default rootReducer;
