const fetch = require('node-fetch');

class Model {
	get(url, options) {
		return fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				return options.success(res);
			})
			.catch((error) => {
				return options.error(error);
			});
	}
	post(url, options) {
		return fetch(url, {
			methods: 'post',
			body: JSON.stringify(options.data),
			headers: {
				'Content-Type': 'appliaction/json'
			}
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				return options.success(data);
			})
			.catch((error) => {
				return options.error(error);
			});
	}
}

module.exports = Model