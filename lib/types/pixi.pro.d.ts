/*
 * @Author: tackchen
 * @Date: 2022-02-18 01:05:32
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 16:25:33
 * @FilePath: /pixi-ts/lib/types/pixi.pro.d.ts
 * @Description: Coding something
 */

import {PhysicsMode, ViewPortMode} from '@lib/utils/enum';
import {Sprite} from 'pixi.js';
import {ICollision} from './pixi.collision';
import {IPhysics} from './pixi.physics';

export interface IApplication {
    readonly viewPortMode: ViewPortMode;
    readonly physicsMode: PhysicsMode;
}

export interface IApplicationProOptions {
    viewPortMode?: ViewPortMode;
    physicsMode?: PhysicsMode;
}

export interface ISprite extends Sprite {
    collision: ICollision;
    physics: IPhysics;
}

export interface ISpritePlugin {
    sprite: ISprite;
}