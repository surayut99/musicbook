import { useContext, useState } from "react";
import { FeedContext } from "../App.js";
import { PostContext } from "./Post.js";
import PostEditor from "./PostEditor";

function PostManager() {
  // variables
  const { detail } = useContext(PostContext);
  const { posts, setPosts } = useContext(FeedContext);

  // functions
  function createEditForm() {
    setEditForm(
      <PostEditor onCloseEditForm={() => setEditForm(null)}></PostEditor>
    );
  }

  function onClickDelete() {
    setPosts(posts.filter((post) => post.id !== detail.id));
  }

  // elements
  const [editForm, setEditForm] = useState(null);

  return (
    <div>
      {editForm}
      <div className="drop-down float-right">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-info dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </button>
          <div class="dropdown-menu">
            <div class="dropdown-item" onClick={createEditForm}>
              Edit
            </div>
            <div class="dropdown-divider"></div>
            <div onClick={onClickDelete} class="dropdown-item">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostManager;
