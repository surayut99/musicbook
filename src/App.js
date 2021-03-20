import './styles/App.css';
import AppHeader from './components/AppHeader'
import Post from './components/Posts'

function App() {
  const postDetails = [
    {
      song: "Amnesia",
      artist: "5 seconds of summer",
      caption: "I wish that I could wake up with amnesia\nAnd forget about the stupid little things\nLike the way it felt to fall asleep next to you\nAnd the memories I never can escape\n",
      link: "https://www.youtube.com/embed/DCCJCILiX3o"
    },
    {
      song: "Put a Little Love on Me",
      artist: "Niall Horan",
      caption: "We fight, we get high holding on to love\nWe came down 'cause there was nothing holding us\nIs it wrong that I still wonder where you are?\nIs it wrong that I still don't know my heart?\n",
      link: "https://www.youtube.com/embed/bO3S8CKafbE"
    }
  ]

  const Posts = postDetails.map((detail, index) => {
    return <Post key={index} detail={detail}/>
  })

  return (
    <div>
      <AppHeader/>
      <div className="posts-layout">
        {Posts}
      </div>
      
    </div>
  );
}

export default App;
