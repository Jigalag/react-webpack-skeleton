const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const PORT = 3001;

const devConfig = merge(config, {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            module: true
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: PUBLIC_DIR,
        watchContentBase: true,
        port: PORT,
        compress: true,
        historyApiFallback: true
    }
});

module.exports = devConfig;