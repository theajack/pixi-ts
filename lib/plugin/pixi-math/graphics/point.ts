/*
 * @Author: tackchen
 * @Date: 2022-02-16 21:57:53
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-17 08:48:10
 * @FilePath: /pixi-ts/lib/plugin/pixi-math/graphics/point.ts
 * @Description: Coding something
 */

import {CPoint, CRectangle} from '@lib/types/pixi.math';
import {countSumOfSquare} from '../math';

export class Point implements CPoint {
    x: number;
    y: number;
    constructor (x: number, y: number) {
        this.setX(x);
        this.setX(y);
    }

    setX (x: number) { this.x = x; }
    setY (y: number) { this.y = y; }

    isInRectangle (rect: CRectangle): boolean {
        return rect.isContainPoint(this);
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