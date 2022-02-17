/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:02:24
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 00:55:50
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

import {CCircle} from '@lib/types/pixi.math';
import {Graphics} from './graphics';
import {Point} from './point';

export class Circle extends Graphics implements CCircle {
    type = 2;
    diameter: number;

    _radius: number;
    _radiusSqure: number;

    constructor (x: number, y: number, diameter: number) {
        super(x, y, diameter, diameter);
        this._initDiameter(diameter);
    }

    isContainPoint (point: Point) {
        if (!super.isContainPoint(point)) {
            return false;
        }
        return this._origin.countDistanceSqureToPoint(point) < this._radiusSqure;
    }

    setDiameter (diameter: number) {
        this.setWidth(diameter);
        this.setHeight(diameter);
        this._initDiameter(diameter);
    }
    
    private _initDiameter (diameter: number) {
        this.diameter = diameter;
        this._radius = diameter / 2;
        this._radiusSqure = this._radius * this._radius;
    }
};