const webpack = require('webpack');
const config = require('../webpack.config');
const fs = require('fs-extra');

copyPublicFolder();

let compiler = webpack(config);


compiler.run((err, stats) => {
    console.log(err);
});


function copyPublicFolder() {
    fs.copySync('public', 'dist', {
        dereference: true,
        filter: file => file !== 'public/index.html',
    });
}