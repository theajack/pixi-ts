/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:59:52
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 15:53:44
 * @FilePath: /pixi-ts/lib/plugin/pixi-pro/sprite.ts
 * @Description: Coding something
 */

import {ISprite} from '@lib/types/pixi.pro';
import {sign} from '@lib/utils/util';
import {ObservablePoint, Sprite as _Sprite, Texture} from 'pixi.js';
import {Collision} from '../pixi-collision';
import {ICollision} from '@lib/types/pixi.collision';
import {IPhysics} from '@lib/types/pixi.physics';
import {Physics} from '../pixi-physics';

export class Sprite extends _Sprite implements ISprite {

    set x (v: number) {
        if (v === this.position._x) return;
        this.transform.position.x = v; // ! 更新父类位置
        initCollisionGraphicsX.call(this);
    }
    get x () {return this.transform.position.x;}
    set y (v: number) {
        if (v === this.position._y) return;
        this.transform.position.y = v; // ! 更新父类位置
        initCollisionGraphicsY.call(this);
    }
    get y () {return this.transform.position.y;}
    set width (v: number) {
        if (v === this._width) return;

        const s = sign(this.scale.x) || 1;
        this.scale.x = s * v / this._texture.orig.width;
        this._width = v;

        this.collision.graphics.setWidth(v);
    }
    get width () { return Math.abs(this.scale.x) * this._texture.orig.width; }
    set height (v: number) {
        if (v === this._height) return;
        const s = sign(this.scale.y) || 1;
        this.scale.y = s * v / this._texture.orig.height;
        this._height = v;

        this.collision.graphics.setHeight(v);
    }
    get height () { return this.scale.y * this.getLocalBounds().height; }

    collision: ICollision;
    physics: IPhysics;
    
    constructor (texture?: Texture) {
        super(texture);
        this.collision = new Collision(this);
        this.physics = new Physics(this);
        monitorAnchorChange.call(this);
        monitorPivotChange.call(this);
        monitorScaleChange.call(this);
        monitorSkewChange.call(this);
    }

}

function initCollisionGraphicsX (this: Sprite) {
    this.collision.graphics.setX(
        countSpriteVisualPositionX.call(this)
    );
}
function initCollisionGraphicsY (this: Sprite) {
    this.collision.graphics.setY(
        countSpriteVisualPositionY.call(this)
    );
}

function initCollisionGraphicsXY (this: Sprite) {
    initCollisionGraphicsX.call(this);
    initCollisionGraphicsY.call(this);
}

function monitorAnchorChange (this: Sprite) {
    monitorObservablePoint(this.anchor, () => {
        initCollisionGraphicsXY.call(this);
    });
}

function monitorPivotChange (this: Sprite) {
    monitorObservablePoint(this.pivot, () => {
        initCollisionGraphicsXY.call(this);
    });
}

function monitorScaleChange (this: Sprite) {
    monitorObservablePoint(this.scale, () => {
        this.collision.graphics.setWidth(this.width);
        this.collision.graphics.setHeight(this.height);
        initCollisionGraphicsXY.call(this); // ! scale改变可能会引起可视坐标变化
    });
}
function monitorSkewChange (this: Sprite) {
    monitorObservablePoint(this.skew, () => {
        this.collision.graphics.setWidth(this.width);
        this.collision.graphics.setHeight(this.height);
        initCollisionGraphicsXY.call(this); // ! skew改变可能会引起可视坐标变化
    });
}

function monitorObservablePoint (point: ObservablePoint, callback: ()=>void) {
    const originCallback = point.cb;
    point.cb = function () {
        originCallback.call(this);
        callback();
    };
}

function countSpriteVisualPositionX (this: Sprite) {
    return this.x - this.anchor.x * this.width - this.pivot.x;
}

function countSpriteVisualPositionY (this: Sprite) {
    return this.y - this.anchor.y * this.height - this.pivot.y;
}
