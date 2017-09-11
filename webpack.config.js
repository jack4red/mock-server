const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        setup(app){
            require('fs').readdirSync(require('path').join(__dirname + '/mock')).forEach(function(file) {
                let mockFun = require('./mock/' + file);
                mockFun(app);
            })
        }
    }
};