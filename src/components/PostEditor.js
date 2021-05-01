import { useContext, useEffect, useState } from "react";
import { FeedContext } from "../App.js";
import { PostContext } from "./Post.js";

function PostEditor(props) {
  // variables
  const { onCloseEditForm } = props;
  const { detail } = useContext(PostContext);
  const { posts, setPosts } = useContext(FeedContext);
  const [post, setPost] = useState(detail);

  // functions
  function onPostValueChange(evt) {
    const { name, value } = evt.target;
    setPost({
      ...post,
      [name]: value,
    });
  }

  function onSubmitEdit(evt) {
    evt.preventDefault();
    setPosts(
      posts.map((p) => {
        if (p.id !== post.id) return p;
        return {
          ...post,
          link: post.link.replace("watch?v=", "embed/"),
        };
      })
    );
    onCloseEditForm();
  }

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  });

  return (
    <div>
      <div className="bg-post-maker" onClick={onCloseEditForm}></div>
      <div className="post-maker">
        <h1>Edit Your Post</h1>
        <form onSubmit={onSubmitEdit}>
          <div className="d-flex">
            <div className="w-50 mr-3">
              <label>Song: </label>
              <input
                name="song"
                value={post.song}
                onChange={onPostValueChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="w-50">
              <label>Artist: </label>
              <input
                name="artist"
                value={post.artist}
                onChange={onPostValueChange}
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="mb-3">
            <label>Embed Link: </label>
            <input
              name="link"
              value={post.link}
              onChange={onPostValueChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label>Caption: </label>
            <textarea
              rows="3"
              name="caption"
              value={post.caption}
              onChange={onPostValueChange}
              className="caption-box form-control"
            />
          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="button"
              onClick={onCloseEditForm}
              className="btn btn-danger"
            >
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostEditor;
