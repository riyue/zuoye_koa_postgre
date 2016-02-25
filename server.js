const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
	ctx.body = 'Hello Koa and Postgres!\n';
});

app.listen(3000);
