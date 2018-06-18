import { combineReducers } from 'redux';
import posts from './posts';
import pages from './pages';
import blogInfo from './blogInfo';

const rootReducer = combineReducers({
  posts,
  pages,
  blogInfo
});
 
export default rootReducer;
