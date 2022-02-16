const path = require('path');
const webpack = require('webpack');
const {resolve, rules, entry, output} = require('./common');

module.exports = {
    mode: 'production',
    entry,
    output,
    externals: {
    },
    module: {
        rules
    },
    resolve
};