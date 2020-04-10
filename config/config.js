const mode = 'decelopment';
const base_conf = {
	api_url: 'http://study.jsplusplus.com/Xiaomi/',
	source_url: mode == 'development' ? 'http://localhost:3300/' : '/'
}

module.exports = {
	page_conf: {
		index: {
			head: {
				title: 'YOEE米 商城 - 小米10 Pro、Redmi K30、小米MIX Alpha，小米电视官方网站',
				keyword: '小米,redmi,小米10,Redmi K30,小米MIX Alpha,小米商城',
				description:
					'小米官网直营小米公司旗下所有产品，包括小米手机系列小米10 Pro 、小米9、小米MIX Alpha，Redmi 红米系列Redmi K30、Redmi Note 8 Pro，小米电视、笔记本、米家智能家居等，同时提供小米客户服务及售后支持.'
			},
			stylesheet: [ base_conf.source_url + 'css/index.css' ],
			script: [ base_conf.source_url + 'js/jquery.min.js', base_conf.source_url + 'js/index.js' ]
		}
	},
	api: {
		getXiaomiDatas: base_conf.api_url + 'getXiaomiDatas'
	}
};
