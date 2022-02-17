/*
 * @Author: tackchen
 * @Date: 2022-02-15 22:32:26
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-17 23:44:15
 * @FilePath: /pixi-ts/webpack-config/common.js
 * @Description: Coding something
 */
const path = require('path');

const resolve = {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
        '@lib': path.resolve('./', 'lib/'),
        '@lib-types': path.resolve('./', 'lib/types/'),
        '@adapter': path.resolve('./', 'lib/adapter/index.ts'),
        '@types': path.resolve('./', 'src/types/'),
    },
};

const rules = [{
    test: /(.ts)$/,
    use: {
        loader: 'ts-loader'
    }
}, {
    test: /(.js)$/,
    use: [{
        loader: 'babel-loader',
    }]
}];

const entry = path.resolve('./', 'src/index.ts');

const output = {
    path: path.resolve('./', 'dist'),
    filename: 'main.min.js',
    library: 'WXMiniGameTs',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this',
};

module.exports = {
    resolve,
    rules,
    entry,
    output,
}