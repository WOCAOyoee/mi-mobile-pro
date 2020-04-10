const pageConf = require('../config/config').page_conf;
const indexModel = require('../models/index');
class IndexController {
	async index(ctx, next) {
		const data = await indexModel.getXiaomiDatas({
			swiper: true,
			phone: true,
			field: true
		});
		console.log(data)
		await ctx.render('index', {
			pageConf
		});
	}
}

module.exports = new IndexController();
