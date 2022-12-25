
import { EventEmitter } from '$lib/events';
import Item from './Item';
import './Shop.css';

export default function Shop() {

    const itemNames = [
        'ittem a',
        'itemb',
        'item  c',
        'itemdaa',
        'itemae'
    ];

    let i = 0;
    const items = itemNames.map((name) => {

        return (
            <Item key={i++} name={name} onClick={() => {

                EventEmitter.events.trigger('shopItemClicked', name);

            }}/>
        );

    });

    return (
        <div className="shop">
            <div className="item-container">
                {items}
            </div>
        </div>
    );

}
