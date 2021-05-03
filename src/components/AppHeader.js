import { useState } from "react";
import PostMaker from "./PostMaker";
import NavRouter from "../routes/NavRouter";

function AppHeader() {
  const [isClickCreatePost, setIsClickCreatePost] = useState(false);
  let postMaker = null;

  if (isClickCreatePost) {
    postMaker = <PostMaker onFormClose={() => setIsClickCreatePost(false)} />;
  }

  return (
    <div>
      {postMaker}

      <div className="app-header d-flex justify-content-between px-3">
        <div className="d-flex align-items-center space-right">
          <h1>musicbook</h1>
          <a
            onClick={() => setIsClickCreatePost(true)}
            className="btn btn-primary"
          >
            Create Post
          </a>
        </div>
        <div className="d-flex align-items-center space-right">
          {/* <a href="/login" className="btn btn-success">
            Login
          </a> */}
        </div>
      </div>
      <NavRouter />
    </div>
  );
}

export default AppHeader;
