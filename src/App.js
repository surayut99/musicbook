import "./styles/App.css";
import "./styles/Post.css";
import "./styles/PostReaction.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AppHeader from "./components/AppHeader";
import Feed from "./components/Feed";
import { Route } from "react-router-dom";
import Login from "./components/auth/Login.js";

function App() {
  return (
    <div>
      <AppHeader />
      <div>
        <div className="content-bg"></div>
        <div className="content-layout">
          <Route exact path="/" component={Feed} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </div>
  );
}

export default App;
