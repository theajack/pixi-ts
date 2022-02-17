/*
 * @Author: tackchen
 * @Date: 2022-02-16 21:57:53
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 00:25:17
 * @FilePath: /pixi-ts/lib/plugin/pixi-math/graphics/point.ts
 * @Description: Coding something
 */

import {CPoint} from '@lib/types/pixi.math';
import {countSumOfSquare} from '../math';
import {Graphics} from './graphics';
// import {Graphics} from './graphics';

// const a: CTest = {};
// console.log(a);
export class Point implements CPoint {
    x: number;
    y: number;
    constructor (x: number, y: number) {
        this.setX(x);
        this.setX(y);
    }

    setX (x: number) { this.x = x; }
    setY (y: number) { this.y = y; }

    isInGraphics (graphics: Graphics): boolean {
        return graphics.isContainPoint(this);
    }

    countDistanceSqureToPoint (point: Point) {
        return countSumOfSquare(
            point.x - this.x,
            point.y - this.y,
        );
    }
    countDistanceToPoint (point: Point) {
        return Math.pow(this.countDistanceSqureToPoint(point), 0.5);
    }
}