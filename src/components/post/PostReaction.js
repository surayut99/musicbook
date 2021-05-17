import { useContext } from "react";
import { PostContext } from "./Post.js";
import Comment from "../comment/Comment";
import CommentMaker from "../comment/CommentMaker";

function PostReaction() {
  const { onPostLike, detail, comments } = useContext(PostContext);

  return (
    <div className="p-3">
      <div className="post-reaction">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              onPostLike(detail._id);
            }}
          >
            Like: <span className="font-weight-bold">{detail.like_count}</span>
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
      <div
        className="px-1 my-3 py-2 border border-gray rounded comment-list"
        style={{ backgroundColor: "white" }}
      >
        {comments.length !== 0 ? (
          comments.map((comment, index) => {
            return <Comment key={index} comment={comment} />;
          })
        ) : (
          <div className="text-center">
            <h4>No comments here</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostReaction;
