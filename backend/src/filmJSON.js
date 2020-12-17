var fs = require('fs');
const dataPath = "./data/real-data/movies.json";
class FilmJSON {
    constructor() {

    }

    async returnAllMovies() {
    return new Promise(function(resolve, reject) {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) {
                throw err;
            }
            resolve(data)})}).then((data) => {
                return data
            })
    } ;

    async returnOneGenreMovies(genre){
        console.log('getting...', genre, ' films');
        return new Promise(function(resolve, reject) {
            fs.readFile(dataPath, "utf8", (err, data) => {
                if (err) {
                    throw err;
                }
                resolve(data);
            })}).then((data) => {
                    const moviesList = [];
                    const jsonData = JSON.parse(data);
                    jsonData.movies.forEach((movie) => {
                        if (movie.category === genre.genre) {
                            moviesList.push(
                                movie
                            );
                        }
                    });
                    return moviesList
                })
    }

    async returnGenreList(genre){
        return new Promise(function(resolve, reject) {
            fs.readFile(dataPath, "utf8", (err, data) => {
                if (err) {
                    throw err;
                }
                resolve(data);
            })}).then((data) => {
                    const genreObj = [];
                    const jsonData = JSON.parse(data);
                    for (let i = 0; i < jsonData.movies.length; i++) {
                        genreObj.push('{"genre": "' + jsonData.movies[i].category + '"}');
                    };
                    var result = Array.from(new Set(genreObj.map(obj => JSON.stringify(obj)))).map(item => JSON.parse(item));
                    return JSON.parse('{"genres": [' + result + ']}');
                })
    }
}
module.exports = FilmJSON;