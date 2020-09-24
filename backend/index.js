'use strict';

const Koa = require('koa');

const router = require('./routes');

const app = new Koa();
const port = process.env.PORT || 80;

app.use(router.routes());
console.log(port);
app.listen(port);