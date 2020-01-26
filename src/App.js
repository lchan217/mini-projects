import React from "react";
import "./App.css";
import { Card, Button } from "react-bootstrap";

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
      <div>
        <Card style={{ width: "18rem" }}>
          <h1> Image: thumbnail of SPA </h1>
          {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
          <Card.Body>
            <Card.Title>Title: Star Wars API</Card.Title>
            <Card.Text>Text: Summary what app does</Card.Text>
            <Button variant='primary'>Link: Link to SPA</Button>
          </Card.Body>
          <Card.Footer>Footer: Languages- CSS and JS</Card.Footer>
        </Card>
      </div>
    </div>
  );
}

export default App;
