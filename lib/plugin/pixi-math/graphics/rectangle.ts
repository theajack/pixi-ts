/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:02:36
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-17 08:49:42
 * @FilePath: /pixi-ts/lib/plugin/pixi-math/graphics/rectangle.ts
 * @Description: Coding something
 */

import {CRectangle, CPoint} from '@lib/types/pixi.math';
import {Point} from './point';


export class Rectangle implements CRectangle {
    x: number;
    y: number;
    width: number;
    height: number;

    _origin: Point;
    _halfWidth: number;
    _halfHeight: number;
    _endX: number;
    _endY: number;

    constructor (x: number, y: number, width: number, height: number) {
        this._origin = new Point(0, 0);
        this.setWidth(width);
        this.setHeight(height);
        this.setX(x);
        this.setY(y);
    }

    setX (x: number) {
        this.x = x;
        this._origin.setX(x + this._halfWidth);
    }
    setY (y: number) {
        this.y = y;
        this._origin.setY(y + this._halfHeight);
    }
    setWidth (width: number) {
        this.width = width;
        this._halfWidth = width / 2;
    }
    setHeight (height: number) {
        this.height = height;
        this._halfHeight = height / 2;
    }

    isContainPoint (point: CPoint) {
        return (
            point.x > this.x &&
            point.x < this._endX &&
            point.y > this.y &&
            point.y < this._endY
        );
    }

    isBumpRectangle (rect: CRectangle) {
        const originXDiff = Math.abs(this.x - rect.x);
        if (originXDiff > this._halfWidth + rect._halfWidth) {
            return false;
        }
        const originYDiff = Math.abs(this.y - rect.y);
        if (originYDiff > this._halfHeight + rect._halfHeight) {
            return false;
        }
        return true;
    }
};