import '../styles/Post.css'

function Post(props) {
  const {detail} = props;
  return (
    <div className="post">
      <h2>{detail.song}</h2>
      <h5>{detail.artist}</h5>

      <hr/>

      <div className="content">
        <p className="caption">
          {detail.caption}
        </p>
        <iframe title="Put a Little Love On Me" width="500px" height="300px" src={detail.link} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

    </div>
  )
}

export default Post;