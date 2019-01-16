const merge = require('webpack-merge');
const config = require('./webpack.config');

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
    }
});

module.exports = devConfig;