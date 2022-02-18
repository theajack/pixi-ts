/*
 * @Author: tackchen
 * @Date: 2022-02-18 01:05:32
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 15:05:27
 * @FilePath: /pixi-ts/lib/types/pixi.pro.d.ts
 * @Description: Coding something
 */

import {Sprite} from 'pixi.js';
import {ICollision} from './pixi.collision';
import {IPhysics} from './pixi.physics';

export interface ISprite extends Sprite {
    collision: ICollision;
    physics: IPhysics;
}

export interface ISpritePlugin {
    sprite: ISprite;
}