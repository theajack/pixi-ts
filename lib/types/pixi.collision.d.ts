/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:53:42
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 01:26:57
 * @FilePath: /pixi-ts/lib/types/pixi.collision.d.ts
 * @Description: Coding something
 */
import {ISprite} from './pixi.hacker';
import {CGraphics} from './pixi.math';


export interface ICollision {
    isCircle: boolean;
    graphics: CGraphics;
    hitAnotherSprite(sprite: ISprite): boolean;
}
