import { useState } from "react";
import PostMaker from "./post/PostMaker";

function AppHeader() {
  const [isClickCreatePost, setIsClickCreatePost] = useState(false);

  return (
    <div>
      <div className="shadow app-header d-flex justify-content-between px-3">
        <div className="d-flex align-items-center space-right">
          <a href="/" className="navbar-brand text-dark">
            <h1>musicbook</h1>
          </a>
          <button
            onClick={() => setIsClickCreatePost(true)}
            className="btn btn-primary"
          >
            Create Post
          </button>
        </div>
        <div className="d-flex align-items-center space-right">
          <a href="/login" className="btn btn-success">
            Login
          </a>
        </div>
      </div>

      <div className="content-float">
        {isClickCreatePost ? (
          <PostMaker onFormClose={() => setIsClickCreatePost(false)} />
        ) : null}
      </div>
    </div>
  );
}

export default AppHeader;
