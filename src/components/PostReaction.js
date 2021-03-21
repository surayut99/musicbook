import '../styles/PostReaction.css'
import CommentBox from '../components/CommentBox'
import React, { useState } from "react";

function PostReaction(props) {
  const [like_count, setLike_count] = useState(props.like);
  const CommentBoxes = props.comment.map((comment, index) => {
    return <CommentBox key={index} comment={comment.comment}/>
  })

  function onClickLike() {
    setLike_count(like_count + 1)
  }

  return (
    <div>
        <div className="post-reaction">
          <div className="input-group">
            <div className="input-group-text react-value">{like_count}</div>
            <button className="btn btn-primary" onClick={onClickLike} >Like</button>
          </div>

          <div className="input-group">
            <div className="input-group-text react-value">12345</div>
            <button className="btn btn-secondary">Comment</button>
          </div>
        </div>
        <div className="my-3">
          {CommentBoxes}
        </div>

    </div>
  )
}

export default PostReaction