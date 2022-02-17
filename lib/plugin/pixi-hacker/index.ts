/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:59:52
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 02:11:10
 * @FilePath: /pixi-ts/lib/plugin/pixi-hacker/index.ts
 * @Description: Coding something
 */

import {ISprite} from '@lib/types/pixi.hacker';
import {CGraphics} from '@lib/types/pixi.math';
import {sign} from '@lib/utils/util';
import {Sprite as _Sprite, Texture} from 'pixi.js';
import {Circle} from '../pixi-math/graphics/circle';
import {Rectangle} from '../pixi-math/graphics/rectangle';

export class Sprite extends _Sprite implements ISprite {
    graphics: CGraphics;
    private _isCircle: boolean;
    get isCircle () { return this._isCircle; }
    set x (v: number) {
        this.transform.position.x = v; // ! 更新父类位置
        this.graphics.setX(v);
    }
    get x () {return this.transform.position.x;}
    set y (v: number) {
        this.transform.position.y = v; // ! 更新父类位置
        this.graphics.setY(v);
    }
    get y () {return this.transform.position.y;}
    set width (v: number) {
        const s = sign(this.scale.x) || 1;
        this.scale.x = s * v / this._texture.orig.width;
        this._width = v;

        this.graphics.setWidth(v);
    }
    get width () { return Math.abs(this.scale.x) * this._texture.orig.width; }
    set height (v: number) {
        const s = sign(this.scale.y) || 1;
        this.scale.y = s * v / this._texture.orig.height;
        this._height = v;

        this.graphics.setHeight(v);
    }
    get height () { return this.scale.y * this.getLocalBounds().height; }
    set isCircle (v: boolean) {
        if (v && this.width !== this.height) {
            v = false;
        }
        if (v !== this._isCircle) {
            this._isCircle = v;
            this.graphics = this._isCircle ?
                new Circle(this.x, this.y, this.width) :
                new Rectangle(this.x, this.y, this.width, this.height);
        }
    }
    constructor (texture?: Texture) {
        super(texture);

        // this.ax = 0;
        // this.ay = 0;
        this.isCircle = false;
    }

    hitAnotherSprite (target: Sprite) {
    
        if (target.isCircle || this.isCircle ) {
            return false; // todo 待处理圆形的碰撞逻辑
        }
    
        return this.graphics.isBumpAnthorGraphics(target.graphics);
    }
    
}