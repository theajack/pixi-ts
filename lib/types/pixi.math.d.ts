/*
 * @Author: tackchen
 * @Date: 2022-02-16 21:58:51
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-19 00:08:01
 * @FilePath: /pixi-ts/lib/types/pixi.math.d.ts
 * @Description: Coding something
 */

import {GraphicsType} from '@lib/utils/enum';

export interface IPoint {
    x: number;
    y: number;
}

export abstract class CPoint implements IPoint, ISetPosition {
    x: number;
    y: number;
    constructor(x: number, y: number);
    setX(v: number): void;
    setY(v: number): void;
    isInGraphics(graphics: CGraphics): boolean;
    countDistanceSqureToPoint(point: CPoint): number;
    countDistanceToPoint(point: CPoint): number;
}

export interface ISize {
    width: number;
    height: number;
}

interface ISetPosition {
    setX(v: number): void;
    setY(v: number): void;
}
interface ISetSize {
    setWidth(v: number): void;
    setHeight(v: number): void;
}

export abstract class CGraphics implements IPoint, ISize, ISetPosition, ISetSize {
    type: GraphicsType;
    x: number;
    y: number;
    width: number;
    height: number;
    _endX: number;
    _endY: number;
    _halfWidth: number;
    _halfHeight: number;
    _origin: CPoint;
    constructor();
    setX(v: number): void;
    setY(v: number): void;
    setWidth(v: number): void;
    setHeight(v: number): void;
    isContainPoint (point: CPoint): boolean;
    isBumpAnthorGraphics (rect: CGraphics): boolean;
    countArea(): number;
}

export abstract class CRectangle extends CGraphics {
}
export abstract class CCircle extends CGraphics {
    diameter: number;
    _radius: number;
    _radiusSqure: number;
    constructor(x: number, y: number, diameter: number);
    setDiameter(diameter: number): void;
}