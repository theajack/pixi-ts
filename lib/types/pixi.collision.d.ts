/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:53:42
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 15:06:01
 * @FilePath: /pixi-ts/lib/types/pixi.collision.d.ts
 * @Description: Coding something
 */
import {ISprite, ISpritePlugin} from './pixi.pro';
import {CGraphics} from './pixi.math';


export interface ICollision extends ISpritePlugin {
    isCircle: boolean;
    graphics: CGraphics;
    hitAnotherSprite(sprite: ISprite): boolean;
}
