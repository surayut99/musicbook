function Comment(props) {
  const { comment } = props;

  return (
    <div
      className="comment bg-warning h6 my-2 p-2"
      style={{ width: "fit-content" }}
    >
      <span>{comment}</span>
    </div>
  );
}

export default Comment;
