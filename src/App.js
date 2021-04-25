import './styles/App.css'
import AppHeader from './components/AppHeader'
import Post from './components/Posts'
import PostMaker from './components/PostMaker'
import postDetails from './data/PostDetails'
import React, { useState } from "react";

function App() {
  const [post, setPost] = useState(postDetails)
  const [postMaker, setPostMaker] = useState(null)
  const Posts = post.map((detail) => {
    return <Post detail={detail} onClickLike={onClickLike}/>
  })

  function onClickPost(song, artist, caption, link) {
    setPost([{ 
      id: (post[post.length - 1].id) + 1,
      song: song,
      artist: artist,
      caption: caption,
      link: link.replace("watch?v=", "embed/"),
      like_counts: 0
    }, ...post])

    setPostMaker(null)
  }

  function onClickLike(post_id) {
    const index = post.map(e => e.id).indexOf(post_id)
    const newPost = [...post]
    newPost[index].like_counts++
    setPost(newPost)
  }

  function onClickDiscardPost() {
    setPostMaker(null)
  }

  function onClickCreatePost() {
    setPostMaker(<PostMaker onClickDiscardPost={onClickDiscardPost} onClickPost={onClickPost} />)
  }


  return (
    <div>
      <AppHeader onClickCreatePost={onClickCreatePost} />
      <div className="posts-layout">
        {postMaker}
        {/* <PostMaker onClickPost={onClickPost} /> */}
        {Posts}
      </div>
    </div>
  );
}

export default App;
