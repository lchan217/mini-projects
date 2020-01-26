import React from "react";
import ProjectCards from "./projects/ProjectCards";

const Intro = () => {
  return (
    <div>
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
    </div>
  );
};

export default Intro;
