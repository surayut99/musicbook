import "../styles/PostReaction.css";

function Comment(props) {
  const { comment } = props;

  return (
    <div className="comment">
      <span>{comment}</span>
    </div>
  );
}

export default Comment;
