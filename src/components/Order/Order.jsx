import React from 'react';
import { FaTrash } from 'react-icons/fa';

export function Order({ item, onDelete }) {
    return (
        <div className="item">
            <img
                src={`${process.env.PUBLIC_URL}/image/` + item.img}
                alt={item.title}
            />
            <h2>{item.title}</h2>
            <p>{item.price}$</p>
            <FaTrash
                className="delete-icon"
                onClick={() => onDelete(item.id)}
            />
        </div>
    );
}
