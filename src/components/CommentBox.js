import '../styles/PostReaction.css'

function CommentBox(props) {
  const {comment} = props

  return (
      <div className="comment">
        <p>
          {comment}
        </p>
      </div>
  ) 
}

export default CommentBox