import { useState } from "react";
import "../styles/Post.css";
import "../styles/PostMaker.css";

function PostMaker(props) {
  const initPost = {
    song: "",
    artist: "",
    caption: "",
    link: "",
    like_counts: 0,
  };

  const { onClickPost, onClickDiscardPost } = props;
  const [post, setPost] = useState(initPost);

  function onPostValueChange(evt) {
    const { name, value } = evt.target;
    setPost({
      ...post,
      [name]: value,
    });
  }

  async function onPostFormSubmit(evt) {
    evt.preventDefault();
    const modifiedPost = {
      ...post,
      link: post.link.replace("watch?v=", "embed/"),
      id: Date.now(),
    };
    onClickPost(modifiedPost);
  }

  return (
    <div className="bg-post-maker" onClick={onClickDiscardPost}>
      <div className="post-maker">
        <h1>Create Your Post</h1>
        <form onSubmit={onPostFormSubmit}>
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
              name="caption"
              value={post.caption}
              onChange={onPostValueChange}
              className="caption-box form-control"
            />
          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">
              Post
            </button>
            <button
              type="button"
              onClick={onClickDiscardPost}
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

export default PostMaker;
