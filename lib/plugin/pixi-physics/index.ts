/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:45:37
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 15:14:59
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

import {IPhysics} from '@lib/types/pixi.physics';
import {ISprite} from '@lib/types/pixi.pro';
import {getApplication} from '../pixi-pro/application';

export class Physics implements IPhysics {
    sprite: ISprite;
    firction: number; // 摩擦力
    elasticity: number; // 弹力
    density: number; // 密度
    quality: number; // 质量

    vx: number;
    vy: number;
    ax: number;
    ay: number;

    constructor (sprite: ISprite) {
        this.sprite = sprite;
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
    
        getApplication().ticker.add(() => {
            this.vx += this.ax;
            this.vy += this.ay;
            sprite.x += this.vx;
            sprite.y += this.vy;
        });
    }
}
