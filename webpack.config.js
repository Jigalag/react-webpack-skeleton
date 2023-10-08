const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_NAME = 'Test Application';

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // to import index.html file inside index.js
            title: APP_NAME,
        }),
    ],
    devServer: {
        port: 3001,
        compress: true,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // .js and .jsx files
                exclude: /node_modules/, // excluding the node_modules folder
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
                loader: 'url-loader',
                options: { limit: false },
            },
        ],
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/Components'),
            '@store': path.resolve(__dirname, 'src/Store'),
            '@utils': path.resolve(__dirname, 'src/Utils'),
            '@pages': path.resolve(__dirname, 'src/Pages'),
            '@providers': path.resolve(__dirname, 'src/Providers'),
        },
    },
};
