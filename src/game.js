import { Global } from './global';
import { Sprite } from 'pixi.js';

async function load() {

}

let app;
let stage;

async function preUpdate() {

    app = Global.app;
    stage = app.stage;

    const sprite = Sprite.from('https://picsum.photos/200');

    app.stage.addChild(sprite);

    sprite.position.x += 1;

}

function update(delta, time) {

}

export {
    load,
    preUpdate,
    update
};
