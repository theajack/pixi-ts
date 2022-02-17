/*
 * @Author: tackchen
 * @Date: 2022-02-16 22:53:00
 * @LastEditors: tackchen
 * @LastEditTime: 2022-02-18 01:56:50
 * @FilePath: /pixi-ts/lib/plugin/pixi-collision/index.ts
 * @Description: Coding something
 */
// import '@lib-types/pixi.collision';
// import {ICollision, IInitCollisionOption} from '@lib/types/pixi.collision';
// import {Sprite} from 'pixi.js';
// import {Circle} from '../pixi-math/graphics/circle';
// import {Rectangle} from '../pixi-math/graphics/rectangle';


// Sprite.prototype.initCollision = function ({isCircle = false}: IInitCollisionOption = {}) {
//     const {x, y, width, height} = this;

//     this.collision = initCollisionProperties.call(this);
//     this.collision.isCircle = isCircle;
//     this.collision.graphics = isCircle ?
//         new Circle(x, y, width) :
//         new Rectangle(x, y, width, height);

// };

// function initCollisionProperties (this: Sprite): ICollision {
//     const collision = {};

//     Object.defineProperties(collision, {
//         x: {
//             get: () => this.x,
//             set: (v: number) => {
//                 this.x = v;
//                 this.collision.graphics.setX(v);
//             }
//         },
//         y: {
//             get: () => this.y,
//             set: (v: number) => {
//                 this.y = v;
//                 this.collision.graphics.setY(v);
//             }
//         },
//         width: {
//             get: () => this.width,
//             set: (v: number) => {
//                 this.width = v;
//                 this.collision.graphics.setWidth(v);
//             }
//         },
//         height: {
//             get: () => this.height,
//             set: (v: number) => {
//                 this.height = v;
//                 this.collision.graphics.setHeight(v);
//             }
//         }
//     });

//     return collision as ICollision;
// }

// Sprite.prototype.hitAnotherSprite = function (target: Sprite) {
//     if (!target.collision || !this.collision) {
//         console.warn('请先初始化精灵碰撞体');
//         return false;
//     }

//     const {collision} = target;

//     if (collision.isCircle && this.collision.isCircle ) {
//         return false; // todo 待处理圆形的碰撞逻辑
//     }

//     return this.collision.graphics.isBumpAnthorGraphics(collision.graphics);
// };

