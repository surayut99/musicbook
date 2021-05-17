import { useContext, useState } from "react";
import "../../styles/PostReaction.css";
import { PostContext } from "../post/Post.js";

function CommentMaker() {
  const { detail, onPostComment } = useContext(PostContext);

  const defaultComment = {
    post_id: detail._id,
    content: "",
  };

  const [comment, setComment] = useState(defaultComment);

  function onSubmitComment(evt) {
    evt.preventDefault();
    onPostComment(comment);
    setComment(defaultComment);
  }

  function onChangeComment(evt) {
    setComment({
      ...comment,
      content: evt.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={onSubmitComment}>
        <input
          type="text"
          className="form-control mr-3"
          value={comment.content}
          onChange={onChangeComment}
          placeholder="Write some comments here !!!"
          style={{
            width: "150%",
            borderRadius: "20px",
            border: "2px solid gray",
          }}
        />
      </form>
    </div>
  );
}

export default CommentMaker;
