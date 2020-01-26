import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./ProjectData";

const ProjectCards = () => (
  <div>
    {ProjectData.map((project, index) => (
      <ProjectCard project={project} key={index} />
    ))}
  </div>
);

export default ProjectCards;
