module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'camera3d.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}
