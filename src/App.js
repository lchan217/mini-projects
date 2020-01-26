import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Intro from "./components/Intro";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Intro} />
      </Router>
    </div>
  );
}

export default App;
