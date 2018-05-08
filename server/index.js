const Koa = require("koa");
const serve = require("koa-static");

const router = require('./routes');

const app = new Koa();
const PORT = process.env.PORT || 3030;

// x-response-time
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async (ctx, next) => {
	const start = Date.now();
	await next();
	const ms = Date.now() - start;
	console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(router.routes());

// Serve index.html from koa-static
app.use(serve('.'));

app.listen(PORT);