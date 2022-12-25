import { ECS } from '$lib/ecs';
import { Sprite } from 'pixi.js';

class SpriteComponent extends ECS.Component {

    preUpdate(container, sprite) {

        this.sprite = Sprite.from(sprite);
        container.addChild(this.sprite);

    }

    update(delta, time) {

        this.sprite.position.x += 1;

    }

    onDestroy() {

        this.sprite.destroy();

    }

}

SpriteComponent.register();

export { SpriteComponent };
