import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Intro from "./components/Intro";
import StarWars from "./components/starWars/StarWars";

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Intro} />
        <Route exact path='/star-wars' component={StarWars} />
        {/* <Route exact path='/weather-app' component={WeatherApp} />
        <Route exact path='/coming-soon' component={ComingSoon} /> */}
      </Router>
    </div>
  );
}

export default App;
