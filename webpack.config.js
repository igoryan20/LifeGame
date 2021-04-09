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
    module: {
        rules: [
            {
                test: /\.js(x*)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js'
    }
}