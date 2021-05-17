import axios from "axios";
import { createAct } from "../CommentActions.js";

export const fetchComments = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/comment").then(({ data }) => {
      dispatch(createAct(data));
    });
  };
};

export const createComment = (comment) => {
  return (dispatch) => {
    axios.post("http://localhost:3001/comment/create", comment).then((res) => {
      console.log(res);
      dispatch(createAct({ ...comment, created_at: new Date() }));
    });
  };
};
