import './styles/App.css'
import AppHeader from './components/AppHeader'
import Post from './components/Posts'
import postDetails from './data/PostDetails'

function App() {
  const Posts = postDetails.map((detail, index) => {
    return <Post key={index} detail={detail}/>
  })

  return (
    <div>
      <AppHeader />
      <div className="posts-layout">{Posts}</div>
    </div>
  );
}

export default App;
