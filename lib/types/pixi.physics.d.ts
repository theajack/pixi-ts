/*
 * @Author: tackchen
 * @Date: 2022-02-18 00:45:55
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 00:49:35
 * @FilePath: /pixi-ts/lib/types/pixi.physics.d.ts
 * @Description: Coding something
 */

import '@pixi/sprite';

export interface IInitPhysicsOption extends IPhysics {
    isCircle?: boolean;
}

export interface IPhysics {
    ax: number;
    ay: number;
}

declare module '@pixi/sprite' {
   interface Sprite {
        initPhysics(option?: IInitPhysicsOption): void;
        physics: IPhysics;
   }
}