import React, { Component } from "react";
import Head from 'next/head';
import "./App.css";
import '../src/styles/site.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import FilmDetail from "./Component/FilmDetail/index";
import FilmList from "./Component/FilmList/index";
import GenreMenu from "./Component/GenreMenu/index";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="page">
            <Head></Head>
            <Switch>
              <Route path='/home'>
              </Route>
              <Route path='/genre/:genre' component={FilmList}>
              </Route>
              <Route path='/genres' component={GenreMenu}>
              </Route>
              <Route path='/film/:title/year/:year' component={FilmDetail}>
              </Route>
            </Switch>
          </div>
    </Router>
    );
  }
}

export default App;
