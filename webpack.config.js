const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');
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
                test: /\.css$/,
                exclude: [
                    NODE_MODULES,
                ],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, '.'),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: [
                    NODE_MODULES,
                ],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: false,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            config: {
                                path: path.join(__dirname, '.'),
                            },
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                options: {
                    configFile: path.join(__dirname, 'babel.config.js'),
                },
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
