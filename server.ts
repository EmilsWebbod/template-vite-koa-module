import Koa from 'koa';
import Router from 'koa-router';
import koaStatic from 'koa-static';
import koaCors from 'koa-cors';
import apiRouter from './lib/api.router.js';

const PORT = process.env.PORT || 2000;
const app = new Koa();
const router = new Router();

app.use(koaCors({}))

router.use('/api', apiRouter.routes());

app.use(router.routes());
app.use(koaStatic('dist'));
app.listen(PORT);
console.log('Running on port ', PORT);