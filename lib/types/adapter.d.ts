/*
 * @Author: tackchen
 * @Date: 2022-02-15 23:03:09
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-15 23:17:10
 * @FilePath: /pixi-ts/lib/types/adapter.d.ts
 * @Description: Coding something
 */

import {ISize} from './util';

export interface IAdapter {
    getRenderView(): {
        view: HTMLCanvasElement;
    } & ISize;

    getScreenSize(): ISize;
}