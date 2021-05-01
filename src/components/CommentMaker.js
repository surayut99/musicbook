import { useContext, useState } from "react";
import { FeedContext } from "../App.js";
import "../styles/PostReaction.css";

function CommentMaker(props) {
  const { postId } = props;
  const { comments, setComments } = useContext(FeedContext);
  const defaultComment = {
    id: postId,
    comment: "",
  };
  const [comment, setComment] = useState(defaultComment);

  function onSubmitComment(evt) {
    evt.preventDefault();
    setComments([...comments, comment]);
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
          style={{ width: "150%" }}
        />
      </form>
    </div>
  );
}

export default CommentMaker;
