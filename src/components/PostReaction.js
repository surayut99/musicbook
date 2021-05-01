import "../styles/PostReaction.css";
import Comment from "../components/Comment";
import CommentMaker from "../components/CommentMaker";
import { useContext } from "react";
import { FeedContext } from "../App.js";
import { PostContext } from "./Post.js";

function PostReaction() {
  // variables
  const { detail, comments } = useContext(PostContext);
  const { posts, setPosts } = useContext(FeedContext);

  // functions
  function onClickLike() {
    setPosts(
      posts.map((post) => {
        if (post.id !== detail.id) return post;
        return {
          ...post,
          like_counts: post.like_counts + 1,
        };
      })
    );
  }

  // elements
  const Comments = comments.map((comment, index) => {
    return <Comment key={index} comment={comment.comment} />;
  });

  return (
    <div className="px-3">
      <div className="post-reaction">
        <div>
          <button className="btn btn-primary" onClick={onClickLike}>
            Like: <span className="font-weight-bold">{detail.like_counts}</span>
          </button>
        </div>

        <div>
          <button className="btn btn-secondary">
            Comment: <span className="font-weight-bold">{comments.length}</span>
          </button>
        </div>

        <div>
          <CommentMaker postId={detail.id}></CommentMaker>
        </div>
      </div>
      <div className="my-3">{Comments}</div>
    </div>
  );
}

export default PostReaction;
