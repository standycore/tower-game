import { Global } from './global';
import { ECS } from '$lib/ecs';
import { SpriteComponent } from './components/sprite';
import { EventEmitter } from '$lib/events';

async function load() {

}

let app;
let stage;
const entities = [];

let selectedShopItem;

async function preUpdate() {

    app = Global.app;
    stage = app.stage;

    entities.push(createThing());

    EventEmitter.events.on('shopItemClicked', (name) => {

        selectedShopItem = name;

        entities.push(createThing());

    });

}

function createThing() {

    const entity = new ECS.Entity();
    entity.addComponent(SpriteComponent, stage, 'https://picsum.photos/200');
    return entity;

}

/**
 * @param {float} delta the time in ms since the last frame to this frame
 * @param {float} time the time in ms since the engine has started
 */
function update(delta, time) {

    // game functionality here

    // DO NOT TOUCH: updates entities every frame
    for (let i = 0; i < entities.length; i++) {

        const entity = entities[i];

        if (!entity.destroyed) {

            ECS.updateEntity(entity, delta, time);

        } else {

            entities.splice(i, 1);

        }

    }

}

export {
    load,
    preUpdate,
    update
};
