
const Router = require('@koa/router');

const films = require('./films');

const router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'Homepage';
});

router.use(films.routes());

module.exports = router;