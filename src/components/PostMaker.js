import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../services/actions/PostAction.js";

function PostMaker(props) {
  // variables
  const initPost = {
    song: "",
    artist: "",
    caption: "",
    link: "",
    like_counts: 0,
  };
  const { onFormClose } = props;
  const [post, setPost] = useState(initPost);
  const dispatch = useDispatch();

  // functions
  function onValueChange(evt) {
    const { name, value } = evt.target;
    setPost({
      ...post,
      [name]: value,
    });
  }

  function onPostFormSubmit(evt) {
    evt.preventDefault();
    dispatch(
      addPost({
        ...post,
        id: Date.now(),
        link: post.link.replace("watch?v=", "embed/"),
      })
    );
    onFormClose();
  }

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  });

  return (
    <div>
      <div className="bg-post-maker" onClick={onFormClose}></div>
      <div className="post-maker overflow-hidden pt-3">
        <h1 className="text-center">Create Your Post</h1>
        <form onSubmit={onPostFormSubmit}>
          <div className="px-3">
            <div className="d-flex">
              <div className="w-50 mr-3">
                <label>Song: </label>
                <input
                  name="song"
                  value={post.song}
                  onChange={onValueChange}
                  type="text"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div className="w-50">
                <label>Artist: </label>
                <input
                  name="artist"
                  value={post.artist}
                  onChange={onValueChange}
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
                onChange={onValueChange}
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
                onChange={onValueChange}
                className="caption-box form-control"
              />
            </div>
          </div>

          <div style={{ backgroundColor: "rgb(200, 200, 200)" }}>
            <div className="py-3 d-flex justify-content-center space-right">
              <button type="submit" className="btn btn-primary">
                Post
              </button>
              <div style={{ width: "1px", backgroundColor: "gray" }}></div>
              <button
                type="button"
                onClick={onFormClose}
                className="btn btn-danger"
              >
                Discard
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostMaker;
