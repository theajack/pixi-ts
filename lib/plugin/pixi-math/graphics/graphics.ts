/*
 * @Author: tackchen
 * @Date: 2022-02-17 23:15:21
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-19 00:08:43
 * @FilePath: /pixi-ts/lib/plugin/pixi-math/graphics/graphics.ts
 * @Description: Coding something
 */

import {CGraphics} from '@lib/types/pixi.math';
import {GraphicsType} from '@lib/utils/enum';
import {Point} from './point';
export class Graphics implements CGraphics {
    type: GraphicsType;
    x: number;
    y: number;
    width: number;
    height: number;
    _endX: number;
    _endY: number;
    _halfWidth: number;
    _halfHeight: number;
    _origin: Point;
    constructor (x: number, y: number, width: number, height: number) {
        this._origin = new Point(0, 0);
        this.setWidth(width);
        this.setHeight(height);
        this.setX(x);
        this.setY(y);
    }

    setX (v: number) {
        this.x = v;
        this._origin.setX(v);
    };
    setY (v: number) {
        this.y = v;
        this._origin.setY(v);
    };
    setWidth (v: number) {
        this.width = v;
        this._halfWidth = v / 2;
    }
    setHeight (v: number) {
        this.height = v;
        this._halfHeight = v / 2;
    }
    
    isContainPoint (point: Point) {
        return (
            point.x > this.x &&
            point.x < this._endX &&
            point.y > this.y &&
            point.y < this._endY
        );
    }
    isBumpAnthorGraphics (graphics: Graphics) {
        const originXDiff = Math.abs(this.x - graphics.x);
        if (originXDiff > this._halfWidth + graphics._halfWidth) {
            return false;
        }
        const originYDiff = Math.abs(this.y - graphics.y);
        if (originYDiff > this._halfHeight + graphics._halfHeight) {
            return false;
        }
        return true;
    }

    countArea () {
        return this.width * this.height;
    }
}