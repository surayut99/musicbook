import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppHeader from "./components/AppHeader";
import Post from "./components/Post";
import PostMaker from "./components/PostMaker";
import postDetails from "./data/PostDetails";
import postComments from "./data/PostComments";
import React, { useState } from "react";

const FeedContext = React.createContext();

function App() {
  // variables

  const [posts, setPosts] = useState(postDetails);
  const [comments, setComments] = useState(postComments);
  const [postMaker, setPostMaker] = useState(null);

  // elements
  const Posts = posts.map((post) => {
    const postComments = comments.filter((comment) => comment.id === post.id);
    return <Post key={post.id} detail={post} comments={postComments} />;
  });

  // functions
  function onClickCreatePost() {
    setPostMaker(
      <PostMaker
        onClickPost={onClickPost}
        onClickDiscardPost={onClickDiscardPost}
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

  return (
    <FeedContext.Provider
      value={{
        posts,
        setPosts,
        comments,
        setComments,
      }}
    >
      <div>
        <AppHeader onClickCreatePost={onClickCreatePost} />
        <div className="posts-layout">
          {postMaker}
          {Posts}
        </div>
      </div>
    </FeedContext.Provider>
  );
}
export { FeedContext };
export default App;
