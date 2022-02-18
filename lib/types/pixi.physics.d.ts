
/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:45:55
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 15:05:47
 * @FilePath: /pixi-ts/lib/types/pixi.physics.d.ts
 * @Description: Coding something
 */

import {ISpritePlugin} from './pixi.pro';

export interface IPhysics extends ISpritePlugin{
    vx: number;
    vy: number;
    ax: number;
    ay: number;

    firction: number; // 摩擦力
    elasticity: number; // 弹力
    density: number; // 密度
    quality: number; // 质量
}