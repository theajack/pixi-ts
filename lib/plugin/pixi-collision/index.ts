/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:53:00
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 15:02:05
 * @FilePath: /pixi-ts/lib/plugin/pixi-collision/index.ts
 * @Description: Coding something
 */
// import '@lib-types/pixi.collision';
// import {ICollision, IInitCollisionOption} from '@lib/types/pixi.collision';
// import {Sprite} from 'pixi.js';
// import {Circle} from '../pixi-math/graphics/circle';
// import {Rectangle} from '../pixi-math/graphics/rectangle';

import {ICollision} from '@lib/types/pixi.collision';
import {CGraphics} from '@lib/types/pixi.math';
import {ISprite} from '@lib/types/pixi.pro';
import {Circle} from '../pixi-math/graphics/circle';
import {Rectangle} from '../pixi-math/graphics/rectangle';
import {Sprite} from '../pixi-pro/sprite';

export class Collision implements ICollision {
    sprite: Sprite;
    private _isCircle: boolean;
    get isCircle () { return this._isCircle; }
    set isCircle (v: boolean) {
        if (v && this.sprite.width !== this.sprite.height) {
            v = false;
        }
        if (v !== this._isCircle) {
            this._isCircle = v;
            this.graphics = this._isCircle ?
                new Circle(this.sprite.x, this.sprite.y, this.sprite.width) :
                new Rectangle(this.sprite.x, this.sprite.y, this.sprite.width, this.sprite.height);
        }
    }
    
    graphics: CGraphics;
    constructor (sprite: Sprite) {
        this.sprite = sprite;
        this.isCircle = false;
    }
    hitAnotherSprite (target: ISprite) {
        if (target.collision.isCircle || this.isCircle ) {
            return false; // todo 待处理圆形的碰撞逻辑
        }

        return this.graphics.isBumpAnthorGraphics(target.collision.graphics);
    }
}