
/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:45:55
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-19 00:23:56
 * @FilePath: /pixi-ts/lib/types/pixi.physics.d.ts
 * @Description: Coding something
 */

import {ISprite, ISpritePlugin} from './pixi.pro';

export interface IOnHitSpriteCallBack {
    (traget: ISprite): void;
}
export interface IPhysics extends ISpritePlugin{
    vx: number;
    vy: number;
    ax: number;
    ay: number;

    fixed: boolean; // 是否是固定物体
    sensor: boolean; // 是否是传感器 传感器没有物理响应

    firction: number; // 摩擦力
    elasticity: number; // 弹力
    density: number; // 密度
    quality: number; // 质量

    onHitSprite(callback: IOnHitSpriteCallBack): void
}

