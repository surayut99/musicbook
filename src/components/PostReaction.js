import { useContext } from "react";
import Comment from "../components/Comment";
import CommentMaker from "../components/CommentMaker";
import { PostContext } from "./Post.js";

function PostReaction(props) {
  const { onPostLike, detail, comments } = useContext(PostContext);

  const Comments = comments.map((comment, index) => {
    return <Comment key={index} comment={comment.comment} />;
  });

  return (
    <div className="p-3">
      <div className="post-reaction">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              onPostLike(detail.id);
            }}
          >
            Like: <span className="font-weight-bold">{detail.like_counts}</span>
          </button>
        </div>

        <div>
          <button className="btn btn-secondary">
            Comment: <span className="font-weight-bold">{comments.length}</span>
          </button>
        </div>

        <div>
          <CommentMaker />
        </div>
      </div>
      <div className="mt-3">{Comments}</div>
    </div>
  );
}

export default PostReaction;
