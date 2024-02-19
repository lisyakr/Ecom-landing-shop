import React from 'react';
import { Item } from '../Item/Item';
import './Items.css';

export function Items({ items, onAdd, onShowItem }) {
    return (
        <main>
            {items.map((obj) => {
                return (
                    <Item
                        onShowItem={onShowItem}
                        key={obj.id}
                        item={obj}
                        onAdd={onAdd}
                    />
                );
            })}
        </main>
    );
}
