import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ project: { image, title, text, link, footer } }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <h1> {image} </h1>
        {/* <Card.Img variant='top' src='holder.js/100px180' /> */}
        <Card.Body>
          <Card.Title> {title}</Card.Title>
          <Card.Text> {text}</Card.Text>
          <Button variant='primary'> {link}</Button>
        </Card.Body>
        <Card.Footer>{footer}</Card.Footer>
      </Card>
    </div>
  );
};

export default ProjectCard;
