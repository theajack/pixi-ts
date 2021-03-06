/*
 * @Author: tackchen
 * @Date: 2022-02-10 10:54:39
 * @LastEditors: tackchen
 * @FilePath: /pixi-ts/src/index.old.ts
 * @Description: Coding something
 */

import Adapter from '@adapter';
import {Container, Rectangle, Text, utils} from 'pixi.js';
import '@lib/plugin/pixi-collision';
import {Sprite} from '@lib/plugin/pixi-pro/sprite';
import {Application} from '@lib/plugin/pixi-pro/application';
import {PhysicsMode} from '@lib/utils/enum';
const WIN = (window as any);

const renderView = Adapter.getRenderView();

const app = new Application({
    width: renderView.width,
    height: renderView.height,
    view: renderView.view,
    antialias: true,    // default: false 反锯齿
    transparent: false, // default: false 透明度
    resolution: 1,       // default: 1 分辨率
    physicsMode: PhysicsMode.Vertical,
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
    const container = new Container();
    container.width = 100;
    container.height = 100;
    WIN.cotainer = container;
    const rocket = new Sprite(texture);
    // app.stage.addChild(rocket);

    container.addChild(rocket);
    // rocket.addChild(new Text(''));

    rocket.width = 62;

    container.addChild(new Text('xxxxxasadsadasdsadsadsaq dasdsadsad sadsadasdada', {
        fill: 0xffffff,
        align: 'left',
        whiteSpace: 'pre-line',
        
        wordWrap: true,
        breakWords: true,

        wordWrapWidth: 50
    }));
    
    // rocket;
    rocket.x = 100;
    rocket.y = 0;
    WIN.rocket = rocket;
    
    const rocket2 = new Sprite(texture);
    WIN.rocket2 = rocket2;

    rocket2.physics.fixed = true;

    rocket2.x = 100;
    rocket2.y = 200;
    rocket2.width = 32;
    rocket2.height = 32;
  
    // Add the rocket to the stage
    container.addChild(rocket2);
    
    
    // Render the stage
    app.stage.addChild(container);
    app.renderer.render(app.stage);

    // const enemy = new Sprite(TextureCache['assets/images/enemy.png']);
    // app.stage.addChild(enemy);

    // enemy.width = 100;
    // app.ticker.add(() => {
    //     // console.log(delta);
    //     rocket2.x += 1;
    //     if (rocket2.hitAnotherSprite(rocket)) {
    //         console.log('撞到啦');
    //     }
    // });
}
