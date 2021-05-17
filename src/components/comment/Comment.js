import moment from "moment";

function Comment(props) {
  const { comment } = props;

  return (
    <div name="comment" className="d-flex align-items-center space-right">
      <span className="bg-warning py-2 comment shadow-sm font">
        {comment.content}
      </span>
      <span style={{ color: "gray" }}>
        {moment(comment.created_at).fromNow()}
      </span>
    </div>
  );
}

export default Comment;
