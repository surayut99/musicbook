import '../styles/Post.css'
import PostReaction from '../components/PostReaction'
import postComments from '../data/PostComments'

function Post(props) {
  const {detail} = props;
  const comments = postComments.filter((post) => {
    return post.id == detail.id
  })

  return (
    <div className="post">
      <h3>Song: {detail.song}</h3>
      <h6>Artist: {detail.artist}</h6>
      <p className="text-secondary">Genre: </p>

      <div className="content">
        <p className="caption">
          {detail.caption}
        </p>
        <iframe title={detail.song} width="500px" height="300px" src={detail.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <hr/>

      <PostReaction like={detail.like_counts} comment={comments}/>

    </div>
  )
}

export default Post;