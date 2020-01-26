import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import ProjectCards from "./components/projects/ProjectCards";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <div id='wrapper'>
          <Route exact path='/' component={Intro} />
        </div>
      </Router>
    </div>
  );
}

export default App;
