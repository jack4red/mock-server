const fs = require('fs');

module.exports = (app) => {
	fs.readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
		const mockFun = require('./mock/' + file);
		mockFun(app)
	})
}