/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:59:52
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 01:12:34
 * @FilePath: /pixi-ts/lib/plugin/pixi-hacker/index.ts
 * @Description: Coding something
 */

import {ISprite} from '@lib/types/pixi.hacker';
import {CGraphics} from '@lib/types/pixi.math';
import {Sprite as _Sprite, Texture} from 'pixi.js';
import {Rectangle} from '../pixi-math/graphics/rectangle';

export class Sprite extends _Sprite implements ISprite {
    ax: number;
    ay: number;

    isCircle: boolean;
    graphics: CGraphics;
    constructor (texture?: Texture) {
        super(texture);

        this.ax = 0;
        this.ay = 0;
        this.isCircle = false;
        // this.graphics = new Rectangle();
    }
}