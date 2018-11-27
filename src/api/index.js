const Router = require('koa-router');

const api = new Router();
const books = require('./books');

api.use('/books', books.routes());

// api.get('/books', (ctx, next) => {
//     ctx.body = `GET ${ctx.request.path}`;
// });

module.exports = api;
