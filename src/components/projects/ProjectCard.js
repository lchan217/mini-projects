import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = () => {
  return (
    <div>
      PrjectCardComponent
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
  );
};

export default ProjectCard;
