import React, { useState, useEffect, useContext } from "react";

class FilmDetail extends React.Component {

  render() {
    const filmData = this.props.location.state.filmData;
      console.log(filmData);
        return <div className="film-detail">
    <h1>{filmData.Title}</h1>
    <img className="blur-card" src={filmData.Poster} alt={`Poster for ${filmData.Title}`}/>
    <p>
    Year: {filmData.Year}<br></br>
    Rated: {filmData.Rated}<br></br>
    Runtime: {filmData.Runtime}<br></br>
    Director: {filmData.Director}<br></br>
    Genre: {filmData.Genre}<br></br>
    Cast: {filmData.Actors}<br></br>
    Plot: {filmData.Plot}<br></br>
    IMDB: {filmData.imdbRating}<br></br>
    Metascore: {filmData.Metascore}<br></br>
    Awards: {filmData.Awards}<br></br>
    </p>
        </div>
  }
}

export default FilmDetail