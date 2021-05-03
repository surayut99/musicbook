import { useContext, useState } from "react";
import "../styles/PostReaction.css";
import { PostContext } from "./Post.js";

function CommentMaker(props) {
  const { detail, onPostComment } = useContext(PostContext);

  const defaultComment = {
    id: detail.id,
    comment: "",
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
      comment: evt.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={onSubmitComment}>
        <input
          type="text"
          className="form-control mr-3"
          value={comment.comment}
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
