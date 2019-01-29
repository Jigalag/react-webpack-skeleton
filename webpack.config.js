const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const APP_NAME = 'Application name';

const config = {
    entry: `${SRC_DIR}/app/index.js`,
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: 'babel-loader'
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.eot$/, /\.svg$/, /\.ttf$/, /\.woff$/, /\.woff2$/],
                        loader: require.resolve('url-loader'),
                        exclude: PUBLIC_DIR,
                        options: {
                            name: '[name].[ext]',
                        },
                    }
                ]
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: APP_NAME,
            template: `${PUBLIC_DIR}/index.html`,
            filename: 'index.html'
        })
    ]
};

module.exports = config;