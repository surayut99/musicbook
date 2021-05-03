import PostReaction from "./PostReaction";
import PostManager from "./PostManager";
import React from "react";
import { useDispatch } from "react-redux";
import {
  deletePost,
  editPost,
  likePost,
} from "../services/actions/PostAction.js";
import { addComment } from "../services/actions/CommentActions.js";

const PostContext = React.createContext();

function Post(props) {
  const { detail, comments } = props;
  const dispatch = useDispatch();

  const onPostLike = (postId) => {
    dispatch(likePost(postId));
  };
  const onPostEdit = (editedPost) => {
    dispatch(editPost(editedPost));
  };
  const onPostDelete = (postId) => {
    dispatch(deletePost(postId));
  };
  const onPostComment = (comment) => {
    dispatch(addComment(comment));
  };

  return (
    <PostContext.Provider
      value={{
        detail,
        comments,
        onPostLike,
        onPostEdit,
        onPostDelete,
        onPostComment,
      }}
    >
      <div className="mb-5 pt-3 post overflow-hidden">
        <div className="px-3">
          <PostManager />
          <div style={{ lineHeight: "200" }}>
            <h3>{detail.song}</h3>
            <h6>{detail.artist}</h6>
          </div>
          <div className="content">
            <p className="caption mt-3">{detail.caption}</p>
          </div>
        </div>

        <div style={{ backgroundColor: "rgb(225, 225, 225)" }}>
          <iframe
            title={detail.song}
            src={detail.link}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <PostReaction />
        </div>
      </div>
    </PostContext.Provider>
  );
}

export { PostContext };
export default Post;
