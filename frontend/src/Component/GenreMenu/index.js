import React, { Component } from "react";
const axios = require("axios");

export default class GenreMenu extends Component {
  constructor(props) {
    // console.log(routerProps);
    super(props);
    this.state = {
      genres: [],
    };
    this.loadGenres = this.loadGenres.bind(this);
  }

  componentWillMount() {
    this.loadGenres();
  }

  async loadGenres() {
    const promise = await axios.get("http://localhost:3001/genres");
    const status = promise.status;
    console.log(status);
    if (status === 200) {
      const data = promise.data;
      this.setState({ genres: data.genres });
    }
  }

  render() {
    return (<div className="genre-menu" >
      {this.state.genres.map(function (genre) {
        return <a href={`/genre/${genre.genre}`} className="genre-menu__genre-card blur-card" id={genre.genre}>
            <div className="genre-menu__genre-card--text">
            {genre.genre}
            </div>
            </a>
      })}
    </div>);
  }
}
