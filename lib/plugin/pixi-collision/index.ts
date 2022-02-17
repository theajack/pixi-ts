/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:53:00
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-17 08:54:23
 * @FilePath: /pixi-ts/lib/plugin/pixi-collision/index.ts
 * @Description: Coding something
 */
// import '@lib-types/pixi.collision';
import {IInitCollisionOption} from '@lib/types/pixi.collision';
import {Sprite} from 'pixi.js';
import {Circle} from '../pixi-math/graphics/circle';
import {Rectangle} from '../pixi-math/graphics/rectangle';


Sprite.prototype.initCollision = function ({isCircle = false}: IInitCollisionOption = {}) {
    const {x, y, width, height} = this;

    this.collision = {
        isCircle,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    };
    Object.defineProperties(this.collision, {
        x: {
            get: () => {
                return this.collision?.rectangle?.x;
            },
            set: (v: number) => {

            }
        }
    });
    if (isCircle) {
        this.collision.circle = new Circle(x, y, width);
    } else {
        this.collision.rectangle = new Rectangle(x, y, width, height);
    }
};

Sprite.prototype.hitAnotherSprite = function (sprite: Sprite) {
    if (!sprite.collision || !this.collision) {
        console.warn('请先初始化精灵碰撞体');
        return false;
    }

    sprite.x;

    const {collision} = sprite;

    if (collision.isCircle) {
        return false; // todo 待处理圆形的碰撞逻辑
    }

    const thisRect = collision.rectangle as Rectangle;
    const targetRect = sprite.collision.rectangle as Rectangle;

    return thisRect.isBumpRectangle(targetRect);
};

