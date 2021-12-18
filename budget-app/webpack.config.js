//entry -> output
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
            {
              test: /\.s?css$/,
              use:['style-loader', 'css-loader','sass-loader']
            }],
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        compress: true,
        port: 8080,
        historyApiFallback: true
    }
};