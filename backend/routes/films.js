const Router = require('@koa/router');
const FilmApi = require('../src/filmApi');
const FilmJSON = require('../src/filmJSON');
const { default: Axios } = require('axios');
const router = new Router();

router.get('/films', async (ctx) => {
    if (await ctx.cashed(30000)) return;
    const movies = await new FilmJSON().returnAllMovies();
    const enrichedMovies = await new FilmApi().getFilmData(movies)
    ctx.body = JSON.stringify(enrichedMovies);
});

router.get('/films/:genre', async (ctx) => {
    if (await ctx.cashed(30000)) return;
    const movies = await new FilmJSON().returnOneGenreMovies(ctx.params);
    const enrichedMovies = await new FilmApi().getFilmData(movies);
    ctx.body = JSON.stringify(enrichedMovies);
})

router.get('/genres', async (ctx) => {
    if (await ctx.cashed(30000)) return;
    const genres = await new FilmJSON().returnGenreList()
    ctx.body = JSON.stringify(genres);
})

module.exports = router;