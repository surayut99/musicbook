import "../styles/PostReaction.css";

function Comment(props) {
  const { comment } = props;

  return (
    <div
      className=" bg-warning h6 my-2 p-2 rounded"
      style={{ width: "fit-content" }}
    >
      <span>{comment}</span>
    </div>
  );
}

export default Comment;
