import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Post from "./Post";
import postDetails from "../data/PostDetails";
import postComments from "../data/PostComments";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, refreshPost } from "../services/actions/PostAction";
import { addComment } from "../services/actions/CommentActions.js";

function Feed() {
  // variables
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comment);

  // const [posts, setPosts] = useState(postDetails);
  // const [comments, setComments] = useState(postComments);

  // elements
  const Posts = posts.map((post) => {
    const postComments = comments.filter((comment) => comment.id === post.id);
    return <Post key={post.id} detail={post} comments={postComments} />;
  });

  useEffect(() => {
    dispatch(refreshPost(postDetails));
    dispatch(addComment(postComments));
  }, []);

  return (
    <div>
      <div className="bg-posts-layout"></div>
      <div className="posts-layout py-5">{Posts}</div>
    </div>
  );
}

export default Feed;
