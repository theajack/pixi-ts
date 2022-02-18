/*
 * @Author: tackchen
 * @Date: 2022-02-18 11:28:15
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 11:35:19
 * @FilePath: /pixi-ts/lib/plugin/pixi-pro/application.ts
 * @Description: Coding something
 */

import {Application as _Application, IApplicationOptions} from 'pixi.js';

let instance: _Application;

export function getApplication () {
    if (typeof instance === 'undefined') console.warn('请先初始化Application');
    return instance;
}

export class Application extends _Application  {
    constructor (option: IApplicationOptions) {
        if (instance) {
            return instance;
        }
        super(option);
        instance = this;
    }
}