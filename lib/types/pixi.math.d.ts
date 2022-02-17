/*
 * @Author: tackchen
 * @Date: 2022-02-16 21:58:51
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-17 08:09:28
 * @FilePath: /pixi-ts/lib/types/pixi.math.d.ts
 * @Description: Coding something
 */

export interface IPoint {
    x: number;
    y: number;
}

export interface ISize {
    width: number;
    height: number;
}

export interface CPoint extends IPoint {
    isInRectangle (rect: CRectangle): boolean;
    countDistanceSqureToPoint (point: CPoint): number;
    countDistanceToPoint (point: CPoint): number;
}

export interface CRectangle extends IPoint {
    x: number;
    y: number;
    width: number;
    height: number;

    _origin: CPoint;
    _halfWidth: number;
    _halfHeight: number;
    _endX: number;
    _endY: number;
    isContainPoint (point: CPoint): boolean;
    isBumpRectangle (rect: CRectangle): boolean;
}
export interface CCircle extends IPoint {
    x: number;
    y: number;
    radius: number;

    _radiusSqure: number;
    _diameter: number;

    _boundary: CRectangle;
    isContainPoint (point: CPoint): boolean;
}