const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const {resolve, rules, entry, output} = require('./common');

module.exports = {
    watch: true,
    devtool: 'cheap-source-map',
    mode: 'development',
    entry,
    output,
    externals: {
    },
    module: {
        rules: [
            ...rules,
        {
            test: /(.js)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            exclude: /node_modules/,
            options: {
                configFile: './.eslintrc.js'
            }
        }]
    },
    plugins: [
        new ProgressBarPlugin(),
    ],
    resolve,
};