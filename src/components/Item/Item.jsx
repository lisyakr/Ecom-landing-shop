import React from 'react';
import './Item.css';

export function Item({ item, onAdd, onShowItem }) {
    return (
        <div className="item">
            <div
                className="item_image"
                onClick={() => onShowItem(item)}
                style={{
                    backgroundImage: `url(${
                        `${process.env.PUBLIC_URL}/image/` + item.img
                    })`,
                }}
            />
            <div className="item_content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <b>{item.price}$</b>
                <div className="add-to-cart" onClick={() => onAdd(item)}>
                    +
                </div>
            </div>
        </div>
    );
}
