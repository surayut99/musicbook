import "../styles/Post.css";
import PostReaction from "./PostReaction";
import PostManager from "./PostManager";
import React from "react";

const PostContext = React.createContext();

function Post(props) {
  const { detail, comments } = props;

  return (
    <PostContext.Provider value={{ detail, comments }}>
      <div className="post">
        <div className="px-3">
          <PostManager></PostManager>
          <div style={{ lineHeight: "200" }}>
            <h3>{detail.song}</h3>
            <h6>{detail.artist}</h6>
          </div>

          <div className="content">
            <p className="caption mt-3">{detail.caption}</p>
          </div>
        </div>

        <iframe
          title={detail.song}
          src={detail.link}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <hr />

        <PostReaction />
      </div>
    </PostContext.Provider>
  );
}

export { PostContext };
export default Post;
