import './Item.css';

export default function Item({ name, onClick }) {

    return (
        <button className="shop-item" onClick={onClick}>{name}</button>
    );

}
