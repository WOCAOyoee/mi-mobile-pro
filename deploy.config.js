module.exports = {
	app: [
    {
    	name: 'mi',
    	script: 'app.js',
    	env: {
    		COMMON_VARIABLE: 'true'
    	},
    	env_production: {
    		NODE_ENV: 'production'
    	}
    }
	],

	deploy: {
		production: {
			user: 'root',
			host: '47.114.87.244',
			ref: 'origin/master',
			repo: 'https://gitee.com/yoee/Mi-mobile-pro.git',
			path: '/var/www/mi',
			'pre-deploy': 'git fetch --all',
			'post-deploy': 'npm install && npm run prd && pm2 startOrRestart deploy.config.js --env production'
		}
	}
}