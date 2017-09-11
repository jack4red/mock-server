const path = require('path');
const watchMockjs = require('./watchMock.js');
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
            watchMockjs(app);
        }
    }
};