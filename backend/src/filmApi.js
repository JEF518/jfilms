const axios = require('axios');
require('dotenv').config();


class FilmApi {
    constructor() {

    }

    async getFilmData(filmList) {
        if (filmList.movies) {
            filmList = filmList.movies;
        }
        return await this.axiosFilmAPIMap(filmList, this.filmEnricher);
        this.axiosFilmAPIMap(filmList).then((value) => {
            return value;
        })
    };
    async filmEnricher(film){
        return new Promise(function(resolve, reject){
            const data = axios.get("http://www.omdbapi.com/?apikey=" + process.env.MOVIE_DATA_KEY + "&t=" + film.title + "&y=" + film.year)
            .then(response => {
                return response.data;
                })
            .catch(error => {
                console.log(error);
            },
            );
            resolve(data);
        }).then((data)=>{
            return data;
        });
    };

    async axiosFilmAPIMap(filmList, filmEnricher) {
        const responsePromise = new Promise(function(resolve, reject){
            //resolve the promise
            const enrichedFilms = Promise.all(filmList.map(filmEnricher));
            enrichedFilms.then( films => {
                resolve(films);
            }
            )
            //if something goes wrong reject
        });

       return responsePromise.then((films)=>{
            return films;
        });
    };


}
module.exports = FilmApi;