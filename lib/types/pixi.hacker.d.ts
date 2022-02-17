/*
 * @Author: tackchen
 * @Date: 2022-02-18 01:05:32
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 01:20:58
 * @FilePath: /pixi-ts/lib/types/pixi.hacker.d.ts
 * @Description: Coding something
 */

import {Sprite} from 'pixi.js';
import {ICollision} from './pixi.collision';

export interface ISprite extends Sprite, ICollision {
}