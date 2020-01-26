import React from "react";
import "./App.css";
import ProjectCards from "./components/projects/ProjectCards";

function App() {
  return (
    <div className='App'>
      <h1>Mini Projects</h1>
      <p>
        This is a compilation of mini-projects from take-home tech interview
        challenges and {""}
        <a
          href='https://www.frontendmentor.io/challenges'
          rel='noopener noreferrer'
          target='_blank'
        >
          frontend mentor challenges
        </a>
        . Enjoy!
      </p>
      <ProjectCards />
    </div>
  );
}

export default App;
