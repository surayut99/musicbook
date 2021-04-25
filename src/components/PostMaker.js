import '../styles/Post.css'
import '../styles/PostMaker.css'
import React, { useState } from "react";

function PostMaker(props) {
  const {onClickPost, onClickDiscardPost} = props
  const [song, setSong] = useState(null)
  const [artist, setArtist] = useState(null)
  const [link, setLink] = useState(null)
  const [caption, setCaption] = useState(null)

  return (
    <div className="bg-post-maker">
      <div className="post-maker">
        <h1>Create Your Post</h1>
        <form>
          <div className="row">
            <div className="w-50">
              <label>Song: </label>
              <input onChange={e => setSong(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="w-50">
              <label>Artist: </label>
              <input onChange={e => setArtist(e.target.value)} type="text" className="form-control"/>
            </div>
          </div>
          <div className="mb-3">
              <label>Embed Link: </label>
              <input onChange={e => setLink(e.target.value)} type="text" className="form-control"/>
          </div>
          <div className="mb-3">
              <label>Caption: </label>
              <textarea onChange={e => setCaption(e.target.value)} className="caption-box form-control"/>
          </div>
        </form>

        <hr/>

        <div className="d-flex justify-content-between">
          <button onClick={() => onClickPost(song, artist, caption, link)} className="btn btn-primary">Post</button>
          <button onClick={onClickDiscardPost} className="btn btn-danger">Discard</button>
        </div>
      </div>
    </div>
  )
}

export default PostMaker