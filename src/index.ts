/* --------------------------
Setup
--------------------------*/

import Adapter from '@lib/adapter';
import * as Matter from 'matter-js';
import * as PIXI from 'pixi.js';

// Matter Modules
const Engine = Matter.Engine;
const Runner = Matter.Runner;
// const Render = Matter.Render;
const World = Matter.World;
// const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

const renderView = Adapter.getRenderView();

const canvasWidth = renderView.width;
const canvasHeight = renderView.height;
// Scene Container


/* --------------------------
Engine
---
Setup the Matter engine. This is what the Matter bodies will run in.
--------------------------*/

const engine = Engine.create();
engine.gravity.y = 1;
// engine.
/* --------------------------
Pixi Data
--------------------------*/

interface IImageObject {
    src: string;
    initialPosition: {
        x: number;
        y: number;
    },
    width: number;
    height: number;
}

const width = 50;

const images: IImageObject[] = [
    {
        src: '/assets/images/ball/b1.png',
        initialPosition: {
            x: 300,
            y: 180
        },
        width: width,
        height: width
    },
    {
        src: '/assets/images/ball/b2.png',
        initialPosition: {
            x: 300,
            y: 180
        },
        width: width,
        height: width
    },
    {
        src: '/assets/images/ball/b3.png',
        initialPosition: {
            x: 500,
            y: 180
        },
        width: width,
        height: width
    }
];

interface ISceneObject {
    body: Matter.Body;
    sprite: PIXI.Sprite;
}
// This will be populated as we create our bodies and sprites from the images.
const sceneObjects: ISceneObject[] = [];

/* --------------------------
Setup Walls
---
Walls will keep our bodies and sprites within a confined area.
--------------------------*/

const ballWidth = 30;

const wallTop = Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, ballWidth, {
    isStatic: true
});
const wallBottom = Bodies.rectangle(
    canvasWidth / 2,
    canvasHeight,
    canvasWidth,
    ballWidth,
    {
        isStatic: true
    }
);
const wallRight = Bodies.rectangle(
    canvasWidth,
    canvasHeight / 2,
    ballWidth,
    canvasHeight,
    {
        isStatic: true
    }
);
const wallLeft = Bodies.rectangle(0, canvasHeight / 2, ballWidth, canvasHeight, {
    isStatic: true
});

// Add Matter walls to the world. This will keep the bodies within certain parameters.
World.add(engine.world, [wallBottom, wallTop, wallLeft, wallRight]);

/* --------------------------
Pixi
--------------------------*/

// Setup Pixi renderer to match the same size as the Matter world.
const app = new PIXI.Application({
    width: renderView.width,
    height: renderView.height,
    view: renderView.view,
    antialias: true,    // default: false 反锯齿
    transparent: false, // default: false 透明度
    resolution: 1,       // default: 1 分辨率
});

// Put the pixi apps canvas into the scene container.

/* --------------------------
Create Scene Object
--------------------------*/

function createSceneObject (image: IImageObject) {
    // Matter Body
    const imageBody = Bodies.circle(
        image.initialPosition.x,
        image.initialPosition.y,
        image.width / 2,
        {
            restitution: 0.8,
            // friction: 1,
            // frictionAir: 0
        }
    );
    World.addBody(engine.world, imageBody);

    // Pixi Sprite
    // The sprite can be anything from the Pixi api. Video, image, make it into a circle, mask it, etc. You just need to make sure the proper anchor point is set, its added to the stage and that it follows the body in our pixi app ticker.
    const imageSprite = PIXI.Sprite.from(image.src);
    imageSprite.width = image.width;
    imageSprite.height = image.height;
    imageSprite.position;
    imageSprite.anchor.set(0.5, 0.5);
    app.stage.addChild(imageSprite);
  
    // Add the complete scene object (body and sprite) to our array of objects. We'll track those objects in the pixi frame updates (see app.ticker below).
    sceneObjects.push({
        body: imageBody,
        sprite: imageSprite,
    });
}

/* --------------------------
Pixi Frame Updates
--------------------------*/

app.ticker.add(() => {
    sceneObjects.forEach(object => {
    // Make all pixi sprites follow the position and rotation of their body.
        object.sprite.position.x = object.body.position.x;
        object.sprite.position.y = object.body.position.y;
        object.sprite.rotation = object.body.angle;
    });
});

/* --------------------------
Mouse Control
---
Add the mouse to the Pixi frame. This is how you enable interaction with the bodies. We aren't using the Matter renderer so need the mouse to be attached to our invisible Matter engine that runs on top of the Pixi world.
--------------------------*/

const mouseConstraint = MouseConstraint.create(engine, {
    mouse: Mouse.create(document.querySelector('.scene canvas') as HTMLCanvasElement),
});

World.add(engine.world, mouseConstraint);

/* --------------------------
Run
--------------------------*/

// Create the bodies and sprites.
images.forEach(image => {
    createSceneObject(image);
});

// debugger;


// Run the Matter engine. This continuously updates the Matter.Engine. It ensures we can listen for the updates on each tick and move the Pixi objects with Matter bodies (see app.ticker function).
// Engine.run(engine);

Runner.run(engine);

console.log('collisionStart');
Matter.Events.on(engine, 'collisionStart', function (event) {
    const pairs = event.pairs;
    pairs.forEach( (pair, b) => {
        console.log(pair, b);
    });
});