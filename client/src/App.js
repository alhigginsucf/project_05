import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";


function App() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <a href="/">Main Page</a>
          <a href="/createpost">Create Post</a>
        </div>
      </div>

      <Router>
        <Route path="/" exact render={(props) => <MainPage />}/>
        <Route path="/createpost" render={(props) => <CreatePost />} />
      </Router>
    </>
  );
}

export default App;
