const proxy = require('http-proxy-middleware');

module.exports = function (app: any) {
	app.use(
		proxy('/api/', {
			target: 'https://api-relife.nicecode.biz/',
			changeOrigin: true,
			secure: false,
		})
	);
	app.use(
		proxy('/media/', {
			target: 'https://api-relife.nicecode.biz/',
			changeOrigin: true,
			secure: false,
		})
	);
};

export {};
