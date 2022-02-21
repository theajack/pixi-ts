/*
 * @Author: tackchen
 * @Date: 2022-02-18 11:28:15
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 22:02:38
 * @FilePath: /pixi-ts/lib/plugin/pixi-pro/application.ts
 * @Description: Coding something
 */

import {IApplication, IApplicationProOptions} from '@lib/types/pixi.pro';
import {PhysicsMode, ViewPortMode} from '@lib/utils/enum';
import {Application as _Application, IApplicationOptions} from 'pixi.js';

let instance: Application;

export function getApplication () {
    if (typeof instance === 'undefined') console.warn('请先初始化Application');
    return instance;
}

export class Application extends _Application implements IApplication  {
    private _viewPortMode: ViewPortMode;
    private _physicsMode: PhysicsMode;
    get viewPortMode () {return this._viewPortMode;}
    get physicsMode () {return this._physicsMode;}
    constructor (option: IApplicationOptions & IApplicationProOptions) {
        if (instance) {
            return instance;
        }
        super(option);
        instance = this;
        this._viewPortMode = option.viewPortMode || ViewPortMode.Full;
        this._physicsMode = option.physicsMode || PhysicsMode.Horizon;
    }
}