import axios from "axios";
import * as PostAct from "../PostAction.js";

export const fetchPosts = () => {
  return (dispatch) => {
    axios.get("http://localhost:3001/post").then(({ data }) => {
      dispatch(PostAct.fetchAct(data));
    });
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/post/create", {
        song: post.song,
        artist: post.artist,
        caption: post.caption,
        link: post.link,
      })
      .then((res) => {
        dispatch(PostAct.createAct(res.data));
      });
  };
};

export const editPost = (post) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:3001/post/update/${post._id}`, post)
      .then(() => {
        dispatch(PostAct.editAct({ ...post, updated_at: new Date() }));
      });
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3001/post/delete/${postId}`).then(() => {
      dispatch(PostAct.deleteAct(postId));
    });
  };
};

export const likePost = (postId) => {
  return (dispatch) => {
    axios.put(`http://localhost:3001/post/like/${postId}`);
    dispatch(PostAct.likeAct(postId));
  };
};
