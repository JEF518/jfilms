import React from 'react';
import {Link} from 'react-router-dom';

const FilmCard = ({ title, poster, year, rated, runtime, data }) => (
  <Link to={{
  pathname: `/film/${title}/year/${year}`,
  state: {
    filmData: data
  }
}} className="film">
  <div className="film blur-card">
    <h2>{title}</h2>
    <img src={poster} />
    <p>{year}<br></br>{rated}<br></br>{runtime}<br></br></p>
  </div>
  </Link>);

export default FilmCard;