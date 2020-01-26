import React from "react";
import MovieContainer from "./MovieContainer";
import "./css/StarWars.css";

const StarWars = () => {
  return (
    <div className='body'>
      <h1 className='center-title'>Star Wars Movies</h1>
      <MovieContainer />
    </div>
  );
};

export default StarWars;
