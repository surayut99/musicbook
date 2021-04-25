import '../styles/Post.css'
import PostReaction from '../components/PostReaction'
import postComments from '../data/PostComments'

function Post(props) {
  const {detail, onClickLike} = props;
  const comments = postComments.filter((post) => {
    return post.id === detail.id
  })


  return (
    <div className="post">
      <div className="px-3" style={{lineHeight: "200"}}>
        <h3>{detail.song}</h3>
        <h6>{detail.artist}</h6>  
      </div>
      {/* <p className="text-secondary">Genre: </p> */}

      <div className="content px-3">
        <p className="caption mt-3">
          {detail.caption}
        </p>
      </div>
      <iframe title={detail.song} src={detail.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <hr/>

      <PostReaction post_id={detail.id} like={detail.like_counts} comment={comments} onClickLike={onClickLike}/>
      
    </div>
  )
}

export default Post;