import '../styles/PostReaction.css'
import CommentBox from '../components/CommentBox'

function PostReaction(props) {
  const {onClickLike, post_id, like} = props
  const CommentBoxes = props.comment.map((comment, index) => {
    return <CommentBox key={index} comment={comment.comment}/>
  })

  return (
    <div className="px-3">
        <div className="post-reaction">
          <div className="input-group">
            <div className="input-group-text react-value">{like}</div>
            <button className="btn btn-primary" onClick={e => onClickLike(post_id)} >Like</button>
          </div>

          <div className="input-group">
            <div className="input-group-text react-value">{props.comment.length}</div>
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