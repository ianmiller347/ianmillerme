import { SELECT_POST } from '../actions';

const selectedPost = (state = 'reactjs', action) => {
  switch (action.type) {
    case SELECT_POST:
      return action.posturl;
    default:
      return state;
  }
};

export default selectedPost;
