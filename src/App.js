import React from "react";
import "./App.css";
import ProjectCards from "./components/projects/ProjectCards";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className='App'>
      <Container>
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
          . Any feedback is welcomed. Enjoy!
        </p>
        <ProjectCards />
      </Container>
    </div>
  );
}

export default App;
