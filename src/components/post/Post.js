import PostReaction from "./PostReaction";
import PostManager from "./PostManager";
import React from "react";
import { useDispatch } from "react-redux";
import {
  likePost,
  editPost,
  deletePost,
} from "../../services/actions/thunkActions/PostActions.js";
import { createComment } from "../../services/actions/thunkActions/CommentActions.js";
import moment from "moment";

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
    dispatch(createComment(comment));
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
      <div className="mb-5 pt-3 post shadow overflow-hidden">
        <div className="px-3">
          <div className="d-flex justify-content-between">
            <div>
              <div style={{ lineHeight: "200" }}>
                <h3>{detail.song}</h3>
                <h6>{detail.artist}</h6>
              </div>
              <div className="content">
                <p className="caption mt-3">{detail.caption}</p>
              </div>
            </div>
            <div className="d-flex space-left">
              <p className="pt-2 text-gray">
                {moment(detail.created_at).fromNow()}
              </p>
              <PostManager />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "whitesmoke" }} className="mt-3">
          <iframe
            title={detail.song}
            src={detail.link}
            frameBorder="0"
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
