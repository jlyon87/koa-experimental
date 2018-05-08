const Router = require("koa-router");
const router = new Router();

router.get('/hi', async ctx => {
	ctx.body = {
		status: 'success',
		message: 'Hello World!'
	};
});

module.exports = router;