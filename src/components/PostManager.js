import { useContext, useState } from "react";
import AlertForm from "./alert/AlertForm.js";
import { PostContext } from "./Post.js";
import PostEditor from "./PostEditor";

function PostManager() {
  // variables
  const { onPostDelete, detail } = useContext(PostContext);

  // functions
  function createEditForm() {
    setEditForm(<PostEditor onFormClose={() => setEditForm(null)} />);
  }

  function createDeleteForm() {
    setDeleteForm(
      <AlertForm
        description={"This post will be deleted permanently."}
        onFormClose={() => setDeleteForm(null)}
        onFormConfirm={() => onPostDelete(detail.id)}
      />
    );
  }

  // elements
  const [editForm, setEditForm] = useState(null);
  const [deleteForm, setDeleteForm] = useState(null);

  return (
    <div>
      {editForm}
      {deleteForm}
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
          <div class="dropdown-menu dropdown-menu-right">
            <div class="dropdown-item" onClick={createEditForm}>
              Edit
            </div>
            <div class="dropdown-divider"></div>
            <div onClick={createDeleteForm} class="dropdown-item">
              Delete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostManager;
