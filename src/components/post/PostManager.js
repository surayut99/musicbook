import { useContext, useState } from "react";
import AlertForm from "../alert/AlertForm.js";
import { PostContext } from "./Post.js";
import PostEditor from "./PostEditor";

function PostManager() {
  // variables
  const { onPostDelete, detail } = useContext(PostContext);

  // functions
  function createEditForm() {
    setEditForm(true);
  }

  function createDeleteForm() {
    setDeleteForm(true);
  }

  // elements
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);

  return (
    <div>
      <div className="drop-down">
        <div className="btn-group position-static">
          <button
            type="button"
            className="btn btn-info dropdown-toggle position-static"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </button>
          <div className="dropdown-menu dropdown-menu-right shadow">
            <div className="dropdown-item" onClick={createEditForm}>
              Edit
            </div>
            <div className="dropdown-divider"></div>
            <div
              style={{ color: "red", fontWeight: "bold" }}
              onClick={createDeleteForm}
              className="dropdown-item"
            >
              Delete
            </div>
          </div>
        </div>
      </div>
      <div className="content-float">
        {editForm ? (
          <PostEditor onFormClose={() => setEditForm(false)} />
        ) : null}

        {deleteForm ? (
          <AlertForm
            description={"This post will be deleted permanently."}
            onFormClose={() => setDeleteForm(false)}
            onFormConfirm={() => onPostDelete(detail._id)}
          />
        ) : null}
      </div>
    </div>
  );
}

export default PostManager;
