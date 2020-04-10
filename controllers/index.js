const pageConf = require('../config/config').page_conf;
const indexModel = require('../models/index');
class IndexController {
	async index(ctx, next) {
		const data = await indexModel.getXiaomiDatas({
			swiper: true,
			phone: true,
			field: true
		});
		const swiperData = data.swiper_data,
					phoneData = data.phone_data,
					fieldData = data.field_data
		await ctx.render('index', {
			pageConf,
			swiperData,
			phoneData,
			fieldData,
		});
	}
}

module.exports = new IndexController();
