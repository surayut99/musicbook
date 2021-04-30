import { useState } from "react";
import "../styles/PostReaction.css";

function CommentMaker(props) {
  const { onClickComment, id } = props;
  const defaultComment = {
    id: id,
    comment: "",
  };
  const [comment, setComment] = useState(defaultComment);

  function onCommentFormSubmit(evt) {
    evt.preventDefault();
    onClickComment(comment);
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
      <form onSubmit={onCommentFormSubmit} className="form-inline">
        <input
          type="text"
          className="form-control mr-3 w-50"
          value={comment.comment}
          style={{ resize: "none" }}
          onChange={onChangeComment}
        />
        <button type="submit" className="btn btn-info mt-auto">
          Comment
        </button>
      </form>
    </div>
  );
}

export default CommentMaker;
