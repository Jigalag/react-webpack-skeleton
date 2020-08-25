const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const PORT = 3001;

const devConfig = merge(config, {
    devServer: {
        contentBase: PUBLIC_DIR,
        watchContentBase: true,
        port: PORT,
        compress: true,
        historyApiFallback: true
    }
});

module.exports = devConfig;
