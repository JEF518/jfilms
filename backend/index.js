'use strict';

const Koa = require('koa');
const koaCash = require('koa-cash');
const cors = require('@koa/cors');
const router = require('./routes');
const LRU = require('lru-cache');

const app = new Koa();
const port = process.env.PORT || 3001;

var options = {
    origin: '*'
};
const cache  = new LRU({
    maxAge: 30000
})
app.use(koaCash({
    get (key, maxAge){
        console.log("doing something cashy....");
        return cache.get(key);
    },
    set (key, value){
        cache.set(key,value)
    }
}));

app.use(cors(options));


app.use(router.routes());
console.log(port);
app.listen(port);