import "./styles/App.css";
import "./styles/Post.css";
import "./styles/PostMaker.css";
import "./styles/PostReaction.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppHeader from "./components/AppHeader";
import Feed from "./components/Feed";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AppHeader />
      <Route exact path="/" component={Feed} />
    </div>
  );
}

export default App;
