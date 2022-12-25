import { FixedEngine } from '$lib/engine';
import { GroupMap } from '$lib/groupMap';
import Root from '$src/ui/Root';
import { Layer, Stage } from '@pixi/layers';
import { Application, Sprite } from 'pixi.js';
import ReactDOM from 'react-dom/client';

import { load, preUpdate, update } from '$src/game';
import { Global } from '$src/global';

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

    // creates a layer for each group, and adds the layer to the stage
    // this is necessary for objects using the group render method to be visible
    groupMap.forEach((group) => {

        app.stage.addChild(new Layer(group));

    });

    // setup ui with react
    const uiContainer = document.querySelector('.ui-container');

    const root = ReactDOM.createRoot(uiContainer);
    root.render(Root());

    const engine = new FixedEngine();

    Global.engine = engine;
    Global.app = app;
    Global.groupMap = groupMap;

    await load();

    await preUpdate();

    engine.onUpdate((delta, time) => {

        update(delta, time);

    });

    engine.start();

}

main();
