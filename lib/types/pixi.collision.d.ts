/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:53:42
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 00:03:18
 * @FilePath: /pixi-ts/lib/types/pixi-collision.d.ts
 * @Description: Coding something
 */
import '@pixi/sprite';
import {CGraphics} from './pixi.math';

export interface IInitCollisionOption {
    isCircle?: boolean;
}

export interface ICollision {
    x: number;
    y: number;
    width: number;
    height: number;
    isCircle: boolean;
    graphics: CGraphics;
}

declare module '@pixi/sprite' {
   interface Sprite {
        initCollision(option?: IInitCollisionOption): void;
        hitAnotherSprite(sprite: Sprite): boolean;
        collision: ICollision;
   }
}