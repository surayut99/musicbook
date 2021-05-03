import { combineReducers } from "redux";
import CommentReducer from "./CommentReducer.js";
import PostReducer from "./PostReducer.js";

const Reducers = combineReducers({
  post: PostReducer,
  comment: CommentReducer,
});

export default Reducers;
