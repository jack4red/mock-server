const fs = require('fs');
const execMock = (app) => {
	fs.readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
	    let mockFun = require('./mock/' + file);
	    mockFun(app);
	})
}
module.exports = (app) => {
	execMock(app);
	fs.watch(require('path').join(__dirname + '/mock'), (eventType, filename) => {
	    execMock(app);
	})
}