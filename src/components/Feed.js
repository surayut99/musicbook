import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Post from "./post/Post";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../services/actions/thunkActions/PostActions.js";
import { fetchComments } from "../services/actions/thunkActions/CommentActions.js";

function Feed() {
  // variables
  const posts = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comment);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchComments());
  }, []);

  return (
    <div>
      {posts
        ? posts.map((post) => {
            const postComments = comments.filter(
              (comment) => comment.post_id === post._id
            );
            return (
              <Post key={post._id} detail={post} comments={postComments} />
            );
          })
        : null}
    </div>
  );
}

export default Feed;
