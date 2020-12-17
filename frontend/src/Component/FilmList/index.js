import React, { useState, useEffect, useContext } from "react";
import FilmCard from "../FilmCard";
import PageTitle from "../PageTitle/index";
const axios = require("axios");
// export default class FilmList extends Component {
export default function FilmList(props) {
  const [state, setState] = useState({
    films: []
  })

    // console.log(routerProps);
    // super(props);
    // this.state = {
    //   films: [],
    // };
    // const [state, dispatch] = useContext(Context);
    // this.state = [state];
    // this.dispatch = [dispatch]
   // this.loadFilms = this.loadFilms.bind(this);
  // }
  useEffect(() => {

    if (state.films = []) {
        loadFilms();
    }
  }, []);
 function componentWillMount() {
    this.loadFilms();
  }

 async function  loadFilms() {
    console.log(props.match.params.genre);
    const promise = await axios.get("http://localhost:3001/films/" + props.match.params.genre);
    const status = promise.status;
    console.log(status);
    if (status === 200) {
      const data = promise.data;
      // dispatch({ films: data });
      setState({ films: data });
    }
  }

    return (<div className="filmList" id={props.match.params.genre}>
      <PageTitle titleText={`${props.match.params.genre} Films`}></PageTitle>
      {state.films.map(function (film) {
        console.log(film);
        return <FilmCard title={film.Title} poster={film.Poster} year={film.Year} rated={film.Rated} runtime={film.Runtime} data={film}/>;
      })}
    </div>);
}
// }
// }

// export default FilmList;