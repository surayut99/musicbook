import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader";
import Post from "./components/Posts";
import PostMaker from "./components/PostMaker";
import postDetails from "./data/PostDetails";
import React, { useState } from "react";

function App() {
  // variables
  const [posts, setPosts] = useState(postDetails);
  const [postMaker, setPostMaker] = useState(null);

  // elements
  const Posts = posts.map((detail) => {
    return <Post key={detail.id} detail={detail} onClickLike={onClickLike} />;
  });

  // functions
  function onClickCreatePost() {
    setPostMaker(
      <PostMaker
        onClickDiscardPost={onClickDiscardPost}
        onClickPost={onClickPost}
      />
    );
  }

  function onClickPost(newPost) {
    setPosts([newPost, ...posts]);
    setPostMaker(null);
  }

  function onClickDiscardPost() {
    setPostMaker(null);
  }

  function onClickLike(post_id) {
    const index = posts.map((e) => e.id).indexOf(post_id);
    const modifiedPost = [...posts];
    modifiedPost[index].like_counts++;
    setPosts(modifiedPost);
  }

  return (
    <div>
      <AppHeader onClickCreatePost={onClickCreatePost} />
      <div className="posts-layout">
        {postMaker}
        {Posts}
      </div>
    </div>
  );
}

export default App;
