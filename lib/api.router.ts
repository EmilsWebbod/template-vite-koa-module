import Router from 'koa-router';

const apiRouter = new Router();

apiRouter.get('/', ctx => {
  console.log('GET /api');
  ctx.body = 'OK';
})

export default apiRouter;