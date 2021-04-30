import "../styles/PostReaction.css";
import Comment from "../components/Comment";
import CommentMaker from "../components/CommentMaker";

function PostReaction(props) {
  // variables
  const { onClickComment, onClickLike, post_id, like, comment } = props;

  // elements
  const Comments = comment.map((comment, index) => {
    return <Comment key={index} comment={comment.comment} />;
  });

  return (
    <div className="px-3">
      <div className="post-reaction">
        <div className="input-group">
          <button
            className="btn btn-primary"
            onClick={() => onClickLike(post_id)}
          >
            Like: <span className="font-weight-bold">{like}</span>
          </button>
        </div>

        <div className="input-group">
          <button className="btn btn-secondary">
            Comment: <span className="font-weight-bold">{comment.length}</span>
          </button>
        </div>
      </div>
      <div className="my-3">{Comments}</div>

      <div className="">
        <CommentMaker
          onClickComment={onClickComment}
          id={post_id}
        ></CommentMaker>
      </div>
    </div>
  );
}

export default PostReaction;
