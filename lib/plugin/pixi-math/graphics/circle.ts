/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:02:24
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-17 08:17:35
 * @FilePath: /pixi-ts/lib/plugin/pixi-math/graphics/circle.ts
 * @Description: Coding something
 */
/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:02:36
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-16 22:23:32
 * @FilePath: /pixi-ts/lib/plugin/pixi-math/graphics/rectangle.ts
 * @Description: Coding something
 */

import {CCircle, CRectangle} from '@lib/types/pixi.math';
import {Point} from './point';
import {Rectangle} from './rectangle';

export class Circle implements CCircle {
    x: number;
    y: number;
    radius: number;

    _radiusSqure: number;
    _diameter: number;

    _boundary: CRectangle;
    

    constructor (x: number, y: number, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this._boundary = new Rectangle(x, y, radius, radius);
    }

    isContainPoint (point: Point) {
        if (!this._boundary.isContainPoint(point)) {
            return false;
        }

        return this._boundary._origin.countDistanceSqureToPoint(point) < this._radiusSqure;
    }
};