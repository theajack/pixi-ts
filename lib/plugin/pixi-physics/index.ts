/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:45:37
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-19 20:29:24
 * @FilePath: /pixi-ts/lib/plugin/pixi-physics/index.ts
 * @Description: Coding something
 */
/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:53:00
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-17 23:37:48
 * @FilePath: /pixi-ts/lib/plugin/pixi-collision/index.ts
 * @Description: Coding something
 */
// import '@lib-types/pixi.collision';
// import {Sprite} from 'pixi.js';

import {IOnHitSpriteCallBack, IPhysics} from '@lib/types/pixi.physics';
import {ISprite} from '@lib/types/pixi.pro';
import {PhysicsMode} from '@lib/utils/enum';
import {getApplication} from '../pixi-pro/application';
import {Sprite} from '../pixi-pro/sprite';

const AIR_DENSITY = 0.5;
const GRAVITY = 1;

const SpritePool: Sprite[] = [];

export class Physics implements IPhysics {
    sprite: ISprite;
    firction: number; // 摩擦力
    elasticity: number; // 弹力
    private _density: number; // 密度
    get density () {
        return this._density;
    }
    set density (v: number) {
        if (v < 0) v = 0;
        else if (v > 1) v = 1;
        this._density = v;
        this.quality = this.sprite.collision.graphics.countArea() * v;
        

        if (getApplication().physicsMode === PhysicsMode.Vertical) {
            this.ay = (v - AIR_DENSITY) * GRAVITY;
        }
    }
    quality: number; // 质量

    private _vx: number;
    get vx () { return this._vx; }
    set vx (v: number) { if (isPhysicsMoveable(this)) this._vx = v; }
    private _vy: number;
    get vy () { return this._vy; }
    set vy (v: number) { if (isPhysicsMoveable(this)) this._vy = v; }
    private _ax: number;
    get ax () { return this._ax; }
    set ax (v: number) {if (isPhysicsMoveable(this)) this._ax = v;}
    private _ay: number;
    get ay () { return this._ay; }
    set ay (v: number) {if (isPhysicsMoveable(this)) this._ay = v;}

    fixed: boolean; // 是否是固定物体
    sensor: boolean;

    constructor (sprite: ISprite) {
        this.sprite = sprite;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.fixed = false;
        this.sensor = false;

        this.density = 0.5;
        this.firction = 0;
        this.elasticity = 0.5;
    
        getApplication().ticker.add(() => {
            this.vx += this.ax;
            this.vy += this.ay;
            sprite.x += this.vx;
            sprite.y += this.vy;

            SpritePool.forEach((target: Sprite) => {
                if (target === sprite) {return;}

                if (sprite.collision.hitAnotherSprite(target)) {
                    this._onHitCallbackMap.forEach((callback: IOnHitSpriteCallBack) => {
                        callback(target);
                    });
                }
            });

        });

        SpritePool.push(sprite);

        this.onHitSprite((target: Sprite) => {
            // this.
            console.log(target);
        });
    }

    private _onHitCallbackMap: IOnHitSpriteCallBack[] = [];
    onHitSprite (callback: IOnHitSpriteCallBack) {
        this._onHitCallbackMap.push(callback);
    }
}

function isPhysicsMoveable (physics: Physics) {
    return !physics.fixed && !physics.sensor;
}