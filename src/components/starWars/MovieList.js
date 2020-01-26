import React, { Component } from "react";
import MovieChars from "./MovieChars";
import "./css/MovieList.css";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      showComponent: false
    };
  }

  handleClick = () => {
    this.setState({
      showComponent: true
    });
  };

  closeData = () => {
    this.setState({
      showComponent: false
    });
  };

  show = () => {
    if (this.state.showComponent) {
      return (
        <div className='popup'>
          <button className='close-button' onClick={this.closeData}>
            Close
          </button>
          <MovieChars movie={this.props} />
          <br />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div onClick={this.handleClick} className='movie-card'>
          <div className='movie-title'>{this.props.title} </div>
          <br />
          <div className='movie-date'>{this.props.release_date}</div>
        </div>
        {/* must move this.show() outside of movie-card div or else close button won't work*/}
        {this.show()}
      </div>
    );
  }
}

export default MovieList;
