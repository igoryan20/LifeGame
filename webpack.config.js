const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './resources/js/app.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'resources/views/app.html',
            filename: '../app.html'
        })
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    }
}