import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import "./ProjectCard.css";

const ProjectCard = ({
  project: { image, title, text, pagelink, codelink, footer }
}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <h1> {image} </h1>
        {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text> {text}</Card.Text>
          <ButtonGroup>
            <Button variant='primary'>
              {" "}
              <a href={`http://localhost:3000/${pagelink}`}>See Page</a>
            </Button>
            <Button variant='primary'>
              {" "}
              <a href={`${codelink}`} target='_blank' rel='noopener noreferrer'>
                Go To Code
              </a>
            </Button>
          </ButtonGroup>
        </Card.Body>
        <Card.Footer>{footer}</Card.Footer>
      </Card>
    </div>
  );
};

export default ProjectCard;
