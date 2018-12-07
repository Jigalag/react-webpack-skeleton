const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const PORT = 3001;

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
                        test: /\.scss$/,
                        use: ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: "css-loader!sass-loader",
                        })
                    }
                    ,
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'img/[name].[ext]',
                        },
                    },
                    {
                        test: /\.(eot|svg|ttf|woff|woff2)$/,
                        use: {
                            loader: 'file-loader',
                            options: {
                                name: 'fonts/[name][hash].[ext]'
                            }
                        }
                    }
                ]
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'React SVG sprite',
            template: `${PUBLIC_DIR}/index.html`,
            filename: 'index.html'
        }),
        new ExtractTextPlugin('style.css')
    ],
    devServer: {
        contentBase: PUBLIC_DIR,
        watchContentBase: true,
        port: PORT,
        compress: true
    }
};

module.exports = config;