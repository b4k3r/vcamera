var path = require('path');

module.exports = {
    entry: './src/app',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'camera3d.js'
    },
    resolve: {
        extensions: ['.ts', '.ts', '.js', '.json']
    },
    module: {
        rules: [{
            test: /\.(ts)|(js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};