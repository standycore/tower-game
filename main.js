import { FixedEngine } from '$lib/engine';
import { GroupMap } from '$lib/groupMap';
import { Stage } from '@pixi/layers';
import { Application, Sprite } from 'pixi.js';

async function main() {

    // The application will create a renderer using WebGL, if possible,
    // with a fallback to a canvas render. It will also setup the ticker
    // and the root stage PIXI.Container
    const app = new Application({ resizeTo: window });

    // The application will create a canvas element for you that you
    // can then insert into the DOM
    document.querySelector('.canvas-container').appendChild(app.view);

    // replace the app stage with a custom stage from @pixi/layers
    app.stage = new Stage();

    const groupMap = GroupMap.groupMap;

    groupMap.create('default', 0);

    const engine = new FixedEngine();

    const sprite = Sprite.from('https://picsum.photos/200');

    app.stage.addChild(sprite);

    engine.onUpdate((delta, time) => {

        sprite.position.x += 1;

    });

    engine.start();

}

main();
