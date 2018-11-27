const Koa = require('koa');
const Router = require('koa-router');
const api = require('./api');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Home';
});

router.get('/about', (ctx, next) => {
    ctx.body = 'about what';
});

router.get('/about/:name', (ctx, next) => {
    const { name } = ctx.params;
    ctx.body = `${name}란 무엇일까`;
});

router.get('/post', (ctx, next) => {
    const { id } = ctx.request.query;
    if (id) {
        ctx.body = '포스트 #' + id;
    } else {
        ctx.body = 'default';
    }
});

app.use((ctx, next) => {
    console.log(1);
    next();
});

router.use('/api', api.routes());

app.use(router.routes());
app.use(router.allowedMethods());
// app.user(router.routes()).use(router.allowedMethods());

app.use((ctx, next) => {
    ctx.body = 'Hello Koa';
    next();
});

app.listen(4000, () => {
    console.log('heurm is listening to port 4000');
});
