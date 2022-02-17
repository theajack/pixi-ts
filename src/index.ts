/*
 * @Author: tackchen
 * @Date: 2022-02-10 10:54:39
 * @LastEditors: tackchen
 * @FilePath: /pixi-ts/src/index.ts
 * @Description: Coding something
 */

import Adapter from '@adapter';
import {Application, Rectangle, Sprite, utils} from 'pixi.js';
import '@lib/plugin/pixi-collision';
const WIN = (window as any);

const renderView = Adapter.getRenderView();

const app = new Application({
    width: renderView.width,
    height: renderView.height,
    view: renderView.view,
    antialias: true,    // default: false 反锯齿
    transparent: false, // default: false 透明度
    resolution: 1,       // default: 1 分辨率
});

WIN.app = app;

app.loader
    .add('assets/images/enemy.png')
    .add('assets/images/tileset.png')
    .load(setup);

// This `setup` function will run when the image has loaded
function setup () {
    const TextureCache = utils.TextureCache;
    // Create the cat sprite
    // const enemy = new PIXI.Sprite(app.loader.resources['assets/images/enemy.png'].texture);
    

    const texture = TextureCache['assets/images/tileset.png'];

    // Create a rectangle object that defines the position and
    // size of the sub-image you want to extract from the texture
    // (`Rectangle` is an alias for `PIXI.Rectangle`)
    const rectangle = new Rectangle(96, 64, 32, 32);
  
    // Tell the texture to use that rectangular section
    texture.frame = rectangle;
  
    // Create the sprite from the texture
    const rocket = new Sprite(texture);
    // Position the rocket sprite on the canvas
    rocket.x = 100;
    rocket.y = 0;

    rocket.initCollision();

    WIN.rocket = rocket;

    
    const rocket2 = new Sprite(texture);
    rocket2.initCollision();
    WIN.rocket2 = rocket2;
  
    // Add the rocket to the stage
    app.stage.addChild(rocket);
    app.stage.addChild(rocket2);
    
    // Render the stage
    app.renderer.render(app.stage);

    // const enemy = new Sprite(TextureCache['assets/images/enemy.png']);
    // app.stage.addChild(enemy);

    // enemy.width = 100;
    // app.ticker.add((delta) => {
    //     // console.log(delta);
    //     rocket2.collision.x += 1;
    //     if (rocket2.hitAnotherSprite(rocket)) {
    //         console.log('撞到啦');
    //     }
    // });
}


class Test {
    private _x: number;
    get x () {
        return this._x;
    }
    set x (v) {
        this._x = v;
    }
}

WIN.t = new Test();