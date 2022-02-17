/*
 * @Author: tackchen
 * @Date: 2022-02-18 01:05:32
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 01:10:09
 * @FilePath: /pixi-ts/lib/types/pixi.hacker.d.ts
 * @Description: Coding something
 */

import {CGraphics} from './pixi.math';

export interface ISprite {
    ax: number;
    ay: number;

    isCircle: boolean;
    graphics: CGraphics;
}